# Simple example for a Node.js app
FROM node:18-slim
WORKDIR /app
#COPY package*.json ./
#RUN npm install --privilaged
COPY . .
EXPOSE 3000
CMD [ "npm", "start" 