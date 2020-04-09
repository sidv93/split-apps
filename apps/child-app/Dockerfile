FROM nginx:alpine

COPY dist/child-app /usr/share/nginx/html

ENTRYPOINT sed -i 's@<base href="/">@'"<base href=\"/$SURVEILLANCE_BASE_HREF/\"\>"'@' /usr/share/nginx/html/index.html && nginx -g 'daemon off;'

EXPOSE 80
