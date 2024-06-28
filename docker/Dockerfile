# FROM node:18

# WORKDIR /app

# EXPOSE 80

# COPY package*.json ./

# RUN npm install --production

# # Installer TypeScript globalement
# RUN npm install -g typescript

# COPY . .

# RUN npm run build

# CMD [ "npm", "run", "preview" ]

# pull official base image
FROM node:18

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
