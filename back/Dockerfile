FROM node:16.14-alpine as builder

LABEL maintainer="Vincent Letourneau <vincent@nanoninja.com>"

# docker build --no-cache -t api-node-prod .
# docker run --name api-prod-server -p 3000:3000 -e API_DB_DSN="mongodb://root:root@db:27017/store?authSource=admin" --network=cloud_network -d api-node-prod
# docker run --name api-prod-font -p 8080:80 --network=cloud_network -d api-angular

WORKDIR /home/node/api
COPY src/ .
COPY public/ .
COPY tsconfig.json .
COPY package*.json .
RUN npm i && npm run build

FROM node:16.14-alpine
WORKDIR /home/node/api
COPY --from=builder /home/node/api/package.json ./package.json
COPY --from=builder /home/node/api/build ./
RUN npm i --only=production

ENV API_PORT=3000
ENV API_DB_DSN=mongodb://localhost:27017/store

EXPOSE $API_PORT
CMD [ "node", "index.js" ]