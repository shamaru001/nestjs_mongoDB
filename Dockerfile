FROM node:16.15.1
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT npm run start:prod