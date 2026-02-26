"use client";

import { useState } from "react";
import type { FaqItem } from "@/src/content/faqs";

type FAQAccordionProps = {
  items: readonly FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const buttonId = `faq-trigger-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <article
            className="overflow-hidden rounded-2xl border border-[#dbe7f6] bg-white shadow-[0_18px_48px_-38px_rgba(1,31,75,0.5)]"
            key={item.question}
          >
            <h3>
              <button
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0f2940] sm:text-base"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex size-7 items-center justify-center rounded-full border border-[#c6dcf6] text-[#0a66c2]"
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
              className="px-5 pb-5"
            >
              <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
