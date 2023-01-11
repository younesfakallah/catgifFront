FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN ["apk", "update"]
RUN ["apk", "upgrade"]
RUN ["apk", "add", "vim"]
RUN ["apk", "add", "bash"]
COPY . .
EXPOSE 80