FROM node:22-alpine

WORKDIR /app

ARG NODE_ENV
ARG PORT

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run build

RUN addgroup -S exampleusergroup && adduser -S myuser -G exampleusergroup
USER myuser

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["npm", "run", "prod"]
