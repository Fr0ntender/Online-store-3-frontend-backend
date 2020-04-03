FROM node:12.10.0-alpine

RUN apk add git \
    && cd home/ \
    && git clone https://github.com/eduard-kirilov/Online-store-3-frontend-backend.git \
    && cd online-store \
    && rm -rf client \
    && cd server \
    && npm i -g nodemon \
    && yarn

WORKDIR /home/online-store/server

EXPOSE 4000

CMD ["nodemon", "src/index.js"]
