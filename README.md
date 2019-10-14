# reach-apollo-server

0. Add SSH Key: `ssh-add -K ~/.ssh/exoscale-default`

1. Run ansible plabooks: `ansible-playbook -i inventory.ini 0_test_database.yml`

1. Build docker container api: `docker build -t impactinitiatives/apollo .`

1. Run docker container api: `docker run --name impact-api --restart=always -d -p 80:80 impactinitiatives/apollo`

1. Kill port in use: `sudo lsof -i tcp:80` && `sudo kill -9 PID`
