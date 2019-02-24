FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
RUN yarn install
COPY . /app
EXPOSE 8000
CMD yarn start