import type { Testimonial } from "@/src/content/testimonials";

type TestimonialStripProps = {
  items: readonly Testimonial[];
  mode?: "default" | "home";
};

export function TestimonialStrip({ items, mode = "default" }: TestimonialStripProps) {
  if (mode === "home") {
    return (
      <>
        <div className="hidden gap-5 md:grid md:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <article
              key={`${item.name}-${item.area}`}
              className="section-elevated rounded-3xl border border-[#2d435f] p-6 ui-shadow-sm"
            >
              <p className="text-sm leading-relaxed text-muted">
                <span aria-hidden="true">&ldquo;</span>
                {item.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <p className="mt-5 text-sm font-semibold text-[#f1f5f9]">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60a5fa]">{item.area}</p>
            </article>
          ))}
        </div>

        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-1 md:hidden">
          {items.slice(0, 3).map((item) => (
            <article
              key={`${item.name}-${item.area}`}
              className="section-elevated min-w-[85%] snap-start rounded-3xl border border-[#2d435f] p-5 ui-shadow-sm"
            >
              <p className="text-sm leading-relaxed text-muted">
                <span aria-hidden="true">&ldquo;</span>
                {item.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <p className="mt-4 text-sm font-semibold text-[#f1f5f9]">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60a5fa]">{item.area}</p>
            </article>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.slice(0, 3).map((item) => (
        <article
          key={`${item.name}-${item.area}`}
          className="section-elevated rounded-2xl border border-[#2d435f] p-5 ui-shadow-sm"
        >
          <p className="text-sm leading-relaxed text-muted">
            <span aria-hidden="true">&ldquo;</span>
            {item.quote}
            <span aria-hidden="true">&rdquo;</span>
          </p>
          <p className="mt-4 text-sm font-semibold text-[#f1f5f9]">{item.name}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-[#60a5fa]">{item.area}</p>
        </article>
      ))}
    </div>
  );
}
