import { business } from "./business";

export type ServiceBucket = {
  name: string;
  description: string;
  commonJobs: readonly string[];
  keywords: readonly string[];
  cta: string;
};

const callCta = `Call ${business.phone} to schedule service.`;

export const serviceBuckets: readonly ServiceBucket[] = [
  {
    name: "Electrical Troubleshooting & Repairs",
    description:
      "Fast diagnosis for power issues in apartments, brownstones, retail spaces, and offices. We isolate the root cause and make safe repairs that hold up.",
    commonJobs: [
      "Finding causes of flickering lights",
      "Fixing dead outlets and partial power loss",
      "Resolving recurring breaker trips",
      "Repairing burnt wires and loose connections",
    ],
    keywords: [
      "electrician troubleshooting NYC",
      "electrical repair Manhattan",
      "power outage electrician Queens",
      "breaker keeps tripping",
    ],
    cta: callCta,
  },
  {
    name: "Panel Upgrades & Service Changes",
    description:
      "Upgrade outdated panels and electrical service to support modern loads safely. Ideal for renovations, new appliances, and older NYC buildings.",
    commonJobs: [
      "Replacing obsolete fuse boxes",
      "Installing new breaker panels",
      "Increasing service capacity",
      "Labeling and balancing circuits",
    ],
    keywords: [
      "electrical panel upgrade NYC",
      "service upgrade electrician Brooklyn",
      "breaker panel replacement",
      "fuse box to breaker upgrade",
    ],
    cta: callCta,
  },
  {
    name: "Dedicated Circuits",
    description:
      "Prevent overloads by installing dedicated lines for high-demand equipment. Dedicated circuits improve safety, performance, and reliability.",
    commonJobs: [
      "Dedicated lines for AC units",
      "Circuits for microwaves and kitchen appliances",
      "Washer and dryer circuit installs",
      "Dedicated office equipment circuits",
    ],
    keywords: [
      "dedicated circuit installation NYC",
      "new circuit electrician",
      "appliance circuit install",
      "code compliant circuit work",
    ],
    cta: callCta,
  },
  {
    name: "Outlet, Switch & GFCI Upgrades",
    description:
      "Replace worn or unsafe devices and bring key areas up to code. We install modern outlets and switches with clean, professional finish work.",
    commonJobs: [
      "GFCI outlet installs in kitchens and baths",
      "Replacing cracked or loose outlets",
      "Adding tamper-resistant outlets",
      "Swapping old switches and dimmers",
    ],
    keywords: [
      "GFCI installation NYC",
      "outlet replacement Queens",
      "switch repair Brooklyn",
      "electrical safety upgrade",
    ],
    cta: callCta,
  },
  {
    name: "Lighting Installation & Upgrades",
    description:
      "Improve comfort, safety, and efficiency with updated lighting. We handle both functional and decorative lighting for residential and commercial spaces.",
    commonJobs: [
      "Recessed lighting installation",
      "Ceiling light fixture replacement",
      "Under-cabinet and task lighting",
      "Exterior and entryway lighting",
    ],
    keywords: [
      "lighting installation NYC",
      "recessed lights electrician Manhattan",
      "fixture replacement Brooklyn",
      "indoor outdoor lighting electrician",
    ],
    cta: callCta,
  },
  {
    name: "EV Charger Installation",
    description:
      "Install dependable Level 2 charging setups for homes and small commercial properties. We evaluate panel capacity and install to manufacturer specs.",
    commonJobs: [
      "Site check for charger placement",
      "Installing dedicated EV charger circuits",
      "Wall connector installation",
      "Load evaluation before install",
    ],
    keywords: [
      "EV charger installation NYC",
      "Level 2 charger electrician",
      "home car charger install Queens",
      "electric vehicle charger circuit",
    ],
    cta: callCta,
  },
  {
    name: "Ceiling Fan & Appliance Wiring",
    description:
      "Safe wiring and installation for fans and hardwired appliances. We make sure each device is supported by proper circuits and controls.",
    commonJobs: [
      "Ceiling fan install and replacement",
      "Range hood electrical connections",
      "Dishwasher and disposal wiring",
      "Wall oven and cooktop hookups",
    ],
    keywords: [
      "ceiling fan installation NYC",
      "appliance wiring electrician",
      "kitchen appliance electrical install",
      "fan replacement Manhattan",
    ],
    cta: callCta,
  },
  {
    name: "Smoke/CO Detector Electrical Work",
    description:
      "Protect occupants with reliable detector power and interconnection updates. We help keep detector systems functioning properly during renovations and upgrades.",
    commonJobs: [
      "Hardwired smoke detector replacement",
      "Interconnected detector troubleshooting",
      "CO detector circuit checks",
      "Battery backup unit updates",
    ],
    keywords: [
      "smoke detector electrician NYC",
      "hardwired detector install",
      "CO detector electrical work",
      "detector wiring repair",
    ],
    cta: callCta,
  },
  {
    name: "Tenant Turnover & Renovation Electrical",
    description:
      "Keep projects moving with dependable electrical support during turnovers and remodels. We coordinate with contractors, supers, and property managers.",
    commonJobs: [
      "Rewiring during kitchen and bath remodels",
      "Fixture and outlet refreshes between tenants",
      "Electrical punch-list completion",
      "Code corrections before occupancy",
    ],
    keywords: [
      "renovation electrician NYC",
      "tenant turnover electrical work",
      "apartment electrical update",
      "property manager electrician",
    ],
    cta: callCta,
  },
  {
    name: "Commercial Electrical Service Calls",
    description:
      "Responsive electrical service for storefronts, offices, and mixed-use buildings. We focus on minimizing downtime and restoring safe operation quickly.",
    commonJobs: [
      "Troubleshooting power loss in retail spaces",
      "Replacing damaged breakers and devices",
      "Lighting and sign circuit repairs",
      "Electrical fixes for opening inspections",
    ],
    keywords: [
      "commercial electrician NYC",
      "retail electrical repair Manhattan",
      "office electrical service Queens",
      "same day electrician Brooklyn",
    ],
    cta: callCta,
  },
  {
    name: "Code Corrections & Safety Improvements",
    description:
      "Address unsafe conditions and code-related concerns before they become bigger issues. We prioritize practical, compliant upgrades for older properties.",
    commonJobs: [
      "Correcting improper wiring",
      "Fixing overloaded multi-outlet setups",
      "Installing proper grounding where needed",
      "Replacing outdated or unsafe devices",
    ],
    keywords: [
      "electrical code correction NYC",
      "safe wiring upgrade",
      "licensed insured electrician",
      "electrical safety inspection repair",
    ],
    cta: callCta,
  },
  {
    name: "Emergency & Same-Day Electrical Help",
    description:
      "When urgent issues happen, we provide same-day response when available. Priority is making the property safe and restoring essential circuits quickly.",
    commonJobs: [
      "No power emergency troubleshooting",
      "Burning smell and hot outlet response",
      "Sparking switch or panel checks",
      "Immediate temporary safety shutdowns and repairs",
    ],
    keywords: [
      "emergency electrician NYC",
      "same day electrician Manhattan",
      "urgent electrical repair Queens",
      "24 hour electrician near me",
    ],
    cta: callCta,
  },
];
