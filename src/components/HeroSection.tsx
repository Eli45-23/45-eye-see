import Image from "next/image";
import { HOME_HERO_IMAGE_SRC } from "@/src/content/images";
import { Button } from "./Button";
import { CallCTA } from "./CallCTA";

const TRUST_BADGES = [
  "Licensed",
  "Insured",
  "10+ years",
  "Same-day (when available)",
  "Card / Zelle / Cash",
] as const;

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#101c31] to-[#0d1424] px-6 py-8 shadow-xl shadow-black/35 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div className="flex flex-col justify-center text-white">
          <h1 className="type-h1">
            Licensed &amp; insured NYC electrician
          </h1>
          <p className="mt-4 text-lg font-semibold tracking-tight text-[#e0ecff] sm:text-xl">
            Trusted, owner-operated electrical service for NYC homes and businesses.
          </p>
          <p className="mt-4 text-measure text-[16px] leading-relaxed text-[#d0ddf3] sm:text-[17px]">
            10+ years of hands-on electrical experience, dependable troubleshooting and
            installation work, and same-day availability when scheduling allows. Every service
            call is handled with clear communication, clean workmanship, and a safety-first
            approach.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CallCTA label="Call 646-710-0134" />
            <Button href="/contact" variant="secondary">
              Request a callback
            </Button>
          </div>

          <ul className="mt-8 flex max-w-2xl flex-wrap gap-2.5 text-sm">
            {TRUST_BADGES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-center font-medium text-[#d9e7ff]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-black/35 lg:min-h-[420px]">
          <Image
            src={HOME_HERO_IMAGE_SRC}
            alt="Commercial pendant and recessed lighting installation in progress at an NYC interior"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        </div>
      </div>
    </div>
  );
}
