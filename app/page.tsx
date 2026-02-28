import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { workGallery } from "@/src/content/gallery";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { HeroSection } from "@/src/components/HeroSection";
import { GalleryGrid } from "@/src/components/GalleryGrid";
import { Section } from "@/src/components/Section";
import { SectionHeader } from "@/src/components/SectionHeader";
import { ServiceGrid } from "@/src/components/ServiceGrid";
import { TestimonialStrip } from "@/src/components/TestimonialStrip";
import { createPageMetadata } from "@/src/lib/seo";
import { getFaqPageSchema, getHomeReviewsSchema } from "@/src/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "NYC Electrician Home",
  description:
    "NYC electrician services from Eli the Electrician at 45 EYE Electrical Solutions. Licensed electrician NYC support for troubleshooting, upgrades, and same-day availability when possible.",
  path: "/",
  ogTitle: "NYC Electrician | Licensed Electrician NYC",
  ogDescription:
    "45 EYE Electrical Solutions delivers licensed, insured NYC electrician service for homes and businesses across Manhattan, Queens, Brooklyn, and Staten Island.",
  twitterTitle: "NYC Electrician | 45 EYE Electrical Solutions",
  twitterDescription:
    "Call 646-710-0134 for licensed electrician NYC service and same-day scheduling when available.",
});

