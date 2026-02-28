import Link from "next/link";
import { business } from "@/src/content/business";
import { CallCTA } from "@/src/components/CallCTA";

export default function NotFound() {
  return (
    <section className="section-light rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
      <p className="eyebrow mb-3">404</p>
      <h1 className="type-h2">Page not found</h1>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        The page you requested is not available. Use the links below to continue.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          Go to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold tracking-wide text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          View Services
        </Link>
        <CallCTA label={`Call ${business.phone}`} />
      </div>
    </section>
  );
}
