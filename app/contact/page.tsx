import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { testimonials } from "@/src/content/testimonials";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { ContactForm } from "@/src/components/ContactForm";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { JsonLd } from "@/src/components/JsonLd";
import { SectionHeader } from "@/src/components/SectionHeader";
import { TestimonialStrip } from "@/src/components/TestimonialStrip";
import { createPageMetadata } from "@/src/lib/seo";
import { getBreadcrumbSchema, getFaqPageSchema, getLocalBusinessSchema } from "@/src/lib/schema";

export const metadata = createPageMetadata({
  title: "Contact 45 EYE Electrical Solutions | Licensed Electrician NYC",
  description:
    "Contact a licensed electrician NYC for service coordination. Reach Eli the Electrician for troubleshooting, panel upgrades NYC requests, EV charger installation NYC planning, and emergency triage guidance.",
  path: "/contact",
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
  ogTitle: "Contact 45 EYE Electrical Solutions | NYC Electrician",
  ogDescription:
    "Book your NYC electrician service request with 45 EYE Electrical Solutions. Call first for scheduling, then follow up through the callback form.",
  twitterTitle: "Contact Eli the Electrician",
  twitterDescription:
    "Request NYC electrician service by phone or callback form. 45 EYE supports Manhattan, Brooklyn, Queens, and Staten Island service requests.",
});

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ] as const;
  const faqSchema = getFaqPageSchema();
  const localBusinessSchema = getLocalBusinessSchema("/contact");
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="space-y-8">
      <section id="contact-request" className="section-light rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", isCurrent: true }]} />
        <SectionHeader
          eyebrow="Contact"
          title="Contact 45 EYE Electrical Solutions"
          headingLevel={1}
          description="Call first for the fastest scheduling; the callback form is available if you prefer to write details."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <CallCTA label={`Call ${business.phone}`} />
            <p className="text-sm text-muted">Calling is best for urgent issues. For planned work, the form helps us capture details.</p>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">Response time</p>
              <p className="mt-1 text-sm text-muted">
                Fast response during business hours. Same-day or after-hours slots may be available for outages or safety concerns when scheduling allows.
              </p>
            </div>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">What to include in your request</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>Phone number and contact name</li>
                <li>Borough or neighborhood, and building type (co-op, condo, brownstone, storefront, office, detached home)</li>
                <li>Issue details: breakers tripping, flicker, outlets, panel heat, EV charger request, or planned remodel scope</li>
                <li>Best callback window, site access notes, and any urgency or shutdown limits</li>
                <li>Any relevant photos (if possible)</li>
              </ul>
            </div>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">Service areas</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Manhattan, Brooklyn, Queens, Staten Island, and selective Long Island coverage. Frequent routes include Williamsburg, Lower Manhattan, Midtown, and Queens hubs.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/service-areas" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  View service areas
                </Link>
                <Link href="/manhattan-electrician" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  Manhattan
                </Link>
                <Link href="/brooklyn-electrician" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  Brooklyn
                </Link>
                <Link href="/queens-electrician" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  Queens
                </Link>
                <Link href="/staten-island-electrician" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  Staten Island
                </Link>
              </div>
            </div>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">Share feedback</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                If we recently completed work for you, a short Google review helps other NYC clients compare options.
              </p>
              <Link
                href="https://g.page/r/CWTdV7IkHlXoEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
              >
                Leave a Google Review
              </Link>
            </div>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">Find us on Google Maps</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Need directions or want to verify service coverage? Check the Google listing for route and service info.
              </p>
              <Link
                href="https://maps.app.goo.gl/Em8vxRDsrcMmg3Xz5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
              >
                View us on Google Maps
              </Link>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {business.mustMentionNeighborhoods.map((area) => {
                const areaAnchor =
                  area === "Williamsburg"
                    ? "brooklyn-electrician"
                    : area === "Queens"
                      ? "queens-electrician"
                      : "manhattan-electrician";

                return (
                  <li
                    key={area}
                    className="section-elevated rounded-lg border border-[var(--border)] px-3 py-2"
                  >
                    Frequent service in{" "}
                    <Link
                      href={`/${areaAnchor}`}
                      className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
                    >
                      {area}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Customer feedback"
          description="Representative comments from recent NYC service calls."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <TestimonialStrip items={testimonials} />
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions before booking"
          description="Answers about service areas, timing, permits, and how we stage work."
        />
        <FAQAccordion items={faqs} />
        <div className="flex flex-wrap gap-3">
          <CallCTA label={`Call ${business.phone}`} />
          <Link
            href="/services#electrical-troubleshooting-and-repairs"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Service scope guidance
          </Link>
          <Link
            href="/services#panel-upgrades-and-service-changes"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Panel upgrade details
          </Link>
          <Link
            href="/service-areas#long-island-electrician"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            View service area options
          </Link>
          <Link
            href="/service-areas"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Open service areas hub
          </Link>
        </div>
      </section>

      <section className="section-elevated rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Before you request service</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/services" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Review electrical services and common job scopes
            </Link>
          </li>
          <li>
            <Link href="/service-areas" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Review local service areas
            </Link>
          </li>
          <li>
            <Link href="/manhattan-electrician" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Manhattan electrician details
            </Link>
          </li>
          <li>
            <Link href="/brooklyn-electrician" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Brooklyn electrician details
            </Link>
          </li>
          <li>
            <Link href="/queens-electrician" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Queens electrician details
            </Link>
          </li>
          <li>
            <Link href="/staten-island-electrician" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Staten Island electrician details
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Return to home for service area and trust details
            </Link>
          </li>
        </ul>
      </section>

      <JsonLd id="schema-contact-faq" data={faqSchema} />
      <JsonLd id="schema-contact-business" data={localBusinessSchema} />
      <JsonLd id="schema-contact-breadcrumbs" data={breadcrumbSchema} />
    </div>
  );
}
