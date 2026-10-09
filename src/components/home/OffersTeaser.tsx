import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { homeOffers } from "@/data/offers";

export default function OffersTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="offers-title">
      <Reveal>
        <div id="offers-title">
          <SectionTitle eyebrow="Avantaje" title="Oferte pentru tine" />
        </div>
      </Reveal>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {homeOffers.map((offer, i) => (
          <Reveal as="li" key={offer.id} delay={i * 120}>
            <article className="group flex h-full flex-col overflow-hidden border border-pine/10 bg-white shadow-sm shadow-black/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-pine">
                <Image
                  src={offer.image}
                  alt={`${offer.title} – ${offer.description}`}
                  fill
                  sizes="(min-width: 768px) 30vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 max-w-[85%] bg-brand px-4 py-2 font-serif text-lg font-semibold leading-snug text-on-brand">
                  {offer.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl font-semibold leading-snug text-pine">{offer.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/85">{offer.description}</p>
                <p className="mt-4 border-t border-pine/10 pt-3 text-sm font-medium text-pine">{offer.details}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <div className="mt-14 text-center">
          <ButtonLink href="/oferte" variant="wine">Vezi toate ofertele</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
