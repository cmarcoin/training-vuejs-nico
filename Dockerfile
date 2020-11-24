FROM node

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 8080
EXPOSE 3001

CMD ["yarn", "run:app"]
