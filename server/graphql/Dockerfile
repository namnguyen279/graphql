 FROM node:15.12.0-alpine3.10
 RUN mkdir -p /usr/app
 WORKDIR /usr/app

 COPY package.json .

 RUN yarn
 COPY . .
 