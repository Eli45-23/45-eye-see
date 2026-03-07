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
    { name: "Manhattan", href: "/services#manhattan-electrician" },
    { name: "Brooklyn", href: "/services#brooklyn-electrician" },
    { name: "Queens", href: "/services#queens-electrician" },
    { name: "Staten Island", href: "/services#staten-island-electrician" },
    { name: "Long Island", href: "/services#long-island-electrician" },
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
          <h2 className="type-h2">NYC service areas we actively serve</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {business.serviceAreas.map((area) => {
              const areaHref =
                area === "Select Long Island areas"
                  ? "/services#long-island-electrician"
                  : area === "Staten Island"
                    ? "/services#staten-island-electrician"
                    : `/services#${area.toLowerCase()}-electrician`;

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
              Contact page for callback request
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="card-surface space-y-4">
          <h2 className="type-h2">Authority guide: electrical service in NYC</h2>
          <div className="text-measure text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
            <p>
              Finding the right NYC electrician is less about “who has a fast response” and more
              about who understands urban electrical systems as living infrastructure. Older wiring
              routes, shared service paths, occupancy-driven upgrades, and mixed-use spaces can turn
              a simple symptom into a layered condition. In Brooklyn brownstones, Lower Manhattan
              commercial condos, Midtown retail units, and Queens residential portfolios, the highest
              value outcome comes from combining practical troubleshooting with code-aware execution.
              For many projects across Manhattan, Brooklyn, Queens, Staten Island, and selected Long
              Island communities, 45 EYE Electrical Solutions starts with clear diagnostics and
              scopes tied to realistic use, then moves to corrective electrical work with minimal
              disruption and documented recommendations.
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
                className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                panel upgrade
              </Link>
              is the right investment. They also help clients in Williamsburg, Queens, and
              <Link
                href="/services#manhattan-electrician"
                className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                Manhattan
              </Link>
              neighborhoods by translating technical findings into clear scheduling decisions.
            </p>
            <p className="mt-3">
              In co-op and multi-unit environments, this expertise includes coordinating around
              building conditions so work can happen safely without creating avoidable tenant downtime.
              The best outcome is rarely the loudest or fastest option; it is the option that keeps
              occupants safe, meets requirements, and stays practical for the building’s ongoing use.
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
              compare immediate electrical repair options against longer-term reliability upgrades.
              Browse the full scope in
              <Link
                href="/services#panel-upgrades-and-service-changes"
                className="mx-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                service change and panel upgrade
              </Link>
              planning before any equipment commitment.
            </p>
            <p className="mt-3">
              For owners in Queens and Staten Island balancing active occupancy with upgrades,
              timing and staging often matter as much as hardware selection. A clear work plan usually
              includes temporary safety management, permit review when required, and scope notes for
              future projects.
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
              Licensed professionals are required for situations where code interpretation, inspection
              readiness, and long-term reliability are part of the outcome. In Williamsburg and
              Midtown Manhattan, this often includes safety review before major remodels, tenant
              turnovers, and commercial handover windows. For a practical scope check, connect
              first with our trusted routes in{" "}
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
              </Link>
              .
            </p>
            <p className="mt-3">
              The advantage is straightforward: decisions become documented, compliant, and reversible,
              not improvised.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              EV Charger Installation in NYC Buildings
            </h3>
            <p className="mt-2">
              EV infrastructure is now a normal part of household and small commercial planning in
              NYC. In practice, charger work is part upgrade, part load-management exercise. The best
              route starts with load review and service alignment for the specific building profile.
              That is why projects often pair electrical capacity checks with dedicated circuit
              planning and manufacturer-compatible hardware decisions.
            </p>
            <p className="mt-3">
              On service-intensive corridors where parking constraints and mixed use are common, a
              strong electrical strategy avoids under-sized installs and future rework. Explore the full
              path in the EV section and review related power planning options for dedicated
              equipment support:
              <Link
                href="/services#ev-charger-installation"
                className="ml-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                EV charger installation
              </Link>
              {" "}&
              <Link
                href="/services#dedicated-circuits"
                className="ml-1 font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                dedicated circuits
              </Link>
              , especially in Queens and Brooklyn.
            </p>
            <p className="mt-3">
              Where coverage depends on building-specific utility coordination, early conversation with
              Eli is faster than a large scope. We align installation options to practical usage and
              expected daily load patterns.
            </p>

            <h3 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text)]">
              Emergency vs Non-Emergency Electrical Calls
            </h3>
            <p className="mt-2">
              Emergencies require immediate safety focus: no power to key rooms, active sparking,
              hot panel signs, or hazardous conditions after flooding or weather events. In these
              cases the first action is diagnosis, isolation, and safe stabilization.
            </p>
            <p className="mt-3">
              Non-emergency work benefits from planned sequencing. Renovation support, panel tuning,
              routine inspections, and upgrades for service quality usually gain from early scheduling
              because they depend on building coordination and material planning. For clients in
              Staten Island, Queens, Brooklyn, and Manhattan, this usually improves outcome quality
              and reduces repeated access constraints.
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
              first call and one coordinated plan. Call now when you need immediate triage, or review
              the right scope first and contact for scheduling.
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
                href="/services#service-areas"
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
