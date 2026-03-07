import Link from "next/link";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { SectionHeader } from "@/src/components/SectionHeader";
import type { LocalAreaPageContent } from "@/src/content/localAreaPages";

type ServiceLink = {
  label: string;
  href: string;
};

type BoroughLandingPageProps = {
  content: LocalAreaPageContent;
  heroLead: readonly string[];
  localTrust: readonly string[];
  propertyTypes: readonly string[];
  commonIssues: readonly string[];
  serviceLinks: readonly ServiceLink[];
  cityContext: readonly string[];
  ctaHeadline: string;
  landingSections?: LocalAreaPageContent["landingSections"];
};

function ParagraphList({ items }: { items: readonly string[] }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function BulletList({ items, title }: { items: readonly string[]; title: string }) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">{title}</h3>
      <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ServiceLinks({ links }: { links: readonly ServiceLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function BoroughLandingPage({
  content,
  heroLead,
  localTrust,
  propertyTypes,
  commonIssues,
  serviceLinks,
  cityContext,
  ctaHeadline,
  landingSections,
}: BoroughLandingPageProps) {
  const displaySections = landingSections ?? content.landingSections;

  return (
    <div className="space-y-8">
      <section className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ui-shadow-md sm:p-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: `${content.areaName} electrician`, isCurrent: true },
          ]}
        />
        <SectionHeader
          eyebrow="Local Service"
          title={`NYC electrician in ${content.areaName}`}
          headingLevel={1}
          description={content.supportingSentence}
        />
        <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">{content.neighborhoodLine}</p>
        <ParagraphList items={heroLead} />
        <div className="flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request callback
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Local context and building profile</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <BulletList title="Common property types" items={propertyTypes} />
          <BulletList title="Common request patterns" items={commonIssues} />
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          Electrical troubleshooting and reliability in {content.areaName}
        </h2>
        <ParagraphList items={content.troubleshooting} />
      </section>

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          Panel upgrades and service changes for {content.areaName}
        </h2>
        <ParagraphList items={content.panelUpgrades} />
      </section>

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          {content.areaName} EV and infrastructure considerations
        </h2>
        <ParagraphList items={content.evChargers} />
      </section>

      <section className="space-y-3 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          Practical service context for residents and businesses
        </h2>
        <p className="text-sm text-[var(--muted)]">{content.description}</p>
        <ParagraphList items={content.residentialCommercial} />
        <ParagraphList items={content.longFormBlock.slice(0, 2)} />
      </section>

      <section className="space-y-4 rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Why {content.areaName} clients choose 45 EYE</h2>
        <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
          {content.whyChooseBullets.map((bullet) => (
            <li key={bullet} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
              {bullet}
            </li>
          ))}
          {localTrust.map((bullet) => (
            <li key={bullet} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Local execution notes</h2>
        <ParagraphList items={cityContext} />
        <p className="mt-4 text-sm font-semibold text-[var(--text)]">
          {ctaHeadline}
        </p>
        <div className="mt-4">
          <ServiceLinks links={serviceLinks} />
        </div>
      </section>

      {displaySections.map((section) => (
        <section key={section.heading} className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{section.heading}</h2>
          <ParagraphList items={section.paragraphs} />
        </section>
      ))}

      <section className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Move forward with confidence</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
          After reviewing options in {content.areaName}, you can request callback coordination or move to scheduling on the contact page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request callback
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Compare all services
          </Link>
          <Link
            href="/service-areas"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Service areas
          </Link>
        </div>
      </section>
    </div>
  );
}
