# Discord Notify Action - Development Guide

Welcome to the **Discord Notify Action** project repository. This document provides guidelines for setting up the development environment for the project, which is built with Node.js and managed using Docker and Docker Compose.

## Table of Contents

- [Discord Notify Action - Development Guide](#discord-notify-action---development-guide)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Initial Setup](#initial-setup)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Build and Start the Project](#2-build-and-start-the-project)
    - [3. Stopping the Services](#3-stopping-the-services)
  - [Running the Project without Docker](#running-the-project-without-docker)
    - [1. Install PNPM](#1-install-pnpm)
    - [2. Install Project Dependencies](#2-install-project-dependencies)
    - [3. Start the Development Server](#3-start-the-development-server)
    - [4. Preview the Production Build](#4-preview-the-production-build)
  - [License](#license)
  - [Contributing](#contributing)

## Prerequisites

Before you begin, ensure that your development environment has the following tools installed:

- **Node.js**: [Installation Guide](https://nodejs.org/en/download/)
- **Docker**: [Installation Guide](https://docs.docker.com/get-docker/)
- **Git**: [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Initial Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/cabrera-evil/discord-notify-action
```

### 2. Build and Start the Project

To build the Docker images and start the services, use Docker Compose:

```bash
docker compose up --build
```

This command will:

- Build the necessary Docker images.
- Launch the application.

### 3. Stopping the Services

To stop and clean up all running containers, use the following command:

```bash
docker compose down
```

This will halt all running containers and remove them along with any associated networks.

## Running the Project without Docker

If you prefer to run the application without using Docker, follow these steps:

### 1. Install PNPM

The project uses PNPM as its package manager. Install it globally:

```bash
npm install -g pnpm
```

### 2. Install Project Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd discord-notify-action
pnpm install
```

### 3. Start the Development Server

To start the development server in development mode:

```bash
pnpm dev
```

### 4. Preview the Production Build

To build and preview the production version of the application:

1. Build the application:

   ```bash
   pnpm build
   ```

2. Start the production server:

   ```bash
   pnpm start
   ```

## License

This repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute as long as you include the original license text.

## Contributing

We welcome and encourage contributions to enhance this project. To contribute, please contact the repository owner to discuss your ideas, or submit a pull request. All contributions will be reviewed and must adhere to the project’s standards before being merged.
