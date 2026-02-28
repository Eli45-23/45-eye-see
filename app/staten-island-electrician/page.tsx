import type { Metadata } from "next";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { LocalAreaPageTemplate } from "@/src/components/LocalAreaPageTemplate";
import { getLocalAreaElectricianSchema } from "@/src/lib/schema";

const content = getLocalAreaPage("staten-island-electrician");

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: {
    canonical: "https://45eyeelectricalsolutions.com/staten-island-electrician",
  },
  openGraph: {
    title: content.title,
    description: content.description,
    url: "https://45eyeelectricalsolutions.com/staten-island-electrician",
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

export default function StatenIslandElectricianPage() {
  const schema = getLocalAreaElectricianSchema(content.areaName, "/staten-island-electrician");

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
