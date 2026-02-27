import Link from "next/link";
import type { ServiceBucket } from "@/src/content/services";
import { slugify } from "@/src/lib/slug";

const serviceIcons = ["⚡", "🛠", "🔌", "💡", "🏢", "🧰"];

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
      {items.slice(0, 6).map((service, index) => (
        <article
          key={service.name}
          className="group section-elevated rounded-3xl border border-[#2d435f] p-6 ui-shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_-42px_rgba(0,0,0,0.75)]"
        >
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0a66c2]/20 text-lg text-[#7ec3ff] ring-1 ring-[#2d4f73]">
            {serviceIcons[index % serviceIcons.length]}
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-[#f1f5f9]">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {getPreviewSentence(service.description)}
          </p>
          <Link
            href={`/services#${slugify(service.name)}`}
            className="mt-5 inline-flex text-sm font-semibold text-[#60a5fa] underline-offset-4 group-hover:underline"
          >
            View services
          </Link>
        </article>
      ))}
    </div>
  );
}
