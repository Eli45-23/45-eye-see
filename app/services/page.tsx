import Link from "next/link";
import { business } from "@/src/content/business";
import { localAreaPages } from "@/src/content/localAreaPages";
import { workGallery } from "@/src/content/gallery";
import { serviceBuckets } from "@/src/content/services";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { GalleryGrid } from "@/src/components/GalleryGrid";
import { JsonLd } from "@/src/components/JsonLd";
import { TrustBadges } from "@/src/components/TrustBadges";
import { SectionHeader } from "@/src/components/SectionHeader";
import { createPageMetadata } from "@/src/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalAreaElectricianSchema,
  getLocalBusinessSchema,
  getServiceListSchema,
} from "@/src/lib/schema";
import { slugify } from "@/src/lib/slug";

export const metadata = createPageMetadata({
  title: "Electrical Services in NYC | Licensed Electrician NYC | 45 EYE Electrical Solutions",
  description:
    "Explore NYC electrician services led by a licensed electrician NYC. Compare scope-driven options across electrical troubleshooting NYC, panel upgrades NYC, and EV charger installation NYC in Manhattan, Brooklyn, Queens, and Staten Island.",
  path: "/services",
  keywords: [
    "NYC electrician",
    "licensed electrician NYC",
    "electrical troubleshooting NYC",
    "panel upgrades NYC",
    "service changes NYC",
    "dedicated circuits NYC",
    "EV charger installation NYC",
    "Manhattan electrician",
    "Brooklyn electrician",
    "Queens electrician",
    "Staten Island electrician",
  ],
  ogTitle: "Electrical Services in NYC | 45 EYE Electrical Solutions",
  ogDescription:
    "Service hub for residential and light commercial electrical work across Manhattan, Queens, Brooklyn, and Staten Island. Same-day service when possible.",
  twitterTitle: "Electrical Services NYC | 45 EYE",
  twitterDescription:
    "Licensed electrician NYC service categories with clear scope and rapid scheduling options.",
});

const neighborhoods = business.mustMentionNeighborhoods;
const serviceBreadCrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
] as const;
const serviceAreasBreadCrumbs = [...serviceBreadCrumbs, { name: "Service Areas", path: "/services#service-areas" }] as const;
const serviceAreaLinks = [
  { slug: "manhattan-electrician", label: "Manhattan" },
  { slug: "brooklyn-electrician", label: "Brooklyn" },
  { slug: "queens-electrician", label: "Queens" },
  { slug: "staten-island-electrician", label: "Staten Island" },
  { slug: "long-island-electrician", label: "Long Island" },
] as const;

type ServiceSupport = {
  valueStatement: string;
  whyNow: string;
  scenarios: readonly string[];
  ctaText: string;
  relatedLinks: readonly {
    label: string;
    href: string;
  }[];
};

