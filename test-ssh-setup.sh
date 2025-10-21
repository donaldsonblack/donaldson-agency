#!/bin/bash

# SSH Setup Diagnostic Script
# This script helps diagnose SSH authentication issues with GitHub Actions

echo "🔍 SSH Setup Diagnostic"
echo "======================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if private key exists
echo "1. Checking SSH private key..."
if [ -f ~/.ssh/github_deploy_key ]; then
    echo -e "${GREEN}✓${NC} Private key exists at ~/.ssh/github_deploy_key"

    # Check key format
    if head -1 ~/.ssh/github_deploy_key | grep -q "BEGIN OPENSSH PRIVATE KEY"; then
        echo -e "${GREEN}✓${NC} Key format is correct (OpenSSH)"
    else
        echo -e "${RED}✗${NC} Key format is incorrect"
    fi

    # Check permissions
    PERMS=$(stat -f "%A" ~/.ssh/github_deploy_key 2>/dev/null || stat -c "%a" ~/.ssh/github_deploy_key 2>/dev/null)
    if [ "$PERMS" = "600" ]; then
        echo -e "${GREEN}✓${NC} Key permissions are correct (600)"
    else
        echo -e "${YELLOW}⚠${NC} Key permissions are $PERMS (should be 600)"
        echo "  Fix with: chmod 600 ~/.ssh/github_deploy_key"
    fi
else
    echo -e "${RED}✗${NC} Private key not found at ~/.ssh/github_deploy_key"
    echo "  Generate with: ssh-keygen -t ed25519 -C \"github-actions\" -f ~/.ssh/github_deploy_key"
    exit 1
fi
echo ""

# Check if public key exists
echo "2. Checking SSH public key..."
if [ -f ~/.ssh/github_deploy_key.pub ]; then
    echo -e "${GREEN}✓${NC} Public key exists"
    echo ""
    echo "Public key content:"
    echo "===================="
    cat ~/.ssh/github_deploy_key.pub
    echo "===================="
else
    echo -e "${RED}✗${NC} Public key not found"
    exit 1
fi
echo ""

# Prompt for server details
echo "3. Testing server connection..."
read -p "Enter your server IP/hostname: " SERVER_HOST
read -p "Enter your SSH username (e.g., ubuntu, root): " SERVER_USER
read -p "Enter SSH port (press Enter for 22): " SERVER_PORT
SERVER_PORT=${SERVER_PORT:-22}

echo ""
echo "Testing connection to: $SERVER_USER@$SERVER_HOST:$SERVER_PORT"
echo ""

# Test SSH connection
if ssh -i ~/.ssh/github_deploy_key -p $SERVER_PORT -o ConnectTimeout=10 -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST "echo 'Connection successful!'" 2>/dev/null; then
    echo -e "${GREEN}✓${NC} SSH connection successful!"
    echo ""
    echo "Your GitHub Secrets should be:"
    echo "================================"
    echo "SERVER_HOST: $SERVER_HOST"
    echo "SERVER_USER: $SERVER_USER"
    echo "SERVER_PORT: $SERVER_PORT"
    echo "SSH_PRIVATE_KEY: (contents of ~/.ssh/github_deploy_key)"
    echo ""
    echo "To copy private key to clipboard:"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "  pbcopy < ~/.ssh/github_deploy_key"
    else
        echo "  cat ~/.ssh/github_deploy_key"
    fi
else
    echo -e "${RED}✗${NC} SSH connection failed!"
    echo ""
    echo "Trying with verbose output for debugging..."
    echo ""
    ssh -i ~/.ssh/github_deploy_key -p $SERVER_PORT -v $SERVER_USER@$SERVER_HOST "echo 'test'" 2>&1 | grep -E "(Authenticating|Offering|Connection|denied|Permission)"
    echo ""
    echo "Common issues:"
    echo "  1. Public key not added to server's ~/.ssh/authorized_keys"
    echo "  2. Wrong username (check if it's 'ubuntu', 'root', or something else)"
    echo "  3. Server firewall blocking SSH"
    echo "  4. Wrong IP address or hostname"
    echo ""
    echo "To add public key to server:"
    echo "  ssh $SERVER_USER@$SERVER_HOST"
    echo "  echo '$(cat ~/.ssh/github_deploy_key.pub)' >> ~/.ssh/authorized_keys"
    echo "  chmod 600 ~/.ssh/authorized_keys"
    exit 1
fi
echo ""

# Show how to copy private key
echo "4. Next steps for GitHub Secrets..."
echo ""
echo "Copy your private key:"
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "  pbcopy < ~/.ssh/github_deploy_key"
    echo "  (Key is now in your clipboard)"
else
    echo "  Run: cat ~/.ssh/github_deploy_key"
    echo "  Then copy the output"
fi
echo ""
echo "Then update GitHub Secret:"
echo "  1. Go to: https://github.com/YOUR_USERNAME/donaldson-agency/settings/secrets/actions"
echo "  2. Find 'SSH_PRIVATE_KEY' and click Update (or create if it doesn't exist)"
echo "  3. Paste the ENTIRE private key (including BEGIN/END lines)"
echo "  4. Also verify SERVER_HOST=$SERVER_HOST and SERVER_USER=$SERVER_USER"
echo ""
echo -e "${GREEN}Done!${NC}"
