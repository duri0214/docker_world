FROM python:3.12.9-slim-bullseye

# 共通変数
ARG WORKDIR=/workspace
ARG USER_NAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV TZ=Asia/Tokyo

# `WORKDIR` で指定したカレントディレクトリは、イメージビルド時にのみ適用されます。
WORKDIR $WORKDIR

# チョンボしないで必要なものを $WORKDIR に転送しましょう
COPY ./.vscode $WORKDIR/.vscode
COPY ./setup.sh $WORKDIR
COPY ./requirements.txt $WORKDIR
COPY ./src $WORKDIR/src

# ユーザー作成
RUN groupadd --gid $USER_GID $USER_NAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER_NAME

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip

# 作業ディレクトリを設定
RUN chown -R $USER_NAME:$USER_NAME $WORKDIR

# 確認
RUN pwd && ls -la

# ユーザー変更
USER $USER_NAME

# TODO: のちに本番用Dockerfileに移すと良い
#CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
