FROM node:20-slim AS builder
WORKDIR /usr/src/app

# Install Python, make, g++ for node-gyp
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim AS production
RUN addgroup --system appgroup && adduser --system appuser --ingroup appgroup
WORKDIR /usr/src/app
COPY --chown=appuser:appgroup package*.json ./
COPY --from=builder --chown=appuser:appgroup /usr/src/app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /usr/src/app/node_modules ./node_modules
COPY --chown=appuser:appgroup .env* ./

USER appuser
EXPOSE 3000
CMD ["node", "dist/main"]

