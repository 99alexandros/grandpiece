import Image from "next/image";
import ButtonLink from "@/components/ui/Button";
import { images } from "@/data/images";
import { copy } from "@/data/copy";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-pine">
      <Image
        src={images.hero}
        alt="Sala elegantă a restaurantului Grand Piece, cu mese pregătite pentru seară"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-pine/80 via-pine/55 to-pine/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.4em] text-gold-soft sm:text-sm">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 font-serif text-6xl font-medium leading-none text-bone sm:text-8xl lg:text-9xl">
          {copy.hero.title}
        </h1>
        <div className="ornament mt-8 justify-center" aria-hidden="true">◆</div>
        <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic text-bone/90 sm:text-2xl">
          {copy.hero.subtitle}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/rezervari">{copy.hero.cta}</ButtonLink>
          <ButtonLink href="/meniu" variant="outline">{copy.hero.ctaSecondary}</ButtonLink>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Derulează în jos"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold-soft"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-gold-soft to-transparent" />
      </a>
    </section>
  );
}
