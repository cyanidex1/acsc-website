# ACSC — AIUB Cybersecurity Club Website

Single-page website for the AIUB Cybersecurity Club (ACSC).
Design language: warm paper (`#f2efeb`), near-black ink (`#0b0b0b`), terminal
green (`#00ff00`) reserved for accents on dark surfaces. Pixel display type
(Silkscreen) + JetBrains Mono + IBM Plex Sans.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · lucide-react

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & preview

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

`dist/` is a plain static site — deploy it to Vercel, Netlify, GitHub Pages or
any static host.

## Project structure

```
src/
  pages/Home.tsx        page composition
  sections/             one file per section:
    Navbar.tsx          fixed nav
    Hero.tsx            headline + artwork + rotating badge
    About.tsx           mission + stats (leetspeak glitch effect)
    Events.tsx          numbered archive list with hover inverse-mask
    Team.tsx            placeholder roster (black ID cards)
    Join.tsx            editorial underline form + contact list
    Footer.tsx          link columns + bottom bar
  components/RotatingBadge.tsx   circular SVG text-on-path, 24s rotation
  hooks/useGlitch.ts    leetspeak keyword glitch + localStorage persistence
public/images/          logo, hero artwork, section artwork
```

## Customizing content

- **Events**: edit the `UPCOMING` / `PAST` arrays in `src/sections/Events.tsx`
- **Team roster**: edit the `TEAM` array in `src/sections/Team.tsx`
- **Stats**: `STATS` array in `src/sections/About.tsx`
- **Contact details**: `src/sections/Join.tsx` (email / room / social)
- **Social links**: `src/sections/Footer.tsx`
- **Fonts / palette**: `index.html` (Google Fonts) and `src/index.css` (tokens)

## Notes

- Placeholder copy is intentionally easy to swap for real club content.
- Generated media live in `public/images/`; replace with real photos anytime
  (keep the filenames to avoid touching code).
