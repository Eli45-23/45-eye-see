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

const area = getLocalAreaPage("manhattan-electrician");
const displaySections = area.landingSections.slice(0, 9);

export const metadata: Metadata = createBoroughMetadata({
  borough: "Manhattan",
  path: "/manhattan-electrician",
  description:
    "Manhattan electrician for co-ops, high-rises, offices, and retail spaces needing troubleshooting, panel upgrades, and EV-ready planning.",
});

const heroLead = [
  "Manhattan electrical work is about precision inside dense, highly governed buildings. Co-op boards, office managers, and retail operators need a licensed NYC electrician who can diagnose quickly, respect house rules, and keep critical circuits online while work proceeds.",
  "Eli plans service calls around access windows, elevator schedules, and mechanical room rules. That means clean diagnostics, concise scope notes, and execution that protects finished spaces in Midtown offices, SoHo lofts, Upper East Side co-ops, and Financial District retail floors.",
];

const localTrust = [
  "Board-friendly communication with written scope notes and scheduling windows.",
  "Clean containment for lobby paths, elevators, and occupied corridors.",
  "Same-day Manhattan dispatch when scheduling allows for urgent outages.",
];

const propertyTypes = [
  "High-rise co-ops and condos with layered panel histories",
  "Class A and Class B office suites with critical uptime needs",
  "Street-level retail and hospitality spaces",
  "Prewar apartments with legacy wiring blends",
];

const commonIssues = [
  "Intermittent tripping on kitchen and server room circuits",
  "Overheated breakers from renovation-era load creep",
  "Lighting instability in open-plan offices and retail tracks",
  "Fuse box change-outs where legacy gear blocks safe operation",
];

const serviceLinks = [
  { label: "Troubleshooting & repairs", href: "/services#electrical-troubleshooting-and-repairs" },
  { label: "Panel upgrades & service changes", href: "/services#panel-upgrades-and-service-changes" },
  { label: "EV charger installation", href: "/services#ev-charger-installation" },
  { label: "Dedicated circuits", href: "/services#dedicated-circuits" },
];

const cityContext = [
  "In Midtown and the Financial District, after-hours coordination keeps offices running while critical branch circuits are stabilized. We plan shutdown windows and stage loads so elevators, security systems, and essential lighting remain online.",
  "For Upper East Side and Upper West Side co-ops, board approvals and superintendent coordination matter as much as technical work. We provide concise notes, respect quiet hours, and protect common areas from dust or debris during any panel or device replacement.",
  "Downtown lofts and mixed-use SoHo properties often combine older feeders with modern lighting controls. Eli maps circuit paths, verifies labeling, and documents corrective actions so property managers can approve follow-on upgrades with confidence.",
];

export default function ManhattanElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Manhattan", path: "/manhattan-electrician" },
  ]);
  const businessSchema = getLocalAreaElectricianSchema("Manhattan", "/manhattan-electrician");

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
        ctaHeadline="Call 646-710-0134 to coordinate a Manhattan service call with board-aware scheduling and clear documentation."
        landingSections={displaySections}
      />
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Manhattan service FAQs</h2>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Manhattan building and access realities</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Co-ops in Midtown and condos on the Upper East Side often require coordinated shutdowns with building staff and written scope notes for board files. We schedule panels and riser work around elevator and freight access, keep common areas protected, and provide status updates for supers and property managers.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Lower Manhattan and SoHo lofts can include mixed-generation wiring and partial documentation. We map circuits, label clearly, and stage panel upgrades so life-safety loads remain online. Offices in Flatiron and Midtown get phased troubleshooting to keep IT and life-safety circuits prioritized.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Featured Manhattan services</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>
            <Link href="/services#electrical-troubleshooting-and-repairs" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Electrical troubleshooting & repairs
            </Link>{" "}
            for intermittent power loss in offices and co-ops.
          </li>
          <li>
            <Link href="/services#panel-upgrades-and-service-changes" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Panel upgrades & service changes
            </Link>{" "}
            sized for renovation-heavy condos and commercial suites.
          </li>
          <li>
            <Link href="/services#ev-charger-installation" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              EV charger installation
            </Link>{" "}
            with load review for garage and valet setups.
          </li>
          <li>
            <Link href="/services#commercial-electrical-service-calls" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Commercial service calls
            </Link>{" "}
            for retail and office fit-outs with tight uptime windows.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Neighborhood coverage in Manhattan</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Use these focused pages to plan work with local context for building rules, access windows, and typical load patterns.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: "Midtown Manhattan electrician", href: "/electrician-midtown-manhattan" },
            { label: "Upper East Side electrician", href: "/electrician-upper-east-side" },
            { label: "Lower Manhattan electrician", href: "/electrician-lower-manhattan" },
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
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Plan your next Manhattan electrical step</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Whether you need breaker relief in a Midtown office, GFCI and lighting upgrades in a Tribeca loft, or service capacity for a remodeled Upper West Side kitchen, start with a call. We align permits, shutdown windows, and clean execution so occupied spaces stay protected.
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
      <JsonLd id="schema-manhattan-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-manhattan-business" data={businessSchema} />
    </div>
  );
}
