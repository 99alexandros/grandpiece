# Grand Piece Restaurant – website

Site de prezentare pentru **Grand Piece Restaurant** (Timișoara), construit cu Next.js (App Router), TypeScript și Tailwind CSS. Tot conținutul este în limba română și se editează din fișiere simple din `src/data/`.

## Pornire locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm run lint
```

## Unde editezi ce

| Ce vrei să schimbi | Fișier |
|---|---|
| Nume, adresă, telefon, e-mail, program, Instagram, coordonate | `src/data/site.ts` |
| Meniul (preparate, prețuri, etichete) | `src/data/menu.ts` |
| Recenzii | `src/data/reviews.ts` |
| Echipa | `src/data/team.ts` |
| Pozele din galerie | `src/data/gallery.ts` |
| Textele din Hero, „Despre locul nostru”, „Povestea noastră” | `src/data/copy.ts` |
| Toate imaginile (hero, preparate, echipă) | `src/data/images.ts` |
| Culori | `src/app/globals.css` (variabilele din `:root`) |

## Cum editezi meniul

Deschide `src/data/menu.ts`. Fiecare preparat este un obiect în lista `dishes`:

```ts
{
  id: "m1",                         // unic
  category: "mains",                // starters | mains | desserts | drinks
  name: "Numele preparatului",
  description: "Ingrediente, mod de preparare…",
  price: 59,                        // în lei (RON)
  tags: ["picant", "vegetarian"],   // vegetarian | vegan | picant | fara-gluten | specialitatea-casei
  image: images.dish1,              // opțional – apare doar la preparatele recomandate
  featured: true,                   // opțional – apare în „Preparate recomandate” pe prima pagină
}
```

- Pentru a **adăuga** un preparat, copiază un obiect și modifică-l; pentru a-l **șterge**, elimină obiectul.
- Pentru a schimba numele categoriilor, modifică lista `categories`.
- Pentru o etichetă nouă, adaug-o în tipul `Tag` și în `tagLabels`.
- Cât timp `price` este `0`, se afișează „– lei”.

## Cum schimbi pozele

Momentan imaginile sunt de probă de pe Unsplash (`src/data/images.ts`).

1. Pune pozele tale în `public/images/` (ex. `public/images/hero.jpg`).
2. În `src/data/images.ts`, înlocuiește adresa cu calea locală: `hero: "/images/hero.jpg"`.
3. Pentru galerie, editează `src/data/gallery.ts` (`src`, `alt`, `width`, `height` – dimensiunile reale ale pozei).
4. Scrie întotdeauna un `alt` descriptiv (accesibilitate + SEO).

Poți șterge din `next.config.ts` domeniul `images.unsplash.com` după ce renunți la pozele de probă.

## Rezervări

Formularul din `/rezervari` trimite datele către `src/app/api/rezervari/route.ts`, care le validează și le **loghează în consolă** (fără e-mail/bază de date). Pentru a primi rezervările real, adaugă în acel fișier (în locul `console.log`) trimiterea unui e-mail (ex. Resend, Nodemailer) sau salvarea într-o bază de date.

## SEO

- Metadate și Open Graph în `src/app/layout.tsx` și în fiecare pagină.
- `sitemap.xml` și `robots.txt` se generează automat.
- Date structurate schema.org `Restaurant` în `src/lib/schema.ts`.
- Setează domeniul real: variabila de mediu `NEXT_PUBLIC_SITE_URL` (ex. `https://www.grandpiece.ro`) sau editează `src/data/site.ts`.

## Publicare pe Vercel

1. Urcă proiectul pe GitHub.
2. Pe [vercel.com](https://vercel.com) → **Add New… → Project** → importă repository-ul.
3. Vercel detectează automat Next.js; lasă setările implicite.
4. În **Settings → Environment Variables** adaugă `NEXT_PUBLIC_SITE_URL` cu domeniul tău.
5. Apasă **Deploy**. Fiecare `git push` pe `main` va republica site-ul.
6. Pentru domeniu propriu: **Settings → Domains → Add**, apoi setează DNS-ul conform instrucțiunilor.
