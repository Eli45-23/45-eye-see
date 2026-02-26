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
    src: "/gallery/nyc-service-disconnect-switch.jpg",
    alt: "Fused service disconnect installation during an electrical service upgrade in Queens.",
    caption: "Service disconnect and safety switch upgrade",
  },
  {
    src: "/gallery/nyc-fused-disconnect-closeup.jpg",
    alt: "Close-up of a fused disconnect with labeled conductors during electrical work.",
    caption: "Code-focused disconnect wiring detail",
  },
  {
    src: "/gallery/nyc-conduit-panel-installation.jpg",
    alt: "New conduit runs and organized panel layout in a Lower Manhattan utility area.",
    caption: "Conduit and panel organization",
  },
  {
    src: "/gallery/nyc-emergency-lighting-control-wall.jpg",
    alt: "Commercial emergency lighting modules mounted and wired on a control wall.",
    caption: "Emergency lighting control installation",
  },
  {
    src: "/gallery/nyc-residential-panel-meter-upgrade.jpg",
    alt: "Residential meter and panel upgrade underway with new breakers and feeders.",
    caption: "Residential meter and panel modernization",
  },
  {
    src: "/gallery/nyc-crystal-pendant-light-install.jpg",
    alt: "Crystal pendant fixture installed over a stair landing in a Brooklyn home.",
    caption: "Decorative fixture installation",
  },
  {
    src: "/gallery/nyc-modern-wall-sconce-install.jpg",
    alt: "Modern wall sconce mounted in a hallway with clean finish work.",
    caption: "Modern wall lighting upgrade",
  },
  {
    src: "/gallery/nyc-hallway-ceiling-lantern-install.jpg",
    alt: "Hallway lantern-style ceiling fixture installed in a renovated interior.",
    caption: "Hallway lantern fixture install",
  },
  {
    src: "/gallery/nyc-entryway-orb-chandelier-install.jpg",
    alt: "Orb chandelier installed in an entryway during residential electrical updates.",
    caption: "Entryway chandelier wiring and install",
  },
  {
    src: "/gallery/nyc-recessed-lighting-living-room.jpg",
    alt: "Living room recessed lighting with balanced spacing and completed trim.",
    caption: "Recessed lighting layout and finish",
  },
  {
    src: "/gallery/nyc-commercial-recessed-cove-lighting.jpg",
    alt: "Commercial recessed and cove lighting completed in Midtown Manhattan.",
    caption: "Commercial recessed and cove lighting",
  },
  {
    src: "/gallery/nyc-restaurant-pendant-light-layout.jpg",
    alt: "Pendant lighting layout in a restaurant dining area during fit-out work.",
    caption: "Restaurant pendant lighting layout",
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
