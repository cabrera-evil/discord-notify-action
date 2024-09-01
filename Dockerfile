# Use a specific Node.js version as the base image
FROM node:iron-bookworm-slim

# Install the latest version of pnpm
RUN npm install -g pnpm@latest

# Copy the dependency files to the container
COPY package*.json pnpm-lock.yaml /

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

# Set the environment variable to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy application files to the container
COPY . /

# Build the application
RUN pnpm build

# Start the application
ENTRYPOINT ["node", "/dist/index"]
