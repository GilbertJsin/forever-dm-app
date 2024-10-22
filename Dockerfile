FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose ports for React and Storybook
EXPOSE 3000 6006

# Use a volume for node_modules to avoid unnecessary rebuilds
VOLUME /app/node_modules

# Default command is to run React; can be overridden by docker-compose
CMD ["npm", "start"]


# FROM node:18-alpine

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .

# # Expose ports for React and Storybook
# EXPOSE 3000 6006

# # Default command is to run React; can be overridden by docker-compose
# CMD ["npm", "start"]