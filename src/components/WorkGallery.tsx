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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={74}
            className={styles.image}
            loading="lazy"
          />
          <figcaption className={styles.caption}>{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
