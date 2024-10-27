FROM python:3.12.4

# hostの cur が `backend` なのであえてコメントアウトすることで src/ の深さを合わせる
# WORKDIR /src

# requirements.txt をコンテナ内にコピー
COPY src/requirements.txt src/requirements.txt

ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pip
RUN python -m pip install --upgrade pip

# Install
RUN pip install -r src/requirements.txt
