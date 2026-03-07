import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/src/content/projects";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { Section } from "@/src/components/Section";
import { SectionHeader } from "@/src/components/SectionHeader";
import { createPageMetadata } from "@/src/lib/seo";
import { JsonLd } from "@/src/components/JsonLd";
import { getBreadcrumbSchema } from "@/src/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "NYC Electrical Projects & Case Studies | 45 EYE Electrical Solutions",
  description:
    "Browse NYC electrical case studies: panel upgrades, troubleshooting, and EV charger installs across Brooklyn, Manhattan, and Queens.",
  path: "/projects",
  keywords: [
    "NYC electrical projects",
    "electrical case studies",
    "panel upgrade Brooklyn",
    "Manhattan electrical troubleshooting",
    "Queens EV charger installation",
  ],
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
] as const;

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <Section className="space-y-8">
      <div className="card-surface card-muted space-y-6 rounded-3xl border border-[var(--border)] p-6 sm:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeader
          eyebrow="Projects"
          title="NYC electrical case studies"
          headingLevel={1}
          description="Real-world panel upgrades, troubleshooting, and EV charger installations across Brooklyn, Manhattan, and Queens."
          action={<CallCTA label="Call 646-710-0134" />}
        />
        <p className="text-sm text-[var(--muted)]">
          Each project outlines the problem, site conditions, diagnosis, work performed, safety approach, and outcome. Use these as
          references when planning similar work in your building.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 ui-shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{project.borough}</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">{project.title}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{project.summary}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">Location: {project.location}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[var(--muted)]">
              {project.keywords.map((kw) => (
                <span key={kw} className="rounded-full border border-[var(--border)] px-2 py-1">
                  {kw}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
              >
                Read case study
              </Link>
              <CallCTA label="Call 646-710-0134" />
            </div>
          </article>
        ))}
      </div>

      <div className="card-surface rounded-3xl border border-[var(--border)] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Plan your next project</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          If you are considering a panel upgrade, troubleshooting, or EV charger installation, review these examples and call to align
          scope, permits, and scheduling with your property conditions.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            View services
          </Link>
          <Link
            href="/service-areas"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Service areas
          </Link>
        </div>
      </div>

      <JsonLd id="schema-projects-breadcrumbs" data={breadcrumbSchema} />
    </Section>
  );
}
