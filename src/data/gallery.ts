// Pozele din galerie. `alt` este important pentru accesibilitate și SEO.
// Pozele de pe Unsplash sunt de probă – le poți înlocui cu fotografii reale:
// pune fișierul în /public/images și schimbă `src` în, ex., "/images/sala.jpg".
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const dish = (code: string, alt: string): GalleryImage => ({ src: `/menu/${code}.jpg`, alt, width: 800, height: 800 });
const stock = (id: string, alt: string, width = 1200, height = 800): GalleryImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`,
  alt,
  width,
  height,
});

export const galleryImages: GalleryImage[] = [
  stock("photo-1517248135467-4c7edcad34c4", "Sală de restaurant elegantă, cu lumină caldă"),
  dish("007", "Tagliata di manzo cu rucola și parmezan"),
  dish("019", "Pizza margherita cu busuioc proaspăt"),
  stock("photo-1555396273-367ea4eb4db5", "Atmosferă intimă într-un restaurant italian", 1200, 1500),
  dish("011", "Orata alla griglia, dorada la grătar"),
  stock("photo-1559339352-11d035aa65de", "Mese pregătite într-un restaurant elegant"),
  dish("030", "Tiramisu servit la Grand Piece"),
  dish("014", "Spaghetti carbonara"),
  stock("photo-1470337458703-46ad1756a187", "Cocktailuri servite la bar", 1200, 1500),
  dish("010", "Fritto misto cu fructe de mare"),
  stock("photo-1528605248644-14dd04022da1", "Prieteni la masă, într-o seară la restaurant"),
  dish("031", "Panna cotta cu fructe de pădure"),
  dish("005", "Antipasto misto cu mezeluri și brânzeturi"),
  dish("028", "Pizza quattro carni"),
];
