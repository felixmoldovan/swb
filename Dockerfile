# Use the official Node 24 image
FROM node:24-slim AS base
RUN corepack enable

FROM base AS build
COPY . /src
WORKDIR /src
# Clean install
RUN npm ci
# Build Nuxt
RUN npm run build

FROM base
# Only copy what is needed for production
COPY --from=build /src/.output /app/.output
COPY --from=build /src/content /app/content
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]