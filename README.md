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
| Ofertele (zilnice și de sărbători) | `src/data/offers.ts` (pozele în `public/offers/`) |
| Echipa | `src/data/team.ts` |
| Pozele din galerie | `src/data/gallery.ts` |
| Textele din Hero, introducere, „Povestea noastră”, motto | `src/data/copy.ts` |
| Imaginile principale și logo-ul | `src/data/images.ts` |
| Culori | `src/app/globals.css` (variabilele din `:root`) |

## Cum editezi meniul

Meniul a fost preluat din catalogul Grand Piece (53 de produse, cu prețuri în lei). Deschide `src/data/menu.ts`; fiecare produs este un obiect în lista `dishes`:

```ts
{
  code: "007",                          // cod unic (din catalog)
  category: "principali",               // antipasti | principali | paste | pizza | desert | bauturi
  subcategory: "Carne",                 // opțional – grupează produsele în interiorul categoriei
  name: "Tagliata di manzo",
  description: "mușchi de vită feliat, rucola, roșii cherry, parmezan",
  price: 109,                           // în lei (RON)
  image: "/menu/007.jpg",               // opțional
}
```

- Pentru a **adăuga** un produs, copiază un obiect și modifică-l; pentru a-l **șterge**, elimină obiectul.
- Ordinea din fișier este ordinea afișată pe site.
- „Preparate recomandate” de pe prima pagină se aleg din lista `featuredCodes` (codurile produselor), din același fișier.
- Numele categoriilor se schimbă în lista `categories`.

## Logo și culori

- Logo-ul este în `public/brand/`: `logo.png` (colorat, pentru fundal deschis) și `logo-light.png` (variantă deschisă, pentru fundal verde închis, folosită în navbar, hero și footer).
- Culorile (verde, roșu, crem) sunt în `src/app/globals.css`, în blocul `:root`.

## Cum schimbi pozele

- **Preparatele**: fotografiile sunt în `public/menu/` (`001.jpg` … `047.jpg`, numărul = codul produsului). Pentru a înlocui una, pune un fișier nou cu același nume sau schimbă `image` în `src/data/menu.ts`.
- **Poza mare din prima pagină (hero)**: este încă o poză de probă de pe Unsplash. Pune o fotografie reală în `public/images/hero.jpg` și în `src/data/images.ts` schimbă `hero` în `"/images/hero.jpg"`.
- **Galeria**: editează `src/data/gallery.ts` (`src`, `alt`, `width`, `height`).
- Scrie întotdeauna un `alt` descriptiv (accesibilitate + SEO).

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
