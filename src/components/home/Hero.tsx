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
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" aria-hidden="true" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),transparent_65%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-10 pt-24 text-center">
        <h1>
          <span className="sr-only">Grand Piece Restaurant – restaurant italian în Timișoara</span>
          <Image
            src={images.logo}
            alt=""
            width={1100}
            height={668}
            priority
            className="mx-auto h-auto max-h-[30svh] w-[min(75vw,34rem)] object-contain sm:max-h-none sm:w-[min(85vw,34rem)]"
          />
        </h1>
        <div className="ornament mt-2 justify-center text-sand" aria-hidden="true">◆</div>
        <p className="mt-4 font-display text-3xl italic text-bone sm:mt-6 sm:text-4xl">{copy.motto}</p>
        <p className="mx-auto mt-4 max-w-xl text-base text-bone/85 sm:text-lg">{copy.hero.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/rezervari">{copy.hero.cta}</ButtonLink>
          <ButtonLink href="/meniu" variant="outline">{copy.hero.ctaSecondary}</ButtonLink>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Derulează în jos"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-sand md:block"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-sand to-transparent" />
      </a>
    </section>
  );
}
