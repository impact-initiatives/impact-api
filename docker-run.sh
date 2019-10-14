#!/bin/sh
docker stop impact-api || true
docker rm impact-api || true
docker pull impactinitiatives/apollo
docker run \
  --name impact-api \
  --restart=always \
  -d \
  -p 80:80 \
  --env-file ~/.env \
  impactinitiatives/apollo
docker cp ~/.s3cfg impact-api:/root/.s3cfg
docker system prune -af
