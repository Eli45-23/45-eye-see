import { business } from "@/src/content/business";
import { serviceBuckets } from "@/src/content/services";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { Section } from "@/src/components/Section";
import { ServiceCard } from "@/src/components/ServiceCard";
import { createPageMetadata } from "@/src/lib/seo";
import styles from "../site.module.css";

export const metadata = createPageMetadata({
  page: "Services",
  path: "/services",
  focus:
    "Explore service buckets for troubleshooting, panel upgrades, outlet and lighting work, code corrections, and same-day electrical help.",
});

export default function ServicesPage() {
  return (
    <Container as="div" className={styles.page}>
      <Section>
        <h1 className={styles.heroTitle}>Electrical Services</h1>
        <div className={styles.stack}>
          <p className={styles.copy}>
            {business.publicName} handles residential and commercial electrical work across{" "}
            {business.serviceAreas.join(", ")}.
          </p>
          <CallCTA label="Call for Same-Day Service" />
        </div>
      </Section>

      <section className={styles.grid2} aria-label="Service list">
        {serviceBuckets.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </section>
    </Container>
  );
}
