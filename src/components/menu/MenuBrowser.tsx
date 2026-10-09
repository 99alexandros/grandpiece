"use client";

import { useState } from "react";
import { categories, dishes, formatPrice, tagLabels, type Category } from "@/data/menu";

type Filter = Category | "all";

export default function MenuBrowser() {
  const [active, setActive] = useState<Filter>("all");
  const tabs: { id: Filter; label: string }[] = [{ id: "all", label: "Toate" }, ...categories];

  const visibleCategories = categories.filter((c) => active === "all" || c.id === active);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
      <div role="group" aria-label="Filtrează meniul pe categorii" className="flex flex-wrap justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={active === t.id}
            onClick={() => setActive(t.id)}
            className={`border px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.2em] transition-colors ${
              active === t.id
                ? "border-pine bg-pine text-bone"
                : "border-gold/60 text-pine hover:border-pine"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-20" aria-live="polite">
        {visibleCategories.map((cat) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
            <h2 id={`cat-${cat.id}`} className="text-center font-serif text-4xl text-pine">
              {cat.label}
            </h2>
            <div className="ornament mt-4 justify-center" aria-hidden="true">◆</div>
            <ul className="mt-10 space-y-8">
              {dishes
                .filter((d) => d.category === cat.id)
                .map((d) => (
                  <li key={d.id}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-2xl font-semibold text-ink">{d.name}</h3>
                      <span className="mb-1 flex-1 border-b border-dotted border-gold/70" aria-hidden="true" />
                      <span className="whitespace-nowrap font-serif text-2xl text-wine">{formatPrice(d.price)}</span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-ink/70">{d.description}</p>
                    {d.tags.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Etichete">
                        {d.tags.map((t) => (
                          <li
                            key={t}
                            className={`border px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
                              t === "picant"
                                ? "border-wine/50 text-wine"
                                : t === "specialitatea-casei"
                                  ? "border-gold bg-gold/15 text-pine"
                                  : "border-pine/30 text-pine/80"
                            }`}
                          >
                            {tagLabels[t]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
