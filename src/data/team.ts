// Echipa Grand Piece (din catalog). Pentru poze: adaugă câmpul `image: "/images/nume.jpg"`.
export interface Member {
  name: string;
  role: string;
  image?: string;
}

export const team: { lead: Member; staff: Member[]; kitchen: Member[] } = {
  lead: { name: "Stețcu Alexandru", role: "Administrator" },
  staff: [
    { name: "Robert Ganea", role: "Director financiar" },
    { name: "Jurji David", role: "Ospătar" },
  ],
  kitchen: [
    { name: "Moiș Lucas", role: "Șef bucătar" },
    { name: "Cuceu Darius", role: "Bucătar" },
    { name: "Cocoșila Alexandru", role: "Ajutor bucătar" },
  ],
};
