## Goal
Build a web app that showcases multiple WordPress‑powered templates with modern front‑end integration, performance optimization, and analytics.

## Integration
- WordPress REST API

## Tools
- Figma  
- SCSS  
- Git/GitHub  
- Lighthouse & GTmetrix  
- GA4, GTM, HotJar  
- Core Web Vitals  
- GitHub Copilot  

## Tech Stack  
- Languages: HTML5, CSS3, JavaScript (ES6+)  
- Frameworks: Next.js (React) + SCSS  
- CMS: WordPress REST API  
- Deployment: Vercel  
- Database: Neon  

## Templates
- SaaS  
- Portfolio  
- E‑commerce  
- Blog  
- Event  
- Non‑profit  

## Skill Areas
- Design & UI/UX  
- Performance optimization  
- CMS integration  
- Analytics & tracking  
- Accessibility (WCAG)  
- SEO & structured data  
- AI‑assisted development  


## Phases
- **Phase 1:** Environment setup + Figma + SCSS [complete]
- **Phase 2:** WordPress + CMS integration → Deploy [complete]
- **Phase 2.5:** Design layouts. [complete]
- **Phase 3:** Performance audits (Lighthouse, GTmetrix) + cross‑browser testing → E‑commerce page  
- **Phase 4:** Analytics (GA4, GTM, HotJar) → Event landing page  
- **Phase 5:** Accessibility (WCAG, ARIA) + SEO (Core Web Vitals, meta tags) → Non‑profit page  
- **Phase 6:** AI tools (GitHub Copilot, AI checkers) [complete]


## Progress  
### Phase 1: Environment & Setup  
- Installed **WSL Ubuntu 24** and migrated GitHub tracking.  
- Initialized a new Git repo and linked the local project folder.  
- Selected the **Next.js stack** (JavaScript, ESLint, React Compiler, SCSS, App Router, `@/` alias).  
- Bootstrapped the project with `npx create-next-app@latest`.  
- **Deliverable:** Clean Next.js boilerplate repository.  

### Phase 1: Styling & Components  
- Leveraged prior CSS experience to transition into **SCSS** (this project uses SCSS exclusively).  
- Installed **Sass** for **SCSS** support. Ran `npm audit`, identified a critical Next.js vulnerability, and upgraded to `next@16.0.7` to resolve it.  
- Created Navigation Bar and Footer component with placeholder links, tested SCSS styling features.  

### Phase 1: Design Workflow [complete]
- Installed **Figma** and began learning design fundamentals.  
- Designed the **global layout** (header, footer, main content) in Figma.  
- Refined designs using Figma Make.  
- Converted Figma Tailwind CSS output into **SCSS**, styled the app using both Figma code generation and GitHub Copilot AI assistance.  

- Added nav bar links for all planned pages (Portfolio, Blog, E‑Commerce, Event, Non‑Profit, SaaS).  
- Confirmed **routing** works correctly, with each link opening a placeholder component page.  
- Followed best practices for folder naming conventions in the App Router structure.  

### Phase 2: WordPress + CMS Integration [complete]
- Integrate **WordPress** API by creating WordPress account, publishing website and targeting API endpoint. 
- Used CoPilot to help understand initial code and tested until app is live updating with every WordPress post. (**Blog section** in the app)
- Made a reusable loading-bar component to count down WordPress API refresh interval. (60 seconds)

- **Deployed** main branch with Vercel, created a development branch for future work.

### Phase 2.5: Design Layouts
- Portfolio, E-commerce, Blog, Event
- Added default style reset to fix the navigation bar: border-box, body-padding-top:60px, and margin-0.
- Restyled the NavBar using free **animation** buttons for a smoother layout.  
- Added free **Tailwind** styled cards to the WordPress page.  
- Completed the WordPress page design with new animations from **UIVerse**.  
- Converted Tailwind components into **SCSS modules** to align with project standards.  
- Implemented **animated placeholders** across all pages for a dynamic user experience.  
