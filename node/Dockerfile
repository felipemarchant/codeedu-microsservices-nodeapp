FROM node:15

WORKDIR /usr/src/app

EXPOSE 3000

COPY ./package.json .

RUN npm install

CMD ["node", "index.js"]