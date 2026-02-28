import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/src/content/business";
import { CTASection } from "@/src/components/CTASection";
import { ServiceAreasCoverage } from "@/src/components/ServiceAreasCoverage";
import { SITE_URL } from "@/src/lib/seo";

const boroughCards = [
  { label: "Manhattan", href: "/manhattan-electrician" },
  { label: "Brooklyn", href: "/brooklyn-electrician" },
  { label: "Queens", href: "/queens-electrician" },
  { label: "Staten Island", href: "/staten-island-electrician" },
  { label: "Long Island (Select Areas)", href: "/long-island-electrician" },
] as const;

const pageTitle = "NYC Electrician Service Areas | 45 EYE Electrical Solutions";
const pageDescription =
  "Service areas for 45 EYE Electrical Solutions across Manhattan, Brooklyn, Queens, Staten Island, and select Long Island areas.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/service-areas`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/service-areas`,
    siteName: business.brandName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="space-y-8">
      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8cbff6]">Service Areas</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          NYC Electrician Service Areas
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#d2e3fa]">
          45 EYE Electrical Solutions provides licensed and insured electrical service across core
          NYC boroughs, with select Long Island project support based on scope and scheduling.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boroughCards.map((card) => (
          <article
            key={card.label}
            className="section-elevated rounded-2xl border border-white/10 p-5 shadow-lg shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-white">{card.label}</h2>
            <p className="mt-2 text-sm text-[#c9d7ea]">
              View local service details, common property types, and internal service links.
            </p>
            <Link
              href={card.href}
              className="mt-4 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              Open local page
            </Link>
          </article>
        ))}
      </section>

      <ServiceAreasCoverage />
      <CTASection heading="Need an NYC electrician today?" />
    </div>
  );
}
