// Recenzii de probă – înlocuiește cu recenzii reale.
export interface Review {
  id: string;
  author: string;
  rating: number; // 1–5
  text: string;
}

export const reviews: Review[] = [
  { id: "r1", author: "Nume client", rating: 5, text: "Textul recenziei va fi adăugat aici." },
  { id: "r2", author: "Nume client", rating: 5, text: "Textul recenziei va fi adăugat aici." },
  { id: "r3", author: "Nume client", rating: 5, text: "Textul recenziei va fi adăugat aici." },
];
