// Meniul restaurantului – preluat din catalogul Grand Piece.
// Pentru a edita: modifică / adaugă / șterge obiecte în lista `dishes` de mai jos.
// `price` este în lei (RON). Imaginile sunt în /public/menu (ex. "/menu/007.jpg").
// Etichetele posibile sunt în `tagLabels`.

export type Tag = "vegetarian" | "vegan" | "picant" | "fara-gluten" | "specialitatea-casei";

export type Category = "antipasti" | "principali" | "paste" | "pizza" | "desert" | "bauturi";

export interface Dish {
  code: string;
  category: Category;
  /** Grupare în interiorul categoriei (ex. „Carne”, „Cafea”). Opțional. */
  subcategory?: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
  image?: string;
  /** Apare în „Preparate recomandate” pe prima pagină. */
  featured?: boolean;
}

export const categories: { id: Category; label: string }[] = [
  { id: "antipasti", label: "Antipasti" },
  { id: "principali", label: "Piatti principali" },
  { id: "paste", label: "Paste" },
  { id: "pizza", label: "Pizza" },
  { id: "desert", label: "Deserturi" },
  { id: "bauturi", label: "Băuturi" },
];

export const tagLabels: Record<Tag, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  picant: "Picant",
  "fara-gluten": "Fără gluten",
  "specialitatea-casei": "Specialitatea casei",
};

