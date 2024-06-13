#!/bin/bash

# Iterate over all .md files in the current directory
for file in *.md; do
    if [ -f "$file" ]; then
        # Use sed to add /assets prefix to image links
        sed -i '' 's|\(/icon/\)|/assets\1|g' "$file"
        sed -i '' 's|\(/image/\)|/assets\1|g' "$file"
        echo "Updated $file"
    fi
done

echo "All image links have been updated with /assets prefix in Markdown files."
