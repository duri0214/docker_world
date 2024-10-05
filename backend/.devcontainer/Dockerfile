FROM python:3.12.4

# Install pip
RUN python -m pip install --upgrade pip

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

WORKDIR /app

# Copy the application
#COPY ../src /app

# Print the current work directory's contents
RUN ls
