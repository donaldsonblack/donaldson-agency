# CI/CD Pipeline Documentation

Automated deployment pipeline for Donaldson Agency with testing, deployment, and automatic rollback.

## Overview

This project uses GitHub Actions for continuous integration and deployment:

- **Build & Test**: Runs on every push to main
- **Automated Deployment**: Deploys to production server via SSH
- **Health Checks**: Verifies deployment success
- **Automatic Rollback**: Reverts to previous version if deployment fails
- **Manual Rollback**: Command to rollback manually if needed

## GitHub Actions Workflow

### What It Does

1. **Test Stage**
   - Checks out code
   - Installs dependencies with Bun
   - Runs linter (`bun run lint`)
   - Type checks TypeScript (`tsc --noEmit`)
   - Builds the application

2. **Deploy Stage** (only on main branch)
   - Connects to production server via SSH
   - Creates backup of the current Docker image
   - Pulls latest code from GitHub
   - Builds a new Docker image
   - Deploys new container
   - Runs health checks

3. **Rollback Stage** (on failure)
   - Automatically triggered if the deployment fails
   - Stops failed container
   - Restores previous Docker image
   - Starts old container
   - Verifies restoration

### Workflow File

Location: `.github/workflows/deploy.yml`

## Setup Instructions

### 1. Generate SSH Key for GitHub Actions

On your local machine:

```bash
# Generate a new SSH key (don not use a passphrase)
ssh-keygen -t ed25519 -C "github-actions@donaldson-agency" -f ~/.ssh/github_deploy_key

# Copy the public key
cat ~/.ssh/github_deploy_key.pub
```

### 2. Add Public Key to Server

On your Ubuntu server:

```bash
# Add the public key to authorized_keys
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys

# Set correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### 3. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `SERVER_HOST` | Your server's IP or domain | `123.45.67.89` |
| `SERVER_USER` | SSH username | `ubuntu` or `root` |
| `SSH_PRIVATE_KEY` | Private key content | Contents of `github_deploy_key` |
| `SERVER_PORT` | SSH port (optional) | `22` (default) |
| `RESEND_API_KEY` | Resend API key | `re_xxxxxxxxxxxxx` |
| `RESEND_FROM_EMAIL` | From email address | `onboarding@resend.dev` |
| `RESEND_TO_EMAIL` | Your email | `your@email.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

**To add the SSH private key:**

```bash
# Copy the entire private key including headers
cat ~/.ssh/github_deploy_key
```

Copy everything from `-----BEGIN OPENSSH PRIVATE KEY-----` to `-----END OPENSSH PRIVATE KEY-----` and paste into GitHub secrets.

### 4. Prepare Production Server

Ensure your server has:

```bash
# Docker and Docker Compose installed
docker --version
docker compose version

# Git installed
git --version

# Project directory exists and is a git repository
cd /opt/donaldson-agency
git remote -v  # Should show your GitHub repo

# .env.production file exists
ls -la .env.production
```

### 5. Test the Connection

Test SSH access from your local machine:

```bash
ssh -i ~/.ssh/github_deploy_key USER@SERVER_HOST "echo 'Connection successful'"
```

## Usage

### Automatic Deployment

Simply push to the main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The GitHub Action will:
1. Run tests and build
2. Deploy to production if tests pass
3. Automatically rollback if deployment fails

### Manual Deployment

SSH into your server and run:

```bash
cd /opt/donaldson-agency
sudo ./deploy.sh
```

### Manual Rollback

If you need to rollback manually:

```bash
# On the server
cd /opt/donaldson-agency
sudo ./deploy.sh rollback
```

Or trigger from GitHub Actions:
- Go to Actions tab
- Select "Deploy to Production" workflow
- Click "Run workflow"
- Select the branch you want to deploy

## Monitoring

### View Deployment Status

- **GitHub Actions**: Check the Actions tab in your repository
- **Server Logs**: `docker compose logs -f`
- **Container Status**: `docker compose ps`

### Health Checks

The deployment script checks:
1. Container is running (`docker compose ps`)
2. Application responds to HTTP requests (`curl http://localhost:3000`)

If either check fails, automatic rollback is triggered.

## Rollback Process

### Automatic Rollback

