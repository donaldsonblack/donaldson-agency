# Deployment Guide for Ubuntu Server

This guide walks you through deploying the Donaldson Agency website to an Ubuntu server using Docker.

## Prerequisites

- Ubuntu server (20.04 or later)
- Root or sudo access
- Domain name pointed to your server's IP address
- Resend API key

## Step 1: Install Docker on Ubuntu

```bash
# Update package index
sudo apt update

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to docker group (optional, avoids using sudo)
sudo usermod -aG docker $USER
newgrp docker

# Verify installation
docker --version
docker compose version
```

## Step 2: Install Git (if not already installed)

```bash
sudo apt install -y git
```

## Step 3: Clone Your Repository

```bash
# Navigate to your preferred directory
cd /opt

# Clone the repository
sudo git clone https://github.com/yourusername/donaldson-agency.git
cd donaldson-agency

# Or upload your files via SCP/SFTP
```

## Step 4: Set Up Environment Variables

Create a `.env.production` file:

```bash
sudo nano .env.production
```

Add the following (replace with your actual values):

```env
NODE_ENV=production
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 5: Build and Run with Docker

### Option A: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker compose up -d

# View logs
docker compose logs -f

# Stop the container
docker compose down
```

### Option B: Using Docker directly

```bash
# Build the image
docker build -t donaldson-agency .

# Run the container
docker run -d \
  --name donaldson-agency \
  -p 3000:3000 \
  --env-file .env.production \
  --restart unless-stopped \
  donaldson-agency

# View logs
docker logs -f donaldson-agency

# Stop the container
docker stop donaldson-agency
docker rm donaldson-agency
```

## Step 6: Set Up Nginx as Reverse Proxy (Recommended)

### Install Nginx

```bash
sudo apt install -y nginx
```

### Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/donaldson-agency
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/donaldson-agency /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 7: Set Up SSL with Let's Encrypt (HTTPS)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts
# Certbot will automatically configure Nginx for HTTPS

# Test automatic renewal
sudo certbot renew --dry-run
```

## Step 8: Set Up Firewall

```bash
# Allow SSH (important!)
sudo ufw allow OpenSSH

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Useful Commands

### View Running Containers
```bash
docker ps
```

### View Logs
```bash
docker compose logs -f
# or
docker logs -f donaldson-agency
```

### Restart Container
```bash
docker compose restart
# or
docker restart donaldson-agency
```

### Update Application
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker compose down
docker compose up -d --build
```

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### View Nginx Logs
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## Monitoring and Maintenance

### Monitor Container Resource Usage
```bash
docker stats donaldson-agency
```

### Clean Up Docker Resources (Periodically)
```bash
# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# Remove everything unused
docker system prune -a
```

### Automatic Updates (Optional)

Create a cron job to auto-update:

```bash
sudo crontab -e
```

Add:
```cron
# Auto-update every Sunday at 2 AM
0 2 * * 0 cd /opt/donaldson-agency && git pull && docker compose up -d --build
```

## Troubleshooting

### Container Won't Start
```bash
# Check logs
docker compose logs

# Check if port 3000 is already in use
sudo lsof -i :3000
```

### Website Not Accessible
```bash
# Check if container is running
docker ps

# Check Nginx configuration
sudo nginx -t

# Check firewall
sudo ufw status
```

### Out of Disk Space
```bash
# Check disk usage
df -h

# Clean up Docker resources
docker system prune -a --volumes
```

## Security Best Practices

1. **Keep System Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Use Strong Passwords** for server access

3. **Disable Root Login** via SSH
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart ssh
   ```

4. **Set Up SSH Keys** instead of password authentication

5. **Keep Environment Variables Secure**
   ```bash
   # Restrict .env.production file permissions
   sudo chmod 600 .env.production
   ```

6. **Regular Backups** of your data

## Support

For issues or questions:
- Check logs: `docker compose logs`
- Review Next.js documentation: https://nextjs.org/docs
- Check Docker documentation: https://docs.docker.com

---

**Your application should now be running at:**
- HTTP: `http://yourdomain.com`
- HTTPS: `https://yourdomain.com` (after SSL setup)
