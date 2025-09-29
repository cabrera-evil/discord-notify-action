# Use specific Node.js version for consistency
ARG NODE_VERSION=jod
ARG PNPM_VERSION=latest

# ==============================================================================
# Base stage - Common dependencies and user setup
# ==============================================================================
FROM node:${NODE_VERSION}-bookworm-slim AS base

# Install pnpm with caching
RUN --mount=type=cache,target=/root/.npm \
  npm install -g pnpm@${PNPM_VERSION}

# ==============================================================================
# Dependencies stage - Install and cache dependencies
# ==============================================================================
FROM base AS dependencies

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY --chown=node:node package.json pnpm-lock.yaml ./

# Create cache directory and install dependencies with caching
RUN --mount=type=cache,target=/home/node/.local/share/pnpm,uid=1000,gid=1000 \
  --mount=type=cache,target=/home/node/.cache/pnpm,uid=1000,gid=1000 \
  pnpm install --frozen-lockfile --ignore-scripts

# ==============================================================================
# Build stage - Build the application
# ==============================================================================
FROM dependencies AS builder

# Set working directory
WORKDIR /app

# Copy source code (use .dockerignore to exclude unnecessary files)
COPY --chown=node:node . .

# Build the application
RUN --mount=type=cache,target=/home/node/.cache,uid=1000,gid=1000 \
  pnpm build

# ==============================================================================
# Production dependencies stage - Optimized production install
# ==============================================================================
FROM base AS prod-deps

# Set working directory
WORKDIR /app

# Copy package files
COPY --chown=node:node package.json pnpm-lock.yaml ./

# Copy all the dependencies from the dependencies stage
COPY --from=dependencies --chown=node:node /app/node_modules ./node_modules/

# Prune development dependencies with caching
RUN --mount=type=cache,target=/home/node/.local/share/pnpm,uid=1000,gid=1000 \
  --mount=type=cache,target=/home/node/.cache/pnpm,uid=1000,gid=1000 \
  pnpm prune --prod --ignore-scripts

# ==============================================================================
# Runtime stage - Final production image
# ==============================================================================
FROM node:${NODE_VERSION}-bookworm-slim AS runtime

# Set environment variables
ENV NODE_ENV=production \
  NODE_OPTIONS="--max-old-space-size=512"

# Copy production dependencies
COPY --from=prod-deps --chown=node:node /app/node_modules /node_modules/

# Copy package files
COPY --from=prod-deps --chown=node:node /app/package.json /app/pnpm-lock.yaml /

# Copy built application
COPY --from=builder --chown=node:node /app/dist /

# Start the application
ENTRYPOINT ["node", "/index"]
