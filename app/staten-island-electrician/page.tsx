import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { boroughLandingPages } from "@/src/content/boroughLandingPages";
import { createPageMetadata } from "@/src/lib/seo";

const content = boroughLandingPages.find((item) => item.slug === "staten-island-electrician")!;

export const metadata: Metadata = createPageMetadata({
  page: content.pageTitle,
  path: "/staten-island-electrician",
  focus: content.metaFocus,
});

export default function StatenIslandElectricianPage() {
  return <BoroughLandingPage content={content} />;
}
