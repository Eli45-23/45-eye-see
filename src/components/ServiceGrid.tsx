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
          className="group rounded-3xl bg-[#111827] p-6 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25"
        >
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0a66c2]/20 text-lg text-[#7ec3ff] ring-1 ring-[#2d4f73]">
            {serviceIcons[index % serviceIcons.length]}
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-[#f1f5f9]">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            {getPreviewSentence(service.description)}
          </p>
          <Link
            href={`/services#${slugify(service.name)}`}
            className="mt-5 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 group-hover:text-blue-300 group-hover:underline"
          >
            View services
          </Link>
        </article>
      ))}
    </div>
  );
}
