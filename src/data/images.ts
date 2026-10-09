// Imagini de probă de pe Unsplash. Pentru a le înlocui cu poze reale:
// pune fișierele în /public/images și schimbă valoarea în, ex., "/images/hero.jpg".

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1414235077428-338989a2e8c0", 2200),
  intro: u("photo-1559339352-11d035aa65de", 1200),
  about: u("photo-1517248135467-4c7edcad34c4", 1400),
  ogImage: u("photo-1414235077428-338989a2e8c0", 1200),
  dish1: u("photo-1473093295043-cdd812d0e601", 900),
  dish2: u("photo-1565299624946-b28f40a0ae38", 900),
  dish3: u("photo-1551024506-0bccd828d307", 900),
  dish4: u("photo-1476224203421-9ac39bcb3327", 900),
  dish5: u("photo-1481931098730-318b6f776db0", 900),
  dish6: u("photo-1574071318508-1cdbab80d002", 900),
  team1: u("photo-1577219491135-ce391730fb2c", 700),
  team2: u("photo-1600891964092-4316c288032e", 700),
  team3: u("photo-1544025162-d76694265947", 700),
} as const;
