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
              className="rounded-3xl bg-white p-6 shadow-[0_24px_56px_-42px_rgba(1,31,75,0.28)]"
            >
              <p className="text-sm leading-relaxed text-slate-600">
                <span aria-hidden="true">&ldquo;</span>
                {item.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <p className="mt-5 text-sm font-semibold text-[#12253d]">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#0a66c2]">{item.area}</p>
            </article>
          ))}
        </div>

        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-1 md:hidden">
          {items.slice(0, 3).map((item) => (
            <article
              key={`${item.name}-${item.area}`}
              className="min-w-[85%] snap-start rounded-3xl bg-white p-5 shadow-[0_22px_50px_-40px_rgba(1,31,75,0.3)]"
            >
              <p className="text-sm leading-relaxed text-slate-600">
                <span aria-hidden="true">&ldquo;</span>
                {item.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <p className="mt-4 text-sm font-semibold text-[#12253d]">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#0a66c2]">{item.area}</p>
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
          className="rounded-2xl border border-[#dde9f8] bg-white p-5 shadow-[0_22px_48px_-40px_rgba(1,31,75,0.45)]"
        >
          <p className="text-sm leading-relaxed text-slate-600">
            <span aria-hidden="true">&ldquo;</span>
            {item.quote}
            <span aria-hidden="true">&rdquo;</span>
          </p>
          <p className="mt-4 text-sm font-semibold text-[#12253d]">{item.name}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-[#0a66c2]">{item.area}</p>
        </article>
      ))}
    </div>
  );
}
