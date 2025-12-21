# PPA Website — Project Documentation

## Overview
**People Performance Advisors** website for Matthew Hodgson, an independent CEO advisor based in Brisbane, Australia. The site positions Matthew as a premium executive advisor helping organisations "clear the path" by removing conditions that cause capable people to misfire.

**Live URL**: Deployed on Replit (check deployment status)
**Repository**: https://github.com/baz-10/ppa-website

---

## Tech Stack
- **Framework**: Next.js 16.1.0 (App Router)
- **Styling**: Tailwind CSS 4.x with custom CSS variables
- **Fonts**: Cormorant Garamond (display), DM Sans (body)
- **Images**: Next.js Image component with sharp optimization
- **Deployment**: Replit

---

## Project Structure
```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx    # About Matthew
│   ├── advisory/page.tsx # Services
│   ├── contact/page.tsx  # Contact form
│   ├── layout.tsx        # Root layout with nav/footer
│   └── globals.css       # All custom styles + CSS variables
├── components/
│   ├── Navigation.tsx    # Responsive nav with mobile menu
│   └── Footer.tsx        # Site footer
public/
└── images/               # Optimized photos of Matthew + logo
```

---

## Aesthetic Brief

### Brand Positioning
Premium executive advisory — sophisticated, calm, authoritative. Communicates trust and clarity without corporate sterility.

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#D4A853` | Accent, CTAs hover, highlights |
| Gold Light | `#E8C97A` | Gradients, subtle accents |
| Charcoal | `#1A1A1A` | Primary text, buttons, headers |
| Slate | `#4A5568` | Body text, secondary content |
| Grey Light | `#9CA3AF` | Placeholders, borders |
| Cream | `#FAFAF8` | Section backgrounds |
| White | `#FFFFFF` | Primary background |

### Typography
- **Display**: Cormorant Garamond (elegant serif, weight 400)
- **Body**: DM Sans (clean geometric sans-serif)

### Design Elements
- Gold accent lines (2px with gradient)
- Subtle grain overlay (3% opacity)
- Generous whitespace (6-10rem section padding)
- Scroll animations (fade-in-up, 0.8s ease-out)
- Button hover: gold sweep effect

### Photography
Professional portraits in black attire against muted blue-grey backgrounds. Both color and B&W versions available.

---

## Design References
Sites analyzed for inspiration:
1. **Phuel.com.au** — Gold accent approach, trust-building layout
2. **OD Consulting** — Clean consulting aesthetic
3. **People Measures** — Evidence-based credibility + modern design

---

## Session Log

### Dec 21, 2025
**Image Cropping Fix**
- Fixed the "Most organisations don't struggle..." section image
- Problem: Matthew's face was being cropped out of landscape image in portrait container
- Solution: Changed `object-cover` to `object-cover object-[left_20%]` and aspect ratio from `3:4` to `2:3`
- Commit: `63a5e86` - "Fix image cropping on Value Proposition section"

**Mobile Responsiveness Verified**
- Tested at iPhone (375px) and iPad (768px) viewports
- Hamburger menu works on mobile
- Content stacks and scales appropriately
- All sections readable and functional

---

## Pending / Future Considerations
- [ ] Review Replit deployment status
- [ ] Gather client feedback on overall design
- [ ] Consider adding more testimonials if available
- [ ] SEO metadata review
- [ ] Analytics integration (if needed)

---

## Commands
```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start
```

---

## Contact
**Client**: Matthew Hodgson
**Email**: matthew@peopleperformanceadvisors.com.au
**Phone**: +61 401 875 881
