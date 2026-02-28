import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { ContactForm } from "@/src/components/ContactForm";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { SectionHeader } from "@/src/components/SectionHeader";
import { TestimonialStrip } from "@/src/components/TestimonialStrip";
import { createPageMetadata } from "@/src/lib/seo";
import { getFaqPageSchema, getLocalBusinessSchema } from "@/src/lib/schema";

export const metadata = createPageMetadata({
  title: "Contact NYC Electrician",
  description:
    "Contact Eli the Electrician for licensed electrician NYC service requests. Fast response, same-day availability when possible, and coverage across core NYC boroughs.",
  path: "/contact",
  ogTitle: "Contact 45 EYE Electrical Solutions | NYC Electrician",
  ogDescription:
    "Book residential or commercial electrical service with an NYC-based licensed and insured electrician. Call 646-710-0134.",
  twitterTitle: "Contact Eli the Electrician",
  twitterDescription:
    "Request NYC electrician service by phone or callback form. Licensed electrician NYC support across key boroughs.",
});

export default function ContactPage() {
  const faqSchema = getFaqPageSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div className="space-y-8">
      <section id="contact-request" className="section-light rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Contact"
          title="Book your NYC electrical service call"
          headingLevel={1}
          description="Call first for fastest scheduling, then use the callback form if preferred."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <CallCTA label={`Call ${business.phone}`} />
            <p className="text-sm text-muted">Prefer not to call right away? Use the callback form.</p>
            <div className="section-elevated rounded-2xl border border-[var(--border)] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">Response time</p>
              <p className="mt-1 text-sm text-muted">
                Fast response during business hours. Same-day availability when possible.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {business.mustMentionNeighborhoods.map((area) => (
                <li key={area} className="section-elevated rounded-lg border border-[var(--border)] px-3 py-2">
                  Frequent service in {area}
                </li>
              ))}
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
          description="Answers about response times, service areas, and what to expect."
        />
        <FAQAccordion items={faqs} />
        <CallCTA label={`Call ${business.phone}`} />
      </section>

      <section className="section-elevated rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Before you call</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/services" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Review electrical services and common job scopes
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
              Return to home for service area and trust details
            </Link>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </div>
  );
}
