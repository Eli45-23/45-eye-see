import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-forest-hills");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Forest Hills electrician",
    "Queens electrician",
    "panel upgrade Forest Hills",
    "appliance circuits Forest Hills",
    "electrician near Forest Hills",
  ],
});

export default function ForestHillsElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-forest-hills-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-forest-hills-business" data={businessSchema} />
    </>
  );
}
