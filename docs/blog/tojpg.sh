#!/bin/bash

# Iterate over all .md files in the current directory
for file in *.md; do
    if [ -f "$file" ]; then
        # Use sed to replace .webp with .jpg
        sed -i '' 's/\.webp/\.jpg/g' "$file"
        echo "Updated $file"
    fi
done

echo "All .webp links have been replaced with .jpg in Markdown files."
