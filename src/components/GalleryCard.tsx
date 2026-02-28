"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/src/content/gallery";
import { HOME_HERO_IMAGE_SRC } from "@/src/content/images";

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const imageSrc = useFallbackImage
    ? HOME_HERO_IMAGE_SRC
    : item.src;

  return (
    <figure className="card-surface card-hover overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--border)]">
        {showPlaceholder ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--surface)] to-[var(--card)]">
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--accent)]">
                ⚡
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--text)]">Photo coming soon</p>
            </div>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            quality={75}
            onError={() => {
              if (!useFallbackImage) {
                setUseFallbackImage(true);
                return;
              }
              setShowPlaceholder(true);
            }}
          />
        )}
        </div>
      </div>
      <figcaption className="px-4 pb-4 pt-4">
        <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
        <p className="mt-1 truncate text-xs text-[var(--muted)]">{item.description}</p>
      </figcaption>
    </figure>
  );
}
