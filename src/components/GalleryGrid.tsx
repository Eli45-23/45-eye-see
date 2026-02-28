import type { GalleryItem } from "@/src/content/gallery";
import { GalleryCard } from "./GalleryCard";

type GalleryGridProps = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <GalleryCard key={item.src} item={item} />
      ))}
    </div>
  );
}
