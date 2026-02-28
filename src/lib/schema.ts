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
    description:
      "Licensed and insured, owner-operated by Eli, providing residential and light commercial electrical service across NYC.",
    areaServed: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Staten Island",
      "Select Long Island areas",
    ].map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function getServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceBuckets.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.description,
        provider: {
          "@id": `${SITE_URL}#business`,
        },
        areaServed: business.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
      },
    })),
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
    name: business.brandName,
    telephone: normalizedPhone,
    email: business.email,
    url: new URL(path, SITE_URL).toString(),
    areaServed: [areaName, "Manhattan", "Brooklyn", "Queens", "Staten Island", "Select Long Island areas"],
  };
}
