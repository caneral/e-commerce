FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
