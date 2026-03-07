import { business } from "./business";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: readonly FaqItem[] = [
  {
    question: "Do you service all of NYC?",
    answer:
      "Yes. Manhattan, Brooklyn, Queens, and Staten Island are covered regularly, with selective Long Island work when schedule and scope fit.",
  },
  {
    question: "Do you offer emergency or same-day calls?",
    answer:
      "When scheduling allows, we take same-day or after-hours calls for outages, tripping breakers, or safety concerns. Call " +
      business.phone +
      " to check the next available window.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. 45 EYE Electrical Solutions LLC is licensed and insured. Work is completed with code awareness, clear documentation, and clean finish standards.",
  },
  {
    question: "Do I need a permit for my electrical project?",
    answer:
      "Permits depend on scope. Panel upgrades, new circuits, and service changes often need permit review, while targeted troubleshooting or device swaps may not. We confirm requirements up front and handle the process when permits are needed.",
  },
  {
    question: "How long does panel upgrade scheduling usually take in NYC?",
    answer:
      "Panel and service upgrades often require permit review, material staging, and building coordination. Diagnostics are quick; full upgrades can take days to a few weeks depending on approvals and access windows.",
  },
  {
    question: "What warning signs suggest aging wiring?",
    answer:
      "Repeated breaker trips, warm or buzzing devices, flicker under normal load, or visible fuse equipment are common signs. If you notice these, schedule a diagnostic visit before planning renovations or heavy appliance use.",
  },
  {
    question: "How do you handle co-op or building access?",
    answer:
      "We coordinate with supers, boards, and management for elevator use, shutdown windows, and insurance or permit documents. Quiet-hour and protection rules are followed so common areas stay clean and compliant.",
  },
  {
    question: "Do you troubleshoot before recommending replacement?",
    answer:
      "Yes. Diagnosis comes first. Many outages or nuisance trips can be resolved with targeted repairs or load balancing instead of full replacement. When larger work is justified, we explain why and outline options.",
  },
  {
    question: "What types of properties do you work on?",
    answer:
      "Apartments, co-ops, condos, brownstones, townhouses, detached homes, retail storefronts, small offices, and light commercial spaces. We also support turnovers and renovation teams.",
  },
  {
    question: "How do you price electrical work?",
    answer:
      "Pricing depends on scope, urgency, building rules, permit needs, and existing wiring condition. You get a clear estimate and approval step before we begin any additional work.",
  },
  {
    question: "Do you provide troubleshooting before major replacements?",
    answer:
      "Yes. We prioritize diagnosis so you can decide between a focused repair, partial upgrade, or panel change. That keeps projects practical and avoids unnecessary demolition.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Card, Zelle, and cash are accepted. If your building or company requires a specific method, let us know when booking.",
  },
  {
    question: "How should I prepare for a service visit?",
    answer:
      "Share the issue, building type, neighborhood, and access constraints when booking. Clear the immediate work area and secure pets. For panel work, note any shutdown restrictions so we can plan the right sequence.",
  },
  {
    question: "What’s the difference between emergency and non-emergency calls?",
    answer:
      "Emergency calls cover safety or loss of power situations and are scheduled first when possible. Non-emergency work like upgrades, outlet additions, or lighting plans is scheduled to optimize building access and material staging.",
  },
  {
    question: "Do you handle panel upgrades and dedicated circuits?",
    answer:
      "Yes. We add dedicated circuits for HVAC, laundry, kitchens, offices, and EV chargers, and plan panel or service upgrades when capacity, safety, or inspection results require it.",
  },
  {
    question: "How do you assess legacy fuse boxes in older NYC buildings?",
    answer:
      "We review load, conductor condition, and disconnect safety. Recommendations may be a targeted repair, fuse-to-breaker conversion, or panel/service upgrade depending on risk and future load.",
  },
  {
    question: "Can you service Williamsburg, Lower Manhattan, and Midtown?",
    answer:
      "Yes. Those neighborhoods are part of our core routes, along with broader Manhattan, Brooklyn, Queens, Staten Island, and selective Long Island coverage.",
  },
];
