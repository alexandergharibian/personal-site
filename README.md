# Alexander Gharibian — Personal Website

A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production-ready application
- `pnpm start` - Start the production server (after building)
- `pnpm lint` - Run ESLint to check code quality
- `pnpm clean` - Clear the Next.js cache (removes `.next` directory)

## Site Layout

The site is a single-page application with the following structure:

```
┌─────────────────────────────────────────┐
│           Header (Sticky)                │
│  [Logo]  [Experience] [Projects] [About]│
├─────────────────────────────────────────┤
│                                         │
│           Hero Section                  │
│   - Name (Large Heading)                │
│   - Specialty/Title                     │
│   - Summary/Description                 │
│   - "Get in Touch" CTA Button           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│      Work Experience Section            │
│   - Capital One (Current)               │
│   - Capital One (Previous)              │
│   - Red Hat (Internship)                │
│   - Red Hat (Internship)                │
│   Each entry includes:                  │
│     • Company name                      │
│     • Position title                    │
│     • Date range                        │
│     • Bulleted achievements             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│        Featured Projects Section        │
│   - Sticky cards with project info      │
│   - Project name & description          │
│   - Preview/Source links                │
│   - Project screenshots                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          About Me Section               │
│   - Personal description                │
│   - Profile image (rotated frame)       │
│                                         │
├─────────────────────────────────────────┤
│           Footer                        │
│   - Social links (LinkedIn, GitHub)     │
│   - Copyright notice                    │
└─────────────────────────────────────────┘
```

## Component Structure

### Layout Components

- **`app/layout.tsx`** - Root layout component
  - Configures fonts (Be Vietnam Pro, Gabarito)
  - Sets up global metadata
  - Applies global styles and scroll behavior

- **`app/page.tsx`** - Main page component
  - Orchestrates all sections
  - Imports and renders: Header, Hero, Experience, Projects, About, Footer

### Section Components

- **`Header.tsx`** - Sticky navigation header
  - Logo link (circular profile image)
  - Navigation menu (Experience, Projects, About)
  - Mobile-responsive hamburger menu
  - Active section highlighting via Intersection Observer
  - Smooth scroll animations

- **`Hero.tsx`** - Hero/landing section
  - Large name display (serif font)
  - Specialty/title (colored text)
  - Summary paragraph
  - "Get in Touch" email CTA button

- **`Experience.tsx`** - Work experience timeline
  - Displays employment history
  - Company names and positions
  - Date ranges
  - Bulleted achievements (uses checkmark icons)
  - Supports both array and string summaries

- **`Projects.tsx`** - Featured projects showcase
  - Sticky cards with staggered positioning
  - Project name, description, and image
  - Preview and Source code links (external icons)
  - Responsive grid layout

- **`About.tsx`** - About section
  - Personal biography text
  - Rotated profile image in white frame
  - Responsive flex layout

- **`Footer.tsx`** - Site footer
  - Social media links (LinkedIn, GitHub)
  - Copyright notice with current year
  - Attribution

- **`Section.tsx`** - Reusable section wrapper
  - Provides consistent section spacing
  - Section heading styles
  - ID anchor for navigation

### Utility Components

- **`MenuIcon.tsx`** - Mobile menu icon component

## Configuration

All site content and configuration is managed in `config/index.ts`:

### Site Configuration (`SITE_CONFIG`)
- Site metadata (title, description, author)
- Site logo path
- Navigation links
- Social media links
- Canonical URL

### Site Content (`SITE_CONTENT`)
- **Hero**: Name, specialty, summary, email
- **Experience**: Array of work experience entries
  - Company, position, dates, summary (array or string)
- **Projects**: Array of featured projects
  - Name, summary, image, preview/source links
- **About**: Personal description and profile image

## File Structure

```
personal-site/
├── app/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MenuIcon.tsx
│   │   ├── Projects.tsx
│   │   └── Section.tsx
│   ├── favicon.ico
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── config/
│   └── index.ts             # Site configuration & content
├── public/                  # Static assets
│   ├── alex-big.jpeg        # Large profile image
│   ├── alex-small.jpeg      # Small logo image
│   ├── check.svg            # Checkmark icon
│   ├── external.svg         # External link icon
│   └── [project images]     # Project screenshots
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Technologies

- **Framework**: [Next.js](https://nextjs.org) 16.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: 
  - Be Vietnam Pro (sans-serif)
  - Gabarito (serif)
- **Image Optimization**: Next.js Image component

## Features

- **Single-page application** with smooth scrolling navigation
- **Responsive design** that works on mobile, tablet, and desktop
- **Sticky header** with active section highlighting
- **Mobile hamburger menu** for navigation
- **Optimized images** using Next.js Image component
- **Scroll-based animations** using CSS animation timeline
- **Type-safe** with TypeScript interfaces
- **SEO-friendly** with proper metadata configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### GitHub Pages

This site is configured for static export and deployment to GitHub Pages at `alexandergharibian.github.io`.

#### Initial Setup

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Configuration:**
   - The site is configured for the root domain: `alexandergharibian.github.io`
   - Your site will be available at: `https://alexandergharibian.github.io/`
   - The `basePath` is set to `""` (empty) in `next.config.ts` for root domain deployment

3. **Deploy:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Check the **Actions** tab to monitor deployment status

#### Build Scripts

- `pnpm export` - Build the static export (outputs to `out/` directory)

#### Manual Deployment

If you need to deploy manually:

```bash
pnpm run export
# The static files will be in the `out/` directory
```

### Deploy on Vercel

Alternatively, you can deploy to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Note:** For Vercel deployment, you may need to remove the `output: "export"` and `basePath` settings from `next.config.ts`.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
