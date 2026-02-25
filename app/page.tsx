import { business } from "@/src/content/business";
import { testimonials } from "@/src/content/testimonials";
import { Button } from "@/src/components/Button";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { Section } from "@/src/components/Section";
import { TestimonialCard } from "@/src/components/TestimonialCard";
import { createPageMetadata } from "@/src/lib/seo";
import styles from "./site.module.css";

export const metadata = createPageMetadata({
  page: "Home",
  path: "/",
  focus:
    "Get dependable NYC electrician service for troubleshooting, panel upgrades, lighting, and urgent electrical issues.",
});

export default function HomePage() {
  return (
    <Container as="div" className={styles.page}>
      <Section>
        <h1 className={styles.heroTitle}>Fast, Reliable Electrical Service Across NYC</h1>
        <div className={styles.stack}>
          <p className={styles.copy}>
            {business.businessNameLegal} is led by {business.publicName}, delivering same-day
            electrical service for homes and businesses.
          </p>
          <p className={styles.copy}>
            We are {business.differentiators[0].toLowerCase()} with{" "}
            {business.differentiators[1].toLowerCase()}. Service areas include{" "}
            {business.mustMentionNeighborhoods[1]}, {business.mustMentionNeighborhoods[2]},{" "}
            {business.mustMentionNeighborhoods[0]}, {business.serviceAreas[1]},
            {" "}{business.serviceAreas[2]}, {business.serviceAreas[3]}, and select Long Island
            locations.
          </p>
          <div className={styles.ctaRow}>
            <CallCTA label={`Call ${business.publicName}: ${business.phone}`} />
            <Button href={`mailto:${business.email}`} variant="secondary">
              Email {business.email}
            </Button>
          </div>
        </div>
      </Section>

      <Section title={`Why Property Owners Choose ${business.publicName}`}>
        <ul className={styles.list}>
          {business.differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Recent Customer Feedback (Placeholder)">
        <div className={styles.grid2}>
          {testimonials.slice(0, 4).map((item) => (
            <TestimonialCard item={item} key={`${item.name}-${item.area}`} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
