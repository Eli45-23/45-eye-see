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
                ? "overflow-hidden rounded-2xl bg-white/95 shadow-[0_16px_38px_-34px_rgba(1,31,75,0.28)]"
                : "overflow-hidden rounded-2xl border border-[#dbe7f6] bg-white shadow-[0_18px_48px_-38px_rgba(1,31,75,0.5)]"
            }
            key={item.question}
          >
            <h3>
              <button
                id={buttonId}
                className={
                  mode === "home"
                    ? "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold tracking-tight text-[#112c47]"
                    : "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0f2940] sm:text-base"
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
                      ? "inline-flex size-7 items-center justify-center rounded-full bg-[#f1f7ff] text-[#0a66c2]"
                      : "inline-flex size-7 items-center justify-center rounded-full border border-[#c6dcf6] text-[#0a66c2]"
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
              className={mode === "home" ? "px-5 pb-5 pt-0" : "px-5 pb-5"}
            >
              <p
                className={
                  mode === "home"
                    ? "text-[15px] leading-relaxed text-slate-600"
                    : "text-sm leading-relaxed text-slate-600 sm:text-[15px]"
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
