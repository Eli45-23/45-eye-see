import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { faqs } from "@/src/content/faqs";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("queens-electrician");
const displaySections = area.landingSections.slice(0, 9);

export const metadata: Metadata = createBoroughMetadata({
  borough: "Queens",
  path: "/queens-electrician",
  description:
    "Queens electrician for multifamily homes, detached houses, LIC condos, and small commercial spaces needing troubleshooting, panel work, and EV charger readiness.",
});

const heroLead = [
  "Queens properties range from attached multi-family homes to detached houses with garages and accessory units. Each layout needs careful load review, clear labeling, and practical safety upgrades before new appliances or chargers are added.",
  "Eli helps owners in Astoria, Long Island City, Forest Hills, and Flushing stabilize recurring trips, modernize panels, and stage dedicated circuits so daily living and light commercial operations stay predictable.",
];

const localTrust = [
  "Respectful coordination with homeowners and small landlords during active occupancy.",
  "Load calculations and breaker balancing before EV or HVAC additions.",
  "Clear communication for mixed-language households and shared spaces.",
];

const propertyTypes = [
  "Two-family and three-family homes with shared basements",
  "LIC condos with garage or shared charging potential",
  "Detached homes with accessory structures or studios",
  "Small retail or office suites on ground floors",
];

const commonIssues = [
  "HVAC, laundry, and kitchen loads stacked on legacy panels",
  "Detached garage feeds undersized for EV chargers or tools",
  "Aging receptacles and switches in high-use living areas",
  "Flicker and voltage drop on long branch runs in larger lots",
];

const serviceLinks = [
  { label: "Troubleshooting & repairs", href: "/services#electrical-troubleshooting-and-repairs" },
  { label: "Panel upgrades & service changes", href: "/services#panel-upgrades-and-service-changes" },
  { label: "Dedicated circuits", href: "/services#dedicated-circuits" },
  { label: "EV charger installation", href: "/services#ev-charger-installation" },
];

const cityContext = [
  "Astoria and Long Island City homes often add office gear and HVAC retrofits. We rebalance loads, verify neutral integrity, and recommend dedicated circuits when daily demand outpaces original design.",
  "Forest Hills and Kew Gardens detached homes can hide voltage drop on long runs to garages or additions. We test feeders, tighten terminations, and right-size breakers before installing EV chargers or shop equipment.",
  "Flushing and Bayside multi-family properties benefit from clean labeling and GFCI/AFCI protection in kitchens, baths, and exterior circuits, reducing nuisance trips while improving safety for tenants and owners.",
];

export default function QueensElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Queens", path: "/queens-electrician" },
  ]);
  const businessSchema = getLocalAreaElectricianSchema("Queens", "/queens-electrician");

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
        ctaHeadline="Call 646-710-0134 to plan Queens electrical work with clear load strategy and respectful on-site coordination."
        landingSections={displaySections}
      />
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Queens service FAQs</h2>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Queens building profiles</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Astoria and Long Island City apartments often layer new HVAC and office gear onto older panels. We rebalance loads, add labeling, and plan dedicated circuits so work-from-home setups and kitchen appliances stay stable.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Detached homes in Forest Hills and Flushing frequently need garage feeds upgraded for EV charging and tools. We evaluate conduit paths, voltage drop, and outdoor-rated equipment so charging stays dependable in all seasons.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Featured Queens services</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>
            <Link href="/services#dedicated-circuits" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Dedicated circuits
            </Link>{" "}
            for laundry, HVAC, and EV-ready garages.
          </li>
          <li>
            <Link href="/services#electrical-troubleshooting-and-repairs" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Troubleshooting
            </Link>{" "}
            for partial outages and voltage drop on long runs.
          </li>
          <li>
            <Link href="/services#panel-upgrades-and-service-changes" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Panel upgrades
            </Link>{" "}
            to support kitchen remodels and EV chargers.
          </li>
          <li>
            <Link href="/services#outlet-switch-and-gfci-upgrades" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Outlet and GFCI upgrades
            </Link>{" "}
            for baths, kitchens, and exterior receptacles.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Plan your Queens project</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Whether you are adding EV charging in Bayside, stabilizing shared circuits in LIC condos, or preparing a Flushing kitchen remodel, start with a load review and practical scope. We coordinate permits, access, and staging so families and tenants stay comfortable while work proceeds.
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
      <JsonLd id="schema-queens-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-queens-business" data={businessSchema} />
    </div>
  );
}
