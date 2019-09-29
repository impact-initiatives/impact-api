FROM node:12.10.0
RUN apt-get update \
  && apt-get install -y --no-install-recommends s3cmd \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY node_modules ./node_modules
COPY dist ./dist
EXPOSE 80
CMD [ "node", "./dist/index.js" ]
