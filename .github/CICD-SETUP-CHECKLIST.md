# CI/CD Setup Checklist

Quick checklist to set up automated deployments with GitHub Actions.

## Prerequisites

- [ ] Ubuntu server with Docker installed
- [ ] Project deployed manually at least once
- [ ] SSH access to the server
- [ ] GitHub repository

## Step-by-Step Setup

### 1. Generate SSH Key

On your **local machine**:

```bash
# Generate dedicated key for GitHub Actions
ssh-keygen -t ed25519 -C "github-actions@donaldson-agency" -f ~/.ssh/github_deploy_key

# Leave passphrase empty (press Enter twice)
```

### 2. Add Public Key to Server

On your **production server**:

```bash
# Copy the public key from your local machine
# (Run this on local machine first)
cat ~/.ssh/github_deploy_key.pub
# Copy the output

# Then on the server, add it to authorized_keys
nano ~/.ssh/authorized_keys
# Paste the public key on a new line
# Save and exit (Ctrl+X, Y, Enter)

# Set correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### 3. Test SSH Connection

On your **local machine**:

```bash
ssh -i ~/.ssh/github_deploy_key YOUR_USER@YOUR_SERVER_IP "echo 'Success!'"
```

If you see "Success!", the SSH key is configured correctly!

### 4. Add GitHub Secrets

Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions`

Click "New repository secret" for each:

#### Required Secrets:

1. **SERVER_HOST**
   - Your server IP or domain
   - Example: `123.45.67.89` or `server.yoursite.com`

2. **SERVER_USER**
   - SSH username
   - Example: `ubuntu` or `root`

3. **SSH_PRIVATE_KEY**
   - Get the private key:
     ```bash
     cat ~/.ssh/github_deploy_key
     ```
   - Copy **everything** including:
     ```
     -----BEGIN OPENSSH PRIVATE KEY-----
     ...
     -----END OPENSSH PRIVATE KEY-----
     ```

4. **RESEND_API_KEY**
   - From: https://resend.com/api-keys
   - Format: `re_xxxxxxxxxxxxx`

5. **RESEND_FROM_EMAIL**
   - Email to send from
   - Example: `onboarding@resend.dev`

6. **RESEND_TO_EMAIL**
   - Your email to receive contact forms
   - Example: `your@email.com`

7. **NEXT_PUBLIC_GA_MEASUREMENT_ID**
   - Google Analytics ID
   - Format: `G-XXXXXXXXXX`

#### Optional Secret:

8. **SERVER_PORT** (only if not using port 22)
   - Default: `22`
   - Example: `2222`

### 5. Verify Server Setup

On your **production server**:

```bash
# Check project exists at correct path
cd /opt/donaldson-agency
pwd  # Should show: /opt/donaldson-agency

# Check it's a git repository
git remote -v
# Should show your GitHub repository

# Check .env.production exists
ls -la .env.production

# Check Docker is running
docker --version
docker compose version

# Check current deployment works
docker compose ps
```

### 6. Update Workflow Path (if needed)

If your project is NOT at `/opt/donaldson-agency`:

Edit `.github/workflows/deploy.yml`:

```yaml
env:
  DEPLOY_PATH: /your/actual/path  # Change this line
```

### 7. Test the Pipeline

1. Make a small change:
   ```bash
   echo "# Testing CI/CD" >> README.md
   ```

2. Commit and push:
   ```bash
   git add README.md
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```

3. Watch the deployment:
   - Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`
   - Click on the running workflow
   - Monitor the progress

4. Verify on server:
   ```bash
   # SSH into server
   cd /opt/donaldson-agency
   docker compose logs -f
   ```

## Troubleshooting

### SSH Permission Denied

```bash
# On server, check permissions
ls -la ~/.ssh/
# Should be:
# drwx------ (700) for .ssh directory
# -rw------- (600) for authorized_keys file

# Fix if needed
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Deployment Succeeds but Site Doesn't Update

```bash
# On server, check if new code was pulled
cd /opt/donaldson-agency
git log -1  # Should show latest commit

# Check if container restarted
docker compose ps
# Look at "Created" timestamp

# View logs
docker compose logs --tail=50
```

### Rollback Happens Immediately

Check GitHub Actions logs for health check failure:

```bash
# On server, test health endpoint manually
curl -v http://localhost:3000

# Check container logs
docker compose logs --tail=100
```

### Workflow Doesn't Trigger

- Check the workflow file is in `.github/workflows/deploy.yml`
- Check you pushed to the `main` branch
- Check GitHub Actions is enabled:
  - Go to Settings → Actions → General
  - Ensure "Allow all actions" is selected

## Success Indicators

✅ Tests pass in GitHub Actions
✅ Deployment step completes without errors
✅ Health check passes
✅ Container is running on server
✅ Site is accessible

## Next Steps After Setup

- [ ] Test rollback: `./deploy.sh rollback` on server
- [ ] Test failed deployment (intentionally break build)
- [ ] Set up monitoring/alerting
- [ ] Document your specific deployment process
- [ ] Add team members to GitHub repo

## Quick Reference

**View workflow runs:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

**Manual rollback:**
```bash
ssh YOUR_USER@YOUR_SERVER "cd /opt/donaldson-agency && ./deploy.sh rollback"
```

**View server logs:**
```bash
ssh YOUR_USER@YOUR_SERVER "cd /opt/donaldson-agency && docker compose logs -f"
```

**Force redeploy:**
```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

## Help

For detailed information, see:
- [CI-CD.md](../../CI-CD.md) - Full documentation
- [DEPLOYMENT.md](../../DEPLOYMENT.md) - Server setup guide
- [DOCKER.md](../../DOCKER.md) - Docker commands

---

**Estimated setup time:** 15-30 minutes
