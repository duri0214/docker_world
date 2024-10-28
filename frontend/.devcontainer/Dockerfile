FROM node:latest

ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
    