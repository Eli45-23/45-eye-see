import Image from "next/image";
import Link from "next/link";
import { business } from "@/src/content/business";
import { Button } from "./Button";
import { CallCTA } from "./CallCTA";

type HeroSectionProps = {
  points: readonly string[];
};

export function HeroSection({ points }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#d7e5f8] bg-white/90 p-6 shadow-[0_28px_80px_-48px_rgba(5,38,80,0.58)] sm:p-10">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-[#dbefff] via-transparent to-[#ffeec9]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0a66c2]">NYC Electrical Service</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#101f34] sm:text-5xl">
            High-standard electrical work for homes and businesses.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
            45 EYE Electrical serves Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas with licensed, insured, and responsive electrical service.
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.slice(0, 4).map((point) => (
              <li key={point} className="flex items-center gap-2 rounded-xl border border-[#e2ecfa] bg-[#f9fbff] px-3 py-2 text-sm font-medium text-[#163453]">
                <span className="inline-block size-2 rounded-full bg-[#c4922f]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <CallCTA label={`Call ${business.phone}`} />
            <Button href="/contact#contact-request" variant="secondary">
              Contact for scheduling
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Prefer details first? <Link href="/services" className="font-semibold text-[#0a66c2] underline-offset-4 hover:underline">View all electrical services</Link>.
          </p>
        </div>

        <div className="relative min-h-72 rounded-3xl border border-[#dce9fb] bg-gradient-to-br from-[#09234a] via-[#0a66c2] to-[#0b1b31] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-[#ffd37f]/40 blur-2xl" />
          <div className="absolute -left-4 bottom-0 size-28 rounded-full bg-[#4ca3ff]/40 blur-2xl" />
          <div className="relative flex h-full flex-col justify-between">
            <p className="text-sm font-medium text-[#d8e9ff]">45 EYE Electrical Solutions</p>
            <div className="mx-auto my-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <Image
                src="/brand/logo-45-eye.jpg"
                alt="45 EYE Electrical Solutions logo"
                width={420}
                height={280}
                className="h-auto w-full max-w-64 rounded-xl"
                sizes="(max-width: 1024px) 240px, 320px"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-[#e8f2ff]">
              Licensed and insured electrician serving Williamsburg, Lower Manhattan,
              Midtown Manhattan, Queens, and nearby neighborhoods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
