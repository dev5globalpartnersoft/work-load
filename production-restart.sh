#!/bin/bash
echo "Starting build Docker container..."
sudo docker stop af-fe
sudo docker rm af-fe
sudo docker rmi af-fe
sudo docker build -t af-fe .
sudo docker run --restart unless-stopped --name af-fe -p 3000:3000 -d af-fe
sudo docker ps
echo "Complete build Docker container..."