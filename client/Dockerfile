FROM node:12.10.0-alpine

RUN apk add git \
    && cd home/ \
    && git clone https://github.com/eduard-kirilov/Online-store-3-frontend-backend.git \
    && cd online-store \
    && rm -rf server \
    && cd client \
    && rm -rf build \
    && yarn \
    && yarn build

WORKDIR /home/online-store/client

EXPOSE 5000

CMD ["yarn", "serve"]
