import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-long-island-city");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Long Island City electrician",
    "Queens electrician",
    "LIC electrician",
    "EV charger installation LIC",
    "dedicated circuits LIC",
  ],
});

export default function LongIslandCityElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-lic-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-lic-business" data={businessSchema} />
    </>
  );
}
