FROM node:22.12.0-alpine AS build
COPY . /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx:1.27.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
