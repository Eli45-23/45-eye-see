"use client";

import { useEffect, useState } from "react";
import { business } from "@/src/content/business";
import { CallCTA } from "./CallCTA";
import { Button } from "./Button";

const MIN_EXTRA_SCROLL = 900;

export function FloatingCallbackStrip() {
  const [isLongPage, setIsLongPage] = useState(false);

  useEffect(() => {
    function evaluatePageHeight() {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      setIsLongPage(documentHeight - viewportHeight > MIN_EXTRA_SCROLL);
    }

    evaluatePageHeight();
    window.addEventListener("resize", evaluatePageHeight);

    return () => window.removeEventListener("resize", evaluatePageHeight);
  }, []);

  if (!isLongPage) {
    return null;
  }

  return (
    <aside
      aria-label="Quick callback actions"
      className="fixed right-4 bottom-4 z-40 hidden w-[min(96vw,420px)] gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)]/95 p-3 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:flex lg:items-center lg:justify-between"
    >
      <p className="whitespace-nowrap text-sm font-semibold text-[var(--text)]">Need faster scheduling?</p>
      <div className="flex items-center gap-2">
        <CallCTA
          label={`Call ${business.phone}`}
          className="rounded-xl px-3 py-2 text-sm"
        />
        <Button href="/contact#contact-request" variant="secondary" className="px-3 py-2 text-sm">
          Request callback
        </Button>
      </div>
    </aside>
  );
}
