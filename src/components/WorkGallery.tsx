import type { GalleryItem } from "@/src/content/gallery";
import { GalleryGrid } from "./GalleryGrid";

type WorkGalleryProps = {
  items: readonly GalleryItem[];
};

export function WorkGallery({ items }: WorkGalleryProps) {
  return <GalleryGrid items={items} />;
}
