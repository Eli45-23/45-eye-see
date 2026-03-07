import { business } from "@/src/content/business";
import { faqs, type FaqItem } from "@/src/content/faqs";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { SITE_URL } from "@/src/lib/seo";

const normalizedPhone = `+1${business.phone.replace(/\D/g, "")}`;

type BreadcrumbItem = {
  name: string;
  path: `/${string}`;
};

type BusinessService = (typeof serviceBuckets)[number];

const businessAreaServed = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Staten Island",
  "Select Long Island areas",
];

const businessPaymentMethods = ["Card", "Zelle", "Cash"];

const ownerPerson = {
  "@type": "Person",
  name: "Eli",
};

const baseBusinessDescription =
  "Licensed & insured electrician servicing residential and light commercial properties across NYC. Same-day scheduling when possible.";

function getAreaServed() {
  return businessAreaServed.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  }));
}

function buildServiceAreaList(services = serviceBuckets) {
  return services.map((service) => ({
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    areaServed: getAreaServed(),
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}#business`,
    },
  }));
}

export function getLocalBusinessSchema(path: `/${string}` = "/") {
  const pageUrl = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician", "Contractor"],
    "@id": `${SITE_URL}#business`,
    name: business.brandName,
    legalName: business.businessNameLegal,
    url: pageUrl,
    telephone: normalizedPhone,
    email: business.email,
    description: baseBusinessDescription,
    owner: ownerPerson,
    areaServed: getAreaServed(),
    paymentAccepted: businessPaymentMethods,
    serviceType: ["Residential electrical service", "Light commercial electrical service"],
  };
}

export function getServiceSchema(service: BusinessService, position: number) {
  return {
    "@type": "ListItem",
    position,
    item: {
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.description,
      provider: {
        "@id": `${SITE_URL}#business`,
      },
      areaServed: getAreaServed(),
      serviceOutput: service.commonJobs.map((job) => job),
    },
  };
}

export function getServiceListSchema(services: readonly BusinessService[] = serviceBuckets) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => getServiceSchema(service, index + 1)),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "45 EYE Electrical Services",
      itemListElement: buildServiceAreaList(services),
    },
  };
}

export function getFaqPageSchema(items: readonly FaqItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getHomeReviewsSchema() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return {
    "@context": "https://schema.org",
    "@graph": featuredTestimonials.map((item, index) => ({
      "@type": "Review",
      "@id": `${SITE_URL}#review-${index + 1}`,
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewBody: item.quote,
      itemReviewed: {
        "@id": `${SITE_URL}#business`,
      },
      about: item.serviceType,
      publisher: {
        "@id": `${SITE_URL}#business`,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function getLocalAreaElectricianSchema(areaName: string, path: `/${string}`) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": `${SITE_URL}#business`,
    name: business.brandName,
    telephone: normalizedPhone,
    email: business.email,
    url: new URL(path, SITE_URL).toString(),
    owner: ownerPerson,
    description: baseBusinessDescription,
    paymentAccepted: businessPaymentMethods,
    areaServed: [{ "@type": "AdministrativeArea", name: areaName }, ...getAreaServed().filter((area) => area.name !== areaName)],
    serviceType: ["Residential electrical service", "Light commercial electrical service"],
  };
}
