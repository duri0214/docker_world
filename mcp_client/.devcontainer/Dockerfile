FROM node:20.17-slim

ARG USER_NAME=vscode
# node ユーザは 1000 番なので被らないようにする
ARG USER_UID=1001
ARG USER_GID=$USER_UID

ENV TZ=Asia/Tokyo

# Create vscode user
RUN groupadd --gid $USER_GID $USER_NAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER_NAME

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    curl git openssh-client

# Switch to vscode user
USER $USER_NAME
