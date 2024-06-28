# Étape 1 : Construction du projet React
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json ./
COPY package-lock.json ./

# Installer les dépendances
RUN npm install --silent

# Copier le reste des fichiers de l'application
COPY . ./

# Construire l'application React
RUN npm run build

# Étape 2-: Configuration de Nginx pour servir les fichiers construits
FROM php:8.0-apache

# Copier les fichiers construits vers le répertoire Nginx
COPY --from=build /app/dist /var/www/html/
WORKDIR /var/www/html/
# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
#CMD ["nginx", "-g", "daemon off;"]
