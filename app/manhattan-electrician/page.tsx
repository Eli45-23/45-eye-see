import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("manhattan-electrician");
const trimmedArea = { ...area, landingSections: area.landingSections.slice(0, 5) };

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
        content={trimmedArea}
        heroLead={heroLead}
        localTrust={localTrust}
        propertyTypes={propertyTypes}
        commonIssues={commonIssues}
        serviceLinks={serviceLinks}
        cityContext={cityContext}
        ctaHeadline="Call 646-710-0134 to coordinate a Manhattan service call with board-aware scheduling and clear documentation."
      />
      <JsonLd id="schema-manhattan-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-manhattan-business" data={businessSchema} />
    </div>
  );
}
