# Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Building image

En cas d'erreur pour lire les logs [Docker NPM log](https://stackoverflow.com/questions/24192210/docker-build-npm-error-logs)


```sh
docker commit 74cd0ad19448 test && docker run -it test cat /root/.npm/_logs/2022-02-13T15_02_18_348Z-debug-0.log
```

```sh
docker build --no-cache -t api-book-front .
```

## Running server

```sh
docker run --rm -p 8000:80 api-book-front
```
