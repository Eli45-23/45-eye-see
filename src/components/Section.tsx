import { type ReactNode } from "react";
import styles from "./Section.module.css";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  contained?: boolean;
};

export function Section({
  title,
  children,
  className,
  id,
  as = "section",
  contained = true,
}: SectionProps) {
  const Wrapper = as;
  const content = (
    <>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </>
  );

  return (
    <Wrapper
      id={id}
      className={`section-shell${styles.section ? ` ${styles.section}` : ""}${className ? ` ${className}` : ""}`}
    >
      {contained ? <Container>{content}</Container> : content}
    </Wrapper>
  );
}
