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
import { JsonLd } from "@/src/components/JsonLd";
import { Section } from "@/src/components/Section";
import { SectionHeader } from "@/src/components/SectionHeader";
import { ServiceGrid } from "@/src/components/ServiceGrid";
import { TestimonialStrip } from "@/src/components/TestimonialStrip";
import { TrustBadges } from "@/src/components/TrustBadges";
import { createPageMetadata } from "@/src/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqPageSchema,
  getHomeReviewsSchema,
  getLocalBusinessSchema,
} from "@/src/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "NYC Electrician in Manhattan, Brooklyn, Queens & Staten Island | 45 EYE Electrical Solutions",
  description:
    "Licensed electrician NYC for residential and small commercial properties. 45 EYE covers Manhattan, Brooklyn, Queens, and Staten Island with electrical troubleshooting NYC expertise, panel upgrades NYC planning, and EV charger installation NYC guidance.",
  path: "/",
  keywords: [
    "NYC electrician",
    "licensed electrician NYC",
    "Manhattan electrician",
    "Brooklyn electrician",
    "Queens electrician",
    "Staten Island electrician",
    "electrical troubleshooting NYC",
    "panel upgrades NYC",
    "EV charger installation NYC",
  ],
  ogTitle: "Licensed NYC Electrician | Manhattan, Brooklyn, Queens, Staten Island",
  ogDescription:
    "45 EYE Electrical Solutions is a licensed electrician NYC serving Manhattan, Brooklyn, Queens, Staten Island, and selective Long Island areas for repairs, panel upgrades, and EV charging support.",
  twitterTitle: "NYC Electrician | 45 EYE Electrical Solutions",
  twitterDescription:
    "Call 646-710-0134 for responsive NYC electrician service and electrical troubleshooting support across Manhattan, Brooklyn, Queens, and Staten Island.",
});

