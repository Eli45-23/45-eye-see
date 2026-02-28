import Link from "next/link";
import { CallCTA } from "@/src/components/CallCTA";

type CTASectionProps = {
  heading?: string;
};

export function CTASection({
  heading = "Need a Manhattan electrician today?",
}: CTASectionProps) {
  return (
    <section className="section-elevated rounded-3xl border border-[var(--border)] p-6 ui-shadow-md sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{heading}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <CallCTA label="Call 646-710-0134" />
        <Link
          href="/contact#contact-request"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          Request a Callback
        </Link>
      </div>
    </section>
  );
}
