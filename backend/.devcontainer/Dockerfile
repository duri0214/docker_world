FROM python:3.12.4

# hostの cur が `backend` なのであえてコメントアウトすることで src/ の深さを合わせる
# WORKDIR /src

# src のなかみをコンテナ内にコピー
COPY src src/

ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pip
RUN python -m pip install --upgrade pip

# Install
RUN pip install -r src/requirements.txt

# FastAPIを8080ポートで起動 ←不発？
# CMD ["uvicorn", "src/main:app", "--host", "127.0.0.1", "--port", "8080"]
