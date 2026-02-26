import fs from "node:fs";
import path from "node:path";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

// Keep this list in sync with /public/gallery.
export const workGallery: readonly GalleryItem[] = [
  {
    src: "/gallery/work-01.jpg",
    alt: "Electrical service equipment installation completed during a NYC property upgrade.",
    caption: "Service equipment upgrade",
  },
  {
    src: "/gallery/work-02.jpg",
    alt: "Close-up of wiring and disconnect components during a licensed electrical service call.",
    caption: "Disconnect and wiring detail",
  },
  {
    src: "/gallery/work-03.jpg",
    alt: "Organized panel and conduit work in progress at a commercial site in NYC.",
    caption: "Panel and conduit installation",
  },
  {
    src: "/gallery/work-04.jpg",
    alt: "Electrical controls and branch circuits arranged for a safe, code-aware setup.",
    caption: "Control system wiring",
  },
  {
    src: "/gallery/work-05.jpg",
    alt: "Residential electrical panel modernization with updated breakers and terminations.",
    caption: "Residential panel upgrade",
  },
  {
    src: "/gallery/work-06.jpg",
    alt: "Interior lighting fixture installation completed with clean finish work.",
    caption: "Custom fixture installation",
  },
  {
    src: "/gallery/work-07.jpg",
    alt: "Modern wall-mounted lighting upgrade in a residential hallway.",
    caption: "Wall lighting upgrade",
  },
  {
    src: "/gallery/work-08.jpg",
    alt: "Ceiling fixture replacement completed as part of an NYC interior renovation.",
    caption: "Ceiling fixture replacement",
  },
  {
    src: "/gallery/work-09.jpg",
    alt: "Entryway lighting installation with updated mounting and secure electrical connections.",
    caption: "Entryway lighting installation",
  },
  {
    src: "/gallery/work-10.jpg",
    alt: "Recessed lighting layout and trim completed for a residential living space.",
    caption: "Recessed lighting finish",
  },
  {
    src: "/gallery/work-11.jpg",
    alt: "Commercial interior lighting upgrades completed for a high-traffic workspace.",
    caption: "Commercial lighting upgrade",
  },
  {
    src: "/gallery/work-12.jpg",
    alt: "Final electrical detailing for lighting and power in a NYC renovation project.",
    caption: "Final install detailing",
  },
];

if (process.env.NODE_ENV === "development") {
  const missing = workGallery.filter((item) => {
    const resolved = path.join(process.cwd(), "public", item.src.replace(/^\//, ""));
    return !fs.existsSync(resolved);
  });

  if (missing.length > 0) {
    console.warn(
      `[gallery] Missing files in /public/gallery: ${missing.map((item) => item.src).join(", ")}`
    );
  }
}
