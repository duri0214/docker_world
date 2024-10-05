FROM node:latest

ENV TZ=Asia/Tokyo

# Update and install necessary packages
RUN apt-get update && apt-get install -y \
    bash curl git openssh-client zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app/src

# Copy package.json and install dependencies using npm
# ここで npm install しているはずなのにdevconのなかでnode_modulesが出来上がらない
COPY package.json ./
RUN npm install

# Copy the application
COPY ./src /app/src

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
# こっちも自動で起動しないなー npm run dev, http://localhost:3000/
CMD ["npm", "start"]
