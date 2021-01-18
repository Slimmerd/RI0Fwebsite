FROM node:14.15.4-slim

WORKDIR /usr/src/app

COPY ./package.json ./

ENV SERVER_API=1
ENV BACKEND_URL=http://localhost:5000/api/
ENV SITE_URL = http://ri0ff.com/
ENV ENV = production

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

EXPOSE 443

CMD [ "npm", "start" ]