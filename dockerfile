FROM node:20-alpine

#Create App-directory
WORKDIR /app

#INstall deps
COPY package*.json ./

#Run install command
RUN npm install

#app Source
COPY . . 

EXPOSE 8080

CMD [ "npm", "start"]