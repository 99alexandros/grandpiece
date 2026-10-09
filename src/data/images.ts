// Imagini folosite în site. Fotografiile preparatelor sunt în /public/menu (din catalog).
// Imaginea mare din prima pagină (hero) este deocamdată o poză de probă de pe Unsplash:
// pune o fotografie reală în /public/images și schimbă valoarea în, ex., "/images/hero.jpg".

export const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80",
  intro: "/images/intro.jpg",
  about: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80",
  ogImage: "/og.jpg",
  logo: "/brand/logo.png",
  
} as const;
