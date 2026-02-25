import type { ServiceBucket } from "@/src/content/services";
import styles from "./ServiceCard.module.css";
import { CallCTA } from "./CallCTA";

type ServiceCardProps = {
  service: ServiceBucket;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{service.name}</h2>
      <p>{service.description}</p>
      <ul className={styles.list}>
        {service.commonJobs.map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
      <p className={styles.keywords}>
        <strong>Related searches:</strong> {service.keywords.join(", ")}
      </p>
      <CallCTA label={service.cta} />
    </article>
  );
}
