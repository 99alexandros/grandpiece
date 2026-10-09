// Ofertele restaurantului (din „Oferte zilnice” și „Oferte de sărbători”).
// Pentru a edita: modifică / adaugă / șterge obiecte din listele de mai jos.
// Pozele sunt în /public/offers (z1.jpg … = zilnice, s1.jpg … = sărbători).

export interface Offer {
  id: string;
  title: string;
  description: string;
  /** Textul din eticheta roșie (preț sau avantaj). */
  badge: string;
  /** Când / pentru cine este valabilă. */
  details: string;
  image: string;
}

export const dailyOffers: Offer[] = [
  {
    id: "z1",
    title: "Pizza + băutură",
    description: "Orice pizza din meniu, plus o băutură răcoritoare la alegere.",
    badge: "39 lei",
    details: "Zilnic",
    image: "/offers/z1.jpg",
  },
  {
    id: "z2",
    title: "Paste + limonadă",
    description: "Spaghetti Bolognese sau altă pastă din meniu, însoțită de o limonadă.",
    badge: "42 lei",
    details: "Zilnic",
    image: "/offers/z2.jpg",
  },
  {
    id: "z3",
    title: "Meniul zilei",
    description: "Supă sau salată, fel principal și desert. Simplu, sățios și la prețul unui student.",
    badge: "35 lei",
    details: "Luni – Vineri, 12:00 – 16:00",
    image: "/offers/z3.jpg",
  },
  {
    id: "z4",
    title: "Happy hour rooftop",
    description: "Apusul pe terasă, cu reducere la toate cocktailurile și limonadele.",
    badge: "-20% la băuturi",
    details: "Luni – Joi, 17:00 – 19:00",
    image: "/offers/z4.jpg",
  },
  {
    id: "z5",
    title: "Aperitiv la doi",
    description: "Gamberi alla grigliata de împărțit, plus două băuturi la alegere.",
    badge: "79 lei",
    details: "Pentru 2 persoane · zilnic",
    image: "/offers/z5.jpg",
  },
  {
    id: "z6",
    title: "Grupul de 4",
    description: "Veniți patru prieteni și primiți 10% reducere la notă, plus o porție de cartofi gratis.",
    badge: "-10% la notă",
    details: "Minim 4 persoane · Luni – Joi",
    image: "/offers/z6.jpg",
  },
  {
    id: "z7",
    title: "Weekend DJ night",
    description:
      "Rezervă masă în weekend și rămâi la petrecere: intrare gratuită în club și prima băutură la jumătate de preț.",
    badge: "Intrare gratuită",
    details: "Vineri & Sâmbătă · rezervare până la 22:00",
    image: "/offers/z7.jpg",
  },
  {
    id: "z8",
    title: "Ziua ta la noi",
    description: "Îți sărbătorești ziua cu prietenii? Desert cu lumânare și un pahar din partea casei.",
    badge: "Cadou",
    details: "Minim 4 persoane · cu rezervare",
    image: "/offers/z8.jpg",
  },
];

export const holidayOffers: Offer[] = [
  {
    id: "s1",
    title: "Revelion",
    description:
      "Petrecere de Revelion pe terasă: meniu festiv cu mai multe feluri, foc de artificii la miezul nopții și muzică live până dimineața.",
    badge: "-10% la rezervări până pe 15 Dec",
    details: "31 Decembrie · rezervare obligatorie",
    image: "/offers/s1.jpg",
  },
  {
    id: "s2",
    title: "Valentine's Day",
    description: "Cină romantică pentru doi: masă cu vedere, meniu degustare.",
    badge: "-10% la toate cuplurile",
    details: "14 Februarie · doar cu rezervare",
    image: "/offers/s2.jpg",
  },
  {
    id: "s3",
    title: "Paște",
    description: "Brunch de Paște în familie, cu preparate tradiționale și de sezon.",
    badge: "-20% copii",
    details: "Duminica de Paște · 12:00 – 17:00",
    image: "/offers/s3.jpg",
  },
  {
    id: "s4",
    title: "1 Iunie",
    description: "Ziua Copilului pe terasă: meniu special pentru cei mici și un desert gratuit de fiecare copil.",
    badge: "Desert gratuit",
    details: "1 Iunie · cu părinții la masă",
    image: "/offers/s4.jpg",
  },
  {
    id: "s5",
    title: "Ultima zi de școală",
    description:
      "Sărbătorește finalul de an școlar cu prietenii: reducere de grup pentru elevi și studenți la toată nota.",
    badge: "-15% la notă",
    details: "Ultima zi de cursuri · grupuri de minim 4",
    image: "/offers/s5.jpg",
  },
  {
    id: "s6",
    title: "Prima zi de școală",
    description: "Un început de an ușor: părinții iau masa, iar copiii primesc un desert din partea casei.",
    badge: "Desert gratuit",
    details: "7 Septembrie",
    image: "/offers/s6.jpg",
  },
  {
    id: "s7",
    title: "Halloween",
    description: "Seară tematică pe terasă, cu decor de Halloween și cocktailuri speciale de sezon.",
    badge: "Cocktail tematic",
    details: "31 Octombrie · seara",
    image: "/offers/s7.jpg",
  },
  {
    id: "s8",
    title: "Crăciun",
    description: "Cină de Crăciun în familie sau cu colegii: meniu festiv și un cadou surpriză la fiecare masă.",
    badge: "Cadou la masă",
    details: "24 – 25 Decembrie · rezervare recomandată",
    image: "/offers/s8.jpg",
  },
];
