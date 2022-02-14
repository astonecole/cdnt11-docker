# API REST

## Installation

```sh
npm i
```

## Creating Docker network

```sh
docker network create -d bridge api-network
```

## Creating Docker DB volume

```sh
docker volume create dbstore
```

## Running local API

### Running mongodb

```sh
docker run --name db \
    --network=api-network \
    -p 27017:27017 \
    -v dbstore:/data/db \
    -e MONGO_INITDB_DATABASE=store \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=root \
    -d mongo:5.0.6
```

### Running Dev API

```sh
docker build --no-cache -f Dockerfile.dev -t api-book-dev .
```

```sh
docker run --rm \
    --name api-book-dev \
    -v $PWD:/home/node/api \
    --network=api-network \
    -p 6060:3000 \
    api-book-dev
```

### Running Prod API

```sh
export API_DB_DSN=mongodb://root:root@localhost:27017/store; npm start 
```

## Running MongoDB

```sh
docker run --name db \
    --network=api-network \
    -v dbstore:/data/db \
    -e MONGO_INITDB_DATABASE=store \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=root \
    -d mongo:5.0.6
```

## Running MongoExpress

```sh
docker run --name mongo-admin \
    --network=api-network \
    -p 8080:8081 \
    -v dbstore:/data/db \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=root \
    -e ME_CONFIG_MONGODB_URL=mongodb://root:root@db:27017/ \
    -d mongo-express
```

## Building API

```sh
docker build --no-cache -t api-book .
```

```sh
docker image rm -f api-book
```

## Running API with Docker

```sh
docker rm -f api-server && \
docker run --name api-server \
    --network=api-network \
    -p 3000:3000 \
    -e API_DB_DSN="mongodb://root:root@db:27017/" \
    api-book
```

## Building All API

```sh
docker rm -f api-server && \
docker image rm -f api-book && \
docker build --no-cache -t api-book . && \
docker rm -f api-server && \
docker run --name api-server \
    --network=api-network \
    -p 8000:3000 \
    -e API_DB_DSN="mongodb://root:root@db:27017/" \
    api-book
```
