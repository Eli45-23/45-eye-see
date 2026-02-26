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

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_30px_70px_-52px_rgba(4,32,74,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Services"
          title="Electrical service categories"
          description="From troubleshooting to upgrades, every service call is handled with a clean finish and safety-first process."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <ServiceGrid items={serviceBuckets} />
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span>Need full scope details?</span>
          <Link href="/services" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
            View all services on the services page
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_28px_70px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say about recent service calls"
          description="Recent reviews from homeowners and commercial clients across NYC neighborhoods."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <TestimonialStrip items={testimonials} />
      </section>

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_28px_70px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Common questions before scheduling"
          description="Clear answers about service timing, coverage, and what to expect during your visit."
        />
        <FAQAccordion items={faqs.slice(0, 6)} />
        <div className="flex flex-wrap items-center gap-4">
          <CallCTA label={`Call ${business.phone}`} />
          <Link href="/contact#contact-request" className="text-sm font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
            Contact page for callback request
          </Link>
        </div>
      </section>
    </div>
  );
}
