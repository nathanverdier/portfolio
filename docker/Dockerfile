FROM node:18

WORKDIR /app

EXPOSE 8081

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]
