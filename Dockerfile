FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@10.2.5 --timeout=60000
COPY . ./
CMD ["npm","run","start","--","--host"]