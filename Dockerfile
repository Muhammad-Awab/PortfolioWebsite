# Build stage
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# Production stage
FROM nginx:1.22.1-alpine AS prod-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
