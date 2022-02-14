FROM nginx:1.20-alpine

WORKDIR /usr/share/nginx/html

RUN rm -Rf ./*
COPY ./dist/front ./

CMD [ "nginx", "-g", "daemon off;" ] 
