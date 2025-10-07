#!/bin/bash
# Icon Setup Helper Script
# This script helps you download and convert icons for your website

echo "=========================================="
echo "Website Icon Setup Helper"
echo "=========================================="
echo ""

# Check if required tools are installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo "⚠️  ImageMagick not found. Installing..."
    echo "For Ubuntu/Debian:"
    echo "  sudo apt-get install imagemagick"
    echo ""
    echo "For macOS:"
    echo "  brew install imagemagick"
    echo ""
    exit 1
fi

echo "Converting SVG icons to PNG format..."
echo ""

# Function to convert SVG to PNG
convert_icon() {
    local svg_file=$1
    local png_file="${svg_file%.svg}.png"
    
    if [ -f "$svg_file" ]; then
        echo "Converting $svg_file -> $png_file"
        if command -v magick &> /dev/null; then
            magick "$svg_file" -resize 512x512 -background none "$png_file"
        else
            convert "$svg_file" -resize 512x512 -background none "$png_file"
        fi
    fi
}

# Convert existing SVG files
cd "$(dirname "$0")"

for svg in *.svg; do
    if [ -f "$svg" ]; then
        convert_icon "$svg"
    fi
done

echo ""
echo "=========================================="
echo "✅ Conversion complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Place your custom PNG icons in this directory"
echo "2. Required icons:"
echo "   - github.png"
echo "   - documentation.png"
echo "   - demo.png"
echo "   - email.png"
echo "   - phone.png"
echo "   - linkedin.png"
echo "   - download.png"
echo "   - print.png"
echo ""
echo "Icon resources:"
echo "  • Feather Icons: https://feathericons.com/"
echo "  • Heroicons: https://heroicons.com/"
echo "  • Lucide: https://lucide.dev/"
echo ""
