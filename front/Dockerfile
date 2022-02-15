# Stage One
FROM node:16.14-alpine as builder
WORKDIR /home/node/app
COPY . .
# RUN npm i && npm run build
RUN npm run build

# Stage two
FROM nginx:1.20-alpine
WORKDIR /usr/share/nginx/html
RUN rm -Rf ./*
COPY --from=builder /home/node/app/dist/front ./
CMD [ "nginx", "-g", "daemon off;" ] 
