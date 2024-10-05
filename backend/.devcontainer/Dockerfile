FROM python:3.12.4

ENV TZ=Azia/Tokyo
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pip
RUN python -m pip install --upgrade pip

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

WORKDIR /app

# Copy the application
#COPY ../src /app

# Print the current work directory's contents
RUN ls
