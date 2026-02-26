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
      <section id="contact-request" className="rounded-3xl border border-[#dbe8f8] bg-gradient-to-br from-white to-[#f7fbff] p-6 shadow-[0_30px_72px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Contact"
          title={`Talk to ${business.publicName}`}
          description="Call now for fast response and same-day availability when possible."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_24px_56px_-42px_rgba(1,31,75,0.48)]">
          <h2 className="text-2xl font-semibold tracking-tight text-[#12273f]">Contact options</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Best for urgent service calls, troubleshooting, and scheduling updates across Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p>
              Call:{" "}
              <a className="font-semibold text-[#0a66c2]" href={`tel:+1${business.phone.replace(/\D/g, "")}`}>
                {business.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="font-semibold text-[#0a66c2]" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <CallCTA label={`Call ${business.phone}`} />
          </div>
          <ul className="mt-6 space-y-2 text-sm text-[#2c4b6b]">
            {business.mustMentionNeighborhoods.map((area) => (
              <li key={area} className="rounded-lg border border-[#e2ecf9] bg-[#f9fbff] px-3 py-2">
                Frequent service in {area}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_28px_70px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Customer feedback"
          description="Representative comments from recent NYC service calls."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <TestimonialStrip items={testimonials} />
      </section>

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_28px_70px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions before booking"
          description="Answers about response times, service areas, and what to expect."
        />
        <FAQAccordion items={faqs} />
        <CallCTA label={`Call ${business.phone}`} />
      </section>

      <section className="rounded-3xl border border-[#dce8f8] bg-gradient-to-r from-[#f8fbff] to-[#fff7e7] p-6 shadow-[0_26px_64px_-48px_rgba(1,31,75,0.45)] sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#12263f]">Before you call</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/services" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
              Review electrical services and common job scopes
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
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
