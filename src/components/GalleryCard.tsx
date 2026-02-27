"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/src/content/gallery";

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  const [error, setError] = useState(false);

  return (
    <figure className="section-elevated overflow-hidden rounded-2xl border border-[#2d435f] ui-shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        {error ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0f1b2d] to-[#1f2937]">
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#355172] bg-[#111827] text-[#60a5fa]">
                ⚡
              </div>
              <p className="mt-3 text-sm font-semibold text-[#dbeafe]">Photo coming soon</p>
            </div>
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            quality={75}
            onError={() => setError(true)}
          />
        )}
      </div>
      <figcaption className="px-4 pb-4 pt-3">
        <p className="text-sm font-semibold text-[#f1f5f9]">{item.caption}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted">{item.alt}</p>
      </figcaption>
    </figure>
  );
}
