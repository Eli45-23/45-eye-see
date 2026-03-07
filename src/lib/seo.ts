import type { Metadata } from "next";
import { business } from "@/src/content/business";

const DEFAULT_SITE_URL = "https://45eyeelectricalsolutions.com";
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL;

export const SITE_URL = envSiteUrl.endsWith("/") ? envSiteUrl.slice(0, -1) : envSiteUrl;

const titleSuffix = `${business.brandName} (${business.publicName}) | NYC Electrician`;

export function buildSeoTitle(page: string): string {
  return `${page} | ${titleSuffix}`;
}

export function buildSeoDescription(pageFocus: string): string {
  return `${business.businessNameLegal} is licensed and insured, NYC-based, and offers same-day electrical service when available across ${business.serviceAreas.join(", ")}. Call ${business.phone} for service. ${pageFocus}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: "summary_large_image" | "summary";
};

const defaultSeoImage = {
  url: "/brand/logo-45-eye.png",
  width: 1200,
  height: 800,
  alt: `${business.brandName} logo`,
};

export function createSeoKeywords(keywords: readonly string[]) {
  return keywords.join(", ");
}

export function createPageMetadata(input: PageSeoInput): Metadata {
  const title = input.title;
  const description = input.description;
  const url = new URL(input.path, SITE_URL).toString();
  const ogTitle = input.ogTitle ?? title;
  const ogDescription = input.ogDescription ?? description;
  const twitterTitle = input.twitterTitle ?? ogTitle;
  const twitterDescription = input.twitterDescription ?? ogDescription;
  const keywords = input.keywords ? [...input.keywords] : [];
  const twitterCard = input.twitterCard ?? "summary_large_image";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: business.brandName,
      type: "website",
      locale: "en_US",
      images: [defaultSeoImage],
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [defaultSeoImage],
    },
  };
}

export function createAreaMetadata(input: {
  area: string;
  path: `/${string}`;
  titlePrefix?: string;
  descriptionPrefix?: string;
  keywords?: string[];
}): Metadata {
  const area = input.area;
  const title = `${input.titlePrefix ?? `${area} Electrician`} | ${business.publicName} | NYC Electrician`;
  const description = `${input.descriptionPrefix ?? `${area} electrician`} serving ${area} property owners and tenants with reliable electrical troubleshooting NYC support, panel upgrades NYC readiness, and EV charger installation NYC planning.`.trim();
  return createPageMetadata({
    title,
    description,
    path: input.path,
    keywords: input.keywords ?? [
      `${area} electrician`,
      `licensed electrician ${area}`,
      "electrical troubleshooting NYC",
      "panel upgrades NYC",
      "EV charger installation NYC",
      "NYC electrician",
    ],
    ogTitle: `${area} electrician | ${business.publicName}`,
    ogDescription: description,
    twitterTitle: `${area} electrician | ${business.publicName}`,
    twitterDescription: description,
  });
}

export function createServiceAreaMetadata(input: {
  path: "/service-areas" | `/${string}` | `/${string}/${string}`;
  title?: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  return createPageMetadata({
    title: input.title ?? "NYC Electrical Service Areas | 45 EYE Electrical Solutions",
    description:
      input.description ??
      `Service-area guidance for NYC electrician coverage in Manhattan, Brooklyn, Queens, Staten Island, and selective Long Island communities with direct dispatch and scoped planning.`,
    path: input.path,
    keywords:
      input.keywords ?? [
        "NYC electrician",
        "licensed electrician NYC",
        "borough electrical coverage",
        "service areas",
      ],
    ogTitle: input.title ?? "NYC Electrical Service Areas | 45 EYE Electrical Solutions",
    ogDescription:
      input.description ??
      "NYC electrician service-area support for Manhattan, Brooklyn, Queens, Staten Island, and selective Long Island coverage.",
    twitterTitle: input.title ?? "NYC Electrical Service Areas | 45 EYE Electrical Solutions",
    twitterDescription:
      input.description ??
      "Borough-by-borough electrician support across Manhattan, Brooklyn, Queens, and Staten Island.",
  });
}

export function createBoroughMetadata(input: {
  borough: "Manhattan" | "Brooklyn" | "Queens" | "Staten Island" | string;
  path: `/${string}`;
  description?: string;
  keywords?: string[];
}): Metadata {
  const borough = input.borough;
  const title = `${borough} Electrician | NYC | ${business.publicName}`;
  const description =
    input.description ??
    `Licensed electrician ${borough} service for homes and businesses with practical electrical troubleshooting NYC planning, panel upgrades NYC readiness, and EV charger installation NYC support.`;

  return createPageMetadata({
    title,
    description,
    path: input.path,
    keywords: input.keywords ?? [
      `${borough} electrician`,
      "licensed electrician NYC",
      "NYC electrician",
      "electrical troubleshooting NYC",
      "panel upgrades NYC",
      "EV charger installation NYC",
    ],
    ogTitle: `${borough} Electrician | 45 EYE Electrical Solutions`,
    ogDescription: description,
    twitterTitle: `${borough} Electrician | 45 EYE Electrical Solutions`,
    twitterDescription: description,
  });
}
