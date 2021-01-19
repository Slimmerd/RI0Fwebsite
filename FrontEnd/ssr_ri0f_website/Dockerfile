### First stage ###
FROM node:14.15.4-slim AS builder

WORKDIR /usr/src/app

COPY ./package.json ./

ENV SERVER_API=1
ENV BACKEND_URL=http://localhost:5000/api/
ENV SITE_URL = http://ri0ff.com/
ENV ENV = production

RUN npm install

COPY . .

RUN npm run build

### Second stage ###
FROM caddy:2.2.1-alpine

ARG CADDYFILE
COPY ${CADDYFILE} /etc/caddy/Caddyfile

COPY --from=builder /usr/src/app/.next /srv

EXPOSE 80
EXPOSE 443
