# Container

## Downloading images

- docker pull nginx
- docker pull node
- docker pull nextcloud
- docker pull mysql
- docker pull mongo

## Running nginx Server

`:ro` means Read Only

```sh
docker run --name web1 \
        -p 8080:80 \
        -v $PWD/nginx:/usr/share/nginx/html:ro \
        -d nginx
```

## Running NodeJS Application

```sh
docker run --rm -v "$PWD"/nginx/app.js:/usr/src/app/app.js node node /usr/src/app/app.js
docker run --rm -v "$PWD"/nginx/app.js:/usr/src/app/app.js -w /usr/src/app/ node app.js
docker run --rm -v "$PWD"/nginx/app.js:/app.js node node /app.js
```

## Running Mysql

```sh
docker run --name dbcloud \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_DATABASE=mydb \
    --network=cloud_network \
    -v mysql_volume:/var/lib/mysql \
    -d mysql --default-authentication-plugin=mysql_native_password
```

## Running NextCloud

```sh
docker run --name icloud -d \
    --network=cloud_network \
    -v nextcloud_volume:/var/www/html \
    -p 8080:80 nextcloud
```

## WARNING !!!! Destroying all containers

```sh
docker rm -f $(docker ps -q)
```

## Running PHPMyAdmin

```sh
docker run --name myadmin -d \
    -e PMA_HOST=dbcloud \
    --network=cloud_network \
    -p 8000:80 phpmyadmin
```

```sh
docker volume create dbstore

docker run -d --name db \
    --network=cloud_network \
    -v dbstore:/data/db \
    -e MONGO_INITDB_DATABASE=store \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=root \
    mongo:5.0.6
```

```sh
docker run -v ${PWD}:/home/node/api \
    --network=cloud_network \
    -e API_DB_DSN="mongodb://root:root@db:27017/store?authSource=admin" \
    -p 3000:3000 api-node
```
