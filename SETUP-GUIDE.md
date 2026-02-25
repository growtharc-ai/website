# Growth Arc — Website Setup Guide
## From Zero to Live on growtharc.ai

---

## Prerequisites

Before you start, make sure you have:

- [ ] **Node.js 18+** installed (`node -v` to check)
- [ ] **Git** installed (`git -v` to check)
- [ ] **Claude Code** installed (`npm install -g @anthropic-ai/claude-code`)
- [ ] **GitHub account** with the `growtharc-ai` organisation
- [ ] **Vercel account** (free tier is fine — vercel.com)
- [ ] Your **GrowthArc-Brand-Assets.zip** downloaded and unzipped

---

## Step 1: Create the GitHub Repository

```bash
# Go to github.com/growtharc-ai and create a new repo called "website"
# Or use the GitHub CLI:
gh repo create growtharc-ai/website --public --description "Growth Arc website — growtharc.ai"
```

## Step 2: Set Up the Project Locally

```bash
# Create the project directory
mkdir growtharc-website
cd growtharc-website

# Initialise git
git init
git remote add origin git@github.com:growtharc-ai/website.git

# Copy the CLAUDE.md file into the root (from the zip you downloaded)
# This is the project brief that Claude Code will read
cp ~/Downloads/CLAUDE.md .

# Create the dev branch
git checkout -b dev
```

## Step 3: Launch Claude Code and Build

```bash
# Start Claude Code in the project directory
claude

# Then give it this prompt:
```

### First Prompt for Claude Code:

```
Read CLAUDE.md for the full project brief. Set up a Next.js 15 project with:
- App Router + TypeScript + Tailwind CSS 4
- Sora font from Google Fonts
- All brand colours as CSS variables and Tailwind config
- Basic project structure with layout, homepage, and components folder

Create the initial project structure but don't build the full homepage yet.
I want to review the foundation first.
```

### After reviewing the foundation, second prompt:

```
Now build the homepage with all sections defined in CLAUDE.md:
1. Sticky nav with glassmorphism effect
2. Dark hero section with the glow logo effect, headline, and dual CTAs
3. Services grid (6 cards)
4. How It Works (4 steps)
5. CTA banner with gradient
6. Contact form
7. Footer with social links

Use Framer Motion for scroll-triggered animations.
Make it dark-first, premium, and bold — not generic AI slop.
Reference the brand guidelines in CLAUDE.md for all colours and typography.
```

## Step 4: Add Logo Assets

```bash
# Create the public/logo directory
mkdir -p public/logo

# Copy SVG files from your brand assets
# (adjust path to where you unzipped the assets)
cp ~/GrowthArc-Brand-Assets/svg/02-logo-primary-dark.svg public/logo/logo-primary-dark.svg
cp ~/GrowthArc-Brand-Assets/svg/07-logo-glow-hero.svg public/logo/logo-glow-hero.svg
cp ~/GrowthArc-Brand-Assets/svg/12-favicon.svg public/logo/favicon.svg
cp ~/GrowthArc-Brand-Assets/svg/08-icon-gradient-dark.svg public/logo/icon-gradient.svg

# Copy favicon PNGs
cp ~/GrowthArc-Brand-Assets/png/favicon-32.png public/favicon-32.png
cp ~/GrowthArc-Brand-Assets/png/favicon-16.png public/favicon-16.png
cp ~/GrowthArc-Brand-Assets/png/apple-touch-icon.png public/apple-touch-icon.png
cp ~/GrowthArc-Brand-Assets/png/og-image-1200x630.png public/og-image.png
```

## Step 5: Test Locally

```bash
npm run dev
# Opens at http://localhost:3000
```

## Step 6: Push to GitHub

```bash
# Commit everything
git add .
git commit -m "feat: initial website build — homepage with all sections"

# Push dev branch
git push -u origin dev

# Create main branch for production
git checkout -b main
git push -u origin main
git checkout dev
```

## Step 7: Connect Vercel

1. Go to **vercel.com/new**
2. Import the `growtharc-ai/website` repository
3. Vercel auto-detects Next.js — accept defaults
4. Click **Deploy**

### Configure Environments:
- **Production branch**: `main` → deploys to `growtharc.ai`
- **Preview branch**: `dev` → deploys to `dev.growtharc.ai`

### Connect Domain:
1. In Vercel dashboard → Project Settings → Domains
2. Add `growtharc.ai`
3. Vercel gives you DNS records to add at your domain registrar
4. Add `dev.growtharc.ai` and point it to the `dev` branch

## Step 8: Agile Workflow Going Forward

```
Feature Branch → dev (staging) → main (production)
```

For each new feature:
```bash
git checkout dev
git checkout -b feature/services-page
# ... make changes with Claude Code ...
git add . && git commit -m "feat: add services page"
git push -u origin feature/services-page
# Create PR from feature/services-page → dev
# Review at preview URL
# Merge to dev → auto-deploys to dev.growtharc.ai
# When ready: merge dev → main → auto-deploys to growtharc.ai
```

---

## Sprint Plan

### Sprint 1 (This Week)
- [x] Project setup (Next.js + Tailwind + TypeScript)
- [ ] Homepage: Navigation + Hero + Footer
- [ ] Logo integration
- [ ] Deploy to Vercel (dev environment)

### Sprint 2 (Next Week)
- [ ] Homepage: Services grid + How It Works
- [ ] Homepage: CTA section + Contact form
- [ ] Framer Motion animations
- [ ] Mobile responsive polish

### Sprint 3
- [ ] SEO: Meta tags, OG image, sitemap, robots.txt
- [ ] Performance: Lighthouse audit, optimise
- [ ] Google Search Console setup
- [ ] Analytics (GA4 or Plausible)

### Sprint 4
- [ ] Final review and polish
- [ ] Merge dev → main (go live!)
- [ ] Add website URL to all social profiles
- [ ] Set up email signatures

---

## Useful Claude Code Prompts

```
# Review and improve a section
"Review the hero section. Check colour contrast, animation smoothness,
and mobile responsiveness. Fix any issues."

# Add Corey Haines marketing skills (Phase B)
"Install marketing skills: npx skills add coreyhaines31/marketingskills"

# SEO audit
"Run an SEO audit on the homepage. Check meta tags, heading hierarchy,
alt text, schema markup, and page speed."

# Accessibility check
"Audit the homepage for WCAG AA accessibility. Check colour contrast,
keyboard navigation, screen reader support, and semantic HTML."
```

---

## File Structure (Expected)

```
growtharc-website/
├── CLAUDE.md                 # Project brief (Claude Code reads this)
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── logo/
│   │   ├── logo-primary-dark.svg
│   │   ├── logo-glow-hero.svg
│   │   ├── favicon.svg
│   │   └── icon-gradient.svg
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (fonts, metadata, analytics)
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Brand CSS variables + Tailwind
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── CTA.tsx
│       ├── ContactForm.tsx
│       └── Footer.tsx
└── .github/
    └── workflows/            # (optional) CI checks
```
