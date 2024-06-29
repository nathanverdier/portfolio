# Étape 1 : Construction du projet React
FROM node:latest AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json ./
COPY package-lock.json ./

# Installer les dépendances
RUN npm install --silent

# Copier le reste des fichiers de l'application
COPY . ./

# Construire l'application React avec base
RUN npm run build -- --base=/containers/nathanverdier-portfolio/

# Étape 2 : Configuration de Nginx pour servir les fichiers construits
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
