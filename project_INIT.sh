#!/bin/bash

# USAGE: bash project_INIT.sh

# This script is meant to automatically facilitate pulling and setting up the project, and installing Docker on a NON-GUI Ubuntu system. Project needs to already be pulled.
# MUST BE RAN WITHIN root dir of project.

#Author: Raymond Marx

sudo -v
echo "Running install script."
bash get_docker.sh

echo "Starting docker if it hasn't started."
sudo systemctl start docker

git pull
echo "Compose docker containers and run"
docker compose up
echo "Showing status"
docker ps






