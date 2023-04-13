#NODE
FROM node:latest as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#NGINX
FROM nginx:1.13.3-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]