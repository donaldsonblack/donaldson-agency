#!/bin/bash

# Donaldson Agency Deployment Script
# This script builds and deploys the Docker container with rollback support

set -e

DOCKER_IMAGE="donaldson-agency"

# Function to rollback to previous version
rollback() {
    echo "🔄 Rolling back to previous version..."

    # Stop current container
    docker compose down || true

    # Check if backup image exists
    if docker images | grep -q "${DOCKER_IMAGE}.*backup"; then
        echo "📦 Restoring backup image..."

        # Remove current image
        docker rmi ${DOCKER_IMAGE}:latest 2>/dev/null || true

        # Restore backup
        docker tag ${DOCKER_IMAGE}:backup ${DOCKER_IMAGE}:latest

        # Start container
        docker compose up -d

        echo "✅ Rollback complete!"
    else
        echo "❌ No backup image found!"
        exit 1
    fi
}

# Check for rollback flag
if [ "$1" == "rollback" ]; then
    rollback
    exit 0
fi

echo "🚀 Starting deployment..."

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "❌ Error: .env.production file not found!"
    echo "Please copy .env.production.example to .env.production and fill in your values."
    exit 1
fi

# Pull latest changes (if using git)
if [ -d .git ]; then
    echo "📥 Pulling latest changes from git..."
    git pull
fi

# Store current image as backup (if exists)
CURRENT_IMAGE=$(docker images -q ${DOCKER_IMAGE}:latest)
if [ ! -z "$CURRENT_IMAGE" ]; then
    echo "📦 Creating backup of current image..."
    docker tag ${DOCKER_IMAGE}:latest ${DOCKER_IMAGE}:backup || true
fi

# Stop existing container
echo "🛑 Stopping existing container..."
docker compose down || true

# Build new image
echo "🔨 Building Docker image..."
docker compose build --no-cache

# Start container
echo "▶️  Starting container..."
docker compose up -d

# Wait for container to be healthy
echo "⏳ Waiting for container to be ready..."
sleep 15

# Check if container is running and healthy
if docker compose ps | grep -q "Up"; then
    # Test if app responds
    if curl -f -s http://localhost:3000 > /dev/null; then
        echo "✅ Deployment successful!"
        echo "🌐 Your site is now running at http://localhost:3000"
        echo ""
        echo "📊 View logs with: docker compose logs -f"
        echo "🔄 Rollback with: ./deploy.sh rollback"

        # Clean up old backup (keep only one backup)
        docker images | grep "${DOCKER_IMAGE}.*backup" | awk '{print $3}' | tail -n +2 | xargs -r docker rmi 2>/dev/null || true

        exit 0
    else
        echo "❌ Health check failed! App not responding."
        echo "🔄 Attempting automatic rollback..."
        rollback
        exit 1
    fi
else
    echo "❌ Container failed to start!"
    echo "🔄 Attempting automatic rollback..."
    rollback
    exit 1
fi
