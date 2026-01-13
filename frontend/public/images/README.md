# Image Upload Guide

This folder contains all images for the website. Each subfolder corresponds to a specific page or section.

## Folder Structure

```
images/
├── common/              # Shared assets (logo, icons, backgrounds)
│   ├── logo.png         # Company logo
│   └── og-image.png     # Social media preview image
│
├── home/                # Home page images
│   ├── hero-bg.jpg      # Hero section background (1920x1080 recommended)
│   ├── cta-bg.jpg       # CTA section background image
│   └── achievement-X.jpg # Achievement section images (if needed)
│
├── about/               # About Us page images
│   ├── md-photo.jpg     # Managing Director photo (400x500 recommended)
│   └── about-hero.jpg   # About page hero/background (optional)
│
├── services/            # Services page images
│   ├── commercial.jpg   # Commercial Construction
│   ├── residential.jpg  # Residential Construction  
│   ├── industrial.jpg   # Industrial Construction
│   ├── infrastructure.jpg # Infrastructure Development
│   ├── interior.jpg     # Interior Fit-outs
│   └── renovation.jpg   # Renovation & Maintenance
│
├── projects/            # Project Portfolio images
│   ├── project-1.jpg    # Project images (600x400 recommended)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── ...              # Add more as needed
│
├── team/                # Team member photos
│   ├── member-1.jpg     # Team photos (400x500 recommended)
│   ├── member-2.jpg
│   ├── member-3.jpg
│   └── ...              # Add more as needed
│
├── certifications/      # Certification/License images
│   ├── cert-1.jpg       # Certificate images/logos
│   ├── cert-2.jpg
│   └── ...              # Add more as needed
│
├── clients/             # Client logos
│   ├── client-1.png     # Client logos (PNG with transparency preferred)
│   ├── client-2.png
│   └── ...              # Add more as needed
│
├── gallery/             # Gallery images
│   ├── gallery-1.jpg    # Gallery photos (800x600 recommended)
│   ├── gallery-2.jpg
│   └── ...              # Add more as needed
│
└── testimonials/        # Testimonial author photos
    ├── testimonial-1.jpg # Author photos (400x400 recommended)
    ├── testimonial-2.jpg
    └── ...              # Add more as needed
```

## Image Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive: `office-building-project.jpg` not `img1.jpg`
- Include dimensions in filename if helpful: `hero-bg-1920x1080.jpg`

## Recommended Image Sizes

| Location | Recommended Size | Format |
|----------|-----------------|--------|
| Hero backgrounds | 1920x1080px | JPG |
| Team photos | 400x500px | JPG |
| Project images | 600x400px | JPG |
| Gallery images | 800x600px | JPG |
| Client logos | 200x100px | PNG |
| Testimonial photos | 400x400px | JPG |

## How to Update Images

1. Add your image to the appropriate folder
2. Open `/src/data/mock.js`
3. Update the image path in the relevant section
4. Image paths should be: `/images/[folder]/[filename]`

## Example

To update the MD photo:
1. Add photo to: `/public/images/about/md-photo.jpg`
2. In mock.js, update: `image: '/images/about/md-photo.jpg'`
