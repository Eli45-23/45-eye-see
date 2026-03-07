import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("staten-island-electrician");
const trimmedArea = { ...area, landingSections: area.landingSections.slice(0, 5) };

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
        content={trimmedArea}
        heroLead={heroLead}
        localTrust={localTrust}
        propertyTypes={propertyTypes}
        commonIssues={commonIssues}
        serviceLinks={serviceLinks}
        cityContext={cityContext}
        ctaHeadline="Call 646-710-0134 to plan Staten Island electrical work with clean execution and realistic scheduling."
      />
      <JsonLd id="schema-staten-island-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-staten-island-business" data={businessSchema} />
    </div>
  );
}
