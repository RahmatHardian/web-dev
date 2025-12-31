#!/bin/bash

# nikah.in - Quick Deploy to Vercel Script
# This script helps you deploy your landing page to Vercel

set -e  # Exit on error

echo "🚀 nikah.in - Vercel Deployment Helper"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo ""
    echo "⚠️  No GitHub remote configured"
    echo "Please follow these steps:"
    echo ""
    echo "1. Create a new repository on GitHub: https://github.com/new"
    echo "2. Run this command (replace YOUR_USERNAME):"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/nikah-in-landing-page.git"
    echo ""
    read -p "Press Enter when you've added the remote..."
fi

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo ""
    echo "📝 You have uncommitted changes. Let's commit them..."
    git add .

    echo ""
    read -p "Enter commit message (or press Enter for default): " commit_msg
    commit_msg=${commit_msg:-"Update nikah.in landing page"}

    git commit -m "$commit_msg"
    echo "✅ Changes committed"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main
echo "✅ Code pushed to GitHub"

echo ""
echo "🎉 Almost done! Now deploy to Vercel:"
echo ""
echo "Option 1: GitHub Integration (Recommended)"
echo "  1. Go to https://vercel.com"
echo "  2. Sign in with GitHub"
echo "  3. Click 'Add New Project'"
echo "  4. Import your GitHub repository"
echo "  5. Add environment variables:"
echo "     - VITE_WHATSAPP_PHONE = your WhatsApp number"
echo "     - VITE_FORMSPREE_ID = your Formspree form ID"
echo "  6. Click 'Deploy'"
echo ""
echo "Option 2: Vercel CLI"
echo "  Run: npx vercel"
echo ""
echo "📖 For detailed instructions, see: VERCEL_DEPLOYMENT.md"
echo ""
