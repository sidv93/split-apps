FROM nginx:alpine

COPY build /usr/share/nginx/html

# ENTRYPOINT sed -i 's:\("/\):"'"/$DATA_ANALYSIS_BASE_HREF/"':' /usr/share/nginx/html/index.html && nginx -g 'daemon off;'

ENTRYPOINT sed -i 's@<base href="/">@'"<base href=\"/$BASE_HREF/\"\>"'@' /usr/share/nginx/html/index.html && nginx -g 'daemon off;'

EXPOSE 80
