"use client";

import { useState } from "react";
import type { FaqItem } from "@/src/content/faqs";

type FAQAccordionProps = {
  items: readonly FaqItem[];
  mode?: "default" | "home";
};

export function FAQAccordion({ items, mode = "default" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={mode === "home" ? "space-y-2.5" : "space-y-3"}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const buttonId = `faq-trigger-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <article
            className={
              mode === "home"
                ? "card-surface card-hover overflow-hidden rounded-2xl border border-[var(--border)] transition-colors duration-200"
                : "section-elevated overflow-hidden rounded-2xl border border-[var(--border)] ui-shadow-sm"
            }
            key={item.question}
          >
            <h3>
              <button
                id={buttonId}
                className={
                  mode === "home"
                    ? "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold tracking-tight text-[var(--text)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-inset"
                    : "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--text)] sm:text-base"
                }
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={
                  mode === "home"
                    ? "inline-flex size-7 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(59,130,246,0.12)] text-[var(--accent)]"
                    : "inline-flex size-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]"
                  }
                >
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={mode === "home" ? "px-5 pb-5 pt-0 transition-all duration-200" : "px-5 pb-5"}
            >
              <p
                className={
                  mode === "home"
                    ? "text-[15px] leading-relaxed text-[var(--muted)]"
                    : "text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]"
                }
              >
                {item.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
