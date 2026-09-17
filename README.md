# Web-Development-WEDE5020-PART-2# Pre_Luxx Boutique — Website Project

## Project Title
Pre_Luxx Boutique Website — WEDE5020 Portfolio of Evidence (Part 1 & Part 2)

## Student Information
- **Full Name:** [MAKI PRECIOUS TSOTETSI]
- **Student Number:** [ST10520801]
- **Group:** [03]
- **Module:** Web Development WEDE5020 

## Project Overview
Pre_Luxx Boutique is a hypothetical retail store founded in 2016 by Precious
Tsotetsi, a fashion design graduate of the Cape Peninsula University of
Technology (CPUT) and former stylist. Located on Minner Street in Pretoria
Central, Pre_Luxx specialises in elegant, formal occasion wear — evening
gowns, tailored suits, bridesmaid dresses, and made-to-measure pieces for
weddings, matric dances, and galas.

This repository contains the Part 1 and Part 2 deliverables of the
WEDE5020 Portfolio of Evidence: the project proposal, researched content,
and the HTML/CSS/JS structure of the Pre_Luxx Boutique website, including
CSS styling and responsive design.

## Website Goals and Objectives
The website's primary goal is to let clients browse the collection and
book a fitting online before visiting in person — essential for a
boutique built around personalised, appointment-based service.

- Increase fitting and consultation bookings ahead of key seasons (matric
  dances, wedding season).
- Showcase the full collection with editorial-quality photography.
- Generate enquiries for made-to-measure and alteration services.

**Key Performance Indicators (KPIs):**
- Number of fitting/consultation bookings submitted per month.
- Average time spent browsing the collection pages.
- Newsletter sign-ups ahead of matric and wedding season.
- Growth in repeat visits during peak booking periods.

## Key Features and Functionality
- **Homepage** — hero section, "Book a Fitting" call to action, and a
  preview of the current collection.
- **About Us** — Nqobile Tsotetsi's story, the boutique's mission and
  vision, and the atelier team.
- **Collection (Products)** — categorised listings: Evening Gowns,
  Tailored Suits, Bridal & Wedding, and Accessories.
- **Enquiry** — a fitting/consultation booking form with an occasion
  selector, event date field, and made-to-measure request option.
- **Contact** — two locations (Minner Street boutique and Midrand
  showroom), embedded maps, and a general contact form.
- Responsive, mobile-first layout with a working navigation menu across
  all pages.
- Front-end form validation with success/error feedback (`js/main.js`).

## Timeline and Milestones
| Week | Milestone |
|------|-----------|
| 1–2  | Finalise sitemap, wireframes, and gather/organise researched content |
| 3–4  | Build HTML structure and content for all five pages |
| 5    | Apply CSS styling in line with the design and branding |
| 6    | Add JavaScript interactivity and conduct cross-browser testing |
| 7    | Final review, proofreading, and submission |

## Part 2 Details
This submission covers **Part 2: Designing the Visuals — CSS Styling and
Responsive Design**.

### CSS styling implemented
- **External stylesheet**: a single `css/style.css`, linked identically
  from all five pages.
- **CSS reset**: added at the top of the stylesheet so the site starts
  from a consistent baseline across browsers.
- **Base styles**: default font family (Jost for body, Cormorant
  Garamond for headings), font size, colour scheme (via CSS custom
  properties in `:root`), and consistent spacing.
- **Typography**: `font-family`, `font-size` (fluid via `clamp()`),
  `font-weight`, `line-height`, and `letter-spacing` applied throughout.
- **Layout structure**: CSS Grid and Flexbox used for the card grid,
  hero, split sections, footer, and form.
- **Visual styles and interactivity**: `color`, `background-color`,
  `border`, and `box-shadow` used for cards, buttons, and form fields;
  interactive states (`:hover`, `:focus-visible`, `:active`) added
  across navigation links, buttons, product cards, form fields, and
  location cards.

### Responsive design implemented
- **Breakpoints**: media queries at 900px, 820px, 760px, 720px, and
  620px, covering desktop, tablet, and mobile layouts.
- **Relative units**: layout spacing (padding, margin, gap, max-width)
  uses `rem` rather than fixed pixels.
- **Testing and iteration**: the site was tested at desktop (1440px),
  tablet (834px), and mobile (390px) widths using browser screenshots
  for every page (see Screenshot Evidence below). This testing process
  found and led to the fix of a hero-section bug where the image and
  text stayed side-by-side below 820px instead of stacking.

### Screenshot Evidence
Screenshots for every page at desktop, tablet, and mobile widths are
included in the `screenshots/` folder of this repository:

