type FeaturePillsProps = {
  items: readonly string[];
};

export function FeaturePills({ items }: FeaturePillsProps) {
  return (
    <section className="rounded-3xl border border-[#dbe8f9] bg-white px-5 py-6 shadow-[0_22px_54px_-44px_rgba(1,31,75,0.5)] sm:px-8">
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-[#d7e8fb] bg-[#f7fbff] px-4 py-2 text-sm font-medium text-[#183756]"
          >
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#0a66c2]/10 text-[#0a66c2]" aria-hidden="true">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
