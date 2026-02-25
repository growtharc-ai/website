# Growth Arc — Website Project Brief

## Brand Identity
- **Company**: Growth Arc (trading name of NextGen AI Marketing Ltd, NZ 9271119)
- **Domain**: growtharc.ai
- **Tagline**: AI-Powered Marketing That Scales
- **Industry**: AI marketing agency — helping businesses grow using AI tools, automation, lead generation, and data-driven strategy

## Tech Stack
- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Hosting**: Vercel (auto-deploy from GitHub)
- **Font**: Sora (Google Fonts) — weights 400, 500, 600, 700
- **Icons**: Lucide React

## Brand Colours

### Light Backgrounds
- Arc Blue: `#0077EE` — gradient start, primary CTA
- Arc Green: `#00C896` — gradient end, arrow, success states
- Dark Text: `#0F0F1A` — body text, headings

### Dark Backgrounds
- Arc Blue: `#0088FF` — gradient start on dark
- Arc Green: `#00DFAA` — gradient end on dark
- White: `#FFFFFF` — body text, headings on dark
- Navy: `#07080E` — primary dark background

### Supporting
- Light Grey: `#F5F6F8` — card backgrounds
- Border Grey: `#E2E4E9` — borders, dividers
- Body Grey: `#6B7280` — captions, secondary text

### CSS Variables
```css
:root {
  --ga-blue: #0077EE;
  --ga-green: #00C896;
  --ga-blue-dark: #0088FF;
  --ga-green-dark: #00DFAA;
  --ga-navy: #07080E;
  --ga-text: #0F0F1A;
  --ga-grey-bg: #F5F6F8;
  --ga-grey-border: #E2E4E9;
  --ga-grey-text: #6B7280;
}
```

### Gradients
```css
/* Arc gradient (vertical, for logo/icons) */
background: linear-gradient(to top, var(--ga-blue), var(--ga-green));

/* Text gradient (horizontal) */
background: linear-gradient(to right, var(--ga-blue), var(--ga-green));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Hero section background */
background: linear-gradient(160deg, #060710 0%, #0A0F20 100%);

/* CTA button */
background: linear-gradient(135deg, var(--ga-blue), var(--ga-green));
```

## Typography
- **Font**: `'Sora', 'Segoe UI', system-ui, -apple-system, sans-serif`
- **Hero heading**: 700, 56-72px, line-height 1.1, letter-spacing -1.5px
- **H1**: 700, 36-48px, line-height 1.2, letter-spacing -1px
- **H2**: 600, 28-32px, line-height 1.3, letter-spacing -0.5px
- **H3**: 600, 20-24px, line-height 1.4
- **Body**: 400, 16-18px, line-height 1.6
- **Small/Caption**: 400, 13-14px, line-height 1.5
- **Button**: 600, 14-16px, letter-spacing 0.02em
- **Nav**: 500, 14-16px

