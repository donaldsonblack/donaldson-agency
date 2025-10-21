# GitHub Secrets Setup Guide

## Quick Setup

Your CI/CD pipeline is working but needs GitHub Secrets configured to deploy to your server.

### Step 1: Generate SSH Key (On Your Local Machine)

```bash
# Generate a new SSH key for GitHub Actions
ssh-keygen -t ed25519 -C "github-actions@donaldson-agency" -f ~/.ssh/github_deploy_key

# When prompted for passphrase, press Enter (leave empty)
```

### Step 2: Add Public Key to Your Server

```bash
# 1. Copy the public key
cat ~/.ssh/github_deploy_key.pub

# 2. SSH into your server
ssh your-user@your-server-ip

# 3. Add the public key to authorized_keys
echo "PASTE_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys

# 4. Set correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### Step 3: Add Secrets to GitHub

Go to: **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**

Add these 7 secrets:

#### 1. SERVER_HOST
```
Your server IP or domain
Example: 123.45.67.89
```

#### 2. SERVER_USER
```
SSH username (usually 'ubuntu' or 'root')
Example: ubuntu
```

#### 3. SSH_PRIVATE_KEY
```bash
# Copy the ENTIRE private key:
cat ~/.ssh/github_deploy_key

# Copy everything from:
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

#### 4. RESEND_API_KEY
```
Your Resend API key
Format: re_xxxxxxxxxxxxx
Get from: https://resend.com/api-keys
```

#### 5. RESEND_FROM_EMAIL
```
onboarding@resend.dev
(or your verified domain email)
```

#### 6. RESEND_TO_EMAIL
```
your-email@example.com
(Where contact form submissions go)
```

#### 7. NEXT_PUBLIC_GA_MEASUREMENT_ID
```
Your Google Analytics ID
Format: G-XXXXXXXXXX
Get from: https://analytics.google.com
```

### Step 4: Verify Server Setup

Make sure your server is ready:

```bash
# SSH into server
ssh your-user@your-server-ip

# Check Docker is installed
docker --version

# Check project directory exists
cd /opt/donaldson-agency
pwd

# Check it's a git repo
git remote -v

# Check .env.production exists
ls -la .env.production
```

### Step 5: Test Deployment

After adding all secrets:

```bash
# Make a small change
echo "# Test" >> README.md

# Commit and push
git add README.md
git commit -m "Test CI/CD deployment"
git push origin main

# Watch the deployment
# Go to: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

## Quick Reference

**Direct link to add secrets:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions
```

**Secrets needed:**
- [ ] SERVER_HOST
- [ ] SERVER_USER
- [ ] SSH_PRIVATE_KEY
- [ ] RESEND_API_KEY
- [ ] RESEND_FROM_EMAIL
- [ ] RESEND_TO_EMAIL
- [ ] NEXT_PUBLIC_GA_MEASUREMENT_ID

## Troubleshooting

### Can't connect to server
```bash
# Test SSH connection locally
ssh -i ~/.ssh/github_deploy_key your-user@your-server-ip
```

### Secrets not working
- Make sure secret names are EXACTLY as shown (case-sensitive)
- No extra spaces or quotes
- Re-save the secret if you're unsure

### Deployment fails after connecting
Check server logs:
```bash
ssh your-user@your-server-ip
cd /opt/donaldson-agency
docker compose logs -f
```

## Next Steps

1. ✅ Tests pass (already working!)
2. ⏳ Add GitHub Secrets (do this now)
3. ⏳ Push to main branch
4. ⏳ Watch deployment succeed!

---

**Full documentation:** [CI-CD.md](../CI-CD.md) | [CICD-SETUP-CHECKLIST.md](./CICD-SETUP-CHECKLIST.md)
