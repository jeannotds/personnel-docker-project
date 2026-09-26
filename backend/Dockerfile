# ===== stage 1 =====

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

RUN npm run build

# ======== stage 2 =========
# Il a juste besoin de dist/ , node_modules nécessaires et  package.json pour executer node dist/main.js

FROM node:22-alpine AS runner

WORKDIR /app

# V ariable d'e,vironnement à l'interieur du conteneur
ENV NODE_ENV=production

COPY package*.json ./

COPY --from=builder /app/node_modules ./node_modules

# Supprimer les dépendances de développement
RUN npm prune --omit=dev

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/prisma ./prisma

EXPOSE 3005

CMD ["node", "dist/main.js"]