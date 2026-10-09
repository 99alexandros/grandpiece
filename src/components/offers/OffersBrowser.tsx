"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonLink from "@/components/ui/Button";
import { dailyOffers, holidayOffers, type Offer } from "@/data/offers";

const tabs = [
  { id: "daily", label: "Oferte zilnice", intro: "Prețuri bune în fiecare zi, la masă sau la rooftop.", offers: dailyOffers },
  { id: "holiday", label: "Oferte de sărbători", intro: "Ocazii speciale pe tot parcursul anului.", offers: holidayOffers },
] as const;

type TabId = (typeof tabs)[number]["id"];

function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  return (
    <li className="group flex flex-col overflow-hidden border border-pine/10 bg-white shadow-sm shadow-black/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-pine">
        <Image
          src={offer.image}
          alt={`${offer.title} – ${offer.description}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-0 max-w-[85%] bg-brand px-4 py-2 font-serif text-lg font-semibold leading-snug text-on-brand">
          {offer.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand">
          Oferta {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-pine">{offer.title}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/85">{offer.description}</p>
        <p className="mt-4 border-t border-pine/10 pt-3 text-sm font-medium text-pine">{offer.details}</p>
      </div>
    </li>
  );
}

export default function OffersBrowser() {
  const [active, setActive] = useState<TabId>("daily");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="sticky top-20 z-30 border-b border-pine/10 bg-cream/95 backdrop-blur">
        <div role="tablist" aria-label="Tipuri de oferte" className="mx-auto flex max-w-6xl justify-center gap-2 px-5 py-3 sm:px-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`border px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                active === t.id ? "border-pine bg-pine text-bone" : "border-pine/25 bg-white text-pine hover:border-pine"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold text-pine sm:text-5xl">{current.label}</h2>
          <div className="ornament mt-5 justify-center text-brand" aria-hidden="true">◆</div>
          <p className="mx-auto mt-5 max-w-xl text-ink/85">{current.intro}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.offers.map((o, i) => (
            <OfferCard key={o.id} offer={o} index={i} />
          ))}
        </ul>

        <div className="mt-16 text-center">
          <p className="mb-6 font-display text-2xl italic text-pine">Pentru multe dintre oferte se recomandă rezervarea.</p>
          <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
        </div>
      </div>
    </div>
  );
}
