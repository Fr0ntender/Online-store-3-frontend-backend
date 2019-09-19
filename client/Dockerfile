FROM node:12.10.0-alpine

RUN apk add git \
    cd home/ \
    && git clone https://github.com/Frost0x/Online-Store_Phase3.git online-store \
    && cd online-store \
    && rm -rf server \
    && cd client \
    && rm -rf build \
    && yarn \
    && yarn build

WORKDIR /home/online-store/client

EXPOSE 5000

CMD ["yarn", "serve"]
