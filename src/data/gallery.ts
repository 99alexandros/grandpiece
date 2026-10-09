import { images } from "./images";

// Pozele din galerie. `alt` este important pentru accesibilitate și SEO.
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { src: images.hero, alt: "Sala restaurantului Grand Piece", width: 1600, height: 1067 },
  { src: images.dish1, alt: "Preparat servit la Grand Piece", width: 900, height: 1200 },
  { src: images.intro, alt: "Atmosfera din restaurant", width: 1200, height: 800 },
  { src: images.dish2, alt: "Preparat servit la Grand Piece", width: 900, height: 900 },
  { src: images.about, alt: "Interiorul restaurantului", width: 1400, height: 933 },
  { src: images.dish3, alt: "Preparat servit la Grand Piece", width: 900, height: 1200 },
  { src: images.dish4, alt: "Preparat servit la Grand Piece", width: 900, height: 900 },
  { src: images.dish5, alt: "Desert servit la Grand Piece", width: 900, height: 1200 },
  { src: images.dish6, alt: "Preparat servit la Grand Piece", width: 900, height: 900 },
];
