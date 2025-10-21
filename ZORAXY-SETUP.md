# Zoraxy Configuration Guide

This guide explains how to configure Zoraxy reverse proxy for the Donaldson Agency website.

## Overview

Your architecture with Zoraxy:

```
Internet (HTTPS/443)
    ↓
Zoraxy Reverse Proxy (SSL termination, routing)
    ↓
Docker Container: donaldson-agency (HTTP/3000)
```

**Benefits:**
- ✅ Zoraxy handles SSL/TLS certificates automatically
- ✅ No need for Nginx or additional reverse proxy
- ✅ Easy domain management through Zoraxy UI
- ✅ Can run multiple sites on same server
- ✅ Built-in security features

## Configuration Steps

### 1. Deploy Your Docker Container

First, make sure your Docker container is running:

```bash
cd /opt/donaldson-agency
./deploy.sh
```

Verify it's running:
```bash
docker compose ps
# Should show "Up" status

# Test local access
curl http://localhost:3000
# Should return HTML content
```

### 2. Configure Zoraxy Proxy Rule

**Via Zoraxy Web UI:**

1. **Access Zoraxy**: Navigate to your Zoraxy admin panel (usually `http://your-server-ip:8000`)

2. **Create New Proxy Rule**:
   - Go to **Proxy** → **Proxy Rules**
   - Click **Add New Rule**

3. **Configure the Rule**:
   ```
   Domain/Subdomain: yourdomain.com
   Matching Type: Domain Match
   Target: http://localhost:3000
   Enable HTTPS: ✓ (checked)
   Auto Redirect HTTP to HTTPS: ✓ (checked)
   WebSocket Support: ✓ (checked - optional but recommended)
   ```

4. **SSL Certificate**:
   - Zoraxy will automatically obtain Let's Encrypt certificate
   - Make sure your domain DNS points to your server IP
   - Wait a few minutes for certificate issuance

5. **Save** the rule

### 3. DNS Configuration

Make sure your domain points to your server:

```bash
# Check DNS resolution
dig yourdomain.com
nslookup yourdomain.com

# Should return your server's IP address
```

**DNS Records:**
```
Type: A
Name: @ (or yourdomain.com)
Value: YOUR_SERVER_IP
TTL: 3600
```

For `www` subdomain:
```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

### 4. Test the Setup

```bash
# From your local machine
curl -I https://yourdomain.com

# Should return:
# HTTP/2 200
# ...
```

Visit `https://yourdomain.com` in your browser - your site should load with SSL!

## Port Configuration

### Default Setup (Recommended)

**Docker container:** Port 3000 (internal only)
**Zoraxy:** Listens on 80 (HTTP) and 443 (HTTPS)

This is the recommended setup and requires no changes.

### Custom Port (Optional)

If port 3000 conflicts with another service, change it:

**Edit `docker-compose.yml`:**
```yaml
services:
  donaldson-agency:
    ports:
      - "3001:3000"  # Changed from 3000:3000
```

**Update Zoraxy proxy rule:**
```
Target: http://localhost:3001
```

**Update health checks in deploy.sh and CI/CD:**
```bash
# Change http://localhost:3000 to http://localhost:3001
```

## Zoraxy Features to Enable

### 1. Rate Limiting (Optional but Recommended)

Protect against abuse:
- Go to **Proxy Rules** → Your rule → **Advanced**
- Enable **Rate Limiting**
- Suggested: 100 requests per minute per IP

### 2. Access Control (Optional)

Restrict access during development:
- Enable **Access Control**
- Add allowed IP addresses
- Useful for staging environments

### 3. Custom Headers (Optional)

Add security headers:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### 4. Caching (Optional)

Enable for static assets:
- **Cache Static Files**: Yes
- **Cache Duration**: 86400 (1 day)
- Only cache `/`, `/_next/*`, and static assets

## Troubleshooting

### Site Not Loading

**Check Docker container:**
```bash
cd /opt/donaldson-agency
docker compose ps
# Should show "Up"

docker compose logs --tail=50
# Check for errors
```

**Check Zoraxy is running:**
```bash
sudo systemctl status zoraxy
# Should show "active (running)"
```

**Test local access:**
```bash
curl http://localhost:3000
# Should return HTML
```

**Check Zoraxy proxy rule:**
- Verify domain matches exactly
- Verify target is `http://localhost:3000`
- Check logs in Zoraxy UI

### SSL Certificate Issues

