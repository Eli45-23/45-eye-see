import type { Metadata } from "next";
import { BoroughLandingPage } from "@/src/components/BoroughLandingPage";
import { boroughLandingPages } from "@/src/content/boroughLandingPages";
import { createPageMetadata } from "@/src/lib/seo";

const content = boroughLandingPages.find((item) => item.slug === "brooklyn-electrician")!;

export const metadata: Metadata = createPageMetadata({
  page: content.pageTitle,
  path: "/brooklyn-electrician",
  focus: content.metaFocus,
});

export default function BrooklynElectricianPage() {
  return <BoroughLandingPage content={content} />;
}
