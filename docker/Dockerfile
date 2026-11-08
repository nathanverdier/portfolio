# Étape 1 : Construction du projet React
FROM node:22-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances exactes du lockfile
RUN npm ci --no-audit --no-fund

# Copier le reste des fichiers de l'application
COPY . ./

# Construire l'application (le --base remplace le base relatif de vite.config.ts)
RUN npm run build -- --base=/containers/nathanverdier-portfolio/

# Étape 2 : Configuration de Nginx pour servir les fichiers construits
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
