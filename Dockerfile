# ============ 阶段 1：安装依赖 ============
FROM node:22-alpine AS deps
# 查看 https://github.com/nodejs/docker-node#nodealpine 了解为什么需要 libc6-compat
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ============ 阶段 2：生产构建 ============
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 收集完全匿名的遥测数据，构建时禁用
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# ============ 阶段 3：运行镜像 ============
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 静态资源
COPY --from=builder /app/public ./public

# 预渲染缓存目录权限
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 利用 output traces 自动裁剪运行所需文件（standalone 输出）
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# 允许外部访问
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
