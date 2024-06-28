# Étape 1: Build
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer toutes les dépendances y compris celles de développement
RUN npm install

# Copier le reste des fichiers
COPY . .

# Ajouter des déclarations de modules pour les assets
RUN echo "declare module '*.png';" > src/declarations.d.ts
RUN echo "declare module '*.jpg';" >> src/declarations.d.ts
RUN echo "declare module '*.jpeg';" >> src/declarations.d.ts
RUN echo "declare module '*.gif';" >> src/declarations.d.ts
RUN echo "declare module '*.svg';" >> src/declarations.d.ts

# Construire l'application
RUN npm run build

# Étape 2: Production
FROM node:18-alpine AS production

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour l'étape de production
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer l'application
CMD [ "npx", "serve", "-s", "build" ]
