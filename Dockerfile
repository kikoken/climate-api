FROM node:8
WORKDIR /app
COPY package.json /app

ENV DARKSKY_TOKEN=f6f433ccdd900610359e5114cd0fcdee
ENV DARKSKY_URL=https://api.darksky.net/forecast/
ENV GOOGLE_API_KEY=AIzaSyA3RcpmWbh8vKcet1mk2dmYdJPdok6VHls
ENV GEOCODE_API=https://maps.googleapis.com/maps/api/geocode/json?latlng=
ENV REST_COUNTRY=https://restcountries.eu/rest/v2/

RUN npm install
RUN yarn install
COPY . /app
EXPOSE 8000
CMD yarn start