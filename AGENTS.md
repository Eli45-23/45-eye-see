# AGENTS.md

## Project Overview
- Stack: Next.js App Router + TypeScript
- Purpose: Production SEO website for 45 EYE Electrical Solutions LLC (Eli the Electrician)
- Primary conversion goal: phone calls via `tel:+16467100134`

## Commands
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Test: `npm run test`

## Routing Rules
- Do not add more than 3 routes/pages.
- Allowed routes only:
  - `/`
  - `/services`
  - `/contact`

## Content Rules
- Do not publish placeholder copy.
- Keep call-to-action for phone calls prominent and repeated.
- Do not show pricing details.
- Do not show a physical address.
- Keep service-area messaging aligned to NYC and nearby areas:
  - Manhattan (excluding Bronx)
  - Queens
  - Brooklyn
  - Staten Island
  - selective Long Island coverage
  - include mentions of Williamsburg, Lower Manhattan, Midtown Manhattan, and Queens

## Engineering Conventions
- Use clean TypeScript with minimal dependencies.
- Prefer accessible semantic HTML and mobile-first CSS.
- Keep styles simple in `app/globals.css` unless component-level complexity requires extraction.
- Keep lint clean before finalizing work.
