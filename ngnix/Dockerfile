FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN echo "uwsgi_read_timeout 300s;" > /etc/nginx/conf.d/custom_timeout.conf