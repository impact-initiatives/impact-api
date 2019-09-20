docker run \
  --name impact-api \
  --restart=always \
  -d \
  -p 80:80 \
  --env-file ~/.env \
  impactinitiatives/apollo