export default function HomePage() {
  const homeReviewsSchema = getHomeReviewsSchema();
  const homeFaqSchema = getFaqPageSchema(faqs);
  const homeBusinessSchema = getLocalBusinessSchema("/");
  const homeBreadcrumbSchema = getBreadcrumbSchema([{ name: "Home", path: "/" }]);
  const homeProjectGallery = workGallery.slice(0, 3);
  const serviceAreaLinks = [
    { name: "Manhattan", href: "/manhattan-electrician" },
    { name: "Brooklyn", href: "/brooklyn-electrician" },
    { name: "Queens", href: "/queens-electrician" },
    { name: "Staten Island", href: "/staten-island-electrician" },
    { name: "Long Island", href: "/service-areas#long-island-electrician" },
  ];

  return (
    <>
      <Section className="bg-[var(--bg)] pt-4 pb-8">
        <HeroSection />
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <TrustBadges />
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface card-muted space-y-7">
          <SectionHeader
            eyebrow="Services"
            title="NYC electrical service categories that move projects forward"
            description="From troubleshooting to panel upgrades, every service scope starts with clear communication and safe execution."
            action={<CallCTA label={`Call ${business.phone}`} />}
          />
          <ServiceGrid items={serviceBuckets} />
          <p className="text-measure-tight text-sm leading-relaxed text-muted-strong">
            For urgent issues, we can provide a priority NYC electrician visit when scheduling allows.
            We handle breaker diagnostics, circuit repairs, and fuse-box changes across older and modern
            systems. 45 EYE also supports residential and light commercial service requests, including
            practical inspection prep and wiring upgrades aligned to daily occupancy needs.
          </p>
          <p className="text-measure-tight text-sm leading-relaxed text-muted-soft">
            If you need reliable electrical support in Manhattan, Brooklyn, Queens, or Staten Island,
            45 EYE Electrical Solutions can help you move from diagnosis to a practical scope. As a
            licensed electrician in NYC, Eli handles{" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              panel upgrades
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
            <span>Need the full scope before you decide?</span>
            <Link href="/services" className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline">
              View all services on the services page
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface card-muted">
          <SectionHeader
            eyebrow="Process"
            title="A clear, code-aware service process"
            description="Every request follows a practical three-step flow: diagnose, plan, execute with coordinated access."
          />
          <div className="mt-6 grid gap-5 border-t border-[var(--border)] pt-6 md:grid-cols-3">
            {[
              {
                title: "Diagnose",
                description: "We confirm the root issue, verify access requirements, and validate scope before work starts.",
              },
              {
                title: "Options",
                description: "You receive clear repair or upgrade options with practical timing and cost drivers.",
              },
              {
                title: "Clean execution",
                description: "Work is executed with safety checks, clean cleanup, and documented status updates.",
              },
            ].map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface card-muted space-y-6">
          <p className="eyebrow">Service Areas</p>
          <h2 className="type-h2">NYC neighborhoods and boroughs we serve</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {business.serviceAreas.map((area) => {
              const areaHref =
                area === "Select Long Island areas"
                  ? "/service-areas#long-island-electrician"
                  : area === "Staten Island"
                    ? "/staten-island-electrician"
                    : `/${area.toLowerCase()}-electrician`;

              return (
                <li
                  key={area}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--text)]"
                >
                  <Link href={areaHref} className="hover:text-[var(--accent)] hover:underline hover:underline-offset-4">
                    {area}
                  </Link>
                </li>
              );
            })}
            {serviceAreaLinks.map((area) => (
              <li key={area.name} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium">
                <Link
                  href={area.href}
                  className="text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                >
                  {area.name} electrician
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[var(--muted)]">
            Ready to move your project forward in your area?{" "}
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
            or the{" "}
            <Link
              href="/service-areas"
              className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
            >
              service areas page
            </Link>
            .
          </p>
          <p className="text-measure-tight text-sm leading-relaxed text-[var(--muted)]">
            We serve apartments, brownstones, co-ops, storefronts, and offices throughout Manhattan,
            Brooklyn, Queens, Staten Island, and select Long Island areas. That mix helps us plan
            work that balances safety, tenant access, and realistic scheduling—whether the job is a
            focused repair or a broader update.
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
            title="Project gallery from recent NYC service work"
            description="Recent field photos from panel, wiring, and lighting projects in occupied properties."
          />
          <GalleryGrid items={homeProjectGallery} />
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface space-y-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="Client feedback from recent service calls"
            description="NYC homeowners and business owners cite clear communication, tidy work, and on-time follow-through."
            action={<CallCTA label={`Call ${business.phone}`} />}
          />
          <div className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-4 shadow-[0_16px_46px_-34px_rgba(0,0,0,0.8)]">
            <TestimonialStrip items={testimonials} mode="home" />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <p className="text-[var(--muted)]">See what clients are saying or leave a review on Google.</p>
            <Link
              href="https://share.google/o9OYY0QfX99jh1UKC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
            >
              Read Reviews on Google
            </Link>
            <Link
              href="https://g.page/r/CWTdV7IkHlXoEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
            >
              Leave a Google Review
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="card-surface space-y-6">
          <SectionHeader
            eyebrow="FAQs"
            title="FAQs before you schedule"
            description="Practical answers on response timing, coverage, and what happens on first arrival."
          />
          <FAQAccordion items={faqs} mode="home" />
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
              Need a callback request?
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface space-y-4">
          <h2 className="type-h2">Authority guide: electrical service in NYC</h2>
          <div className="text-measure text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
            <p>
              Choosing the right electrician in NYC is less about speed alone and more about who
              understands the building context. Older wiring routes, shared service paths, and
              mixed-use occupancy can turn a simple symptom into a layered condition. In Brooklyn
              brownstones, Lower Manhattan commercial properties, Midtown retail units, and Queens
              housing portfolios, the strongest outcomes come from practical troubleshooting tied to
              code-aware execution. Across Manhattan, Brooklyn, Queens, Staten Island, and selected
              Long Island communities, 45 EYE starts with clear diagnostics, then moves to corrective
              work with minimal disruption and practical recommendations.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              Why Electrical Work in NYC Requires Experience
            </h3>
            <p className="mt-2">
              NYC buildings are rarely uniform. A single neighborhood can have multiple vintages of
              electrical architecture within a few blocks. In that context, the experienced electrician
              does more than replace parts: they interpret old panel logic, assess load patterns, and
              keep safety-first priorities consistent while adapting to access constraints, noise
              sensitivity, and property management expectations.
            </p>
            <p className="mt-3">
              Experience is especially valuable when evaluating where a{" "}
              <Link
                href="/services#electrical-troubleshooting-and-repairs"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                repair path
              </Link>{" "}
              can fix a problem versus where a partial or full
              <Link
                href="/services#panel-upgrades-and-service-changes"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                panel upgrade
              </Link>
              {" "}is the right investment. We also help clients in Williamsburg, Queens, and{" "}
              <Link
                href="/manhattan-electrician"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                Manhattan
              </Link>
              neighborhoods by turning technical findings into clear scheduling decisions.
            </p>
            <p className="mt-3">
              In co-op and multi-unit buildings, this expertise includes coordinating with building
              conditions so work can be completed safely without unnecessary tenant downtime. The best
              outcome is not always the fastest option; it is the one that keeps occupants safe and
              operations running.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              When to Upgrade Your Electrical Panel in NYC
            </h3>
            <p className="mt-2">
              A panel upgrade becomes the right move when current capacity no longer supports modern
              loads. Frequent indicators include repeated trips under normal use, warm breaker behavior
              after kitchen appliance use, repeated temporary fixes, and mismatch between circuit layout
              and modern electrical demand. In Manhattan high-rise and Brooklyn apartments, these
              symptoms often surface after remodels, added equipment, or tenant changes.
            </p>
            <p className="mt-3">
              Older properties may still operate on legacy panels that were never designed for
              continuous modern loads. In practical terms, this is where a licensed electrician helps
              compare immediate repair options against longer-term reliability upgrades before any
              major equipment commitment. Review the full scope in our{" "}
              <Link
                href="/services#panel-upgrades-and-service-changes"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                service change and panel upgrade
              </Link>{" "}
              planning before any equipment commitment.
            </p>
            <p className="mt-3">
              For owners in Queens and Staten Island balancing active occupancy with upgrades,
              timing and staging often matter as much as hardware selection. A practical plan usually
              includes temporary safety management, permit timing, and scope notes for future projects.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              Signs You Need a Licensed NYC Electrician
            </h3>
            <p className="mt-2">
              Not every task belongs to DIY channels, especially in dense urban buildings. You should
              get professional support when breaker trips become repetitive, when outlets fail in a
              pattern, or when you notice burning smell, unusual panel heat, or intermittent power
              loss. These are not timing windows for guesswork.
            </p>
            <p className="mt-3">
              Licensed professionals are required where code interpretation, inspection readiness, and
              long-term reliability are part of the outcome. In Williamsburg and Midtown Manhattan,
              this often includes safety review before major remodels, tenant turnovers, and commercial
              handover windows. For a practical scope check, start with{" "}
              <Link
                href="/services#electrical-troubleshooting-and-repairs"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                troubleshooting
              </Link>{" "}
              and{" "}
              <Link
                href="/services#outlet-switch-and-gfci-upgrades"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                outlet and GFCI upgrades
              </Link>{" "}
              in our service paths.
            </p>
            <p className="mt-3">
              The advantage is straightforward: decisions become documented, compliant, and reversible,
              not improvised.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              EV Charger Installation in NYC Buildings
            </h3>
            <p className="mt-2">
              EV infrastructure is now a normal part of home and small-business planning in NYC. In
              practice, charger work is part upgrade, part load-management planning. The strongest
              outcomes start with a load review and service alignment for the specific building profile,
              followed by dedicated circuit planning and compatible hardware decisions.
            </p>
            <p className="mt-3">
              In service-dense corridors where parking and mixed-use constraints are common, a clear
              plan avoids under-sized installs and future rework. Review the dedicated EV and load
              planning paths:{" "}
              <Link
                href="/services#ev-charger-installation"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                EV charger installation
              </Link>{" "}
              and{" "}
              <Link
                href="/services#dedicated-circuits"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                dedicated circuits
              </Link>
              , especially in Queens and Brooklyn.
            </p>
            <p className="mt-3">
              Where utility coordination is a factor, early conversation with Eli usually reduces delays.
              We align installation options to practical usage, approval timing, and expected daily load
              patterns.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              Emergency vs Non-Emergency Electrical Calls
            </h3>
            <p className="mt-2">
              Emergencies require immediate safety focus: no power to key rooms, active sparking, hot
              panel signs, or hazards after water events. In these situations the first action is
              diagnosis, safe isolation, and stabilization.
            </p>
            <p className="mt-3">
              Non-emergency work benefits from planned sequencing. Renovation support, panel tuning,
              routine inspections, and upgrades for service quality usually gain from early scheduling
              because they depend on building coordination, permit timing, and material planning.
            </p>
            <p className="mt-3">
              Use the services page as your practical decision map:{" "}
              <Link
                href="/services#electrical-troubleshooting-and-repairs"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                troubleshooting
              </Link>
              ,{" "}
              <Link
                href="/services#commercial-electrical-service-calls"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                commercial response
              </Link>
              , and{" "}
              <Link
                href="/services#code-corrections-and-safety-improvements"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                safety corrections
              </Link>
              to match urgency and scope.
            </p>
            <p className="mt-6">
              From Midtown Manhattan to Long Island-area projects, the most reliable route is a clear
              first call and one coordinated plan. Call now for immediate triage, or review the right
              scope first and then contact for scheduling.
            </p>
            <p className="mt-4">
              <Link
                href="/services"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                Browse all services
              </Link>
              {" "}
              |{" "}
              <Link
                href="/service-areas"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                Explore NYC service areas
              </Link>
              {" "}
              |{" "}
              <Link
                href="/contact#contact-request"
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                Contact Eli
              </Link>
            </p>
            <div className="mt-5">
              <CallCTA label={`Call ${business.phone}`} />
            </div>
          </div>
        </div>
      </Section>

      <JsonLd id="schema-home-business" data={homeBusinessSchema} />
      <JsonLd id="schema-home-faq" data={homeFaqSchema} />
      <JsonLd id="schema-home-reviews" data={homeReviewsSchema} />
      <JsonLd id="schema-home-breadcrumbs" data={homeBreadcrumbSchema} />
    </>
  );
}
