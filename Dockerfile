# We are using node's image as base for this one
FROM node

# Create the app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon 


# Copy everything else on the project
COPY . .

# Expose the port we want to use
EXPOSE 2000
# Set execute permission for start.sh
# RUN chmod +x /usr/src/app/start.sh  

# Tell Docker to run server.js on spin up
# CMD [ "npm", "start" ]
CMD ./start.sh
