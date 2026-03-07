import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/src/content/business";
import { localAreaPages, type LocalAreaPageContent, type LocalAreaSlug } from "@/src/content/localAreaPages";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { JsonLd } from "@/src/components/JsonLd";
import { SectionHeader } from "@/src/components/SectionHeader";
import { createServiceAreaMetadata } from "@/src/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalAreaElectricianSchema,
  getLocalBusinessSchema,
} from "@/src/lib/schema";

export const metadata: Metadata = createServiceAreaMetadata({
  title: "NYC Electrical Service Areas | 45 EYE Electrical Solutions",
  description:
    "Dedicated service-area hub for NYC electrician coverage in Manhattan, Brooklyn, Queens, Staten Island, and select Long Island areas, with practical links to local coverage and service scope details.",
  path: "/service-areas",
  keywords: [
    "NYC electrician",
    "licensed electrician NYC",
    "Manhattan electrician",
    "Brooklyn electrician",
    "Queens electrician",
    "Staten Island electrician",
    "electrical service areas NYC",
    "panel upgrades NYC",
    "EV charger installation NYC",
  ],
});

const areaPropertyTypes: Record<LocalAreaSlug, string[]> = {
  "manhattan-electrician": ["co-ops", "high-rise apartments", "office suites", "retail storefronts"],
  "brooklyn-electrician": ["brownstones", "townhouses", "co-ops", "storefronts", "small office spaces"],
  "queens-electrician": ["multi-family homes", "co-ops", "mixed-use buildings", "small commercial storefronts"],
  "staten-island-electrician": ["single-family style homes", "condo communities", "small commercial properties"],
  "long-island-electrician": ["detached homes", "mixed-use properties", "small commercial facilities"],
};

const commonServiceTypeLinks = [
  {
    label: "electrical troubleshooting NYC",
    href: "/services#electrical-troubleshooting-and-repairs",
  },
  {
    label: "panel upgrades NYC",
    href: "/services#panel-upgrades-and-service-changes",
  },
  {
    label: "EV charger installation NYC",
    href: "/services#ev-charger-installation",
  },
  {
    label: "outlet, switch, and GFCI upgrades",
    href: "/services#outlet-switch-and-gfci-upgrades",
  },
  {
    label: "dedicated circuits",
    href: "/services#dedicated-circuits",
  },
] as const;

const areaBreadcrumbItems = [{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas" }] as const;

const longIslandServiceAreas = ["Great Neck", "Hempstead", "Garden City", "Astoria", "Long Island City"];

function areaContextParagraph(area: LocalAreaPageContent): string {
  return area.supportingSentence;
}

function getAreaTopSection(area: LocalAreaPageContent) {
  return area.landingSections[0];
}

export default function ServiceAreasPage() {
  const breadcrumbSchema = getBreadcrumbSchema(areaBreadcrumbItems);
  const localBusinessSchema = getLocalBusinessSchema("/service-areas");
  const areaSchemas = localAreaPages.map((area) =>
    getLocalAreaElectricianSchema(
      area.areaName,
      area.slug === "long-island-electrician" ? `/service-areas#${area.slug}` : `/${area.slug}`
    )
  );
  const areaBreadcrumbSchemas = localAreaPages.map((area) =>
    getBreadcrumbSchema([
      ...areaBreadcrumbItems,
      { name: `${area.areaName} electrician`, path: area.slug === "long-island-electrician" ? `/service-areas#${area.slug}` : `/${area.slug}` },
    ])
  );

  return (
    <div className="space-y-8">
      <section className="section-light space-y-6 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <Breadcrumbs items={areaBreadcrumbItems} />
        <SectionHeader
          eyebrow="Service Areas"
          title="NYC service areas we serve"
          headingLevel={1}
          description="Explore local coverage for Manhattan, Brooklyn, Queens, Staten Island, and select Long Island areas with links to relevant service scopes and scheduling options."
          action={
            <div className="flex flex-wrap gap-3">
              <CallCTA label={`Call ${business.phone}`} />
              <Link
                href="/contact#contact-request"
                className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
              >
                Request callback
              </Link>
            </div>
          }
        />
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          If you serve a neighborhood in one of these boroughs, use this page for fast access to local context and
          direct links into service-specific coverage.
        </p>
        <div className="flex flex-wrap gap-2">
          {longIslandServiceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--text)]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        {localAreaPages.map((area) => {
          const propertyTypes = areaPropertyTypes[area.slug] ?? [];
          const leadSection = getAreaTopSection(area);

          return (
            <article
              key={area.slug}
              id={area.slug}
              className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8"
            >
              <Breadcrumbs
                items={[
                  ...areaBreadcrumbItems,
                  { name: `${area.areaName} electrician`, isCurrent: false, path: `/service-areas#${area.slug}` },
                ]}
              />
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)]">NYC electrician in {area.areaName}</h2>
              <p className="mt-2 text-sm text-muted">{area.neighborhoodLine}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{areaContextParagraph(area)}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{area.description}</p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--text)]">Common property types</h3>
                  <ul className="space-y-2 text-sm text-[var(--muted)]">
                    {propertyTypes.map((type) => (
                      <li key={type} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
                        {type}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--text)]">Common request types</h3>
                  <ul className="space-y-2 text-sm text-[var(--muted)]">
                    {commonServiceTypeLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text)]">{leadSection.heading}</h3>
                {leadSection.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
              </section>

              <section className="mt-6 space-y-3">
                <p className="text-sm font-semibold text-[var(--text)]">Local details to review before scheduling</p>
                <div className="section-elevated rounded-xl border border-[var(--border)] p-4 text-sm text-[var(--muted)]">
                  {area.longFormBlock.slice(0, 2).map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CallCTA label={`Call ${business.phone}`} />
                <Link
                  href="/contact#contact-request"
                  className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
                >
                  Request callback
                </Link>
                <Link
                  href={area.slug === "long-island-electrician" ? "/service-areas#long-island-electrician" : `/${area.slug}`}
                  className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
                >
                  Open {area.areaName} page
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <JsonLd id="schema-service-areas-business" data={localBusinessSchema} />
      <JsonLd id="schema-service-areas-breadcrumbs" data={breadcrumbSchema} />
      {areaSchemas.map((schema, index) => (
        <JsonLd key={`schema-service-areas-business-${index}`} id={`schema-service-areas-business-${index}`} data={schema} />
      ))}
      {areaBreadcrumbSchemas.map((schema, index) => (
        <JsonLd
          key={`schema-service-areas-breadcrumbs-${index}`}
          id={`schema-service-areas-breadcrumbs-${index}`}
          data={schema}
        />
      ))}
    </div>
  );
}
