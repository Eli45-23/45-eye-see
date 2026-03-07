import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-williamsburg");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Williamsburg electrician",
    "Brooklyn electrician",
    "mixed-use electrician Williamsburg",
    "panel upgrade Williamsburg",
    "lighting upgrades Williamsburg",
  ],
});

export default function WilliamsburgElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-williamsburg-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-williamsburg-business" data={businessSchema} />
    </>
  );
}
