 FROM node:latest
 RUN mkdir -p /usr/app
 WORKDIR /usr/app

 COPY package.json .

 RUN yarn
 COPY . .
 