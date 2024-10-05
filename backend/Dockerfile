FROM python:3.12.4

ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pip
RUN python -m pip install --upgrade pip

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

WORKDIR /app/src

# Copy the application
COPY ./src /app/src

# uvicorn src.main:app --host 0.0.0.0 --port 8080 を手動でコンソール入力すればFastAPIの画面が出てくるが自動起動しない
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8080"]
