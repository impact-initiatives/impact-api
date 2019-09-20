docker stop impact-api || true
docker rm impact-api || true
docker run \
  --name impact-api \
  --restart=always \
  -d \
  -p 80:80 \
  --env-file ~/.env \
  impactinitiatives/apollo
docker image prune -af
