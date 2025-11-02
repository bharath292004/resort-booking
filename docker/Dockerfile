FROM node:18-slim

WORKDIR /usr/src/app

COPY phase1_app/app/package*.json ./
RUN npm install

COPY phase1_app/app/ .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
