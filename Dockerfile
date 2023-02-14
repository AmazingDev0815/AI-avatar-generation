FROM node:slim as build
WORKDIR /usr/local/app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=build /usr/local/app/build /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80