#!/bin/bash

# Donaldson Agency Deployment Script
# This script builds and deploys the Docker container

set -e

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
sleep 10

# Check if container is running
if docker compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site is now running at http://localhost:3000"
    echo ""
    echo "📊 View logs with: docker compose logs -f"
else
    echo "❌ Deployment failed! Check logs with: docker compose logs"
    exit 1
fi
