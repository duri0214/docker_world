FROM python:3.12.9-slim-bullseye

# 共通変数
ARG WORKDIR=/workspace
ARG USER_NAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV TZ=Asia/Tokyo

# ユーザー作成
RUN groupadd --gid $USER_GID $USER_NAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER_NAME

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip

# 作業ディレクトリを設定
RUN mkdir -p $WORKDIR && chown -R $USER_NAME:$USER_NAME $WORKDIR
WORKDIR $WORKDIR

# 確認
RUN pwd && ls -la

# ユーザー変更
USER $USER_NAME

# TODO: のちに本番用Dockerfileに移すと良い
#CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
