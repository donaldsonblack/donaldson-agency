
# -----------------------------------------------------------------------------
# Dockerfile for Donaldson Agency — Next.js App (Bun + IPv4-safe build)
# -----------------------------------------------------------------------------
# Features:
# - Multi-stage build for small final image
# - IPv4 + CA certificates fix for Bun registry connectivity
# - Non-root runtime user for security
# -----------------------------------------------------------------------------

# =========================
# Stage 1 — Dependencies
# =========================
FROM oven/bun:1 AS deps
WORKDIR /app

# --- Fix networking and certificates early ---
USER root
RUN apt-get update && \
    apt-get install -y ca-certificates curl && \
    update-ca-certificates && \
    echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf
ENV BUN_CONFIG_DISABLE_IPV6=true
# ---------------------------------------------

# Copy dependency manifests
COPY package.json bun.lock ./

# Install dependencies with increased timeout
RUN bun install --verbose

# =========================
# Stage 2 — Builder
# =========================
FROM oven/bun:1 AS builder
WORKDIR /app

# Copy dependencies and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry and set environment
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the Next.js app
RUN bun run build

# =========================
# Stage 3 — Runtime
# =========================
FROM oven/bun:1 AS runner
WORKDIR /app

# Create a non-root user
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid 1001 nextjs

# Copy only necessary build artifacts for runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Ensure correct permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port 3000 for Zoraxy
EXPOSE 3000

# Environment configuration
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Start the application
CMD ["bun", "server.js"]
