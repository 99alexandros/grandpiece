// Meniul restaurantului. Momentan sunt date de probă (placeholder).
// Pentru a edita: modifică / adaugă obiecte în listele de mai jos.
// `price` este în lei (RON). Etichetele posibile sunt în `tagLabels`.

import { images } from "./images";

export type Tag = "vegetarian" | "vegan" | "picant" | "fara-gluten" | "specialitatea-casei";

export type Category = "starters" | "mains" | "desserts" | "drinks";

export interface Dish {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
  image?: string;
  featured?: boolean;
}

export const categories: { id: Category; label: string }[] = [
  { id: "starters", label: "Aperitive" },
  { id: "mains", label: "Feluri principale" },
  { id: "desserts", label: "Deserturi" },
  { id: "drinks", label: "Băuturi" },
];

export const tagLabels: Record<Tag, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  picant: "Picant",
  "fara-gluten": "Fără gluten",
  "specialitatea-casei": "Specialitatea casei",
};

const PLACEHOLDER_DESC = "Descrierea preparatului va fi adăugată în curând.";

export const dishes: Dish[] = [
  { id: "a1", category: "starters", name: "Preparat 1", description: PLACEHOLDER_DESC, price: 0, tags: ["vegetarian"] },
  { id: "a2", category: "starters", name: "Preparat 2", description: PLACEHOLDER_DESC, price: 0, tags: [] },
  { id: "a3", category: "starters", name: "Preparat 3", description: PLACEHOLDER_DESC, price: 0, tags: ["picant"] },
  { id: "m1", category: "mains", name: "Preparat 1", description: PLACEHOLDER_DESC, price: 0, tags: ["specialitatea-casei"], image: images.dish1, featured: true },
  { id: "m2", category: "mains", name: "Preparat 2", description: PLACEHOLDER_DESC, price: 0, tags: [], image: images.dish2, featured: true },
  { id: "m3", category: "mains", name: "Preparat 3", description: PLACEHOLDER_DESC, price: 0, tags: ["vegetarian"], image: images.dish3, featured: true },
  { id: "m4", category: "mains", name: "Preparat 4", description: PLACEHOLDER_DESC, price: 0, tags: ["picant"] },
  { id: "d1", category: "desserts", name: "Preparat 1", description: PLACEHOLDER_DESC, price: 0, tags: ["vegetarian"], image: images.dish5, featured: true },
  { id: "d2", category: "desserts", name: "Preparat 2", description: PLACEHOLDER_DESC, price: 0, tags: ["vegetarian", "fara-gluten"] },
  { id: "b1", category: "drinks", name: "Băutură 1", description: PLACEHOLDER_DESC, price: 0, tags: ["vegan"] },
  { id: "b2", category: "drinks", name: "Băutură 2", description: PLACEHOLDER_DESC, price: 0, tags: [] },
  { id: "b3", category: "drinks", name: "Băutură 3", description: PLACEHOLDER_DESC, price: 0, tags: [] },
];

export const featuredDishes = dishes.filter((d) => d.featured);

export function formatPrice(price: number): string {
  return price > 0 ? `${price} lei` : "– lei";
}
