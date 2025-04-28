#!/bin/bash

echo "🔍 Checking for untracked image files in /public/images..."

# Find all image files inside /public/images
image_files=$(find public/images -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.svg" \))

# Flag to detect untracked files
untracked_found=false

for file in $image_files
do
  if ! git ls-files --error-unmatch "$file" > /dev/null 2>&1; then
    echo "❗ Untracked image file: $file"
    untracked_found=true
  fi
done

if [ "$untracked_found" = true ]; then
  echo ""
  echo "⚠️  Some images are NOT tracked by Git!"
  echo "👉 Run 'git add public/images/' to fix."
  exit 1
else
  echo "✅ All images are tracked by Git!"
fi
