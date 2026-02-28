import Link from "next/link";
import type { ReactElement, SVGProps } from "react";
import type { ServiceBucket } from "@/src/content/services";
import { slugify } from "@/src/lib/slug";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

type ServiceIcon = {
  label: string;
  Component: IconComponent;
};

function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="m14 7 3-3a4 4 0 0 1-5 5l-7 7a2 2 0 1 0 3 3l7-7a4 4 0 0 1 5-5l-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M9 8V3M15 8V3M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M9 18h6M10 22h4M8.5 14.5C7 13.4 6 11.6 6 9.5A6 6 0 0 1 12 3.5a6 6 0 0 1 6 6c0 2.1-1 3.9-2.5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M4 21h16M6 21V5h12v16M9 9h2M13 9h2M9 13h2M13 13h2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolboxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M3 9h18v10H3zM8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 14h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const serviceIcons: readonly ServiceIcon[] = [
  { label: "Electrical service", Component: BoltIcon },
  { label: "Repair and install", Component: WrenchIcon },
  { label: "Wiring and circuits", Component: PlugIcon },
  { label: "Lighting work", Component: LightbulbIcon },
  { label: "Commercial service", Component: BuildingIcon },
  { label: "Project support", Component: ToolboxIcon },
];

const serviceMicrocopy: Partial<Record<ServiceBucket["name"], string>> = {
  "Electrical Troubleshooting & Repairs":
    "Includes breaker diagnostics, partial power-loss tracing, and targeted repair recommendations.",
  "Panel Upgrades & Service Changes":
    "Including 100-amp to 200-amp upgrades and load capacity planning.",
  "Dedicated Circuits":
    "Built for high-demand appliances, office equipment, and code-aware load distribution.",
  "Outlet, Switch & GFCI Upgrades":
    "Kitchen, bath, and living-area device updates with safer modern protection.",
  "Lighting Installation & Upgrades":
    "From recessed lighting layouts to fixture swaps and dimmer control improvements.",
  "EV Charger Installation":
    "Level 2 setup planning with panel capacity checks and dedicated circuit installation.",
};

type ServiceGridProps = {
  items: readonly ServiceBucket[];
};

function getPreviewSentence(text: string): string {
  const [firstSentence] = text.split(". ");
  return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

export function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.slice(0, 6).map((service, index) => {
        const icon = serviceIcons[index % serviceIcons.length];
        const Icon = icon.Component;

        return (
          <article
            key={service.name}
            className="group rounded-3xl border border-white/8 bg-[#0e1727] p-6 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
          >
            <div
              className="inline-flex size-10 items-center justify-center rounded-xl border border-white/12 bg-[#0f223b] text-[#95ceff]"
              role="img"
              aria-label={icon.label}
            >
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[#f6f9ff]">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c7d4ea]">
              {getPreviewSentence(service.description)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#adc1dd]">
              {serviceMicrocopy[service.name] ?? `${service.commonJobs[0]}.`}
            </p>
            <Link
              href={`/services#${slugify(service.name)}`}
              className="mt-5 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 group-hover:text-blue-300 group-hover:underline"
            >
              View services
            </Link>
          </article>
        );
      })}
    </div>
  );
}
