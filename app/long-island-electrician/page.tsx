import type { Metadata } from "next";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { LocalAreaPageTemplate } from "@/src/components/LocalAreaPageTemplate";
import { getLocalAreaElectricianSchema } from "@/src/lib/schema";

const content = getLocalAreaPage("long-island-electrician");

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: {
    canonical: "https://45eyeelectricalsolutions.com/long-island-electrician",
  },
  openGraph: {
    title: content.title,
    description: content.description,
    url: "https://45eyeelectricalsolutions.com/long-island-electrician",
    siteName: "45 EYE Electrical Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.description,
  },
};

export default function LongIslandElectricianPage() {
  const schema = getLocalAreaElectricianSchema(content.areaName, "/long-island-electrician");

  return (
    <>
      <LocalAreaPageTemplate content={content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
