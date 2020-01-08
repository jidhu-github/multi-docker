FROM node:alpine as build-phase
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Folder "/app/build" with all the artifacts from build-phase
FROM nginx as run-phase
EXPOSE 3000
COPY ./ngnix/default.conf /etc/nginx/conf.d/default.conf
#COPY from previous builder-phase
COPY --from=build-phase /app/build /usr/share/nginx/html
