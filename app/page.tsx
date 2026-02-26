import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { FeaturePills } from "@/src/components/FeaturePills";
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
      <HeroSection points={business.differentiators} />

      <section className="rounded-3xl border border-[#d6e7fb] bg-gradient-to-r from-[#f8fbff] via-white to-[#fff7e8] px-5 py-6 shadow-[0_26px_64px_-48px_rgba(4,34,74,0.45)] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0a66c2]">Trusted, Licensed &amp; Insured</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#12253f] sm:text-3xl">NYC-focused electrical partner for rapid, dependable service calls.</h2>
          </div>
          <CallCTA label={`Call ${business.phone}`} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            "Licensed & insured electrical work",
            "Same-day response when available",
            "Clean, code-aware installations",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#dbe8f7] bg-white px-4 py-3 text-sm font-medium text-[#1a3858]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <FeaturePills items={business.differentiators} />

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

      <section className="rounded-3xl border border-[#dce8f8] bg-gradient-to-r from-[#0b1f3a] to-[#113868] px-6 py-8 text-white shadow-[0_34px_74px_-50px_rgba(2,23,50,0.68)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ec5ff]">Service Areas</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Manhattan, Queens, Brooklyn, Staten Island, and select Long Island coverage
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-blue-100">
          We schedule across core NYC boroughs with frequent work in Williamsburg, Lower
          Manhattan, Midtown Manhattan, and Queens.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {business.serviceAreas.map((area) => (
            <span key={area} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">
              {area}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <CallCTA label={`Call ${business.phone}`} />
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
