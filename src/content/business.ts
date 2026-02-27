export type BusinessContent = {
  businessNameLegal: string;
  brandName: string;
  publicName: string;
  phone: string;
  email: string;
  locationLabel: string;
  serviceAreas: readonly string[];
  mustMentionNeighborhoods: readonly string[];
  differentiators: readonly string[];
  primaryGoal: string;
};

export const business: BusinessContent = {
  businessNameLegal: "45 EYE Electrical Solutions LLC",
  brandName: "45 EYE Electrical Solutions",
  publicName: "Eli the Electrician",
  phone: "646-710-0134",
  email: "eli.the.electrician@gmail.com",
  locationLabel: "NYC-based",
  serviceAreas: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "Staten Island",
    "Select Long Island areas",
  ],
  mustMentionNeighborhoods: [
    "Williamsburg",
    "Lower Manhattan",
    "Midtown Manhattan",
    "Queens",
  ],
  differentiators: [
    "Licensed & insured",
    "10+ years experience",
    "Same-day service",
    "Competitive pricing",
    "All payment types accepted",
  ],
  primaryGoal: "Service calls (phone calls)",
};