| Page | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Homepage | `picture/index-desktop.png` | `screenshots/index-tablet.png` | `screenshots/index-mobile.png` |
| About Us | `picture/about-desktop.png` | `screenshots/about-tablet.png` | `screenshots/about-mobile.png` |
| Collection | `picture/products-desktop.png` | `screenshots/products-tablet.png` | `screenshots/products-mobile.png` |
| Book a Fitting | `picture/enquiry-desktop.png` | `screenshots/enquiry-tablet.png` | `screenshots/enquiry-mobile.png` |
| Contact | `picture/contact-desktop.png` | `screenshots/contact-tablet.png` | `screenshots/contact-mobile.png` |

Two additional screenshots document interactive states:
- `screenshots/card-hover.png` — product card hover state
- `screenshots/nav-open-mobile.png` — mobile navigation menu open



## Folder Structure
```
pre_luxx-boutique/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero/
│   └── products/
├── screenshots/
│   ├── index-desktop.png / index-tablet.png / index-mobile.png
│   ├── about-desktop.png / about-tablet.png / about-mobile.png
│   ├── products-desktop.png / products-tablet.png / products-mobile.png
│   ├── enquiry-desktop.png / enquiry-tablet.png / enquiry-mobile.png
│   ├── contact-desktop.png / contact-tablet.png / contact-mobile.png
│   ├── card-hover.png
│   └── nav-open-mobile.png
└── README.md
```

## Sitemap
```
                    Pre_Luxx Boutique
                    Homepage – index.html
                            │
        ┌───────────┬───────────┬───────────┐
        │            │            │            │
   About Us      Collection    Enquiry      Contact
  about.html   products.html  enquiry.html  contact.html
```
All four pages are reachable from the homepage via the main navigation
menu, and link back to each other consistently across the site.

## Changelog
| Date | Change |
|------|--------|
| [Insert Date] | Initial project proposal drafted and submitted for approval |
| [Insert Date] | Retail Store approved as target organisation category |
| [Insert Date] | Sitemap and folder structure finalised |
| [Insert Date] | Initial HTML structure built for all five pages (as Aurelle Boutique) |
| [Insert Date] | CSS styling applied (colour scheme, typography, layout) |
| [Insert Date] | JavaScript added (navigation toggle, form validation) |
| [Insert Date] | **Part 2**: CSS reset added for cross-browser consistency |
| [Insert Date] | **Part 2**: Interactive states audited and expanded (hover, focus, active) across nav, buttons, cards, and forms |
| [Insert Date] | **Part 2**: Layout spacing converted from px to rem throughout the stylesheet |
| [Insert Date] | **Part 2**: Bug fix — hero section had no breakpoint below 820px, causing the image/text to stay side-by-side on tablet and mobile instead of stacking; added missing media query |
| [Insert Date] | Organisation rebranded from Aurelle Boutique to Pre_Luxx Boutique (Pretoria) |
| [Insert Date] | Real photography added to replace placeholder images across all pages |
| [Insert Date] | **Bug fix**: corrected broken/duplicated Google Maps iframe markup on the Contact page that was rendering visible garbled text |
| [Insert Date] | **Bug fix**: resolved founder-name inconsistency (previously mixed "Nadia Petersen" and "Nqobile Tsotetsi" across pages) |
| [Insert Date] | **Bug fix**: corrected leftover "Preshh"/"Mineer" typos and outdated "Western Cape"/"Cape Town" location references left over from rebranding |
| [Insert Date] | Replaced remaining placeholder "Our Story" image with real storefront photography |
| [Insert Date] | Captured and added screenshot evidence for all five pages at desktop, tablet, and mobile widths, plus hover and mobile-nav states |
| [Insert Date] | Identified four product images sourced from iStock/Getty without a licence; flagged in README for replacement before final submission |
| [Insert Date] | README updated with full Part 2 section, changelog entries, known issues, and updated references |

## References
- Baymard Institute (2024) *E-commerce UX best practices for fashion
  retail*. Available at: https://baymard.com (Accessed: 9 August 2026).
- Google (2023) *Think with Google: Mobile-first design principles*.
  Available at: https://www.thinkwithgoogle.com (Accessed: 9 August 2026).
- Western Cape Government (2023) *Small business support and resources*.
  Available at: https://www.westerncape.gov.za (Accessed: 9 August 2026).
- Google Fonts (2026) *Cormorant Garamond* and *Jost*. Available at:
  https://fonts.google.com (Accessed: 9 August 2026).
- Josh W. Comeau (2023) *A Modern CSS Reset*. Available at:
  https://www.joshwcomeau.com/css/custom-css-reset/ (Accessed: 16
  September 2026).
- MDN Web Docs (2024) *Using media queries*. Available at:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
  (Accessed: 16 September 2026).
- *Note: product and team photography sources still need to be
  individually credited here once the flagged iStock/Getty images
  (see Known Outstanding Issues) are replaced with properly licensed
  alternatives.*

---
*This README will be updated throughout the project as Part 3 is added.*
