export function TrustBadges() {
  const badges = [
    "Licensed",
    "Insured",
    "Owner-operated",
    "10+ years",
    "Same-day when available",
    "Card/Zelle/Cash",
  ];

  return (
    <div className="card-surface card-muted space-y-4 rounded-3xl border border-[var(--border)] p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        Why clients choose 45 EYE
      </p>
      <ul className="flex flex-wrap gap-2.5 text-sm" aria-label="Trust badges">
        {badges.map((badge) => (
          <li
            key={badge}
            className="rounded-full border border-[var(--border)] bg-white/[0.05] px-3.5 py-1.5 font-medium text-[var(--text)]"
          >
            {badge}
          </li>
        ))}
      </ul>
    </div>
  );
}
