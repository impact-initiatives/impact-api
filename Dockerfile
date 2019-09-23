FROM node:12.10.0-alpine
WORKDIR /usr/src/app
COPY node_modules ./node_modules
COPY dist ./dist
EXPOSE 8080
CMD [ "node", "./dist/index.js" ]
