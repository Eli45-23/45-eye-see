import Image from "next/image";
import Link from "next/link";
import { CallCTA } from "@/src/components/CallCTA";

type LocalHeroProps = {
  areaName: string;
  supportingSentence: string;
  neighborhoodLine: string;
};

export function LocalHero({ areaName, supportingSentence, neighborhoodLine }: LocalHeroProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1726] via-[#111827] to-[#1b2230] shadow-xl shadow-black/30">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8cbff6]">
            {areaName} Electrical Services
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {areaName} Electrician
          </h1>
          <p className="mt-3 text-lg font-medium text-[#dbeafe]">
            Licensed &amp; Insured NYC Electrical Contractor
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#c9d7ea]">
            {supportingSentence}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallCTA label="Call 646-710-0134" />
            <Link
              href="/contact#contact-request"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
            >
              Request a Callback
            </Link>
          </div>
          <p className="mt-5 text-xs font-medium tracking-wide text-[#9fb5d4]">
            Owner-Operated • Licensed • Insured • {areaName} Focused
          </p>
          <p className="mt-4 text-xs leading-relaxed text-[#95aac7]">{neighborhoodLine}</p>
        </div>

        <div className="relative min-h-[280px] border-t border-white/10 lg:min-h-[460px] lg:border-l lg:border-t-0">
          {/* Keep this image compressed around 250-400KB for fast LCP while preserving detail. */}
          <Image
            src="/images/hero-emt.jpg"
            alt={`Clean EMT electrical installation in ${areaName}`}
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-[#0b1220]/20 to-transparent lg:bg-gradient-to-l lg:from-[#0b1220]/10 lg:via-[#0b1220]/35 lg:to-[#0b1220]/80" />
        </div>
      </div>
    </section>
  );
}
