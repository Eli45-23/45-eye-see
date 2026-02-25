import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { Button } from "@/src/components/Button";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Section } from "@/src/components/Section";
import { createPageMetadata } from "@/src/lib/seo";
import styles from "../site.module.css";

export const metadata = createPageMetadata({
  page: "Contact",
  path: "/contact",
  focus:
    "Call now to request same-day availability, discuss your electrical issue, and schedule service in NYC and select Long Island areas.",
});

export default function ContactPage() {
  return (
    <Container as="div" className={styles.page}>
      <Section>
        <h1 className={styles.heroTitle}>Contact {business.publicName}</h1>
        <div className={styles.stack}>
          <p className={styles.copy}>
            Need electrical help in {business.mustMentionNeighborhoods[1]},{" "}
            {business.mustMentionNeighborhoods[2]}, {business.mustMentionNeighborhoods[0]},{" "}
            {business.serviceAreas[1]}, {business.serviceAreas[2]}, or {business.serviceAreas[3]}?
            Call now for availability.
          </p>
          <div className={styles.ctaRow}>
            <CallCTA />
            <Button href={`mailto:${business.email}`} variant="secondary">
              {business.email}
            </Button>
          </div>
        </div>
      </Section>

      <Section title="What to Share When You Call">
        <ul className={styles.list}>
          <li>Your neighborhood and building type</li>
          <li>The electrical issue you are seeing</li>
          <li>How urgent the service is</li>
          <li>Your preferred callback window</li>
        </ul>
      </Section>

      <Section title="Frequently Asked Questions">
        <FAQAccordion items={faqs} />
      </Section>
    </Container>
  );
}
