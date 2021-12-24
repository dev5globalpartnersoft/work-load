FROM node:alpine

ARG APP_DIR=./app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package*.json ./
#Problem with some library that why add force
RUN yarn --ignore-engines --forcle 

COPY . .
CMD ["yarn", "prod"]