## Design Direction
- **Theme**: Dark-first. Navy (#07080E) backgrounds with blue-to-green gradient accents
- **Aesthetic**: Modern tech — clean, premium, confident. NOT generic AI slop
- **Inspiration**: The glow hero logo variant — ambient glow effects, gradient text, dark surfaces
- **Differentiation**: The tapered arc motif should appear as a subtle design element throughout (section dividers, background patterns, icon accents)
- **Motion**: Smooth scroll-triggered reveals, subtle parallax, gradient hover effects on cards
- **Layout**: Generous whitespace, asymmetric hero, grid-breaking feature sections

## Logo
The logo SVG files are in `/public/logo/`. Key variants:
- `logo-primary-dark.svg` — for dark nav/footer (white text + gradient arc)
- `logo-glow-hero.svg` — for hero section (with glow effects)
- `favicon.svg` — gradient background + white icon
- `icon-gradient.svg` — standalone icon mark

The logo is "Growth Arc" — two words, capital G and A, with a tapered arc + upward arrow.

## Site Structure

### Pages (Phase 1 — Launch)
```
/                   — Homepage (single page, multiple sections)
/services           — Detailed services page (future)
/about              — About page (future)
/contact            — Contact page (future)
/blog               — Blog index (future)
```

### Homepage Sections (in order)
1. **Navigation** — Sticky, glassmorphism on scroll, logo left, links right, CTA button
2. **Hero** — Full viewport, dark gradient bg, glow logo, bold headline, sub-headline, dual CTA buttons, animated stats
3. **Trusted By / Social Proof** — Logo ticker strip (if clients exist) or "What We Do" intro
4. **Services** — 6 service cards in a grid: AI Lead Generation, Traffic & SEO, Sales Automation, Appointment Booking, Ads Management, Analytics & Reporting
5. **How It Works** — 3-4 step process: Audit → Strategy → Build → Scale
6. **Results** — Animated counter metrics or case study highlights
7. **About / Why Growth Arc** — Brief company story, differentiators, AI-first approach
8. **CTA Section** — High-impact conversion banner with gradient background
9. **Contact / Lead Capture** — Form with name, email, company, service interest, message
10. **Footer** — Logo, nav links, social links, legal, copyright

### Navigation Links
- Services
- How It Works
- About
- Contact (CTA button style)

### Social Links
- Instagram: @growtharc.ai
- X: @growtharc_ai
- LinkedIn: /company/growtharc
- YouTube: @GrowthArc-Ai
- GitHub: growtharc-ai

## Services to Feature
1. **AI Lead Generation** — Intelligent prospecting, automated outreach, lead scoring
2. **Traffic & SEO** — Content strategy, technical SEO, organic growth at scale
3. **Sales Automation** — CRM setup, pipeline automation, follow-up sequences
4. **Smart Appointment Booking** — AI-powered scheduling, qualification, reminders
5. **Ads Management** — Google, Meta, LinkedIn campaigns with AI optimisation
6. **Analytics & Reporting** — Real-time dashboards, attribution, ROI tracking

## SEO
- **Title**: Growth Arc — AI-Powered Marketing That Scales
- **Description**: Growth Arc helps businesses grow faster with AI-driven lead generation, SEO, sales automation, and marketing strategy. Based in New Zealand, serving globally.
- **OG Image**: `/og-image-1200x630.png` (already generated in brand assets)

## Forms
- Contact form should be a simple HTML form initially
- Future: Connect to HubSpot Forms API
- Fields: Name, Email, Company (optional), Service Interest (dropdown), Message

## Accessibility
- Semantic HTML throughout
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigable
- Colour contrast meets WCAG AA

## Performance
- Target: 90+ Lighthouse score
- Lazy load images below fold
- Use next/image for all images
- Preload Sora font
- Minimal client-side JavaScript

## Architecture Rules

### Server Components vs Client Components
- **Default everything to Server Components** — pages, layouts, and most UI
- **Only use `"use client"` for**: Framer Motion animations, interactive forms, mobile menu toggle, any component that uses browser APIs or React hooks
- **Create a `/components/motion/` folder** — every file inside is explicitly `"use client"`. This isolates animation from the server component tree
- **Never import from `framer-motion` in a Server Component** — always wrap animated elements in a dedicated client component

### Font Loading
- **Use `next/font/google`** to load Sora — NOT a `<link>` tag
- This self-hosts the font, eliminates layout shift (CLS), and avoids privacy issues
```tsx
// src/app/layout.tsx
import { Sora } from 'next/font/google'
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})
```

### Tailwind CSS v4 Specifics
- Use Tailwind v4 conventions — NOT v3 examples from the internet
- Config uses CSS-based configuration, not `tailwind.config.js` (v4 default)
- Be aware that some plugins and older snippets assume v3

### Icon Imports (Lucide)
- Always use direct named imports for tree-shaking:
```tsx
// ✅ Correct
import { ArrowRight, BarChart3, Zap } from 'lucide-react'
// ❌ Wrong — imports entire icon set
import * as Icons from 'lucide-react'
```

### Performance
- Use `next/image` for all images (automatic optimisation)
- Lazy load everything below the fold
- Keep Framer Motion to "animated islands" — don't make entire pages client-rendered
- Add `@next/bundle-analyzer` early to catch bundle bloat
- Target: 90+ Lighthouse on mobile

### Static Site Optimisation
- This is a **static marketing site** for launch — no dynamic data, no CMS yet
- All pages can be fully statically generated at build time
- No need for revalidation, cache headers, or dynamic route config in Phase 1
- Blog/CMS and HubSpot API integration come later (Phase B/C)

## Third-Party Integrations

### Cloudflare (DNS Only)
- Use Cloudflare for **DNS only** (grey cloud icon, NOT orange/proxied)
- Do NOT enable Cloudflare proxy — Vercel has its own CDN, SSL, and edge network
- Double-CDN (Cloudflare proxy + Vercel) causes caching conflicts and breaks Vercel bot protection
- Vercel handles DDoS, SSL, and CDN natively — no need to duplicate

### HubSpot CRM (Phase B — Post-Launch)
- Tracking: Create a `"use client"` HubSpot provider component that:
  - Loads the HubSpot tracking script
  - Listens for route changes via `usePathname()` from `next/navigation`
  - Fires `_hsq.push(['trackPageView'])` on each client-side navigation
- Forms: Do NOT embed HubSpot's form widget (heavy, hard to style)
  - Build custom form components with our brand styling
  - Submit to HubSpot Forms API via Next.js Server Action or API route
  - This keeps the frontend fast and on-brand while feeding leads into HubSpot

### Semrush (External — No Code Integration)
- Connect growtharc.ai in Semrush dashboard for site audits and position tracking
- No in-app integration needed for Phase 1
- Our Server Component-first architecture means all content is server-rendered HTML — excellent for SEO crawlers

## Git Branching
- `main` — production (auto-deploys to growtharc.ai)
- `dev` — staging (auto-deploys to dev.growtharc.ai)
- Feature branches from `dev`, merge via PR
