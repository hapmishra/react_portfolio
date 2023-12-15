# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies
RUN npm install -g npm@10.2.5 --timeout=60000

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app will run on (assuming it's 3000)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "start", "--", "--host"]
