FROM nginx:alpine

RUN apk add --no-cache certbot certbot-nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
