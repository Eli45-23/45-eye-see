import type { Metadata } from "next";
import { getLocalAreaPage } from "@/src/content/localAreaPages";
import { LocalAreaPageTemplate } from "@/src/components/LocalAreaPageTemplate";
import { getLocalAreaElectricianSchema } from "@/src/lib/schema";

const content = getLocalAreaPage("queens-electrician");

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: {
    canonical: "https://45eyeelectricalsolutions.com/queens-electrician",
  },
  openGraph: {
    title: content.title,
    description: content.description,
    url: "https://45eyeelectricalsolutions.com/queens-electrician",
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

export default function QueensElectricianPage() {
  const schema = getLocalAreaElectricianSchema(content.areaName, "/queens-electrician");

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
