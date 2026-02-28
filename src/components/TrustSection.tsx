type TrustSectionProps = {
  areaName: string;
};

export function TrustSection({ areaName }: TrustSectionProps) {
  return (
    <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Licensed &amp; Insured NYC Electrician
      </h2>
      <ul className="mt-4 grid gap-2 text-sm text-[#d2e3fa] sm:grid-cols-2">
        <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
          Owner-operated service (Eli the Electrician)
        </li>
        <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
          Troubleshooting-first approach
        </li>
        <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
          Clean finish standards
        </li>
        <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
          Clear communication &amp; scheduling updates
        </li>
      </ul>
      <p className="mt-4 text-xs tracking-wide text-[#9fb5d4]">
        {areaName} service calls are handled with code-aware scope, clean execution, and practical
        scheduling updates.
      </p>
    </section>
  );
}
