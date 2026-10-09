import { site } from "@/data/site";
import { images } from "@/data/images";

/** Date structurate schema.org/Restaurant pentru motoarele de căutare. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    url: site.url,
    image: images.ogImage,
    description: site.description,
    servesCuisine: "Italiană",
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.county,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayCodes.map(
        (c) =>
          ({ Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday" })[c],
      ),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.social).map((s) => s.url),
    acceptsReservations: "True",
    hasMenu: `${site.url}/meniu`,
  };
}
