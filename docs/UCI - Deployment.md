---
id: deployuci
title: Deploy UCI
sidebar_label: Deploy UCI
---

## 1. Overview

This doc helps you to deploy & run UCI repositories & services using docker.

## 2 Prerequisites

1. If you do not have docker set up, Please install and setup docker.

## 3. Steps to follow for first installation
1. Take pull from the deploy repository.  

```
git clone https://github.com/samagra-comms/deploy.git
```

This repository contains the environment & docker file, that will be used later to pull and deploy the services.

2. Go to the deploy repository using below command

```
cd deploy
```

3. Login to docker with your credentials.

```
docker login --username=yourusername
```

Enter password when asked. Once you have logged in to the docker, you can pull the docker images from docker hub.


### 4. Steps to follow to deploy the services.
1. Fetch the images mentioned in the Dockerfile by running below command.

```
docker-compose pull
```

2. Once all the images are fetched, run below command to run the services.
```
docker-compose -f docker-compose.yml up -d 
```
3. Use ```docker ps``` to check if all the services are running.

4. Use ```docker-compose logs --follow``` to check the logs.  