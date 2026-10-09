// Ofertele restaurantului (din „Oferte zilnice” și „Oferte de sărbători”).
// Pentru a edita: modifică / adaugă / șterge obiecte din listele de mai jos.
// Pozele sunt în /public/offers (zilnica-1.jpg … = zilnice, sarbatoare-1.jpg … = sărbători).

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
    description: "Pizza margherita sau marinara, plus o băutură răcoritoare la alegere.",
    badge: "39 lei",
    details: "Zilnic",
    image: "/offers/zilnica-1.jpg",
  },
  {
    id: "z2",
    title: "Paste + răcoritoare",
    description: "Spaghetti pomodoro sau amatriciana, însoțite de o băutură răcoritoare la alegere.",
    badge: "42 lei",
    details: "Zilnic",
    image: "/offers/zilnica-2.jpg",
  },
  {
    id: "z3",
    title: "Meniul zilei",
    description:
      "Bruschette, felul principal la alegere (pizza margherita, pizza marinara sau pasta pomodoro) și un gelato. Simplu, sățios și la preț fix.",
    badge: "65 lei",
    details: "Luni – Vineri, 12:00 – 16:00",
    image: "/offers/zilnica-3.jpg",
  },
  {
    id: "z4",
    title: "Happy hour rooftop",
    description: "Apusul pe terasă, cu reducere la toate cocktailurile și băuturile răcoritoare.",
    badge: "-20% la băuturi",
    details: "Luni – Joi, 17:00 – 19:00",
    image: "/offers/zilnica-4.jpg",
  },
  {
    id: "z5",
    title: "Aperitiv la doi",
    description: "Gamberi alla griglia de împărțit, plus două băuturi răcoritoare la alegere.",
    badge: "79 lei",
    details: "Pentru 2 persoane · zilnic",
    image: "/offers/zilnica-5.jpg",
  },
  {
    id: "z6",
    title: "Grupul de 4",
    description: "Veniți patru prieteni și primiți 10% reducere la notă, plus o focaccia bianca gratis.",
    badge: "-10% la notă",
    details: "Minim 4 persoane · Luni – Joi",
    image: "/offers/zilnica-6.jpg",
  },
  {
    id: "z7",
    title: "Pizza night",
    description: "Seară de pizza la Grand Piece: reducere la toate pizzele din meniu, de la margherita la quattro carni.",
    badge: "-20% la pizza",
    details: "Duminică – Joi, după 20:00 · nu se cumulează cu alte reduceri",
    image: "/offers/zilnica-7.jpg",
  },
  {
    id: "z8",
    title: "Ziua ta la noi",
    description: "Îți sărbătorești ziua cu prietenii? Desert cu lumânare și un pahar de vin spumant din partea casei.",
    badge: "Cadou",
    details: "Minim 4 persoane · cu rezervare",
    image: "/offers/zilnica-8.jpg",
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
    image: "/offers/sarbatoare-1.jpg",
  },
  {
    id: "s2",
    title: "Valentine's Day",
    description: "Cină romantică pentru doi: masă cu vedere, meniu degustare.",
    badge: "-10% la toate cuplurile",
    details: "14 Februarie · doar cu rezervare",
    image: "/offers/sarbatoare-2.jpg",
  },
  {
    id: "s3",
    title: "Paște",
    description: "Brunch de Paște în familie, cu specialități italienești de sezon.",
    badge: "-20% pentru copii",
    details: "Duminica de Paște · 12:00 – 17:00",
    image: "/offers/sarbatoare-3.jpg",
  },
  {
    id: "s4",
    title: "1 Iunie",
    description: "Ziua Copilului pe terasă: meniu special pentru cei mici și un desert gratuit pentru fiecare copil.",
    badge: "Desert gratuit",
    details: "1 Iunie · cu părinții la masă",
    image: "/offers/sarbatoare-4.jpg",
  },
  {
    id: "s5",
    title: "Ultima zi de școală",
    description:
      "Sărbătorește finalul de an școlar cu prietenii: reducere de grup pentru elevi și studenți la toată nota.",
    badge: "-15% la notă",
    details: "Ultima zi de cursuri · grupuri de minim 4 · nu se cumulează cu alte reduceri",
    image: "/offers/sarbatoare-5.jpg",
  },
  {
    id: "s6",
    title: "Prima zi de școală",
    description: "Un început de an ușor: părinții iau masa, iar copiii primesc un desert din partea casei.",
    badge: "Desert gratuit",
    details: "Prima zi din anul școlar · septembrie",
    image: "/offers/sarbatoare-6.jpg",
  },
  {
    id: "s7",
    title: "Halloween",
    description: "Seară tematică pe terasă, cu decor de Halloween și cocktailuri speciale de sezon.",
    badge: "Cocktail tematic",
    details: "31 Octombrie · seara",
    image: "/offers/sarbatoare-7.jpg",
  },
  {
    id: "s8",
    title: "Crăciun",
    description: "Cină de Crăciun în familie sau cu colegii: meniu festiv și un cadou surpriză la fiecare masă.",
    badge: "Cadou la masă",
    details: "24 – 25 Decembrie · rezervare recomandată",
    image: "/offers/sarbatoare-8.jpg",
  },
];

// Ofertele afișate pe prima pagină (id-urile din lista de mai sus).
export const homeOfferIds = ["z1", "z3", "z7"];

export const homeOffers = homeOfferIds
  .map((id) => dailyOffers.find((o) => o.id === id))
  .filter((o): o is Offer => Boolean(o));
