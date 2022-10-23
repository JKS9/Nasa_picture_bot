FROM node:latest

# Create app directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install packages
RUN npm install

# Copy the app code
COPY . .

# Build the project
RUN npm run build

# Run the application
CMD [ "node", "dist/index.js" ]