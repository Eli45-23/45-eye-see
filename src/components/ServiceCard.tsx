import type { ServiceBucket } from "@/src/content/services";
import { Button } from "./Button";
import { CallCTA } from "./CallCTA";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: ServiceBucket;
  id?: string;
  headingLevel?: 2 | 3;
  mode?: "full" | "overview";
  href?: string;
};

export function ServiceCard({
  service,
  id,
  headingLevel = 2,
  mode = "full",
  href,
}: ServiceCardProps) {
  const HeadingTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <article id={id} className={styles.card}>
      <HeadingTag className={styles.title}>{service.name}</HeadingTag>
      <p>{service.description}</p>

      {mode === "full" ? (
        <>
          <ul className={styles.list}>
            {service.commonJobs.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
          <p className={styles.keywords}>
            <strong>Related searches:</strong> {service.keywords.join(", ")}
          </p>
          <CallCTA label={service.cta} />
        </>
      ) : (
        <div className={styles.actions}>
          <Button href={href ?? "/services"} variant="secondary">
            View service details
          </Button>
        </div>
      )}
    </article>
  );
}
