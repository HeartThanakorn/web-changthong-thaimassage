#!/bin/bash
# Deploy script for Pleu Spa (thaithanyamassage.de)
# Usage: ./deploy-pleuspa.sh

set -e

echo "🚀 Deploying Pleu Spa (thaithanyamassage.de)..."
echo ""

cd /home/heart/web-thaimassage-berlin/pleu-spa-by-thanya

echo "📥 Pulling latest code..."
git pull

echo ""
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo ""
echo "🔨 Building..."
npm run build

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Website: https://thaithanyamassage.de"
echo ""
echo "ℹ️  No Docker restart needed - dist folder is already mounted."
