FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Expose port for React
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]


# FROM node:20.14.0

# WORKDIR /app

# COPY package*.json ./
# RUN npm cache clean --force
# RUN rm -rf node_modules
# RUN npm install

# COPY . .
# # Build the React app
# RUN npm run build

# # Build Storybook
# RUN npm run build-storybook --verbose

# RUN npm run storybook

# # Expose ports for both React and Storybook
# EXPOSE 3000 6006

# # Use a script to start both servers
# COPY start.sh /start.sh
# RUN chmod +x /start.sh

# CMD ["/start.sh"]