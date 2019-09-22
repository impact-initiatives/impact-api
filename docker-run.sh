#!/bin/sh
docker stop impact-api || true
docker rm impact-api || true
docker system prune -af
docker run \
  --name impact-api \
  --restart=always \
  -d \
  -p 80:80 \
  --env-file ~/.env \
  impactinitiatives/apollo
sudo reboot
