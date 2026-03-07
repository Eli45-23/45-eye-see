import { business } from "./business";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: readonly FaqItem[] = [
  {
    question: "Do you service all of NYC?",
    answer:
      "Yes. We are NYC-based and regularly serve Manhattan, Brooklyn, Queens, and Staten Island, plus select Long Island areas.",
  },
  {
    question: "Can I get same-day electrical service?",
    answer:
      "Same-day appointments are available based on schedule and job urgency. Call early at " +
      business.phone +
      " so we can confirm availability and dispatch timing.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. 45 EYE Electrical Solutions LLC is licensed and insured, and all work is completed with safety and compliance in mind.",
  },
  {
    question: "Do I need a permit for my electrical project?",
    answer:
      "Permit requirements depend on the scope of work and local regulations. We explain when permits are needed and help you understand the right path before work begins.",
  },
  {
    question: "How long do typical electrical jobs take?",
    answer:
      "Simple repairs can often be completed in a single visit, while larger upgrades may require more time. After diagnosing the issue, we provide a clear timeline and next steps.",
  },
  {
    question: "Do you provide troubleshooting before major replacements?",
    answer:
      "Yes. We prioritize diagnosis first so you can make informed decisions. In many cases, targeted repairs can solve the issue without unnecessary replacement work.",
  },
  {
    question: "Will I get pricing details before work starts?",
    answer:
      "Yes. We provide clear scope and pricing expectations before starting approved work, so there are no surprises. We do not proceed with added work without your approval.",
  },
  {
    question: "What types of properties do you work on?",
    answer:
      "We service apartments, houses, condos, retail storefronts, and offices. We also support property managers and landlords handling turnovers or renovations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All payment types are accepted. If you have a specific payment question, call ahead and we will confirm details before scheduling.",
  },
  {
    question: "How do I book a service call?",
    answer:
      "Call " +
      business.phone +
      " or email " +
      business.email +
      ". Sharing your neighborhood, issue details, and urgency helps us schedule the right service window.",
  },
  {
    question: "What permits are usually needed for electrician work in NYC?",
    answer:
      "Permit requirements vary by borough and scope. Minor troubleshooting work may be handled as maintenance in some cases, while panel upgrades, new circuits, and major rewiring often require permit review through city process. We confirm permit expectations early and help keep scope and documentation aligned before major changes begin.",
  },
  {
    question: "How long does panel upgrade scheduling usually take in NYC?",
    answer:
      "Timeline depends on permit requirements, parts availability, building coordination, and weather or access constraints. Simple diagnostics can often be done quickly, while bigger upgrades may need longer lead time for inspections, material staging, and access approvals.",
  },
  {
    question: "What warning signs suggest my NYC home has aging wiring?",
    answer:
      "Frequent breaker trips, warm receptacles, intermittent flicker, buzzing switches, or unexplained outages can indicate worn wiring paths. If you also notice old-looking fuse systems, damaged insulation, or recurrent device failures, a diagnostic electrician visit is the right next step.",
  },
  {
    question: "How do you assess legacy fuse boxes in older NYC buildings?",
    answer:
      "Legacy fuse systems are reviewed for safety and capacity first. In many cases, replacement planning includes load mapping, service disconnect safety checks, and staged recommendations so owners understand whether repair, fuse-to-breaker conversion, or panel-level upgrades are most appropriate.",
  },
  {
    question: "Do you handle co-op board or super access for NYC apartments?",
    answer:
      "Yes. For co-ops and managed properties, we work around access rules, board requirements, and schedule windows so electrical work stays organized and compliant. We provide practical status updates as each phase is completed.",
  },
  {
    question: "Are pricing estimates based on service type and property conditions?",
    answer:
      "Yes, pricing is driven by actual scope, urgency, and building conditions such as age of wiring, access restrictions, and required testing. We provide a clear scope and estimate framework before additional work, and we do not proceed with major upgrades without approval.",
  },
  {
    question: "What determines whether you recommend repair, partial upgrade, or panel replacement?",
    answer:
      "The decision is based on load condition, safety risk, equipment age, and expected service pattern. We compare options transparently so you can choose practical fixes where appropriate or plan larger updates when they improve reliability and long-term safety.",
  },
  {
    question: "Can you service electrical issues in Williamsburg, Lower Manhattan, and Midtown?",
    answer:
      "Yes. We regularly support Williamsburg, Lower Manhattan, and Midtown Manhattan neighborhoods as part of our core NYC service footprint. We also support related requests in Brooklyn, Queens, Staten Island, and select Long Island areas.",
  },
];
