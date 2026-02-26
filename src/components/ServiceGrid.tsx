import Link from "next/link";
import type { ServiceBucket } from "@/src/content/services";
import { slugify } from "@/src/lib/slug";

const serviceIcons = ["⚡", "🛠", "🔌", "💡", "🏢", "🧰"];

type ServiceGridProps = {
  items: readonly ServiceBucket[];
};

export function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.slice(0, 6).map((service, index) => (
        <article
          key={service.name}
          className="group rounded-2xl border border-[#dce8f8] bg-gradient-to-b from-white to-[#f9fbff] p-5 shadow-[0_24px_54px_-46px_rgba(0,35,80,0.58)] transition hover:-translate-y-0.5 hover:border-[#c4dcfa]"
        >
          <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[#0a66c2]/10 text-lg text-[#0a66c2]">
            {serviceIcons[index % serviceIcons.length]}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#142a44]">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
          <Link
            href={`/services#${slugify(service.name)}`}
            className="mt-4 inline-flex text-sm font-semibold text-[#0a66c2] underline-offset-4 group-hover:underline"
          >
            View services
          </Link>
        </article>
      ))}
    </div>
  );
}
