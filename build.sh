#!/bin/bash
# Build script for Render deployment
echo "Starting build process..."
cd frontend
npm install
npm run build
echo "Build completed successfully!"