import { business } from "@/src/content/business";
import { serviceBuckets } from "@/src/content/services";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { Section } from "@/src/components/Section";
import { createPageMetadata } from "@/src/lib/seo";
import { getServiceListSchema } from "@/src/lib/schema";
import { slugify } from "@/src/lib/slug";
import styles from "./services.module.css";

export const metadata = createPageMetadata({
  page: "Services",
  path: "/services",
  focus:
    "Electrical services in NYC for troubleshooting, repairs, upgrades, safety updates, and same-day service calls across key boroughs.",
});

const neighborhoods = business.mustMentionNeighborhoods;

function getAreaLine(index: number): string {
  const first = neighborhoods[index % neighborhoods.length];
  const second = neighborhoods[(index + 1) % neighborhoods.length];
  return `Service areas we frequently work in include ${first}, ${second}, and nearby NYC neighborhoods.`;
}

export default function ServicesPage() {
  const serviceListSchema = getServiceListSchema();

  return (
    <Container as="div" className={styles.layout}>
      <Section>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>Electrical Services in NYC</h1>
          <p className={styles.introCopy}>
            {business.publicName} provides licensed and insured electrical service with over
            10 years of experience, same-day availability when possible, and coverage across
            {" "}
            {business.serviceAreas.join(", ")}. Call {business.phone} to schedule service.
          </p>
          <CallCTA label={`Call ${business.phone}`} />
        </div>
      </Section>

      <div className={styles.hub}>
        <aside className={styles.sideNav} aria-label="Service section navigation">
          <nav className={styles.sideNavPanel}>
            <h2 className={styles.sideNavTitle}>Jump to a service</h2>
            <ul className={styles.sideNavList}>
              {serviceBuckets.map((service) => {
                const anchor = slugify(service.name);
                return (
                  <li key={anchor}>
                    <a className={styles.sideNavLink} href={`#${anchor}`}>
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <section className={styles.serviceSections} aria-label="Electrical service hub sections">
          {serviceBuckets.map((service, index) => {
            const serviceAnchor = slugify(service.name);
            const useCases =
              service.name === "Commercial Electrical Service Calls"
                ? "This service is a strong fit for retail spaces, offices, and mixed-use buildings where downtime needs to be minimized."
                : "This service is commonly requested by homeowners, landlords, property managers, and small business operators across NYC.";

            return (
              <Section key={service.name} id={serviceAnchor} className={styles.serviceSection}>
                <h2>{service.name}</h2>
                <p className={styles.sectionCopy}>{service.description}</p>
                <p className={styles.sectionCopy}>
                  {useCases} We perform full-service electrical work from troubleshooting to
                  upgrades with safe, code-aware practices.
                </p>
                <ul className={styles.commonJobs}>
                  {service.commonJobs.map((job) => (
                    <li key={job}>{job}</li>
                  ))}
                </ul>
                <p className={styles.areaLine}>{getAreaLine(index)}</p>
                <CallCTA label={service.cta} />
              </Section>
            );
          })}
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
    </Container>
  );
}
