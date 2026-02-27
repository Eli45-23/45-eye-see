import Link from "next/link";
import type { Metadata } from "next";
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
import { SITE_URL } from "@/src/lib/seo";
import { getFaqPageSchema, getHomeReviewsSchema } from "@/src/lib/schema";

const homeTitle = "NYC Electrician | 45 EYE Electrical Solutions (Licensed & Insured)";
const homeDescription =
  "Need fast electrical service in NYC? Call 646-710-0134 for licensed, insured repairs, upgrades, and same-day availability when possible.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    siteName: business.brandName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function HomePage() {
  const homeReviewsSchema = getHomeReviewsSchema();
  const homeFaqSchema = getFaqPageSchema(faqs.slice(0, 6));

  return (
    <>
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
          <p className="text-sm leading-relaxed text-[#c9d7ea]">
            For urgent issues, you can call for an emergency electrician NYC service visit when
            scheduling allows. We handle circuit breaker repair and fuse box replacement with a
            safety-first approach that fits older and modern systems. 45 EYE Electrical Solutions
            supports residential and light commercial electrician work, including electrical
            inspection requests and practical wiring upgrades.
          </p>
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
            Trusted electrical service across core NYC boroughs
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[#2f4f78] bg-[#17345a] px-3 py-1 text-xs font-medium text-[#dbeaff]"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-[#c9d7ea]">
            We regularly work in NYC apartments, brownstones, co-ops, retail storefronts, and
            office spaces with different electrical demands and building constraints. That range of
            day-to-day service experience helps us diagnose issues quickly and plan upgrades that
            fit real-world use. Whether the job is a targeted repair or broader electrical update,
            our process stays clean, code-aware, and practical for occupied properties.
          </p>
          <div className="mt-6">
            <CallCTA label="Call now" />
          </div>
        </section>

        <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
          <p className="text-sm leading-relaxed text-[#d2e3fa]">
            If you need an NYC electrician for repair work, upgrades, or new installations, 45 EYE
            Electrical Solutions provides responsive service for homes and businesses. As a licensed
            electrician in NYC, Eli handles{" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              panel upgrade options
            </Link>
            ,{" "}
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              EV charger installation
            </Link>
            , and{" "}
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              electrical troubleshooting
            </Link>{" "}
            with a safety-first process and clean finish.
          </p>
        </section>

        <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Why Choose 45 EYE Electrical Solutions
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#d2e3fa]">
            <li>Licensed and insured service with code-aware electrical work.</li>
            <li>Safety-first troubleshooting and installation on every service call.</li>
            <li>Clean, organized finish work that respects occupied homes and businesses.</li>
            <li>Clear communication on scope, findings, and next-step options.</li>
            <li>Dependable scheduling with same-day availability when possible.</li>
          </ul>
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
          <p className="text-sm leading-relaxed text-[#c9d7ea]">
            In Manhattan and Brooklyn, clients often request{" "}
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              electrical troubleshooting
            </Link>
            , while Queens and Staten Island service calls frequently include{" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              panel upgrades
            </Link>{" "}
            and{" "}
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              EV charger installation
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <CallCTA label={`Call ${business.phone}`} />
            <Link href="/contact#contact-request" className="text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline">
              Contact page for callback request
            </Link>
          </div>
        </section>

        <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Professional Electrical Services Across NYC
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
            <p>
              Finding the right NYC electrician is often about more than getting power back on.
              Property owners and managers usually need someone who can diagnose the root issue,
              explain what is happening in plain language, and complete work that is safe,
              code-aware, and practical for the building. As a licensed electrician in NYC, 45 EYE
              Electrical Solutions focuses on clear scope, clean execution, and repair decisions
              that match real operating needs. The goal is dependable electrical performance, not
              temporary patches that create repeat calls.
            </p>
            <p>
              Day-to-day service work includes apartments, brownstones, co-ops, retail storefronts,
              and office spaces where conditions vary by age, layout, and existing wiring quality.
              Many requests start with
              {" "}
              <Link
                href="/services#electrical-troubleshooting-and-repairs"
                className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
              >
                electrical troubleshooting
              </Link>
              {" "}
              because nuisance outages, flickering circuits, and recurring trips can have multiple
              causes. A troubleshooting-first approach helps identify whether the right fix is
              targeted circuit breaker repair, a corrected connection, or a broader system update.
              That method supports both residential electrician NYC calls and complex commercial
              electrician NYC service visits where downtime and safety are critical concerns.
            </p>
            <p>
              Service planning also accounts for borough-specific realities across Manhattan,
              Brooklyn, Queens, and Staten Island, where infrastructure and load expectations can
              differ from one property to the next. In older buildings, fuse box replacement and
              wiring upgrades are common when systems can no longer support modern appliances or
              business equipment reliably. In newer renovations, the need is often capacity and
              distribution strategy, including
              {" "}
              <Link
                href="/services#panel-upgrades-and-service-changes"
                className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
              >
                panel upgrades
              </Link>
              {" "}
              and service changes that improve stability, safety, and future flexibility.
            </p>
            <p>
              Electrical projects increasingly include dedicated charging infrastructure as well.
              For property owners evaluating
              {" "}
              <Link
                href="/services#ev-charger-installation"
                className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
              >
                EV charger installation
              </Link>
              , the process should include load review, equipment suitability, and installation
              details that align with manufacturer requirements and local standards. The same
              discipline applies to electrical inspection requests before renovations, tenant
              turnovers, or occupancy changes. Verifying system condition before major work reduces
              avoidable surprises and supports better decisions on repair versus replacement.
            </p>
            <p>
              When urgent issues appear, an emergency electrician NYC response should prioritize
              immediate safety first, then controlled restoration of essential circuits. A reliable
              process means isolating hazards, documenting findings, and recommending next steps
              based on condition rather than assumptions. This is how 45 EYE Electrical Solutions
              approaches service calls across both homes and business properties: diagnose
              thoroughly, communicate clearly, and complete code-conscious work that holds up under
              daily use.
            </p>
          </div>
        </section>
      </div>

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
