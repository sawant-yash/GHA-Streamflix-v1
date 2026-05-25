# StreamFlix V1 - Docker Commands

## Build the Docker Image
```bash
docker build -t streamflix:v1 .
```

## Tag the Image for DockerHub
```bash
docker tag streamflix:v1 kastrov/streamflix:v1
```

## Push the Image to DockerHub
```bash
docker push kastrov/streamflix:v1
```

## Run the Container Locally
```bash
docker run -d -p 5000:5000 --name streamflix-v1 kastrov/streamflix:v1
```

## Stop and Remove Container
```bash
docker stop streamflix-v1
docker rm streamflix-v1
```

## View Container Logs
```bash
docker logs streamflix-v1
```

## All-in-One Command (Build, Tag, Push)
```bash
docker build -t streamflix:v1 . && \
docker tag streamflix:v1 kastrov/streamflix:v1 && \
docker push kastrov/streamflix:v1
```
