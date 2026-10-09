import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { featuredDishes, formatPrice } from "@/data/menu";

export default function FeaturedDishes() {
  return (
    <section className="bg-pine py-24 lg:py-32" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div id="featured-title">
            <SectionTitle eyebrow="Din bucătăria noastră" title="Preparate recomandate" light />
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, i) => (
            <Reveal as="li" key={dish.code} delay={i * 120}>
              <article className="group h-full">
                <div className="relative aspect-square overflow-hidden">
                  {dish.image && (
                    <Image
                      src={dish.image}
                      alt={`${dish.name} – ${dish.description}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-3 border border-sand/0 transition-colors duration-500 group-hover:border-sand/80" aria-hidden="true" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-bone/15 pb-3">
                  <h3 className="font-serif text-2xl text-bone">{dish.name}</h3>
                  <span className="whitespace-nowrap font-serif text-xl text-sand">{formatPrice(dish.price)}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bone/70 first-letter:uppercase">{dish.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-16 text-center">
            <ButtonLink href="/meniu" variant="outline">Vezi meniul complet</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
