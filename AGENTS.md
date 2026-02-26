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
- Strict limit: only 3 routes/pages are allowed.
- Allowed routes only (no new pages):
  - `/`
  - `/services`
  - `/contact`

## Content Rules
- Do not publish placeholder copy.
- Primary CTA must always be: `Call 646-710-0134`.
- Do not show pricing details (no pricing anywhere).
- Do not show a physical address (no address anywhere).
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
- Performance first:
  - Use `next/image` for site images.
  - Do not introduce heavy animation libraries.
- Keep lint clean before finalizing work.

## Workflow
- For every step, make the smallest change possible.
- Run `npm run lint`.
- Run `npm run build`.
- Stop after those checks complete.