export const dishes: Dish[] = [
  { code: "001", category: "antipasti", name: "Bruschette al pomodoro", description: "pâine prăjită, roșii, usturoi, oregano, ulei de măsline", price: 24, tags: ["vegetarian"], image: "/menu/001.jpg" },
  { code: "002", category: "antipasti", name: "Insalata petto di pollo", description: "salată mixtă, morcov, roșii, ardei gras, măsline, piept de pui", price: 42, tags: [], image: "/menu/002.jpg" },
  { code: "003", category: "antipasti", name: "Insalata con gamberetti", description: "salată mixtă, creveți, roșii cherry, sos calypso", price: 49, tags: [], image: "/menu/003.jpg" },
  { code: "004", category: "antipasti", name: "Antipasto con formaggi misti", description: "mix de brânzeturi", price: 59, tags: [], image: "/menu/004.jpg" },
  { code: "005", category: "antipasti", name: "Antipasto misto", description: "gustări reci, mezeluri, brânzeturi rafinate", price: 69, tags: [], image: "/menu/005.jpg" },
  { code: "006", category: "principali", subcategory: "Carne", name: "Filetto di manzo al pepe verde", description: "mușchi de vită, sos de piper verde", price: 99, tags: [], image: "/menu/006.jpg" },
  { code: "007", category: "principali", subcategory: "Carne", name: "Tagliata di manzo", description: "mușchi de vită feliat, rucola, roșii cherry, parmezan", price: 109, tags: [], image: "/menu/007.jpg", featured: true },
  { code: "008", category: "principali", subcategory: "Carne", name: "Galletto diavola", description: "cocoș de munte sălbatic, sos iute", price: 64, tags: ["picant"], image: "/menu/008.jpg" },
  { code: "009", category: "principali", subcategory: "Pește și fructe de mare", name: "Trancio di salmone e zucchine", description: "file de somon, dovlecel", price: 79, tags: [], image: "/menu/009.jpg" },
  { code: "010", category: "principali", subcategory: "Pește și fructe de mare", name: "Fritto misto", description: "calamari, creveți, caracatiță, sos calypso", price: 72, tags: [], image: "/menu/010.jpg" },
  { code: "011", category: "principali", subcategory: "Pește și fructe de mare", name: "Orata alla griglia", description: "dorada la grătar, dovlecei, roșii cherry, lămâie", price: 89, tags: [], image: "/menu/011.jpg", featured: true },
  { code: "012", category: "principali", subcategory: "Pește și fructe de mare", name: "Calamari fritti", description: "inele de calamar prăjite, lămâie", price: 52, tags: [], image: "/menu/012.jpg" },
  { code: "013", category: "principali", subcategory: "Pește și fructe de mare", name: "Gamberi alla griglia", description: "creveți la grătar, rucola, roșii cherry, lămâie", price: 72, tags: [], image: "/menu/013.jpg" },
  { code: "014", category: "paste", name: "Spaghetti carbonara", description: "ou, pecorino, guanciale", price: 42, tags: [], image: "/menu/014.jpg" },
  { code: "015", category: "paste", name: "Spaghetti bolognese", description: "usturoi, carne de vită, sos de roșii, parmezan, oregano", price: 42, tags: [], image: "/menu/015.jpg" },
  { code: "016", category: "paste", name: "Spaghetti all'amatriciana", description: "sos de roșii, bacon, usturoi, parmezan", price: 39, tags: [], image: "/menu/016.jpg" },
  { code: "017", category: "paste", name: "Pasta al pesto", description: "sos busuioc, parmezan", price: 44, tags: ["vegetarian"], image: "/menu/017.jpg" },
  { code: "018", category: "paste", name: "Pasta pomodoro", description: "roșii cherry, ceapă, usturoi, ulei de măsline, busuioc, parmezan", price: 37, tags: ["vegetarian"], image: "/menu/018.jpg" },
  { code: "019", category: "pizza", name: "Pizza margherita", description: "sos de roșii, mozzarella, busuioc, ulei de măsline", price: 36, tags: ["vegetarian"], image: "/menu/019.jpg", featured: true },
  { code: "020", category: "pizza", name: "Pizza prosciutto cotto", description: "sos de roșii, prosciutto cotto, mozzarella, oregano", price: 42, tags: [], image: "/menu/020.jpg" },
  { code: "021", category: "pizza", name: "Pizza prosciutto crudo", description: "sos de roșii, prosciutto crudo, parmezan", price: 40, tags: [], image: "/menu/021.jpg" },
  { code: "022", category: "pizza", name: "Pizza marinara", description: "sos de roșii, usturoi, oregano, busuioc", price: 33, tags: ["vegetarian"], image: "/menu/022.jpg" },
  { code: "023", category: "pizza", name: "Pizza prosciutto e funghi", description: "sos de roșii, mozzarella, prosciutto cotto, ciuperci champignon", price: 45, tags: [], image: "/menu/023.jpg" },
  { code: "024", category: "pizza", name: "Pizza quattro formaggi", description: "mozzarella, gorgonzola, parmezan, taleggio", price: 49, tags: ["vegetarian"], image: "/menu/024.jpg" },
  { code: "025", category: "pizza", name: "Pizza diavola", description: "sos de roșii, mozzarella, salam spianata calabra, jalapeno", price: 46, tags: ["picant"], image: "/menu/025.jpg" },
  { code: "026", category: "pizza", name: "Pizza quattro stagioni", description: "sos de roșii, mozzarella, prosciutto crudo, ciuperci champignon, măsline, anghinare", price: 47, tags: [], image: "/menu/026.jpg" },
  { code: "027", category: "pizza", name: "Pizza vegetariană", description: "sos de roșii, mozzarella, anghinare, măsline, ciuperci champignon", price: 43, tags: ["vegetarian"], image: "/menu/027.jpg" },
  { code: "028", category: "pizza", name: "Pizza quattro carni", description: "sos de roșii, mozzarella, prosciutto cotto, salsiccia veneta fresca, salam picant, pancetta arrotolata", price: 52, tags: ["picant"], image: "/menu/028.jpg" },
  { code: "029", category: "pizza", name: "Focaccia bianca", description: "ulei de măsline, oregano", price: 25, tags: ["vegetarian"], image: "/menu/029.jpg" },
  { code: "030", category: "desert", name: "Tiramisu", description: "pișcoturi, ouă, mascarpone, cafea, rom, cacao", price: 29, tags: [], image: "/menu/030.jpg", featured: true },
  { code: "031", category: "desert", name: "Panna cotta", description: "frișcă din lapte, gelatină, zahăr, fructe de pădure", price: 27, tags: [], image: "/menu/031.jpg" },
  { code: "032", category: "desert", name: "Gelato al pistacchio", description: "fistic, lapte, zahăr, frișcă, lapte praf, fulgi de migdale", price: 23, tags: [], image: "/menu/032.jpg" },
  { code: "033", category: "desert", name: "Gelato al limone", description: "suc de lămâie, coajă de lămâie, zahăr, smântână, lapte", price: 19, tags: [], image: "/menu/033.jpg" },
  { code: "034", category: "desert", name: "Gelato al caffè", description: "lapte, smântână, zahăr, lapte praf, cafea", price: 22, tags: [], image: "/menu/034.jpg" },
  { code: "035", category: "bauturi", subcategory: "Cocktails semnătură", name: "Piece of paradise", description: "pineapple juice, coconut cream", price: 28, tags: [], image: "/menu/035.jpg" },
  { code: "036", category: "bauturi", subcategory: "Cocktails semnătură", name: "Grand nojito", description: "lemonade, mint, lime & soda water", price: 28, tags: [], image: "/menu/036.jpg" },
  { code: "037", category: "bauturi", subcategory: "Vinuri (150ml)", name: "Vin roșu", description: "vin roșu sec, servit la pahar", price: 27, tags: [], image: "/menu/037.jpg" },
  { code: "038", category: "bauturi", subcategory: "Vinuri (150ml)", name: "Vin alb", description: "vin alb sec, servit la pahar", price: 25, tags: [], image: "/menu/038.jpg" },
  { code: "039", category: "bauturi", subcategory: "Vinuri (150ml)", name: "Vin rosé", description: "vin rosé, servit la pahar", price: 23, tags: [], image: "/menu/039.jpg" },
  { code: "040", category: "bauturi", subcategory: "Vinuri (150ml)", name: "Vin spumant", description: "vin spumant, servit la pahar", price: 28, tags: [], image: "/menu/040.jpg" },
  { code: "041", category: "bauturi", subcategory: "Bere (330ml)", name: "Bere neagră", description: "bere neagră la halbă", price: 18, tags: [], image: "/menu/041.jpg" },
  { code: "042", category: "bauturi", subcategory: "Bere (330ml)", name: "Bere blondă", description: "bere blondă la halbă", price: 16, tags: [], image: "/menu/042.jpg" },
  { code: "043", category: "bauturi", subcategory: "Bere (330ml)", name: "Bere fără alcool", description: "bere fără alcool", price: 15, tags: [], image: "/menu/043.jpg" },
  { code: "044", category: "bauturi", subcategory: "Cafea", name: "Espresso", description: "cafea espresso", price: 10, tags: [], image: "/menu/044.jpg" },
  { code: "045", category: "bauturi", subcategory: "Cafea", name: "Cappuccino", description: "espresso, spumă de lapte", price: 12, tags: [], image: "/menu/045.jpg" },
  { code: "046", category: "bauturi", subcategory: "Cafea", name: "Caffè latte", description: "espresso, lapte cald", price: 14, tags: [], image: "/menu/046.jpg" },
  { code: "047", category: "bauturi", subcategory: "Cafea", name: "Caffè frappe", description: "cafea rece, spumă, gheață", price: 17, tags: [], image: "/menu/047.jpg" },
  { code: "048", category: "bauturi", subcategory: "Răcoritoare", name: "Pepsi (250ml)", description: "răcoritoare la sticlă", price: 10, tags: [] },
  { code: "049", category: "bauturi", subcategory: "Răcoritoare", name: "Mirinda portocale (250ml)", description: "răcoritoare la sticlă", price: 10, tags: [] },
  { code: "050", category: "bauturi", subcategory: "Răcoritoare", name: "7Up (250ml)", description: "răcoritoare la sticlă", price: 10, tags: [] },
  { code: "051", category: "bauturi", subcategory: "Răcoritoare", name: "Apă plată (330ml)", description: "apă plată", price: 8, tags: [] },
  { code: "052", category: "bauturi", subcategory: "Răcoritoare", name: "Lipton ice tea (250ml)", description: "ceai rece", price: 11, tags: [] },
  { code: "053", category: "bauturi", subcategory: "Răcoritoare", name: "Fresh de portocale (400ml)", description: "suc proaspăt de portocale", price: 24, tags: [] },
];

export const featuredDishes = dishes.filter((d) => d.featured);

export function formatPrice(price: number): string {
  return `${price} lei`;
}
