# Imagen Node dependiendo de versión instalada
FROM node:24

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto de React (puedes usar 4200 si así lo requiere tu práctica)
EXPOSE 3000

# Ejecuta la aplicación en desarrollo
CMD ["npm", "start"]
