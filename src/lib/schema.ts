import { business } from "@/src/content/business";
import { faqs, type FaqItem } from "@/src/content/faqs";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { SITE_URL } from "@/src/lib/seo";

const normalizedPhone = `+1${business.phone.replace(/\D/g, "")}`;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": `${SITE_URL}#business`,
    name: business.brandName,
    legalName: business.businessNameLegal,
    url: SITE_URL,
    telephone: normalizedPhone,
    email: business.email,
    description: `${business.locationLabel} electrician offering licensed and insured electrical service with same-day availability when possible.`,
    areaServed: business.serviceAreas.map((area) => ({
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
