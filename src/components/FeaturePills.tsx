type FeaturePillsProps = {
  items: readonly string[];
};

export function FeaturePills({ items }: FeaturePillsProps) {
  return (
    <section className="section-light rounded-3xl border border-white/10 px-5 py-6 shadow-xl shadow-black/30 sm:px-8">
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-sm font-medium text-gray-200"
          >
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-600/15 text-blue-300" aria-hidden="true">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
