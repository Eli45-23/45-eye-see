export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const workGallery: readonly GalleryItem[] = [
  {
    src: "/gallery/commercial-lighting-install-01.jpg",
    alt: "Commercial interior lighting installation in progress with pendant fixtures and recessed lights in NYC.",
    width: 1512,
    height: 2016,
  },
];
