# Docker Quick Reference

Quick commands for working with the Donaldson Agency Docker deployment.

## Local Testing (Before Deploying)

Test the Docker build locally before deploying to your server:

```bash
# Build the image
docker build -t donaldson-agency:test .

# Run locally
docker run -p 3000:3000 --env-file .env.local donaldson-agency:test

# Visit http://localhost:3000
```

## Production Deployment

### First Time Setup on Ubuntu Server

```bash
# 1. Install Docker (see DEPLOYMENT.md for full instructions)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 2. Clone or upload your project
cd /opt
sudo git clone <your-repo-url> donaldson-agency
cd donaldson-agency

# 3. Create production environment file
sudo cp .env.production.example .env.production
sudo nano .env.production
# Fill in your actual values

# 4. Deploy
sudo ./deploy.sh
```

### Update Application

```bash
cd /opt/donaldson-agency
sudo ./deploy.sh
```

## Common Commands

### Start/Stop/Restart

```bash
# Start
docker compose up -d

# Stop
docker compose down

# Restart
docker compose restart

# Stop and remove everything
docker compose down -v
```

### View Logs

```bash
# Follow logs (live)
docker compose logs -f

# Last 100 lines
docker compose logs --tail=100

# Specific service logs
docker logs donaldson-agency
```

### Monitor

```bash
# View running containers
docker ps

# Resource usage
docker stats

# Inspect container
docker inspect donaldson-agency
```

### Rebuild

```bash
# Rebuild without cache
docker compose build --no-cache

# Rebuild and restart
docker compose up -d --build
```

### Troubleshooting

```bash
# Enter container shell
docker exec -it donaldson-agency sh

# Check container health
docker inspect --format='{{.State.Health.Status}}' donaldson-agency

# View environment variables
docker exec donaldson-agency env

# Test if app is responding
curl http://localhost:3000
```

### Cleanup

```bash
# Remove unused images
docker image prune -a

# Remove unused containers
docker container prune

# Remove unused volumes
docker volume prune

# Remove everything unused
docker system prune -a --volumes
```

## Docker Compose Commands

```bash
# Build services
docker compose build

# Start services
docker compose up -d

# Stop services
docker compose down

# View service logs
docker compose logs [service-name]

# Scale services (if needed)
docker compose up -d --scale donaldson-agency=3

# Execute command in service
docker compose exec donaldson-agency sh
```

## Production Best Practices

### 1. Health Checks

The container includes a health check that runs every 30 seconds:

```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' donaldson-agency
```

### 2. Resource Limits (Optional)

Add to `docker-compose.yml`:

```yaml
services:
  donaldson-agency:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

### 3. Logging Configuration

Add to `docker-compose.yml`:

```yaml
services:
  donaldson-agency:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## Environment Variables

Required variables in `.env.production`:

```env
NODE_ENV=production
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Port Mapping

- **Container Port**: 3000
- **Host Port**: 3000 (configurable in docker-compose.yml)
- **Nginx Proxy**: 80/443 → 3000

## File Structure

```
donaldson-agency/
├── Dockerfile              # Multi-stage Docker build
├── .dockerignore          # Files to exclude from image
├── docker-compose.yml     # Docker Compose configuration
├── deploy.sh             # Deployment script
├── .env.production       # Production environment variables (not in git)
├── .env.production.example  # Template for .env.production
└── DEPLOYMENT.md         # Full deployment guide
```

## CI/CD Integration (Future)

Example GitHub Actions workflow:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /opt/donaldson-agency
            git pull
            ./deploy.sh
```

## Performance Tips

1. **Use .dockerignore** - Reduces build context size
2. **Multi-stage builds** - Smaller final image (already implemented)
3. **Layer caching** - Order commands from least to most frequently changing
4. **Standalone output** - Next.js optimized build (already configured)

## Security Notes

1. Never commit `.env.production` to git
2. Use specific image versions instead of `latest`
3. Run container as non-root user (already configured)
4. Keep base images updated
5. Use secrets management for sensitive data

## Support

- Docker Documentation: https://docs.docker.com
- Next.js Docker: https://nextjs.org/docs/deployment#docker-image
- Docker Compose: https://docs.docker.com/compose/
