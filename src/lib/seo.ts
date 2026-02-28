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
  page: string;
  path: `/${string}`;
  focus: string;
};

export function createPageMetadata(input: PageSeoInput): Metadata {
  const title = input.page;
  const description = buildSeoDescription(input.focus);
  const url = new URL(input.path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.brandName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
