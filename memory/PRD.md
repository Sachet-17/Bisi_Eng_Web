# BISI Engineering Website - Product Requirements Document

## Project Overview
Business website for BISI Engineering, a mechanical contracting company based in Odisha, India, specializing in industrial construction and boiler services since 2004.

## Original Problem Statement
Create a business website based on a provided PDF document for BISI Engineering. The website should showcase the company's services, projects, team, certifications, clients, and provide contact information. All images and content were extracted/generated based on the PDF.

## Tech Stack
- **Frontend:** React 18 with React Router
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Data:** Static mock data (no backend)

## Brand Colors
- **Primary Green:** #22C55E (accent, CTAs, highlights)
- **Dark Green:** #16A34A (hover states)
- **Blue:** #3B82F6 (secondary accent)
- **Deep Blue:** #1E3A5F (headers, dark sections)
- **Navy:** #1a2744 (footer, hero backgrounds)

## Pages Implemented
1. **Home** - Hero with industrial background, stats, achievements, CTA
2. **About Us** - MD message with photo, capabilities, policies, org structure
3. **Services** - 6 detailed services with feature images
4. **Projects** - 9 projects portfolio with filtering and images
5. **Our Team** - 8 leadership team members with photos
6. **Certifications** - ISO and IBR certifications
7. **Clients** - Client categories and names
8. **Gallery** - 12 industrial images with lightbox
9. **Testimonials** - Client testimonials with ratings
10. **Contact** - Contact form and company info

## Images Implemented
Images on Home, Services, and Projects pages:
- **Logo:** `/images/bisi-logo.png` - Official BISI Engineering logo (user-provided)
- **Home:** Hero background, CTA background (industrial power plant)
- **Services:** 6 service images (erection, boiler, maintenance, pipeline, commissioning, revamping)
- **Projects:** 9 project images

**Awaiting user images (showing placeholders):**
- Gallery - `/public/images/gallery/`
- Team - `/public/images/team/`
- About (MD photo) - `/public/images/about/`
- Testimonials - `/public/images/testimonials/`
- Certifications - `/public/images/certifications/`
- Clients - `/public/images/clients/`

## Key Features
- Multi-page navigation with dropdown menus
- **About Us sub-navigation** with hash links to sections (MD Message, Capabilities, Policy, Structure)
- Page transition animations
- Scroll-reveal animations (content visible on load, smooth animations on scroll)
- Interactive hover effects
- Responsive design (mobile hamburger menu)
- Category filtering (Projects, Gallery)
- Lightbox for gallery images
- Contact form (frontend only)
- SafeImage component for graceful image fallbacks

## File Structure
```
/app/frontend/
├── public/images/
│   ├── bisi-logo.png
│   ├── home/ (hero-bg.jpg, cta-bg.jpg)
│   ├── about/ (md-photo.jpg)
│   ├── services/ (6 service images)
│   ├── projects/ (9 project images)
│   ├── gallery/ (12 gallery images)
│   └── team/ (8 team photos)
├── src/
│   ├── components/
│   │   ├── animations/
│   │   ├── common/ (SafeImage)
│   │   ├── ui/ (Shadcn)
│   │   ├── Navbar.jsx (uses logo image)
│   │   └── Footer.jsx (uses logo image)
│   ├── data/mock.js
│   ├── pages/ (10 pages)
│   └── index.css
```

## What's Been Implemented (December 2024)
- [x] Multi-page structure with React Router
- [x] Complete navigation with dropdown support
- [x] All 10 pages fully designed and functional
- [x] Content populated from PDF (mock.js)
- [x] BISI Engineering branding (logo, colors)
- [x] Color scheme: Green (#22C55E) brand colors
- [x] Framer Motion animations
- [x] Responsive mobile design
- [x] Gallery with lightbox
- [x] Project filtering
- [x] Contact form UI
- [x] **All images added** (logo, hero, services, projects, gallery, team, MD photo)

## Data Sources
All content is mocked in `/app/frontend/src/data/mock.js`:
- Company information from PDF
- Services descriptions
- Project portfolio (9 major projects)
- Team members (8 leadership)
- Certifications (ISO 9001:2015, ISO 45001:2018, IBR licenses)
- Client list (27+ clients across 5 categories)
- Testimonials
- Contact details

## Future Enhancements (Backlog)
- [ ] **P1:** Replace stock team photos with actual team member photos when provided
- [ ] **P2:** Backend for contact form submissions
- [ ] **P2:** Content Management System (CMS)
- [ ] **P3:** SEO optimization
- [ ] **P3:** Google Maps integration for contact page

## Notes
- **MOCKED:** All data is static, no backend APIs
- Images are AI-generated and from Unsplash (can be replaced with actual photos)
- SafeImage component handles missing images gracefully
