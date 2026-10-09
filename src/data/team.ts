import { images } from "./images";

// Echipa de probă – înlocuiește cu membrii reali.
export interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: Member[] = [
  { name: "Nume Prenume", role: "Bucătar șef", bio: "Scurtă prezentare a persoanei.", image: images.team1 },
  { name: "Nume Prenume", role: "Sommelier", bio: "Scurtă prezentare a persoanei.", image: images.team2 },
  { name: "Nume Prenume", role: "Manager de sală", bio: "Scurtă prezentare a persoanei.", image: images.team3 },
];
