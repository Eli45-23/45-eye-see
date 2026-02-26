import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { ContactForm } from "@/src/components/ContactForm";
import { Container } from "@/src/components/Container";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Section } from "@/src/components/Section";
import { TestimonialCard } from "@/src/components/TestimonialCard";
import { createPageMetadata } from "@/src/lib/seo";
import { getFaqPageSchema, getLocalBusinessSchema } from "@/src/lib/schema";
import styles from "./contact.module.css";

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
    <Container as="div" className={styles.layout}>
      <Section id="contact-request">
        <div className={styles.topCta}>
          <h1 className={styles.topTitle}>Contact {business.publicName}</h1>
          <p className={styles.topCopy}>
            {business.locationLabel} electrical service for homes and businesses.
            Call now for fast response and same-day availability when possible.
          </p>
          <CallCTA className={styles.bigCall} label={`Call ${business.phone}`} />
          <p className={styles.quickNote}>Fast response / same-day available</p>
        </div>
      </Section>

      <Section title="Contact Options">
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactMeta}>
              Call: <a className={styles.link} href={`tel:+1${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
            </p>
            <p className={styles.contactMeta}>
              Email:{" "}
              <a className={styles.link} href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
            <p className={styles.contactMeta}>
              Best for urgent service calls, troubleshooting requests, and scheduling updates.
            </p>
            <CallCTA label={`Call ${business.phone}`} />
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section title="Service Areas">
        <p className={styles.contactMeta}>We are {business.locationLabel}.</p>
        <ul className={styles.list}>
          {business.serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <h3 className={styles.subheading}>Featured neighborhoods</h3>
        <ul className={styles.list}>
          {business.mustMentionNeighborhoods.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <CallCTA label={`Call ${business.phone}`} />
      </Section>

      <Section title="Customer Testimonials">
        <div className={styles.grid3}>
          {testimonials.map((item) => (
            <TestimonialCard key={`${item.name}-${item.area}`} item={item} />
          ))}
        </div>
        <CallCTA label={`Call ${business.phone}`} />
      </Section>

      <Section title="Frequently Asked Questions">
        <div className={styles.faqWrap}>
          <FAQAccordion items={faqs} />
          <CallCTA label={`Call ${business.phone}`} />
        </div>
      </Section>

      <Section title="Helpful Navigation">
        <p className={styles.contactMeta}>
          Use these links to review service details before booking your electrical visit.
        </p>
        <ul className={styles.linkList}>
          <li>
            <Link className={styles.link} href="/services">
              View full electrical service categories and common job scopes
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Return to the home page to review NYC coverage and project gallery highlights
            </Link>
          </li>
        </ul>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </Container>
  );
}
