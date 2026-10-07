#!/bin/bash

# Portfolio Website Quick Start Script
# This script will help you set up and run your portfolio website

echo "🎨 Vivek Koundal - Portfolio Website Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the portfolio-website directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Check for profile photo
if [ ! -f "public/profile.jpg" ]; then
    echo "⚠️  WARNING: Profile photo not found!"
    echo "Please add your profile photo to: public/profile.jpg"
    echo ""
fi

# Start development server
echo "🚀 Starting development server..."
echo "Your portfolio will open at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
