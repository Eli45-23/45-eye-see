import Link from "next/link";
import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { workGallery } from "@/src/content/gallery";
import { serviceBuckets } from "@/src/content/services";
import { testimonials } from "@/src/content/testimonials";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Section } from "@/src/components/Section";
import { ServiceCard } from "@/src/components/ServiceCard";
import { TestimonialCard } from "@/src/components/TestimonialCard";
import { WorkGallery } from "@/src/components/WorkGallery";
import { createPageMetadata } from "@/src/lib/seo";
import { slugify } from "@/src/lib/slug";
import styles from "./site.module.css";

export const metadata = createPageMetadata({
  page: "Home",
  path: "/",
  focus:
    "NYC electrician coverage for Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas, with full-service electrical support from troubleshooting to upgrades.",
});

export default function HomePage() {
  return (
    <Container as="div" className={styles.page}>
      <Section>
        <h1 className={styles.heroTitle}>NYC Electrician — 45 EYE Electrical Solutions</h1>
        <div className={styles.stack}>
          <p className={styles.copy}>
            {business.publicName} delivers licensed and insured same-day electrical service
            when available for homes and businesses.
          </p>
          <div className={styles.ctaRow}>
            <CallCTA label={`Call ${business.phone}`} />
            <Link className={styles.inlineLink} href="/contact#contact-request">
              Request a callback through the contact page
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Trusted NYC Electrical Service">
        <ul className={styles.trustList}>
          {business.differentiators.map((item) => (
            <li key={item} className={styles.trustItem}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Services Overview">
        <p className={styles.copy}>
          From troubleshooting to upgrades, {business.publicName} handles full-service
          electrical work across NYC for residential and commercial properties.
        </p>
        <div className={styles.servicesGrid}>
          {serviceBuckets.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              mode="overview"
              headingLevel={3}
              href={`/services#${slugify(service.name)}`}
            />
          ))}
        </div>
      </Section>

      <Section title="Work Gallery">
        <WorkGallery items={workGallery} />
        <p className={styles.galleryNote}>
          Recent project highlights from field work in NYC. Additional galleries are
          updated as new job photos are published.
        </p>
      </Section>

      <Section title="Service Areas">
        <p className={styles.copy}>
          We serve {business.serviceAreas.join(", ")}. Booking is available for service
          calls throughout NYC and nearby locations.
        </p>
        <CallCTA label={`Call ${business.phone}`} />
        <h3 className={styles.subheading}>Featured neighborhoods</h3>
        <ul className={styles.list}>
          {business.mustMentionNeighborhoods.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </Section>

      <Section title="Customer Feedback Preview">
        <div className={styles.grid3}>
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard item={item} key={`${item.name}-${item.area}`} />
          ))}
        </div>
        <CallCTA label={`Call ${business.phone}`} />
      </Section>

      <Section title="FAQs Preview">
        <FAQAccordion items={faqs.slice(0, 5)} />
        <CallCTA label={`Call ${business.phone}`} />
      </Section>

      <Section title="Plan Your Service Request">
        <p className={styles.copy}>
          Use the pages below to review service scope, see recent work, and request scheduling.
        </p>
        <ul className={styles.linkList}>
          <li>
            <Link className={styles.inlineLink} href="/services">
              Explore electrical services in Manhattan, Queens, Brooklyn, and Staten Island
            </Link>
          </li>
          <li>
            <Link className={styles.inlineLink} href="/services#commercial-electrical-service-calls">
              Review commercial service call details and common project types
            </Link>
          </li>
          <li>
            <Link className={styles.inlineLink} href="/contact#contact-request">
              Request scheduling through the NYC electrician contact page
            </Link>
          </li>
        </ul>
      </Section>

      <Section className={styles.finalCtaBand}>
        <h2 className={styles.bandTitle}>Call now for NYC electrical service</h2>
        <p className={styles.copy}>
          {business.locationLabel}. Standard and same-day scheduling based on availability.
        </p>
        <CallCTA label={`Call ${business.phone}`} />
      </Section>
    </Container>
  );
}
