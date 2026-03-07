import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { projects } from "@/src/content/projects";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CallCTA } from "@/src/components/CallCTA";
import { Section } from "@/src/components/Section";
import { SectionHeader } from "@/src/components/SectionHeader";
import { createPageMetadata } from "@/src/lib/seo";
import { JsonLd } from "@/src/components/JsonLd";
import { getBreadcrumbSchema } from "@/src/lib/schema";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: ProjectPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return createPageMetadata({
    title: `${project.title} | NYC Electrical Case Study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: project.keywords,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ] as const;

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    articleSection: ["Electrical", "Case Study", project.borough],
    about: project.keywords,
    articleBody: `${project.problem} ${project.diagnosis} ${project.outcome}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://45eyeelectricalsolutions.com/projects/${project.slug}`,
    },
  };

  return (
    <Section className="space-y-8">
      <div className="card-surface card-muted space-y-6 rounded-3xl border border-[var(--border)] p-6 sm:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeader
          eyebrow={project.borough}
          title={project.title}
          headingLevel={1}
          description={project.summary}
          action={<CallCTA label="Call 646-710-0134" />}
        />
        <p className="text-xs text-[var(--muted)]">Location: {project.location}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">Problem</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.problem}</p>

          <h2 className="mt-6 text-lg font-semibold text-[var(--text)]">Site conditions</h2>
          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
            {project.siteConditions.map((item) => (
              <li key={item} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-semibold text-[var(--text)]">Diagnosis</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.diagnosis}</p>
        </article>

        <article className="rounded-3xl border border-[var(--border)] p-6 ui-shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">Work performed</h2>
          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
            {project.workPerformed.map((item) => (
              <li key={item} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-semibold text-[var(--text)]">Safety / code notes</h2>
          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
            {project.safetyNotes.map((item) => (
              <li key={item} className="section-elevated rounded-xl border border-[var(--border)] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-semibold text-[var(--text)]">Outcome</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.outcome}</p>
        </article>
      </div>

      <div className="card-surface rounded-3xl border border-[var(--border)] p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[var(--text)]">Plan a similar project</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          If you have a comparable building profile or electrical issue, call to discuss scope, permits, and scheduling. For more
          examples, return to the projects page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Back to projects
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            View services
          </Link>
          <Link
            href={`/${project.borough.toLowerCase()}-electrician`}
            className="inline-flex items-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            {project.borough} coverage
          </Link>
        </div>
      </div>

      <JsonLd id="schema-project-breadcrumbs" data={breadcrumbSchema} />
      <JsonLd id="schema-project-article" data={articleSchema} />
    </Section>
  );
}
