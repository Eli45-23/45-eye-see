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
];
