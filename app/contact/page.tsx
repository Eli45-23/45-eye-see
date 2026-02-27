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
  page: "Contact",
  path: "/contact",
  focus:
    "Fast-response NYC electrician contact page with click-to-call service requests, borough coverage details, and FAQ answers.",
});

export default function ContactPage() {
  const faqSchema = getFaqPageSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div className="space-y-8">
      <section id="contact-request" className="section-light rounded-3xl border border-[#25354c] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Contact"
          title="Book your NYC electrical service call"
          description="Call first for fastest scheduling, then use email or the callback form if preferred."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <CallCTA label={`Call ${business.phone}`} />
            <p className="text-sm text-muted">
              Email:{" "}
              <a className="font-semibold text-[#60a5fa]" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
            <div className="section-elevated rounded-2xl border border-[#2d435f] p-4 ui-shadow-sm">
              <p className="text-sm font-semibold text-[#dbeafe]">Response time</p>
              <p className="mt-1 text-sm text-muted">
                Fast response during business hours. Same-day availability when possible.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {business.mustMentionNeighborhoods.map((area) => (
                <li key={area} className="section-elevated rounded-lg border border-[#2e435f] px-3 py-2">
                  Frequent service in {area}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-[#25354c] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Customer feedback"
          description="Representative comments from recent NYC service calls."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <TestimonialStrip items={testimonials} />
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-[#25354c] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions before booking"
          description="Answers about response times, service areas, and what to expect."
        />
        <FAQAccordion items={faqs} />
        <CallCTA label={`Call ${business.phone}`} />
      </section>

      <section className="section-elevated rounded-3xl border border-[#2a3d58] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#f1f5f9]">Before you call</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/services" className="font-semibold text-[#60a5fa] underline-offset-4 hover:underline">
              Review electrical services and common job scopes
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[#60a5fa] underline-offset-4 hover:underline">
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
