import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-lower-manhattan");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Lower Manhattan electrician",
    "NYC electrician Lower Manhattan",
    "retail electrician Lower Manhattan",
    "office electrician Lower Manhattan",
    "service upgrade Lower Manhattan",
  ],
});

export default function LowerManhattanElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-lower-manhattan-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-lower-manhattan-business" data={businessSchema} />
    </>
  );
}
