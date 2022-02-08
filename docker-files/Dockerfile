FROM node:12.16.3

WORKDIR /docker-files

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "src/server.js" ]