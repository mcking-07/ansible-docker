# ansible-docker
Ansible playbook for installing and deploying a basic docker image with .env file and .env variables. Currently this has been tested on Ubuntu 18.04 LTS
## Usage
Install docker by commenting `docker-image` and running the playbook using
> ansible-playbook ansible-docker.yml

To create a docker image, open terminal and go to docker-files and run
> sudo docker build -t _server_ .

After creating the image head back to the playbook and comment `pre-requisites` and `docker` and uncomment `docker-image` and run the playbook again using
> ansible-playbook ansible-docker.yml

This will deploy the server with the .env variables on port 8080. To check this, open any browser and head to `http://localhost:8080` and it should display process.env on the display. 

#### Code Snippet
```
env_file: vars.env 
env:               
  ENV_DIRECT_1: ".env variable DIRECT_1"
  ENV_DIRECT_2: ".env variable DIRECT_2"
```
When both env and env_file are present, if they have the same keys, env is used. But if they have different keys, both are used.

You can use this docker image as base to build your own docker images and containers with .env variables.
