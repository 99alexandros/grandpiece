// Datele de bază ale restaurantului. Editează aici – se actualizează peste tot.

export const site = {
  name: "Grand Piece Restaurant",
  shortName: "Grand Piece",
  tagline: "Sapore. Passione. Italia.",
  description:
    "Grand Piece Restaurant – restaurant italian elegant în Timișoara. Rezervă o masă și descoperă meniul nostru.",
  // Schimbă cu domeniul real după publicare (sau setează NEXT_PUBLIC_SITE_URL în Vercel).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grandpiece.ro",
  address: {
    street: "Str. Coriolan Brediceanu nr. 37",
    city: "Timișoara",
    county: "Timiș",
    country: "RO",
    full: "Str. Coriolan Brediceanu nr. 37, Timișoara",
  },
  phone: "+40 723 556 190",
  phoneHref: "+40723556190",
  email: "grandpiece2022@gmail.com",
  social: {
    instagram: {
      label: "Instagram",
      handle: "@grandpiecerestaurant",
      url: "https://www.instagram.com/grandpiecerestaurant/",
    },
    // Adaugă și alte rețele când sunt disponibile:
    // facebook: { label: "Facebook", handle: "...", url: "https://facebook.com/..." },
  },
  // Coordonate aproximative – verifică și ajustează dacă e nevoie.
  geo: { lat: 45.7537, lng: 21.2257 },
  hours: [
    { days: "Luni – Vineri", label: "12:00 – 00:00", dayCodes: ["Mo", "Tu", "We", "Th", "Fr"], opens: "12:00", closes: "00:00" },
    { days: "Sâmbătă – Duminică", label: "14:00 – 02:00", dayCodes: ["Sa", "Su"], opens: "14:00", closes: "02:00" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/meniu", label: "Meniu" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
] as const;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.full,
)}&output=embed`;

export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.full,
)}`;
