import Link from "next/link";

const groups = [
  {
    title: "Manhattan",
    href: "/manhattan-electrician",
    areas: ["Upper East Side", "Upper West Side", "Harlem", "Midtown", "Financial District"],
  },
  {
    title: "Brooklyn",
    href: "/brooklyn-electrician",
    areas: ["Williamsburg", "Park Slope", "Bushwick", "Bed-Stuy", "Downtown Brooklyn"],
  },
  {
    title: "Queens",
    href: "/queens-electrician",
    areas: ["Astoria", "Long Island City", "Flushing", "Forest Hills", "Jackson Heights"],
  },
  {
    title: "Staten Island",
    href: "/staten-island-electrician",
    areas: ["St. George", "New Dorp", "Great Kills", "Tottenville", "Port Richmond"],
  },
  {
    title: "Long Island (Select Areas)",
    href: "/long-island-electrician",
    areas: ["Project-based availability", "Scope-dependent scheduling", "Call to confirm coverage"],
  },
] as const;

type ServiceAreasCoverageProps = {
  currentArea?: string;
};

export function ServiceAreasCoverage({ currentArea }: ServiceAreasCoverageProps) {
  return (
    <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Service Areas Coverage</h2>
        <Link
          href="/service-areas"
          className="text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
        >
          Open service areas hub
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className={`rounded-2xl border p-4 shadow-lg shadow-black/20 ${
              currentArea === group.title
                ? "border-[#3e6798] bg-[#10243f]"
                : "border-white/10 bg-[#0f172a]"
            }`}
          >
            <Link
              href={group.href}
              className="text-base font-semibold text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline"
            >
              {group.title}
            </Link>
            <ul className="mt-3 space-y-1 text-xs leading-relaxed text-[#c8d7eb]">
              {group.areas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
