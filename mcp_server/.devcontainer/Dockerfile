FROM python:3.12.9-slim-bullseye

ARG USER_NAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV TZ=Asia/Tokyo

# Create vscode user
RUN groupadd --gid $USER_GID $USER_NAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER_NAME

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    curl git openssh-client python3-venv

# Switch to vscode user
USER $USER_NAME
