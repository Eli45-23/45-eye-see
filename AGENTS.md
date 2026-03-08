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
- Maintain the current SEO site architecture; do not remove or block valid existing route patterns.
- Core pages:
  - `/`
  - `/services`
  - `/contact`
  - `/projects`
  - `/service-areas`
- Borough pages:
  - `/manhattan-electrician`
  - `/brooklyn-electrician`
  - `/queens-electrician`
  - `/staten-island-electrician`
- Neighborhood pages:
  - `/electrician-{neighborhood}`
- Project pages:
  - `/projects/{slug}`
- New routes should fit the established information architecture and support real SEO or conversion goals.

## Content Rules
- Do not publish placeholder copy.
- Do not publish fake content.
- Primary CTA must always be: `Call 646-710-0134`.
- Do not show pricing details (no pricing anywhere).
- Do not show a physical address (no address anywhere).
- Do not publish fake testimonials, fake ratings, fake names, or exact addresses.
- Keep service-area messaging aligned to NYC and nearby areas:
  - Manhattan (excluding Bronx)
  - Queens
  - Brooklyn
  - Staten Island
  - selective Long Island coverage
  - include mentions of Williamsburg, Lower Manhattan, Midtown Manhattan, and Queens

## Content Quality
- Borough landing pages should typically be 900-1400 words.
- Neighborhood landing pages should typically be 700-1100 words.
- Project and case-study pages should typically be 700-1000 words.
- Avoid duplicate content, boilerplate swaps, or thin pages.
- Every SEO page must be meaningfully unique, useful, and locally relevant.

## SEO Architecture
- Core linking flow should reinforce: Homepage, Services, Projects, Service Areas, borough pages, neighborhood pages, and project pages.
- Homepage should surface key service, project, and service-area entry points.
- Services should link to relevant borough, neighborhood, contact, and project proof points where useful.
- Service Areas should distribute authority into borough and neighborhood pages.
- Borough pages should link to relevant neighborhoods, services, projects, and contact.
- Neighborhood pages should link upward to their borough page, laterally to relevant services, and toward contact.
- Project pages should link to `/services`, relevant service anchors, the related borough page, the related neighborhood page when applicable, and `/contact`.

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
