import type { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/menu";
import { copy } from "@/data/copy";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Povestea restaurantului Grand Piece din Timișoara: mâncare italiană, ingrediente alese și un loc de întâlnire pentru familie și prieteni.",
  alternates: { canonical: "/despre-noi" },
};

const categoryPhoto: Record<string, string> = {
  antipasti: "/menu/005.jpg",
  principali: "/menu/011.jpg",
  paste: "/menu/014.jpg",
  pizza: "/menu/019.jpg",
  desert: "/menu/030.jpg",
  bauturi: "/menu/035.jpg",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Despre noi" title="Povestea Grand Piece" />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink/90">
            <h2 className="font-serif text-4xl text-pine">{copy.about.title}</h2>
            {copy.about.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute -inset-2 -translate-x-2 translate-y-2 sm:-inset-3 sm:-translate-x-3 sm:translate-y-3 border border-brand" aria-hidden="true" />
            <SafeImage
              src={images.about}
              alt="Terasa restaurantului la apus, cu canapele, lumini calde și priveliște spre oraș"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-cream-deep py-24" aria-labelledby="values-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div id="values-title">
              <SectionTitle eyebrow="Ce ne definește" title="Sapore. Passione. Italia." />
            </div>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {copy.values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 120}>
                <article className="h-full border border-brand/40 bg-cream p-8 text-center">
                  <p className="font-display text-3xl italic text-brand">{v.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-pine">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink/85">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="menu-glance-title">
        <Reveal>
          <div id="menu-glance-title">
            <SectionTitle eyebrow="Din meniu" title="Ce găsești la noi" />
          </div>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 3) * 100}>
              <Link href="/meniu" className="group relative block aspect-[4/3] overflow-hidden bg-pine">
                <Image
                  src={categoryPhoto[c.id]}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 46vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 p-4 font-serif text-xl font-semibold text-bone sm:text-2xl">
                  {c.label}
                </span>
                <span className="sr-only"> – vezi meniul</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="px-5 py-24 text-center">
        <Reveal>
          <p className="font-display text-3xl italic text-pine sm:text-4xl">Vă așteptăm cu drag la masă.</p>
          <div className="mt-8">
            <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
