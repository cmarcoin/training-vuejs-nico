FROM node

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 8080

CMD ["yarn", "run:app"]
