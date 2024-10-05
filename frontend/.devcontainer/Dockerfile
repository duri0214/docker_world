# frontend/.devcontainer/Dockerfile
FROM node:latest

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the application
COPY ../src /app

# Build the application
RUN yarn build
