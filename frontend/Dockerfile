# ---------1er Stage----------

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

# -------2eme Stage----------

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

COPY --from=builder /app/node_mudles ./node_modules

EXPOSE 3000

CMD [ "npm", "" ]