export default function HomePage() {
  const homeReviewsSchema = getHomeReviewsSchema();
  const homeFaqSchema = getFaqPageSchema(faqs.slice(0, 6));
  const homeProjectGallery = workGallery.slice(0, 3);

  return (
    <>
      <Section className="bg-[var(--bg)] pt-4 pb-8">
        <HeroSection />
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface card-muted space-y-7">
          <SectionHeader
            eyebrow="Services"
            title="Electrical service categories"
            description="From troubleshooting to upgrades, every service call is handled with a clean finish and safety-first process."
            action={<CallCTA label={`Call ${business.phone}`} />}
          />
          <ServiceGrid items={serviceBuckets} />
          <p className="text-measure-tight text-sm leading-relaxed text-muted-strong">
            For urgent issues, you can call for an emergency electrician NYC service visit when
            scheduling allows. We handle circuit breaker repair and fuse box replacement with a
            safety-first approach that fits older and modern systems. 45 EYE Electrical Solutions
            supports residential and light commercial electrician work, including electrical
            inspection requests and practical wiring upgrades.
          </p>
          <p className="text-measure-tight text-sm leading-relaxed text-muted-soft">
            If you need an NYC electrician for repair work, upgrades, or new installations, 45 EYE
            Electrical Solutions provides responsive service for homes and businesses. As a licensed
            electrician in NYC, Eli handles{" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              panel upgrade options
            </Link>
            ,{" "}
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              EV charger installation
            </Link>
            , and{" "}
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              electrical troubleshooting
            </Link>{" "}
            with a safety-first process and clean finish.
          </p>
          <div className="flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
            <span>Need full scope details?</span>
            <Link href="/services" className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline">
              View all services on the services page
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface card-muted">
          <div className="grid gap-3.5 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Owner-operated (Eli)",
              "Licensed & insured",
              "Residential + light commercial",
              "Troubleshooting-first process",
            ].map((item) => (
              <p key={item} className="text-center font-medium tracking-[0.01em] text-[var(--text)]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface card-muted">
          <SectionHeader
            eyebrow="Process"
            title="A clear, code-aware service process"
            description="Every call follows a simple three-step workflow focused on safety, clarity, and clean workmanship."
          />
          <div className="mt-6 grid gap-5 border-t border-[var(--border)] pt-6 md:grid-cols-3">
            {[
              {
                title: "Diagnose",
                description: "We identify the root issue and confirm the scope before work begins.",
              },
              {
                title: "Options",
                description: "You get clear repair or upgrade paths with practical next steps.",
              },
              {
                title: "Clean execution",
                description: "Code-aware work delivered with a tidy finish and clear communication.",
              },
            ].map((step) => (
              <div key={step.title} className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{step.title}</p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface card-muted space-y-6">
          <p className="eyebrow">Service Areas</p>
          <h2 className="type-h2">Trusted electrical service across core NYC boroughs</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--text)]"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[var(--muted)]">
            Ready to book service in your area?{" "}
            <Link
              href="/contact#contact-request"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              Contact Eli now
            </Link>{" "}
            or review the{" "}
            <Link
              href="/services"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              full services page
            </Link>
            .
          </p>
          <p className="text-measure-tight text-sm leading-relaxed text-[var(--muted)]">
            We regularly work in NYC apartments, brownstones, co-ops, retail storefronts, and
            office spaces with different electrical demands and building constraints. That range of
            day-to-day service experience helps us diagnose issues quickly and plan upgrades that
            fit real-world use. Whether the job is a targeted repair or broader electrical update,
            our process stays clean, code-aware, and practical for occupied properties.
          </p>
          <div className="mt-6">
            <CallCTA label={`Call ${business.phone}`} />
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface space-y-6">
          <SectionHeader
            eyebrow="Project Gallery"
            title="Recent field work snapshots"
            description="A quick look at panel, conduit, and lighting outcomes from recent jobs."
          />
          <GalleryGrid items={homeProjectGallery} />
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface space-y-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="What clients say about recent service calls"
            description="Recent reviews from homeowners and commercial clients across NYC neighborhoods."
            action={<CallCTA label={`Call ${business.phone}`} />}
          />
          <TestimonialStrip items={testimonials} mode="home" />
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface space-y-6">
          <SectionHeader
            eyebrow="FAQs"
            title="Common questions before scheduling"
            description="Clear answers about service timing, coverage, and what to expect during your visit."
          />
          <FAQAccordion items={faqs.slice(0, 6)} mode="home" />
          <p className="text-measure-tight text-sm leading-relaxed text-[var(--muted)]">
            In Manhattan and Brooklyn, clients often request{" "}
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              electrical troubleshooting
            </Link>
            , while Queens and Staten Island service calls frequently include{" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              panel upgrades
            </Link>{" "}
            and{" "}
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              EV charger installation
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-4">
            <CallCTA label={`Call ${business.phone}`} />
            <Link href="/contact#contact-request" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline">
              Contact page for callback request
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface space-y-4">
          <h2 className="type-h2">Professional Electrical Services Across NYC</h2>
          <div className="text-measure text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
            <p>
              Finding the right NYC electrician is often about more than getting power back on.
              Property owners and managers usually need someone who can diagnose the root issue,
              explain what is happening in plain language, and complete work that is safe,
              code-aware, and practical for the building. As a licensed electrician in NYC, 45 EYE
              Electrical Solutions focuses on clear scope, clean execution, and repair decisions
              that match real operating needs. The goal is dependable electrical performance, not
              temporary patches that create repeat calls.
            </p>
            <p className="mt-4">
              Day-to-day service work includes apartments, brownstones, co-ops, retail storefronts,
              and office spaces where conditions vary by age, layout, and existing wiring quality.
              Many requests start with{" "}
              <Link
                href="/services#electrical-troubleshooting-and-repairs"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                electrical troubleshooting
              </Link>{" "}
              because nuisance outages, flickering circuits, and recurring trips can have multiple
              causes. A troubleshooting-first approach helps identify whether the right fix is
              targeted circuit breaker repair, a corrected connection, or a broader system update.
              That method supports both residential service calls and complex light commercial
              electrical work where downtime and safety are critical concerns.
            </p>
            <p className="mt-4">
              Service planning also accounts for borough-specific realities across Manhattan,
              Brooklyn, Queens, and Staten Island, where infrastructure and load expectations can
              differ from one property to the next. In older buildings, fuse box replacement and
              wiring upgrades are common when systems can no longer support modern appliances or
              business equipment reliably. In newer renovations, the need is often capacity and
              distribution strategy, including{" "}
              <Link
                href="/services#panel-upgrades-and-service-changes"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                panel upgrades
              </Link>{" "}
              and service changes that improve stability, safety, and future flexibility.
            </p>
            <p className="mt-4">
              Electrical projects increasingly include dedicated charging infrastructure as well.
              For property owners evaluating{" "}
              <Link
                href="/services#ev-charger-installation"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                EV charger installation
              </Link>
              , the process should include load review, equipment suitability, and installation
              details that align with manufacturer requirements and local standards. The same
              discipline applies to electrical inspection requests before renovations, tenant
              turnovers, or occupancy changes. Verifying system condition before major work reduces
              avoidable surprises and supports better decisions on repair versus replacement.
            </p>
            <p className="mt-4">
              When urgent issues appear, an emergency electrician response in NYC should prioritize
              immediate safety first, then controlled restoration of essential circuits. A reliable
              process means isolating hazards, documenting findings, and recommending next steps
              based on condition rather than assumptions. This is how 45 EYE Electrical Solutions
              approaches service calls across both homes and business properties: diagnose
              thoroughly, communicate clearly, and complete code-conscious work that holds up under
              daily use.
            </p>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeReviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
    </>
  );
}
