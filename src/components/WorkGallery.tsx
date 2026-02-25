import Image from "next/image";
import type { GalleryItem } from "@/src/content/gallery";
import styles from "./WorkGallery.module.css";

type WorkGalleryProps = {
  items: readonly GalleryItem[];
};

export function WorkGallery({ items }: WorkGalleryProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <figure className={styles.card} key={item.src}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 860px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
