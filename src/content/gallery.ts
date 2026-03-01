import fs from "node:fs";
import path from "node:path";

export type GalleryItem = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

// Keep this list in sync with /public/gallery.
export const workGallery: readonly GalleryItem[] = [
  {
    src: "/gallery/upright/work-01-upright.jpg",
    title: "Meter and panel upgrade",
    description: "Residential service equipment update with organized conduit and meter routing.",
    alt: "NYC residential electrical panel and dual meter upgrade mounted with organized conduit routing.",
  },
  {
    src: "/gallery/upright/work-02-upright.jpg",
    title: "Brick-wall panel rough-in",
    description: "Conduit and branch-circuit rough-in staged for a panel build-out in NYC.",
    alt: "NYC panel rough-in on a brick wall with conduit runs and branch wiring in progress.",
  },
  {
    src: "/gallery/upright/work-03-upright.jpg",
    title: "Commercial fit-out lighting",
    description: "Restaurant interior electrical installation with pendant and recessed lighting points.",
    alt: "NYC restaurant interior with electrical fit-out work for pendant and recessed lighting.",
  },
  {
    src: "/gallery/upright/work-04-upright.jpg",
    title: "Device replacement prep",
    description: "Switch and receptacle replacement setup with tools and wiring ready for trim-out.",
    alt: "NYC outlet and switch replacement setup with tools and wiring ready for trim-out.",
  },
  {
    src: "/gallery/upright/work-05-upright.jpg",
    title: "Pendant and ceiling layout",
    description: "Commercial ceiling lighting layout with pendant drops and recessed fixtures.",
    alt: "NYC commercial interior with pendant lights and recessed ceiling lighting during installation.",
  },
  {
    src: "/gallery/upright/work-06-upright.jpg",
    title: "Architectural lighting finish",
    description: "Interior millwork and cove-lighting details nearing completion.",
    alt: "NYC commercial finish with integrated cove lighting and architectural trim details.",
  },
  {
    src: "/gallery/upright/work-07-upright.jpg",
    title: "Fused disconnect service",
    description: "Close-up of fused disconnect components and terminations during service work.",
    alt: "NYC fused electrical disconnect with visible conductors and line connections during service work.",
  },
  {
    src: "/gallery/upright/work-08-upright.jpg",
    title: "Open commercial floor lighting",
    description: "Large commercial floor prepared for lighting trim and final electrical completion.",
    alt: "NYC commercial floor with completed electrical rough-in and recessed lighting points.",
  },
  {
    src: "/gallery/upright/work-09-upright.jpg",
    title: "Garage service equipment",
    description: "Garage electrical service setup with charger hardware and panel access.",
    alt: "NYC garage wall with electrical service equipment, panel enclosure, and utility hardware.",
  },
  {
    src: "/gallery/upright/work-10-upright.jpg",
    title: "Junction box rough wiring",
    description: "Junction box wiring staged for organized circuit termination and testing.",
    alt: "NYC junction box rough wiring with branch circuits and conduit ready for final connections.",
  },
  {
    src: "/gallery/upright/work-11-upright.jpg",
    title: "Service disconnect install",
    description: "Outdoor service disconnect hardware mounted and wired for safe operation.",
    alt: "NYC service disconnect units mounted on masonry wall during electrical equipment installation.",
  },
  {
    src: "/gallery/upright/work-12-upright.jpg",
    title: "Conduit branch run",
    description: "Conduit run and box placement prepared for device installation on a new wall.",
    alt: "NYC conduit run and electrical boxes installed along a wall during renovation rough-in.",
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
