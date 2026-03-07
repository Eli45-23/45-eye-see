import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-upper-east-side");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Upper East Side electrician",
    "UES electrician",
    "co-op electrician UES",
    "panel upgrade Upper East Side",
    "lighting upgrade Upper East Side",
  ],
});

export default function UpperEastSideElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-ues-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-ues-business" data={businessSchema} />
    </>
  );
}
