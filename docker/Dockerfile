# Étape 1: Build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Installer TypeScript globalement
RUN npm install -g typescript

COPY . .

RUN npm run build

# Étape 2: Production
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

EXPOSE 80

CMD [ "npx", "serve", "-s", "build" ]
