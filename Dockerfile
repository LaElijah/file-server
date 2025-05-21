



FROM node:lts-alpine
WORKDIR /app
COPY ./src .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3000
