# reach-apollo-server

1. Run ansible plabooks: `ansible-playbook -i inventory.ini 1_install_database.yml`

2. Build docker container api: `docker build -t impactinitiatives/apollo .`

3. Run docker container api: `docker run --name impact-api --restart=always -d -p 80:80 impactinitiatives/apollo`
