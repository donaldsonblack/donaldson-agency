# Self-Hosted GitHub Runner Setup

Since your server is behind Zoraxy with only ports 80/443 exposed, you need a self-hosted GitHub Actions runner on your internal network.

## Why Self-Hosted Runner?

- ✅ Can access your server at `192.168.4.37:22`
- ✅ No need to expose SSH port publicly
- ✅ Faster deployments (no SSH overhead)
- ✅ Works with private networks

## Setup Instructions

### 1. On Your Server (or any machine on the same network)

SSH into your server:

```bash
ssh stirling@192.168.4.37
```

### 2. Create Runner Directory

```bash
cd ~
mkdir actions-runner && cd actions-runner
```

### 3. Download GitHub Actions Runner

```bash
# Download latest runner
curl -o actions-runner-linux-x64-2.329.0.tar.gz -L \
  https://github.com/actions/runner/releases/download/v2.329.0/actions-runner-linux-x64-2.329.0.tar.gz

# Extract
tar xzf ./actions-runner-linux-x64-2.329.0.tar.gz
```

### 4. Get Registration Token from GitHub

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/donaldson-agency`
2. Go to **Settings** → **Actions** → **Runners**
3. Click **"New self-hosted runner"**
4. Select **Linux** as the operating system
5. Copy the **registration token** (looks like: `ABCDEFG1234567890...`)

### 5. Configure the Runner

```bash
# Configure with your token
./config.sh --url https://github.com/YOUR_USERNAME/donaldson-agency --token YOUR_TOKEN_HERE

# When prompted:
# - Runner name: Press Enter (uses default hostname)
# - Runner group: Press Enter (uses default)
# - Labels: Press Enter (uses default)
# - Work folder: Press Enter (uses default _work)
```

### 6. Install as a Service (Recommended)

This ensures the runner starts automatically:

```bash
# Install service
sudo ./svc.sh install

# Start service
sudo ./svc.sh start

# Check status
sudo ./svc.sh status
```

**Alternative:** Run interactively (not recommended for production):
```bash
./run.sh
```

### 7. Verify Runner is Online

1. Go back to GitHub: **Settings** → **Actions** → **Runners**
2. You should see your runner listed with a green "Idle" status
3. Runner name will be your server hostname (e.g., `core-www-marketing-01`)

### 8. Disable Old SSH-Based Workflow

Rename the old workflow so it doesn't run:

```bash
# On your local machine
cd ~/001-PROJECTS/donaldson-agency
mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled
```

The new workflow (`.github/workflows/deploy-selfhosted.yml`) will be used automatically.

### 9. Test Deployment

```bash
# On your local machine
git add .
git commit -m "Switch to self-hosted runner"
git push origin main

# Watch the deployment in GitHub Actions
```

## Workflow Changes

### Old Workflow (SSH-based):
```yaml
runs-on: ubuntu-latest  # GitHub's hosted runner
uses: appleboy/ssh-action  # SSH to server
```

### New Workflow (Self-hosted):
```yaml
runs-on: self-hosted  # Your runner on internal network
run: cd /opt/donaldson-agency && docker compose up -d  # Direct commands
```

## Troubleshooting

### Runner Offline

Check service status:
```bash
sudo ./svc.sh status

# View logs
sudo journalctl -u actions.runner.*.service -f
```

### Runner Can't Access Docker

Add runner user to docker group:
```bash
sudo usermod -aG docker $(whoami)

# Restart runner service
sudo ./svc.sh stop
sudo ./svc.sh start
```

### Deployment Fails with Permission Error

Make sure runner can access the deployment directory:
```bash
# Check ownership
ls -la /opt/donaldson-agency

# If needed, adjust permissions
sudo chown -R stirling:stirling /opt/donaldson-agency
```

### Runner Shows Up as Offline in GitHub

```bash
# Check if service is running
sudo ./svc.sh status

# Check logs
sudo journalctl -u actions.runner.*.service -n 50

# Restart service
sudo ./svc.sh stop
sudo ./svc.sh start
```

## Managing the Runner

### Stop the Runner
```bash
cd ~/actions-runner
sudo ./svc.sh stop
```

### Start the Runner
```bash
cd ~/actions-runner
sudo ./svc.sh start
```

### Uninstall the Runner
```bash
cd ~/actions-runner

# Stop and remove service
sudo ./svc.sh stop
sudo ./svc.sh uninstall

# Remove runner from GitHub
./config.sh remove --token YOUR_TOKEN
```

## Security Considerations

### 1. Runner Runs as Your User

The runner executes commands as the user who configured it. Make sure this user has appropriate permissions.

### 2. Limit Runner Access

The runner can only access repositories it's registered with. Don't use a personal access token with broad permissions.

### 3. Keep Runner Updated

Update the runner regularly:
```bash
cd ~/actions-runner
sudo ./svc.sh stop
# Download and extract new version
sudo ./svc.sh start
```

### 4. Monitor Runner Activity

Check logs regularly:
```bash
sudo journalctl -u actions.runner.*.service -f
```

## Benefits of Self-Hosted Runner

✅ **Works with private networks** - No need to expose SSH
✅ **Faster deployments** - No SSH handshake overhead
✅ **Direct access** - Can use local IP addresses
✅ **Cost-effective** - No GitHub Actions minutes usage for deployment
✅ **Flexible** - Can install custom tools on the runner

## What Runs Where?

### GitHub's Hosted Runners (ubuntu-latest)
- ✅ Tests
- ✅ Linting
- ✅ Type checking
- ✅ Build verification

### Your Self-Hosted Runner
- ✅ Docker build
- ✅ Container deployment
- ✅ Health checks
- ✅ Rollback if needed

## Next Steps

1. ✅ Install self-hosted runner on server
2. ✅ Verify runner shows as "Idle" in GitHub
3. ✅ Disable old SSH workflow
4. ✅ Push to main to test deployment
5. ✅ Monitor first deployment

## Alternative: Expose SSH Port

If you prefer SSH deployment instead, you would need to:
1. Set up port forwarding: External port (e.g., 2222) → 192.168.4.37:22
2. Update firewall rules to allow external SSH
3. Use the original SSH-based workflow

However, **self-hosted runner is more secure** for your setup.

---

**Questions?** See the main [CI-CD.md](../CI-CD.md) documentation.
