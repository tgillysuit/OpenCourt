# Base Image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Clean installation
RUN npm ci --only=production

# Copy application code
COPY . .

# Build the application
EXPOSE 3000

# Setting the enviornment
ENV NODE_ENV=production

# Start the app
CMD ["node", "server.js"]