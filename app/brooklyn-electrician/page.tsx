import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("brooklyn-electrician");
const trimmedArea = { ...area, landingSections: area.landingSections.slice(0, 5) };

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
        content={trimmedArea}
        heroLead={heroLead}
        localTrust={localTrust}
        propertyTypes={propertyTypes}
        commonIssues={commonIssues}
        serviceLinks={serviceLinks}
        cityContext={cityContext}
        ctaHeadline="Call 646-710-0134 to book Brooklyn electrical service that respects finishes, schedules, and mixed-use realities."
      />
      <JsonLd id="schema-brooklyn-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-brooklyn-business" data={businessSchema} />
    </div>
  );
}
