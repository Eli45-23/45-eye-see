import Link from "next/link";
import { business } from "@/src/content/business";
import { workGallery } from "@/src/content/gallery";
import { serviceBuckets } from "@/src/content/services";
import { CallCTA } from "@/src/components/CallCTA";
import { GalleryGrid } from "@/src/components/GalleryGrid";
import { SectionHeader } from "@/src/components/SectionHeader";
import { createPageMetadata } from "@/src/lib/seo";
import { getServiceListSchema } from "@/src/lib/schema";
import { slugify } from "@/src/lib/slug";

export const metadata = createPageMetadata({
  page: "Services",
  path: "/services",
  focus:
    "Electrical services in NYC for troubleshooting, repairs, upgrades, safety updates, and same-day service calls across key boroughs.",
});

const neighborhoods = business.mustMentionNeighborhoods;

function getAreaLine(index: number): string {
  const first = neighborhoods[index % neighborhoods.length];
  const second = neighborhoods[(index + 1) % neighborhoods.length];
  return `Frequent service coverage includes ${first}, ${second}, and nearby NYC neighborhoods.`;
}

export default function ServicesPage() {
  const serviceListSchema = getServiceListSchema();

  return (
    <div className="space-y-9">
      <section className="rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_30px_70px_-52px_rgba(4,32,74,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Services"
          title="Electrical services designed for NYC properties"
          description="Troubleshooting, repairs, upgrades, and same-day service support when availability allows."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 rounded-3xl border border-[#dbe7f8] bg-white p-5 shadow-[0_20px_54px_-44px_rgba(1,31,75,0.38)]" aria-label="Service section navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0a66c2]">Jump to Service</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceBuckets.map((service) => {
                const anchor = slugify(service.name);
                return (
                  <li key={anchor}>
                    <a className="font-medium text-[#163456] hover:text-[#0a66c2]" href={`#${anchor}`}>
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <section className="space-y-5" aria-label="Electrical service hub sections">
          {serviceBuckets.map((service, index) => {
            const serviceAnchor = slugify(service.name);
            return (
              <div key={service.name} className="space-y-5">
                <article
                  id={serviceAnchor}
                  className="scroll-mt-24 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_24px_56px_-44px_rgba(1,31,75,0.42)] sm:p-7"
                >
                  <h2 className="text-3xl font-semibold tracking-tight text-[#12273f]">{service.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                    {service.commonJobs.map((job) => (
                      <li key={job} className="rounded-xl border border-[#e2ecf9] bg-[#f9fbff] px-3 py-2">
                        {job}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#35506d]">{getAreaLine(index)}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <CallCTA label={`Call ${business.phone}`} />
                    <Link
                      href="/contact#contact-request"
                      className="text-sm font-semibold text-[#0a66c2] underline-offset-4 hover:underline"
                    >
                      Request scheduling details
                    </Link>
                  </div>
                </article>

                {(index + 1) % 3 === 0 && index !== serviceBuckets.length - 1 ? (
                  <div className="rounded-2xl border border-[#d6e7fb] bg-gradient-to-r from-[#f8fbff] to-[#fff7e8] p-5 shadow-[0_22px_50px_-42px_rgba(1,31,75,0.3)]">
                    <p className="text-sm font-medium text-[#1d395a]">
                      Ready to schedule one of these services?
                    </p>
                    <div className="mt-3">
                      <CallCTA label={`Call ${business.phone}`} />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>

      <section className="space-y-5 rounded-3xl border border-[#dce8f8] bg-white p-6 shadow-[0_30px_72px_-52px_rgba(1,31,75,0.5)] sm:p-8">
        <SectionHeader
          eyebrow="Work Gallery"
          title="Recent electrical project highlights"
          description="Field photos from residential and commercial jobs across NYC service areas."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <GalleryGrid items={workGallery} />
      </section>

      <section className="rounded-3xl border border-[#dce8f8] bg-gradient-to-r from-[#f7fbff] to-[#fff7e7] p-6 shadow-[0_26px_64px_-48px_rgba(1,31,75,0.45)] sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#10263f]">Continue your request</h2>
        <p className="mt-3 text-slate-600">Use these quick links to move from service research to scheduling.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/contact#contact-request" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
              Contact page for callback and service scheduling
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">
              Home page for service areas, trust points, and FAQs
            </Link>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
    </div>
  );
}