Triggered when:
- Container fails to start
- Health check fails (app doesn't respond)
- Build fails on server

Process:
1. Stop failed container
2. Tag previous image as `backup`
3. Restore backup image
4. Start old container
5. Verify service is running

### Manual Rollback

```bash
# On the server
./deploy.sh rollback
```

This will:
- Stop current container
- Restore the most recent backup image
- Start the previous version
- Verify restoration

**Note**: Only the last deployment is kept as backup. Rolling back twice will fail.

## Troubleshooting

### Deployment Fails Immediately

Check GitHub Actions logs:
- Go to Actions tab
- Click on failed workflow
- Review error messages

Common issues:
- SSH key not configured correctly
- Server not accessible
- Wrong server path

### Deployment Succeeds but Rollback Triggered

This means the health check failed:

```bash
# SSH into server and check
docker compose logs -f
docker compose ps

# Test app manually
curl http://localhost:3000
```

Common issues:
- Environment variables missing
- Port 3000 already in use
- Application error at startup

### Rollback Fails

If rollback fails:

```bash
# List available images
docker images | grep donaldson-agency

# Manually restore if backup exists
docker tag donaldson-agency:backup donaldson-agency:latest
docker compose up -d

# Or deploy a specific commit
git checkout <previous-commit>
./deploy.sh
```

### No Backup Image Available

If you see "No backup image found":

```bash
# You'll need to rebuild from a known good commit
git log --oneline  # Find last working commit
git checkout <commit-hash>
./deploy.sh
```

## Best Practices

1. **Test Locally First**
   - Always test Docker build locally before pushing
   - Run `docker compose up -d --build`

2. **Small, Incremental Changes**
   - Smaller commits = easier rollback
   - Push frequently during development

3. **Monitor Deployments**
   - Watch GitHub Actions when pushing to main
   - Check server logs after deployment

4. **Keep Backups**
   - The deploy script keeps one backup automatically
   - Consider periodic full backups of your server

5. **Environment Variables**
   - Never commit `.env.production` to git
   - Keep GitHub secrets up to date
   - Document any new environment variables

## Security Notes

1. **SSH Key**
   - Use a dedicated key for GitHub Actions
   - Never use your personal SSH key
   - Store private key only in GitHub Secrets

2. **Server Access**
   - Limit SSH access to specific IPs if possible
   - Use SSH keys, not passwords
   - Keep server software updated

3. **Secrets Management**
   - Rotate API keys regularly
   - Use GitHub Secrets for all sensitive data
   - Never log secrets in deployment scripts

## Customization

### Change Deployment Path

Edit `.github/workflows/deploy.yml`:

```yaml
env:
  DEPLOY_PATH: /your/custom/path
```

### Add Pre-deployment Steps

Edit `deploy.sh` before the build step:

```bash
# Run database migrations
echo "Running migrations..."
docker compose exec app bun run migrate

# Clear cache
echo "Clearing cache..."
docker compose exec app bun run cache:clear
```

### Add Post-deployment Steps

Edit `deploy.sh` after health check:

```bash
# Warm up cache
echo "Warming cache..."
curl -s http://localhost:3000/api/warmup

# Send notification
curl -X POST https://hooks.slack.com/... \
  -d '{"text":"Deployment successful!"}'
```

## Workflow Visualization

```
┌─────────────────┐
│  Push to Main   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Run Tests      │
│  - Lint         │
│  - Type Check   │
│  - Build        │
└────────┬────────┘
         │
    ┌────┴────┐
    │ Pass?   │
    └────┬────┘
         │ Yes
         ▼
┌─────────────────┐
│  SSH to Server  │
│  - Backup Image │
│  - Pull Code    │
│  - Build Docker │
│  - Deploy       │
└────────┬────────┘
         │
    ┌────┴────┐
    │Healthy? │
    └────┬────┘
         │
    ┌────┴────┐
    │   Yes   │ No
    ▼         ▼
┌─────┐  ┌─────────┐
│Done!│  │Rollback │
└─────┘  └─────────┘
```

## Support

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Docker Docs**: https://docs.docker.com
- **Deployment Guide**: See DEPLOYMENT.md

## Next Steps

- [ ] Set up staging environment
- [ ] Add Slack/Discord notifications
- [ ] Implement blue-green deployments
- [ ] Add automated database backups
- [ ] Set up monitoring and alerting
