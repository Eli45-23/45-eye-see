import type { Metadata } from "next";
import { NeighborhoodPage } from "@/src/components/NeighborhoodPage";
import { getNeighborhoodPage } from "@/src/content/neighborhoods";
import { JsonLd } from "@/src/components/JsonLd";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/src/lib/schema";

const content = getNeighborhoodPage("electrician-midtown-manhattan");

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
  keywords: [
    "Midtown Manhattan electrician",
    "office electrician Midtown",
    "retail electrician Midtown",
    "lighting repair Midtown",
    "electrical troubleshooting Midtown",
  ],
});

export default function MidtownManhattanElectricianPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/${content.slug}` },
  ]);
  const businessSchema = getLocalBusinessSchema(`/${content.slug}`);

  return (
    <>
      <NeighborhoodPage content={content} />
      <JsonLd id="schema-midtown-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-midtown-business" data={businessSchema} />
    </>
  );
}