const serviceSupportMap: Record<string, ServiceSupport> = {
  "Electrical Troubleshooting & Repairs": {
    valueStatement:
      "Targeted diagnostic work for electrical faults in occupied NYC buildings where quick, low-risk fixes matter.",
    whyNow:
      "When outlets fail intermittently, breakers trip repeatedly, or lighting behaves unpredictably, fast troubleshooting reduces risk and downtime.",
    scenarios: [
      "Intermittent flicker in kitchens, studios, or storefronts",
      "Recurring breaker trips under normal load",
      "Outlet and switch dead zones during peak appliance use",
      "Partial power loss in one room cluster",
    ],
    ctaText: "Call for electrical troubleshooting scheduling",
    relatedLinks: [
      { label: "Compare panel upgrade options", href: "/services#panel-upgrades-and-service-changes" },
      { label: "Review troubleshooting and repair details", href: "/contact#contact-request" },
      { label: "View outlet and GFCI upgrades", href: "/services#outlet-switch-and-gfci-upgrades" },
    ],
  },
  "Panel Upgrades & Service Changes": {
    valueStatement:
      "Service changes and panel upgrades that restore capacity for modern appliances, climate systems, and long-run reliability.",
    whyNow:
      "If routine activity causes warm breakers or repeated temporary fixes, planning a service upgrade before the next project prevents repeat outages.",
    scenarios: [
      "Electrical load growth after kitchen and bath renovations",
      "Legacy service equipment being replaced for safety",
      "Frequent undervoltage, heat, or breaker aging signs",
      "Property transitions requiring stronger baseline capacity",
    ],
    ctaText: "Call to evaluate panel and service options",
    relatedLinks: [
      { label: "Review dedicated circuits", href: "/services#dedicated-circuits" },
      { label: "Review safety-focused upgrades", href: "/services#code-corrections-and-safety-improvements" },
      { label: "View NYC service areas", href: "/services#service-areas" },
    ],
  },
  "Dedicated Circuits": {
    valueStatement:
      "Dedicated circuits isolate high-load equipment so regular outlets and common spaces run with fewer interruptions.",
    whyNow:
      "If appliances are stepping on each other electrically, a dedicated line often improves stability faster than broad rewiring.",
    scenarios: [
      "Dedicated circuits for AC and HVAC accessories",
      "Kitchen systems with constant high draw",
      "Home office or small commercial equipment loads",
      "Laundry and appliances sharing panel capacity",
    ],
    ctaText: "Call for a dedicated-circuit estimate",
    relatedLinks: [
      { label: "Pair with EV charger planning", href: "/services#ev-charger-installation" },
      { label: "Review commercial service responses", href: "/services#commercial-electrical-service-calls" },
      { label: "Choose a service area", href: "/services#service-areas" },
    ],
  },
  "Outlet, Switch & GFCI Upgrades": {
    valueStatement:
      "Modern outlets, switches, and GFCI updates improve daily safety and reliability where usage is constant.",
    whyNow:
      "Signs like warm receptacles, older devices, or wet-area usage patterns mean it is time for a practical safety-oriented update.",
    scenarios: [
      "Kitchen or bath GFCI upgrades",
      "Tamper-resistant replacement in shared occupancy zones",
      "Device wear replacement before tenant turnover",
      "Switch noise, loose contact, or worn trim hardware",
    ],
    ctaText: "Call for safer outlet and switch work",
    relatedLinks: [
      { label: "See troubleshooting flow", href: "/services#electrical-troubleshooting-and-repairs" },
      { label: "Review code and safety updates", href: "/services#code-corrections-and-safety-improvements" },
      { label: "Find your borough service details", href: "/services#service-areas" },
    ],
  },
  "Lighting Installation & Upgrades": {
    valueStatement:
      "Lighting upgrades improve function, ambiance, and efficiency for homes, offices, and storefronts.",
    whyNow:
      "When outdated fixture layout limits usable light or adds unnecessary heat, staged upgrades are often the highest-value improvement.",
    scenarios: [
      "Recessed or task lighting installation",
      "Retail and office environment lighting refresh",
      "Kitchen, entry, and hallway lighting upgrades",
      "Lighting planning during renovation windows",
    ],
    ctaText: "Call for a lighting upgrade scope",
    relatedLinks: [
      { label: "Need targeted troubleshooting first?", href: "/services#electrical-troubleshooting-and-repairs" },
      { label: "Explore service hub on EV-ready installs", href: "/services#ev-charger-installation" },
      { label: "Review recent projects", href: "/services#service-areas" },
    ],
  },
  "EV Charger Installation": {
    valueStatement:
      "EV charger installation is strongest when load review, dedicated circuits, and usage timing are coordinated up front.",
    whyNow:
      "Pre-checking panel headroom avoids under-sized installs and expensive rework when vehicles are added to daily routines.",
    scenarios: [
      "Home charger fit-out planning in apartments and condos",
      "Small commercial EV charging support in mixed-use sites",
      "Condo utility coordination and utility review",
      "Dedicated EV circuit placement near parking access points",
    ],
    ctaText: "Call for EV charger planning and scheduling",
    relatedLinks: [
      { label: "Review dedicated circuits options", href: "/services#dedicated-circuits" },
      { label: "Confirm panel and service capacity", href: "/services#panel-upgrades-and-service-changes" },
      { label: "Check electrical service areas", href: "/services#service-areas" },
    ],
  },
};

