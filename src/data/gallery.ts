// Pozele din galerie (momentan doar preparate din meniu). `alt` este important pentru accesibilitate și SEO.
// Pentru poze noi: pune fișierul în /public/images și adaugă un rând aici cu dimensiunile reale.
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const dish = (code: string, alt: string): GalleryImage => ({ src: `/menu/${code}.jpg`, alt, width: 800, height: 800 });

export const galleryImages: GalleryImage[] = [
  dish("007", "Tagliata di manzo cu rucola și parmezan"),
  dish("019", "Pizza margherita cu busuioc proaspăt"),
  dish("011", "Orata alla griglia, dorada la grătar"),
  dish("030", "Tiramisu servit la Grand Piece"),
  dish("014", "Spaghetti carbonara"),
  dish("010", "Fritto misto cu fructe de mare"),
  dish("031", "Panna cotta cu fructe de pădure"),
  dish("005", "Antipasto misto cu mezeluri și brânzeturi"),
  dish("028", "Pizza quattro carni"),
  dish("013", "Gamberi alla griglia"),
  dish("032", "Gelato al pistacchio"),
  dish("009", "Trancio di salmone e zucchine"),
  dish("017", "Pasta al pesto"),
  dish("024", "Pizza quattro formaggi"),
];
