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
                ? "card-surface card-hover overflow-hidden rounded-2xl border border-white/8 bg-[#0f1a2d] transition-colors duration-200"
                : "section-elevated overflow-hidden rounded-2xl border border-[#2d435f] ui-shadow-sm"
            }
            key={item.question}
          >
            <h3>
              <button
                id={buttonId}
                className={
                  mode === "home"
                    ? "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold tracking-tight text-[#f1f5f9] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca3ff] focus-visible:ring-inset"
                    : "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#f1f5f9] sm:text-base"
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
                    ? "inline-flex size-7 items-center justify-center rounded-full border border-white/12 bg-[#153053] text-[#9ad1ff]"
                    : "inline-flex size-7 items-center justify-center rounded-full border border-[#3b5d85] text-[#7ec3ff]"
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
                    ? "text-[15px] leading-relaxed text-muted-strong"
                    : "text-sm leading-relaxed text-muted sm:text-[15px]"
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
