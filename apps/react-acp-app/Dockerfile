FROM nginx:alpine

COPY build /usr/share/nginx/html

ENTRYPOINT sed -i 's@<base href="/">@'"<base href=\"/$BASE_HREF/\"\>"'@' /usr/share/nginx/html/index.html \
    && sed -i 's@<head>@'"<head><script>window[\"homeUrl\"]=\"$HOME_URL\"</script>"'@' /usr/share/nginx/html/index.html \
    && nginx -g 'daemon off;'

EXPOSE 80
