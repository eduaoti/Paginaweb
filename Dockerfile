# Etapa 1: Build del proyecto con Node
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir los archivos estáticos con NGINX
FROM nginx:alpine

# Elimina la página de bienvenida por defecto de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia el resultado del build al contenedor NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuración personalizada si deseas (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
