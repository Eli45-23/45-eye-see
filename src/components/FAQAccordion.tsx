"use client";

import { useState } from "react";
import type { FaqItem } from "@/src/content/faqs";
import styles from "./FAQAccordion.module.css";

type FAQAccordionProps = {
  items: readonly FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const buttonId = `faq-trigger-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <article className={styles.item} key={item.question}>
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                className={styles.trigger}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
              </button>
            </h3>
            <div
              id={panelId}
              className={styles.panel}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
