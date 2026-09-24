FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
COPY src ./src

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:5000/healthz').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "src/server.js"]
