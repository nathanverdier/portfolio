FROM node:18

WORKDIR /app

EXPOSE 80

COPY package*.json ./

RUN npm install --production

# Installer TypeScript globalement
RUN npm install -g typescript

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]