**Certificate not issued:**
1. Verify DNS points to correct IP: `dig yourdomain.com`
2. Check port 80 and 443 are open in firewall
3. Wait 5-10 minutes for certificate issuance
4. Check Zoraxy logs for errors

**Firewall rules:**
```bash
# Ubuntu/UFW
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

### 502 Bad Gateway

This means Zoraxy can't reach your Docker container:

```bash
# Check container is running
docker compose ps

# Check it responds
curl http://localhost:3000

# Check port in docker-compose.yml matches Zoraxy target
cat docker-compose.yml | grep "3000:3000"
```

### WebSocket Issues

If you see WebSocket connection errors in browser console:

1. Enable **WebSocket Support** in Zoraxy proxy rule
2. For Next.js development, this is only needed for hot reload
3. Production builds don't require WebSocket

## Multiple Sites on Same Server

Zoraxy makes it easy to run multiple sites:

**Example setup:**
```
site1.com → http://localhost:3000 (donaldson-agency)
site2.com → http://localhost:3001 (another-project)
blog.site1.com → http://localhost:3002 (blog)
```

Each Docker container uses a different port, Zoraxy routes based on domain.

## Security Best Practices

### 1. Firewall Configuration

Only expose necessary ports:

```bash
# Close direct access to port 3000
sudo ufw deny 3000/tcp

# Only allow Zoraxy ports
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH only

# If Zoraxy admin is on 8000, restrict it
sudo ufw allow from YOUR_IP to any port 8000
```

### 2. Docker Network Isolation

Keep containers internal-only:

**Edit `docker-compose.yml`:**
```yaml
services:
  donaldson-agency:
    ports:
      - "127.0.0.1:3000:3000"  # Only localhost can access
    networks:
      - internal

networks:
  internal:
    internal: true  # No internet access from container
```

### 3. Zoraxy Access

Protect Zoraxy admin panel:
- Change default port from 8000
- Use strong password
- Enable IP whitelist for admin access
- Use VPN or SSH tunnel for remote access

### 4. Regular Updates

```bash
# Update Zoraxy
sudo systemctl stop zoraxy
# Download latest version
sudo systemctl start zoraxy

# Update Docker containers
cd /opt/donaldson-agency
./deploy.sh  # Or push to trigger CI/CD
```

## Monitoring

### Check Zoraxy Logs

**Via Zoraxy UI:**
- Go to **Logs** section
- Filter by your domain
- Check for errors or unusual activity

**Via Command Line:**
```bash
sudo journalctl -u zoraxy -f
```

### Check Application Logs

```bash
cd /opt/donaldson-agency
docker compose logs -f

# Filter for errors
docker compose logs | grep -i error
```

### Monitor Resource Usage

```bash
# Container stats
docker stats donaldson-agency

# Server resources
htop
```

## CI/CD Considerations

Your CI/CD pipeline works perfectly with Zoraxy - no changes needed!

The GitHub Actions workflow:
1. ✅ Deploys to Docker (port 3000)
2. ✅ Runs health checks on localhost:3000
3. ✅ Zoraxy continues routing traffic during deployment
4. ✅ Zero-downtime deployments

**Note:** Health checks use `http://localhost:3000`, which is correct even with Zoraxy.

## Common Zoraxy Proxy Rule Configuration

**For Production:**
```
Domain: donaldsonagency.com
Matching Type: Domain Match
Target: http://localhost:3000
HTTPS: Enabled
Redirect HTTP to HTTPS: Yes
WebSocket: Yes
Rate Limiting: 100 req/min/ip
Custom Headers:
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
```

**For Staging (subdomain):**
```
Domain: staging.donaldsonagency.com
Matching Type: Domain Match
Target: http://localhost:3001
HTTPS: Enabled
Access Control: Your IP only
```

## Next Steps

- [ ] Configure Zoraxy proxy rule for your domain
- [ ] Test HTTPS access
- [ ] Enable rate limiting
- [ ] Set up monitoring
- [ ] Configure firewall to block direct port 3000 access
- [ ] (Optional) Set up staging subdomain

## Resources

- **Zoraxy Documentation**: https://zoraxy.arozos.com/
- **Let's Encrypt**: https://letsencrypt.org/
- **Docker Networking**: https://docs.docker.com/network/

---

**Summary**: Your current Docker setup is perfect for Zoraxy. Just create a proxy rule pointing to `http://localhost:3000` and Zoraxy handles the rest!