function getBoroughBreadcrumb(slug: string, name: string) {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Service Areas", path: "/services#service-areas" },
    { name, path: `/services#${slug}` },
  ] as const;
}

function getAreaLine(index: number): string {
  const first = neighborhoods[index % neighborhoods.length];
  const second = neighborhoods[(index + 1) % neighborhoods.length];
  return `Frequent service coverage includes ${first}, ${second}, and nearby NYC neighborhoods.`;
}

export default function ServicesPage() {
  const serviceListSchema = getServiceListSchema();
  const breadcrumbSchema = getBreadcrumbSchema(serviceBreadCrumbs);
  const serviceAreasSchema = getBreadcrumbSchema(serviceAreasBreadCrumbs);
  const serviceBusinessSchema = getLocalBusinessSchema("/services");
  const serviceAreaBusinessSchemas = localAreaPages.map((area) =>
    getLocalAreaElectricianSchema(area.areaName, `/services#${area.slug}`)
  );
  const serviceAreaBreadcrumbSchemas = localAreaPages.map((area) =>
    getBreadcrumbSchema(getBoroughBreadcrumb(area.slug, area.areaName))
  );

  return (
    <div className="space-y-9">
      <section className="section-light rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <Breadcrumbs items={serviceBreadCrumbs} />
        <SectionHeader
          eyebrow="Services"
          title="Electrical service categories in Manhattan, Brooklyn, Queens, Staten Island"
          headingLevel={1}
          description="A practical, SEO-ready guide to electrical troubleshooting, panel upgrades, dedicated circuits, EV charger installation, and related services for homes and small businesses."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
      </section>
      <section className="section-light rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <TrustBadges />
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="section-elevated sticky top-24 rounded-3xl border border-[var(--border)] p-5 ui-shadow-sm" aria-label="Service section navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Jump to Service</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceBuckets.map((service) => {
                const anchor = slugify(service.name);
                return (
                  <li key={anchor}>
                    <a className="font-medium text-[var(--text)] hover:text-[#60a5fa]" href={`#${anchor}`}>
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <section className="space-y-5" aria-label="Electrical service hub sections">
          {serviceBuckets.map((service, index) => {
            const serviceAnchor = slugify(service.name);
            const coverageArea = serviceAreaLinks[index % serviceAreaLinks.length];
            const support = serviceSupportMap[service.name] ?? null;

            return (
              <div key={service.name} className="space-y-5">
                <article
                  id={serviceAnchor}
                  className="section-light scroll-mt-24 rounded-3xl border border-[var(--border)] p-6 ui-shadow-sm sm:p-7"
                >
                  <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">{service.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>
                  {support ? (
                    <>
                      <p className="mt-3 text-sm font-medium text-[var(--text)]">{support.valueStatement}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{support.whyNow}</p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-[var(--text)]">Common signals in NYC properties</p>
                        <ul className="mt-2 grid gap-2 text-sm text-muted sm:grid-cols-2">
                          {support.scenarios.map((scenario) => (
                            <li
                              key={scenario}
                              className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2"
                            >
                              {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : null}
                  <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {service.commonJobs.map((job) => (
                      <li key={job} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
                        {job}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[var(--muted)]">{getAreaLine(index)}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <CallCTA label={`Call ${business.phone}`} />
                    {support ? (
                      <Link
                        href="/contact#contact-request"
                        className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-white/5"
                      >
                        {support.ctaText}
                      </Link>
                    ) : (
                      <Link
                        href="/contact#contact-request"
                        className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-white/5"
                      >
                        {service.cta}
                      </Link>
                    )}
                    <Link
                      href="/contact#contact-request"
                      className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      Request scheduling details
                    </Link>
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      Service hub
                    </Link>
                    <Link
                      href={`/services#${slugify(serviceBuckets[(index + 1) % serviceBuckets.length].name)}`}
                      className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      Next service section
                    </Link>
                    <Link
                      href={`/services#${coverageArea.slug}`}
                      className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {coverageArea.label} coverage
                    </Link>
                    {support?.relatedLinks.map((related) => (
                      <Link
                        key={related.label}
                        href={related.href}
                        className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                      >
                        {related.label}
                      </Link>
                    ))}
                  </div>
                </article>

                {(index + 1) % 3 === 0 && index !== serviceBuckets.length - 1 ? (
                  <div className="section-elevated rounded-2xl border border-[var(--border)] p-5 ui-shadow-sm">
                    <p className="text-sm font-medium text-[var(--text)]">
                      Ready to schedule one of these services?
                    </p>
                    <div className="mt-3">
                      <CallCTA label={`Call ${business.phone}`} />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>

      <section className="section-light space-y-5 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Work Gallery"
          title="Recent electrical project highlights"
          description="Field photos from residential and commercial jobs across NYC service areas."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <GalleryGrid items={workGallery} />
      </section>

      <section id="service-areas" className="section-light space-y-6 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <Breadcrumbs items={serviceAreasBreadCrumbs} />
        <SectionHeader
          eyebrow="Service Areas"
          title="NYC service area hub"
          description="Browse each borough and Long Island coverage section with links to high-traffic service scopes."
          action={
            <Link href="/contact#contact-request" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Contact for area availability
            </Link>
          }
        />
        {localAreaPages.map((area) => {
          const boroughCrumbs = getBoroughBreadcrumb(area.slug, area.areaName);

          return (
            <article
              id={area.slug}
              key={area.slug}
              className="rounded-2xl border border-[var(--border)] p-5"
            >
              <Breadcrumbs items={boroughCrumbs} />
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text)]">NYC electrician in {area.areaName}</h2>
              <p className="mt-2 text-sm text-muted">{area.neighborhoodLine}</p>
              <p className="mt-3 text-sm text-muted">{area.supportingSentence}</p>
              <div className="mt-4 space-y-4 text-sm">
                {area.landingSections.map((section) => (
                  <section key={section.heading} className="space-y-2">
                    <h3 className="text-lg font-semibold text-[var(--text)]">{section.heading}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-[var(--muted)]">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
                <div className="mt-4 flex flex-wrap gap-3">
                  <CallCTA label={`Call ${business.phone}`} />
                  <Link
                    href="/contact#contact-request"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    Request a callback
                  </Link>
                  <CallCTA label={`Call ${business.phone}`} />
                  <Link
                    href="/contact#contact-request"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    Request callback details
                  </Link>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  Continue with quick context links by comparing:
                  <Link
                    href="/services#electrical-troubleshooting-and-repairs"
                    className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                  >
                    electrical troubleshooting
                  </Link>
                  ,
                  <Link
                    href="/services#panel-upgrades-and-service-changes"
                    className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                  >
                    panel upgrades
                  </Link>
                  , and
                  <Link
                    href="/services#ev-charger-installation"
                    className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                  >
                    EV charger installation
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/services#electrical-troubleshooting-and-repairs"
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Electrical troubleshooting scope
                </Link>
                <Link
                  href="/services#panel-upgrades-and-service-changes"
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Panel upgrades scope
                </Link>
                <Link
                  href="/services#ev-charger-installation"
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  EV charger installation
                </Link>
                <Link
                  href={`/services#${area.slug}`}
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {area.areaName} area section
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className="section-elevated rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Next step: schedule your request</h2>
        <p className="mt-3 text-muted">Use these quick links to move from service research to scheduling.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/contact#contact-request" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Contact page for callback and service scheduling
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Home page for service areas, trust points, and FAQs
            </Link>
          </li>
        </ul>
      </section>

      <JsonLd id="schema-services-list" data={serviceListSchema} />
      <JsonLd id="schema-services-business" data={serviceBusinessSchema} />
      <JsonLd id="schema-services-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-services-areas-breadcrumbs" data={serviceAreasSchema} />
      {serviceAreaBusinessSchemas.map((schema, index) => (
        <JsonLd
          key={`schema-services-area-business-${index}`}
          id={`schema-services-area-business-${index}`}
          data={schema}
        />
      ))}
      {serviceAreaBreadcrumbSchemas.map((schema, index) => (
        <JsonLd
          key={`schema-services-area-breadcrumbs-${index}`}
          id={`schema-services-area-breadcrumbs-${index}`}
          data={schema}
        />
      ))}
    </div>
  );
}
