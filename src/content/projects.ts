export type ProjectCase = {
  slug: string;
  title: string;
  location: string;
  borough: "Manhattan" | "Brooklyn" | "Queens";
  summary: string;
  keywords: string[];
  problem: string;
  siteConditions: string[];
  diagnosis: string;
  workPerformed: string[];
  safetyNotes: string[];
  outcome: string;
};

export const projects: readonly ProjectCase[] = [
  {
    slug: "brooklyn-brownstone-200-amp-upgrade",
    title: "200A panel upgrade in a Brooklyn brownstone",
    location: "Brooklyn, NY",
    borough: "Brooklyn",
    summary:
      "Upgraded a brownstone from an aging 100A fuse setup to a 200A breaker panel to support modern appliances and future EV charging.",
    keywords: ["panel upgrade", "service change", "brownstone", "Brooklyn electrician"],
    problem:
      "Homeowners planned kitchen upgrades and mini-split HVAC, but the existing 100A fuse panel overheated under current load and lacked space for new circuits.",
    siteConditions: [
      "Occupied brownstone with limited shutdown windows",
      "Mixed legacy wiring with partial labeling",
      "Tight cellar access and shared gas/water lines nearby",
    ],
    diagnosis:
      "Load calculations showed the existing service was undersized. Multiple fused disconnects fed tandem circuits with unclear labeling, creating nuisance trips and heat at lugs.",
    workPerformed: [
      "Coordinated utility shutdown and installed new 200A meter pan and main breaker panel",
      "Separated kitchen, laundry, and HVAC onto dedicated breakers with updated labeling",
      "Re-terminated branch circuits with new torque specs and added AFCI/GFCI protection where required",
      "Planned spare capacity and conduit path for future EV charger circuit",
    ],
    safetyNotes: [
      "Verified bonding/grounding and replaced deteriorated grounding electrode conductor",
      "Applied torque verification on all terminations and documented panel labeling",
      "Maintained clearance and working space per NEC and local requirements",
    ],
    outcome:
      "New 200A service with cooler operation, clear labeling, and open spaces for future projects. Homeowners can add appliances and a charger without nuisance trips.",
  },
  {
    slug: "manhattan-office-partial-power-troubleshooting",
    title: "Troubleshooting partial power loss in a Manhattan office",
    location: "Manhattan, NY",
    borough: "Manhattan",
    summary:
      "Resolved intermittent power loss in a mid-rise office suite caused by a failing multi-wire branch circuit and loose neutral terminations.",
    keywords: ["troubleshooting", "office", "Manhattan electrician", "partial outage"],
    problem:
      "An office floor experienced random workstation and lighting outages on one side of the suite, disrupting operations and causing data loss.",
    siteConditions: [
      "Active office during business hours with limited downtime tolerance",
      "Ceiling plenum pathways with existing low-voltage cabling",
      "Shared multi-wire branch circuits serving cubicle rows",
    ],
    diagnosis:
      "Infrared and voltage drop testing identified a loose neutral on a multi-wire branch circuit feeding several receptacle runs. Heat signatures and voltage imbalance matched reported dropouts.",
    workPerformed: [
      "Scheduled phased shutdowns outside peak hours to open junction points and correct terminations",
      "Re-terminated neutrals and hots on the shared circuit and replaced worn receptacles",
      "Balanced loads across phases and updated panel schedules for the suite",
    ],
    safetyNotes: [
      "Confirmed neutral continuity and polarity after repairs",
      "Documented labeling for shared circuits to reduce future troubleshooting time",
      "Maintained clearance around IT racks and protected low-voltage cabling during access",
    ],
    outcome:
      "Stable power with no further dropouts, reduced heat at terminations, and clear labeling for facilities staff. Office operations continued without additional interruptions.",
  },
  {
    slug: "queens-garage-ev-charger-installation",
    title: "EV charger installation in a Queens garage",
    location: "Queens, NY",
    borough: "Queens",
    summary:
      "Installed a Level 2 EV charger in a detached garage with a load calculation and dedicated circuit routed through existing conduit.",
    keywords: ["ev charger", "Queens electrician", "dedicated circuit", "garage"],
    problem:
      "Homeowner needed reliable Level 2 charging but the detached garage had only general lighting power fed from the main house.",
    siteConditions: [
      "Detached garage with existing conduit path and limited interior wall space",
      "Main panel inside the house with modest spare capacity",
      "Cold-weather exposure requiring appropriate outdoor-rated equipment",
    ],
    diagnosis:
      "Load calculation confirmed capacity for a 40A EV circuit. Existing conduit was adequate for new conductors with proper derating and terminations.",
    workPerformed: [
      "Pulled new conductors through existing conduit to the detached garage",
      "Installed a dedicated 40A breaker and EV receptacle/charger mount with proper working clearance",
      "Tested voltage and charger commissioning, confirming GFCI-protection requirements",
    ],
    safetyNotes: [
      "Used outdoor-rated components and ensured drip loops where exposed",
      "Verified GFCI/grounding per manufacturer and code requirements",
      "Labeled panel for the new EV circuit and provided homeowner usage guidance",
    ],
    outcome:
      "Homeowner now has dependable overnight charging with a dedicated, labeled circuit and code-compliant installation ready for future vehicle upgrades.",
  },
];
