FROM node

WORKDIR /app

COPY . /app

RUN npm install -g yarn

RUN yarn install

EXPOSE 8080

CMD ["yarn", "run:app"]
