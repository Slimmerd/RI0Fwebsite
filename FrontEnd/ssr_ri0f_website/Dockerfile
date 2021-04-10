FROM node:14.15.4-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

ENV SERVER_API=1
ENV BACKEND_URL=https://api.ri0ff.com/api
ENV SITE_URL = https://ri0ff.com/
ENV ENV = production

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
EXPOSE 443

CMD [ "npm", "start"]