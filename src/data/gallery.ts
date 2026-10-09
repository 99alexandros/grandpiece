// Pozele din galerie. `alt` este important pentru accesibilitate și SEO.
// Pentru poze noi: pune fișierul în /public/images și adaugă un rând aici.
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const photo = (code: string, alt: string): GalleryImage => ({ src: `/menu/${code}.jpg`, alt, width: 800, height: 800 });

export const galleryImages: GalleryImage[] = [
  photo("007", "Tagliata di manzo cu rucola și parmezan"),
  photo("019", "Pizza margherita cu busuioc proaspăt"),
  photo("011", "Orata alla griglia, dorada la grătar"),
  photo("030", "Tiramisu servit la Grand Piece"),
  photo("014", "Spaghetti carbonara"),
  photo("010", "Fritto misto cu fructe de mare"),
  photo("028", "Pizza quattro carni"),
  photo("031", "Panna cotta cu fructe de pădure"),
  photo("005", "Antipasto misto cu mezeluri și brânzeturi"),
  photo("035", "Piece of paradise, cocktail semnătură"),
  photo("013", "Gamberi alla griglia"),
  photo("032", "Gelato al pistacchio"),
];
