import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { featuredDishes, formatPrice } from "@/data/menu";

export default function FeaturedDishes() {
  return (
    <section className="bg-pine py-16 sm:py-24 lg:py-32" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div id="featured-title">
            <SectionTitle eyebrow="Din bucătăria noastră" title="Preparate recomandate" light />
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:gap-10 lg:grid-cols-4">
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
                <div className="mt-4 flex flex-col gap-1 border-b border-bone/15 pb-3 sm:mt-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-serif text-lg leading-snug text-bone sm:text-2xl">{dish.name}</h3>
                  <span className="whitespace-nowrap font-serif text-base text-sand sm:text-xl">{formatPrice(dish.price)}</span>
                </div>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-bone/85 first-letter:uppercase sm:mt-3 sm:text-sm">{dish.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-10 text-center sm:mt-16">
            <ButtonLink href="/meniu" variant="outline">Vezi meniul complet</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
