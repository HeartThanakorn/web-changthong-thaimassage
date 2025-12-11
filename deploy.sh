#!/bin/bash
# Deploy script for Chang Thong Thaimassage
# Usage: ./deploy-changthong.sh

set -e

echo "🚀 Deploying Chang Thong Thaimassage..."
echo ""

cd /home/heart/web-changthong-thaimassage

echo "📥 Pulling latest code..."
git pull

echo ""
echo "🔨 Building and restarting Docker..."
docker compose up --build -d

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Website: https://changthong-thaimassage.de"
echo ""

# Show container status
docker ps | grep changthong
