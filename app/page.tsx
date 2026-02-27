import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { HeroSection } from "@/src/components/HeroSection";
import { SectionHeader } from "@/src/components/SectionHeader";
import { ServiceGrid } from "@/src/components/ServiceGrid";
import { TestimonialStrip } from "@/src/components/TestimonialStrip";
import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata({
  page: "Home",
  path: "/",
  focus:
    "NYC electrician coverage for Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas, with full-service electrical support from troubleshooting to upgrades.",
});

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />

      <section className="section-light space-y-5 rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Services"
          title="Electrical service categories"
          description="From troubleshooting to upgrades, every service call is handled with a clean finish and safety-first process."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <ServiceGrid items={serviceBuckets} />
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>Need full scope details?</span>
          <Link href="/services" className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline">
            View all services on the services page
          </Link>
        </div>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-lg sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8cbff6]">Service Areas</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trusted electrical service coverage across core NYC boroughs
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Williamsburg", "Lower Manhattan", "Midtown Manhattan", "Queens"].map((area) => (
            <span
              key={area}
              className="rounded-full border border-[#2f4f78] bg-[#17345a] px-3 py-1 text-xs font-medium text-[#dbeaff]"
            >
              {area}
            </span>
          ))}
        </div>
        <ul className="mt-5 list-inside list-disc space-y-1 text-sm text-[#d2e3fa]">
          <li>Manhattan (excluding the Bronx)</li>
          <li>Queens</li>
          <li>Brooklyn</li>
          <li>Staten Island</li>
          <li>Select Long Island areas</li>
        </ul>
        <div className="mt-6">
          <CallCTA label="Call now" />
        </div>
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say about recent service calls"
          description="Recent reviews from homeowners and commercial clients across NYC neighborhoods."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <TestimonialStrip items={testimonials} mode="home" />
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Common questions before scheduling"
          description="Clear answers about service timing, coverage, and what to expect during your visit."
        />
        <FAQAccordion items={faqs.slice(0, 6)} mode="home" />
        <div className="flex flex-wrap items-center gap-4">
          <CallCTA label={`Call ${business.phone}`} />
          <Link href="/contact#contact-request" className="text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline">
            Contact page for callback request
          </Link>
        </div>
      </section>
    </div>
  );
}
