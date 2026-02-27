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
      <section className="section-light rounded-3xl border border-[#25354c] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Services"
          title="Electrical services designed for NYC properties"
          description="Troubleshooting, repairs, upgrades, and same-day service support when availability allows."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="section-elevated sticky top-24 rounded-3xl border border-[#2a3d58] p-5 ui-shadow-sm" aria-label="Service section navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0a66c2]">Jump to Service</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceBuckets.map((service) => {
                const anchor = slugify(service.name);
                return (
                  <li key={anchor}>
                    <a className="font-medium text-[#dbeafe] hover:text-[#60a5fa]" href={`#${anchor}`}>
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
                  className="section-light scroll-mt-24 rounded-3xl border border-[#25354c] p-6 ui-shadow-sm sm:p-7"
                >
                  <h2 className="text-3xl font-semibold tracking-tight text-[#f1f5f9]">{service.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {service.commonJobs.map((job) => (
                      <li key={job} className="section-elevated rounded-xl border border-[#2e435f] px-3 py-2">
                        {job}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#94a3b8]">{getAreaLine(index)}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <CallCTA label={`Call ${business.phone}`} />
                    <Link
                      href="/contact#contact-request"
                      className="text-sm font-semibold text-[#60a5fa] underline-offset-4 hover:underline"
                    >
                      Request scheduling details
                    </Link>
                  </div>
                </article>

                {(index + 1) % 3 === 0 && index !== serviceBuckets.length - 1 ? (
                  <div className="section-elevated rounded-2xl border border-[#2d435f] p-5 ui-shadow-sm">
                    <p className="text-sm font-medium text-[#dbeafe]">
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

      <section className="section-light space-y-5 rounded-3xl border border-[#25354c] p-6 ui-shadow-md sm:p-8">
        <SectionHeader
          eyebrow="Work Gallery"
          title="Recent electrical project highlights"
          description="Field photos from residential and commercial jobs across NYC service areas."
          action={<CallCTA label={`Call ${business.phone}`} />}
        />
        <GalleryGrid items={workGallery} />
      </section>

      <section className="section-elevated rounded-3xl border border-[#2a3d58] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#f1f5f9]">Continue your request</h2>
        <p className="mt-3 text-muted">Use these quick links to move from service research to scheduling.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/contact#contact-request" className="font-semibold text-[#60a5fa] underline-offset-4 hover:underline">
              Contact page for callback and service scheduling
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-[#60a5fa] underline-offset-4 hover:underline">
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
