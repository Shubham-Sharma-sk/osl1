#!/bin/bash

# Navigate to the project directory
cd /Users/purusotamsharma/Downloads/WebsiteSpectrum/client/src/components/ui

# Find all TypeScript/TSX files and replace the import path
find . -type f -name "*.tsx" -exec sed -i '' 's/import { cn } from "@\/lib\/utils"/import { cn } from "..\/..\/lib\/utils"/g' {} \;

echo "Import paths fixed successfully!"
