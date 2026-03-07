import Link from "next/link";
import type { Metadata } from "next";
import { CallCTA } from "@/src/components/CallCTA";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { faqs } from "@/src/content/faqs";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("staten-island-electrician");
const displaySections = area.landingSections.slice(0, 9);

export const metadata: Metadata = createBoroughMetadata({
  borough: "Staten Island",
  path: "/staten-island-electrician",
  description:
    "Staten Island electrician for single-family homes, service upgrades, dedicated circuits, and remodel support with clean, code-aware execution.",
});

const heroLead = [
  "Staten Island electrical projects often balance family routines with upgrade needs: service changes, dedicated circuits for HVAC and appliances, and safety corrections in lived-in spaces.",
  "Eli supports homeowners across St. George, New Dorp, and Great Kills with straightforward diagnostics, tidy panel work, and remodel-ready wiring plans that keep schedules realistic.",
];

const localTrust = [
  "Respectful, low-disruption work in occupied homes with clear cleanup.",
  "Straight talk on what must be upgraded now versus what can wait.",
  "Same-day availability when scheduling allows for outage-driven calls.",
];

const propertyTypes = [
  "Detached single-family homes and split-levels",
  "Townhouse clusters with shared service paths",
  "Garages and basement workshops needing dedicated power",
  "Remodel projects preparing for new kitchens or HVAC",
];

const commonIssues = [
  "Breaker fatigue and panel heat from growing appliance loads",
  "Garage and basement circuits needing GFCI/AFCI updates",
  "Lighting and outlet failures from aging terminations",
  "Voltage drop to exterior or addition circuits during peak use",
];

const serviceLinks = [
  { label: "Panel upgrades & service changes", href: "/services#panel-upgrades-and-service-changes" },
  { label: "Dedicated circuits", href: "/services#dedicated-circuits" },
  { label: "Troubleshooting & repairs", href: "/services#electrical-troubleshooting-and-repairs" },
  { label: "EV charger installation", href: "/services#ev-charger-installation" },
];

const cityContext = [
  "Homes in St. George and Stapleton often combine older wiring with newer HVAC and media equipment. We map loads, right-size breakers, and correct weak terminations before they cause repeat outages.",
  "In New Dorp and Great Kills, remodels and additions can strain legacy panels. We evaluate service capacity, add dedicated kitchen, laundry, or garage circuits, and stage work to minimize downtime.",
  "For West Shore light commercial or mixed-use spots, uptime for signage, POS, and refrigeration matters. We schedule around open hours, add dedicated circuits, and document changes for future service.",
];

export default function StatenIslandElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Staten Island", path: "/staten-island-electrician" },
  ]);
  const businessSchema = getLocalAreaElectricianSchema("Staten Island", "/staten-island-electrician");

  return (
    <div className="space-y-10">
      <BoroughLandingPage
        content={area}
        heroLead={heroLead}
        localTrust={localTrust}
        propertyTypes={propertyTypes}
        commonIssues={commonIssues}
        serviceLinks={serviceLinks}
        cityContext={cityContext}
        ctaHeadline="Call 646-710-0134 to plan Staten Island electrical work with clean execution and realistic scheduling."
        landingSections={displaySections}
      />
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Staten Island service FAQs</h2>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Staten Island building considerations</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Detached and split-level homes in Great Kills, New Dorp, and Tottenville often add HVAC, laundry, and kitchen loads over time. We review panel capacity, balance circuits, and add dedicated lines so appliances stop competing for the same breakers.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Weather exposure matters for exterior receptacles, lighting, and garage feeds. We use outdoor-rated gear, test GFCI protection, and verify grounding to keep waterfront and hillside properties safer year-round.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Featured Staten Island services</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>
            <Link href="/services#panel-upgrades-and-service-changes" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Service and panel upgrades
            </Link>{" "}
            for remodels and growing appliance loads.
          </li>
          <li>
            <Link href="/services#dedicated-circuits" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Dedicated circuits
            </Link>{" "}
            for HVAC, laundry, and kitchens in single-family homes.
          </li>
          <li>
            <Link href="/services#electrical-troubleshooting-and-repairs" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Troubleshooting & repairs
            </Link>{" "}
            for breaker fatigue, dimming, or intermittent power.
          </li>
          <li>
            <Link href="/services#outlet-switch-and-gfci-upgrades" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Outlet and GFCI updates
            </Link>{" "}
            to keep exterior and wet-area circuits protected.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Plan your Staten Island project</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          If you are planning a kitchen remodel, adding a heat pump, or need exterior-safe power, start with a call. We line up permits, schedule shutdowns, and protect finished spaces while upgrading panels, adding circuits, or troubleshooting persistent issues.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request a callback
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            View services
          </Link>
        </div>
      </section>
      <JsonLd id="schema-staten-island-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-staten-island-business" data={businessSchema} />
    </div>
  );
}
