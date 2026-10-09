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

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center">
        <h1>
          <span className="sr-only">Grand Piece Restaurant – restaurant italian în Timișoara</span>
          <Image
            src={images.logoLight}
            alt=""
            width={852}
            height={822}
            priority
            className="mx-auto h-auto w-[min(80vw,30rem)]"
          />
        </h1>
        <div className="ornament mt-2 justify-center text-sand" aria-hidden="true">◆</div>
        <p className="mt-6 font-serif text-3xl italic text-bone sm:text-4xl">{copy.motto}</p>
        <p className="mx-auto mt-4 max-w-xl text-base text-bone/85 sm:text-lg">{copy.hero.subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/rezervari">{copy.hero.cta}</ButtonLink>
          <ButtonLink href="/meniu" variant="outline">{copy.hero.ctaSecondary}</ButtonLink>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Derulează în jos"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sand"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-sand to-transparent" />
      </a>
    </section>
  );
}
