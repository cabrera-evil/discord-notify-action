# Stage 1: Build stage
FROM node:iron-bookworm-slim AS builder

# Install latest version of pnpm
RUN npm install -g pnpm@latest

# Set the working directory inside the container
WORKDIR /app

# Copy the dependency files to the container
COPY --chown=node:node package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy application files to the container
COPY --chown=node:node . .

# Build the application
RUN pnpm build

# Stage 2: Production stage
FROM node:iron-bookworm-slim

# Install latest version of pnpm
RUN npm install -g pnpm@latest

# Copy the dependency files to the container
COPY --from=builder --chown=node:node /app/package*.json /app/pnpm-lock.yaml /

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts --prod

# Copy only the contents of the dist folder from the builder stage to the root of the app directory
COPY --from=builder --chown=node:node /app/dist/ /

# Set the environment variable to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Start the application
ENTRYPOINT ["node", "index"]
