FROM node:18
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/server ./apps/server
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 8080
CMD ["pnpm", "--filter", "@repo/server", "dev"]