import type { Testimonial } from "@/src/content/testimonials";
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.quote}>
        &ldquo;{item.quote}&rdquo;
      </p>
      <p className={styles.meta}>
        {item.name} · {item.area}
      </p>
      <p className={styles.service}>{item.serviceType}</p>
    </article>
  );
}
