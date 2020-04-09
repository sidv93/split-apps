FROM nginx:alpine

COPY dist/test-repo /usr/share/nginx/html

ENTRYPOINT sed -i 's@<base href="/">@'"<base href=\"/$BASE_HREF/\"\>"'@' /usr/share/nginx/html/index.html && nginx -g 'daemon off;'

EXPOSE 80
