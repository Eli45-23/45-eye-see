import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { JsonLd } from "@/src/components/JsonLd";
import { createBoroughMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalAreaElectricianSchema } from "@/src/lib/schema";

const area = getLocalAreaPage("queens-electrician");
const trimmedArea = { ...area, landingSections: area.landingSections.slice(0, 5) };

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
        content={trimmedArea}
        heroLead={heroLead}
        localTrust={localTrust}
        propertyTypes={propertyTypes}
        commonIssues={commonIssues}
        serviceLinks={serviceLinks}
        cityContext={cityContext}
        ctaHeadline="Call 646-710-0134 to plan Queens electrical work with clear load strategy and respectful on-site coordination."
      />
      <JsonLd id="schema-queens-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-queens-business" data={businessSchema} />
    </div>
  );
}
