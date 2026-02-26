# Launch Checklist

## 1. Connect Domain: `45eyeelectricalsolutions.com`
- [ ] Point DNS to your hosting provider (A/ALIAS/CNAME records based on provider docs).
- [ ] Add and verify both:
- [ ] `https://45eyeelectricalsolutions.com`
- [ ] `https://www.45eyeelectricalsolutions.com`
- [ ] Configure the preferred primary domain and redirect the secondary domain to it.
- [ ] Confirm HTTPS certificate is active and auto-renewing.

## 2. Confirm Canonical Base URL
- [ ] Verify `SITE_URL` in `src/lib/seo.ts` is set to the final production URL.
- [ ] Current value is `https://45eyeelectricalsolutions.com`.
- [ ] After deploy, inspect page source for canonical tags on:
- [ ] `/`
- [ ] `/services`
- [ ] `/contact`

## 3. Set Up Google Search Console
- [ ] Add the domain property (`45eyeelectricalsolutions.com`) in Google Search Console.
- [ ] Complete DNS verification.
- [ ] Check that indexing is allowed and no critical coverage errors are present.

## 4. Submit Sitemap
- [ ] Submit `https://45eyeelectricalsolutions.com/sitemap.xml` in Google Search Console.
- [ ] Confirm sitemap status is "Success".
- [ ] Re-check after first crawl for discovered URL count.

## 5. GA4 Setup (Optional)
- [ ] Create a GA4 property and web data stream for `45eyeelectricalsolutions.com`.
- [ ] Add measurement ID to the site (recommended via `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var + a small analytics component in layout).
- [ ] Verify real-time events after deployment.
- [ ] Keep consent/privacy requirements aligned with your local and platform rules.

## Pre-Launch QA
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Click-test phone CTAs on:
- [ ] Header
- [ ] Footer
- [ ] Home sections
- [ ] Services sections
- [ ] Contact sections
- [ ] Validate mobile and desktop layout for CLS/LCP regressions.
