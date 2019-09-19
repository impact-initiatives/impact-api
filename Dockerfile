FROM node:12.10.0-alpine

WORKDIR /usr/src/app

COPY .babelrc ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY src ./src
RUN yarn build

EXPOSE 80
CMD [ "yarn", "start" ]
