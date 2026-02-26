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
    <figure className="overflow-hidden rounded-2xl border border-[#dce8f8] bg-white shadow-[0_24px_56px_-42px_rgba(1,31,75,0.5)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        {error ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#edf6ff] to-[#fff6e4]">
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#c9dcf6] bg-white text-[#0a66c2]">
                ⚡
              </div>
              <p className="mt-3 text-sm font-semibold text-[#1a3656]">Photo coming soon</p>
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
        <p className="text-sm font-semibold text-[#132d4b]">{item.caption}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.alt}</p>
      </figcaption>
    </figure>
  );
}
