import Link from "next/link";

const serviceCards = [
  {
    title: "Electrical Troubleshooting",
    description: "Diagnosis-first service for breaker trips, flicker issues, and partial power loss.",
    href: "/services#electrical-troubleshooting-and-repairs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Panel Upgrades",
    description: "Panel and service changes for modern load demands and safer operation.",
    href: "/services#panel-upgrades-and-service-changes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M4 21h16M6 21V5h12v16M9 9h2M13 9h2M9 13h2M13 13h2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "EV Charger Installation",
    description: "Level 2 charger setup with load checks and dedicated circuit planning.",
    href: "/services#ev-charger-installation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M9 8V3M15 8V3M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Residential Electrical",
    description: "Service for apartments, co-ops, condos, and brownstones.",
    href: "/services#outlet-switch-and-gfci-upgrades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M9 18h6M10 22h4M8.5 14.5C7 13.4 6 11.6 6 9.5A6 6 0 0 1 12 3.5a6 6 0 0 1 6 6c0 2.1-1 3.9-2.5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial Electrical",
    description: "Retail storefront and office electrical support with minimal downtime.",
    href: "/services#commercial-electrical-service-calls",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M3 9h18v10H3zM8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 14h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function ServiceCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCards.map((card) => (
        <article
          key={card.title}
          className="section-light rounded-2xl border border-white/10 p-5 shadow-lg shadow-black/20"
        >
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0a66c2]/20 text-[#7ec3ff] ring-1 ring-[#2d4f73]">
            {card.icon}
          </div>
          <h2 className="mt-3 text-lg font-semibold text-white">{card.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#c9d7ea]">{card.description}</p>
          <Link
            href={card.href}
            className="mt-4 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
          >
            View service details
          </Link>
        </article>
      ))}
    </section>
  );
}
