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

const area = getLocalAreaPage("brooklyn-electrician");
const displaySections = area.landingSections.slice(0, 9);

export const metadata: Metadata = createBoroughMetadata({
  borough: "Brooklyn",
  path: "/brooklyn-electrician",
  description:
    "Brooklyn electrician for brownstones, townhouses, mixed-use storefronts, and renovation-heavy properties needing troubleshooting, panel, and EV-ready service.",
});

const heroLead = [
  "Brooklyn service calls reward a diagnostics-first mindset. Brownstones, townhouses, and mixed-use corridors hide generations of wiring changes, so the fastest route to reliability is a clean assessment before any replacement.",
  "Eli works with owners from Williamsburg to Park Slope to isolate faults, stabilize kitchens and home offices, and plan panel upgrades that respect historic finishes while meeting modern load demands.",
];

const localTrust = [
  "Careful finish protection in occupied brownstones and duplexes.",
  "Clear, staged scopes for renovation partners and GC teams.",
  "Same-day triage when a breaker keeps tripping during daily routines.",
];

const propertyTypes = [
  "Brownstones and townhouses under renovation",
  "Mixed-use buildings with street retail and upper residential",
  "Loft conversions and duplex apartments",
  "Co-ops and small condo buildings needing board-ready scopes",
];

const commonIssues = [
  "Kitchen circuit overloads after appliance upgrades",
  "Legacy knob-and-tube remnants causing intermittent dimming",
  "GFCI nuisance trips in combined bath/kitchen stacks",
  "Panel labeling mismatches after phased renovations",
];

const serviceLinks = [
  { label: "Troubleshooting & repairs", href: "/services#electrical-troubleshooting-and-repairs" },
  { label: "Panel upgrades & service changes", href: "/services#panel-upgrades-and-service-changes" },
  { label: "Lighting upgrades", href: "/services#lighting-installation-and-upgrades" },
  { label: "EV charger installation", href: "/services#ev-charger-installation" },
];

const cityContext = [
  "Williamsburg, Bushwick, and Bed-Stuy frequently mix older feeders with new tenant loads. We map circuits, isolate overheated conductors, and separate high-draw appliances onto dedicated lines.",
  "Park Slope and Brooklyn Heights brownstones often pair preservation goals with necessary safety updates. We stage work to protect plaster, molding, and millwork while modernizing panels, GFCI protection, and grounding.",
  "Along Atlantic Avenue and Court Street storefronts, uptime matters for POS systems and signage. We coordinate after-hours access to keep retail open while we correct branch issues or add dedicated circuits.",
];

export default function BrooklynElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Brooklyn", path: "/brooklyn-electrician" },
  ]);
  const businessSchema = getLocalAreaElectricianSchema("Brooklyn", "/brooklyn-electrician");

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
        ctaHeadline="Call 646-710-0134 to book Brooklyn electrical service that respects finishes, schedules, and mixed-use realities."
        landingSections={displaySections}
      />
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Brooklyn service FAQs</h2>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Brooklyn building patterns</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Brownstones in Park Slope and Bed-Stuy often carry layered wiring from multiple renovations. We map circuits, add labeling, and stage dedicated circuits so kitchens, laundry, and home offices stop fighting for the same capacity.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Williamsburg lofts and mixed-use corridors along Atlantic Ave need quick troubleshooting that respects storefront hours and tenant access. We plan panel upgrades and device replacements with dust control and clear daily goals, so operations keep moving.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Featured Brooklyn services</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>
            <Link href="/services#electrical-troubleshooting-and-repairs" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Troubleshooting & repairs
            </Link>{" "}
            for flicker, dead outlets, and nuisance trips in brownstones.
          </li>
          <li>
            <Link href="/services#panel-upgrades-and-service-changes" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Panel upgrades
            </Link>{" "}
            staged for renovations and appliance-heavy homes.
          </li>
          <li>
            <Link href="/services#outlet-switch-and-gfci-upgrades" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Outlet, switch, and GFCI upgrades
            </Link>{" "}
            to keep wet areas and common rooms safe.
          </li>
          <li>
            <Link href="/services#dedicated-circuits" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
            Dedicated circuits
          </Link>{" "}
            for HVAC, laundry, and home-office loads.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Neighborhood coverage in Brooklyn</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Explore focused pages for Brooklyn neighborhoods with guidance on typical building types, access needs, and service patterns.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: "Williamsburg electrician", href: "/electrician-williamsburg" },
            { label: "Park Slope electrician", href: "/electrician-park-slope" },
            { label: "Bed-Stuy electrician", href: "/electrician-bed-stuy" },
            { label: "Bay Ridge electrician", href: "/electrician-bay-ridge" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Plan your Brooklyn project</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          From Bay Ridge single-family homes to Bushwick mixed-use buildings, we balance scope, permitting, and finish protection. If you are planning a remodel or chasing an intermittent outage, a short call sets the right sequence and keeps timelines realistic.
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
      <JsonLd id="schema-brooklyn-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-brooklyn-business" data={businessSchema} />
    </div>
  );
}
