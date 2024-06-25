# Utilisez une version spécifique de Node.js basée sur Alpine
FROM node:16-alpine AS builder
WORKDIR /app

# Copiez les fichiers de dépendances et installez-les
COPY package*.json ./
RUN npm install

# Copiez le reste des fichiers de votre projet
COPY . .

# Construisez votre application React
RUN npm run build

# Étape de production
FROM node:16-alpine
WORKDIR /app

# Créez un utilisateur non-root et changez la propriété du répertoire de travail
RUN adduser -D appuser && chown -R appuser /app
USER appuser

# Copiez le build depuis l'étape précédente
COPY --from=builder /app/build ./build

# Exposez le port (assurez-vous qu'il correspond au port de votre serveur, par exemple serve)
EXPOSE 8081

# Installez un serveur HTTP simple pour servir les assets statiques
RUN npm install -g serve

# Lancez votre application
CMD ["serve", "-s", "build", "-l", "8081"]