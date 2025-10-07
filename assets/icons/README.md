# Icons Directory

This directory contains PNG icons used throughout the website for project links.

## Required Icons

Place your custom PNG icons in this directory with the following names:

### Project Links (Projects Page)
- **github.png** - For GitHub repository links
- **documentation.png** - For documentation/docs links  
- **demo.png** - For live demo/preview links

### CV Page
- **email.png** - For email contact
- **phone.png** - For phone contact
- **linkedin.png** - For LinkedIn profile
- **download.png** - For download PDF button
- **print.png** - For print CV button

## Icon Specifications

- **Format**: PNG with transparent background
- **Size**: 512x512px or similar (will be scaled to 20x20px)
- **Style**: Monochrome/single color recommended (will be filtered to match accent color)
- **Color**: Any color works, but light/white icons work best with the color filter

## Color Filter Applied

Icons will automatically be filtered to match the site's accent color (#60a5fa - blue).
The CSS applies:
```css
filter: brightness(0) saturate(100%) invert(67%) sepia(60%) saturate(466%) hue-rotate(187deg) brightness(103%) contrast(96%);
```

This converts any icon to the accent blue color.

## Finding Icons

You can find suitable icons from:
- [Feather Icons](https://feathericons.com/)
- [Heroicons](https://heroicons.com/)
- [Iconoir](https://iconoir.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Lucide Icons](https://lucide.dev/)

## Example Placement

```
/assets/icons/
├── github.png
├── documentation.png
└── demo.png
```

## Usage in HTML

```html
<a href="#"><img src="../../assets/icons/github.png" alt="GitHub" /> GitHub</a>
```
