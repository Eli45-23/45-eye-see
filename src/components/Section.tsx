import { type ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ title, children, className, id }: SectionProps) {
  return (
    <section id={id} className={`${styles.section}${className ? ` ${className}` : ""}`}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </section>
  );
}
