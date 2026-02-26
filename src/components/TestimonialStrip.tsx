import type { Testimonial } from "@/src/content/testimonials";

type TestimonialStripProps = {
  items: readonly Testimonial[];
};

export function TestimonialStrip({ items }: TestimonialStripProps) {
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
