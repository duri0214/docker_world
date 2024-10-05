FROM node:latest

ENV TZ=Azia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
#WORKDIR /app

# Install dependencies
#COPY package.json yarn.lock ./
RUN #yarn install --frozen-lockfile

# Copy the application
#COPY ./src /app

# Build the application
RUN #yarn build
