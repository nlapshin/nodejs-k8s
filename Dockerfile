FROM node:alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY ./src ./src

CMD ["node", "./src/index.js"]
