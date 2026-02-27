import Image from "next/image";
import { Button } from "./Button";
import { CallCTA } from "./CallCTA";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/30">
      <div className="absolute inset-0">
        <Image
          src="/gallery/work-06.jpg"
          alt="Commercial lighting installation in a bright NYC interior"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative p-6 text-white sm:p-10 lg:max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Licensed &amp; insured NYC electrician
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#dce8fa]">
          10+ years of hands-on electrical experience, same-day availability when scheduling
          allows, and reliable service across Williamsburg, Lower Manhattan, Midtown Manhattan,
          Queens, and nearby NYC areas.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Button href="/contact" variant="secondary">
            Request a callback
          </Button>
        </div>

        <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
          {["Licensed", "Insured", "10+ years", "Same-day", "All payments"].map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/15 bg-black/25 px-3 py-2 text-center font-medium text-[#e6efff] backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
