import Link from "next/link";
import { faqs } from "@/src/content/faqs";
import type { NeighborhoodPageContent } from "@/src/content/neighborhoods";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { SectionHeader } from "@/src/components/SectionHeader";

type NeighborhoodPageProps = {
  content: NeighborhoodPageContent;
};

export function NeighborhoodPage({ content }: NeighborhoodPageProps) {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: `${content.name}`, path: `/${content.slug}` },
  ] as const;

  return (
    <div className="space-y-8">
      <section className="card-surface space-y-5 rounded-3xl border border-[var(--border)] p-6 sm:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeader
          eyebrow={content.borough}
          title={`${content.name} electrician for homes and businesses`}
          headingLevel={1}
          description={content.intro}
          action={<CallCTA label="Call 646-710-0134" />}
        />
        <p className="text-sm text-[var(--muted)]">
          Serving {content.name} with licensed, insured electrical service for residential and light commercial properties.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Common property types</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          {content.buildingTypes.map((item) => (
            <li key={item} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Common electrical issues in {content.name}</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          {content.issues.map((item) => (
            <li key={item} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Featured services for {content.name}</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          {content.featuredServices.map((svc) => (
            <li key={svc.label}>
              <Link
                href={svc.href}
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline"
              >
                {svc.label}
              </Link>{" "}
              {svc.note}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Planning and access notes</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Each property type in {content.name} has its own access and scheduling realities. We tailor shutdowns, protection, and communication to match the building and occupancy.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          {content.planningNotes.map((note) => (
            <li key={note} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">How we approach {content.name}</h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--muted)]">
          {content.longForm.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">FAQs for {content.name}</h2>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 ui-shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Next steps</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{content.ctaLine}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request a callback
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            View services
          </Link>
          <Link
            href={`/${content.borough.toLowerCase().replace(" ", "-")}-electrician`}
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            {content.borough} page
          </Link>
        </div>
      </section>
    </div>
  );
}
