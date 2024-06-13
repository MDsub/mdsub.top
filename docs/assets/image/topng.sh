#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v magick &> /dev/null
then
    echo "ImageMagick could not be found. Please install it using 'brew install imagemagick'."
    exit
fi

# Convert all webp files to optimized png
for file in *.webp; do
    if [ -f "$file" ]; then
        output="${file%.*}.png"
        magick convert "$file" -strip -interlace Plane -sampling-factor 4:2:0 -quality 85 "$output"
        echo "Converted and optimized $file to $output"
    fi
done

echo "Conversion complete."
