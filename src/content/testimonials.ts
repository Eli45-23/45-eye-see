export type Testimonial = {
  name: string;
  area: string;
  quote: string;
  serviceType: string;
  status: "TODO_REPLACE_WITH_VERIFIED_REVIEW";
};

// TODO: Replace these placeholders with real customer reviews from Thumbtack before publishing testimonials publicly.
export const testimonials: readonly Testimonial[] = [
  {
    name: "R. Martinez",
    area: "Astoria, Queens",
    quote:
      "Eli diagnosed a tricky breaker issue in one visit and explained everything in plain terms. The repair was clean, fast, and the power has been stable since.",
    serviceType: "Troubleshooting and repair",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
  {
    name: "D. Cohen",
    area: "Williamsburg, Brooklyn",
    quote:
      "We needed updated outlets and GFCI protection during a kitchen refresh. Eli arrived on time, worked neatly, and gave us confidence in the final setup.",
    serviceType: "Outlet and GFCI upgrades",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
  {
    name: "K. Singh",
    area: "Midtown Manhattan",
    quote:
      "Our office had recurring flicker problems that two people could not solve. Eli traced the issue quickly and fixed it without disrupting our workday.",
    serviceType: "Commercial electrical service call",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
  {
    name: "A. Russo",
    area: "Staten Island",
    quote:
      "The panel upgrade was smooth from start to finish. Eli communicated clearly, kept the workspace tidy, and completed everything on schedule.",
    serviceType: "Panel upgrade",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
  {
    name: "M. Thompson",
    area: "Lower Manhattan",
    quote:
      "I called for a same-day electrical issue and got a quick response. Eli made the area safe immediately and finished the repair the same afternoon.",
    serviceType: "Same-day emergency repair",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
  {
    name: "J. Rivera",
    area: "Long Island City, Queens",
    quote:
      "We hired Eli for new lighting and dimmers across our apartment. He helped us choose practical options and the final result looks great.",
    serviceType: "Lighting installation",
    status: "TODO_REPLACE_WITH_VERIFIED_REVIEW",
  },
];
