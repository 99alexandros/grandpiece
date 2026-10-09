"use client";

import Image from "next/image";
import { useState } from "react";
import { categories, dishes, formatPrice, tagLabels, type Category, type Dish } from "@/data/menu";

type Filter = Category | "all";

function groupBySubcategory(list: Dish[]) {
  const groups: { name: string | null; items: Dish[] }[] = [];
  for (const d of list) {
    const name = d.subcategory ?? null;
    let g = groups.find((x) => x.name === name);
    if (!g) groups.push((g = { name, items: [] }));
    g.items.push(d);
  }
  return groups;
}

function DishRow({ d }: { d: Dish }) {
  return (
    <li className="flex gap-4 sm:gap-6">
      {d.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-28 sm:w-28">
          <Image
            src={d.image}
            alt={`${d.name}`}
            fill
            sizes="(min-width: 640px) 112px, 80px"
            className="object-cover"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">{d.name}</h4>
          <span className="mb-1 hidden flex-1 border-b border-dotted border-brand/60 sm:block" aria-hidden="true" />
          <span className="ml-auto whitespace-nowrap font-serif text-xl text-wine sm:ml-0 sm:text-2xl">
            {formatPrice(d.price)}
          </span>
        </div>
        <p className="mt-1 text-ink/70 first-letter:uppercase">{d.description}</p>
        {d.tags.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-2" aria-label="Etichete">
            {d.tags.map((t) => (
              <li
                key={t}
                className={`border px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
                  t === "picant"
                    ? "border-wine/50 text-wine"
                    : t === "specialitatea-casei"
                      ? "border-brand bg-brand/10 text-pine"
                      : "border-pine/30 text-pine/80"
                }`}
              >
                {tagLabels[t]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

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
              active === t.id ? "border-pine bg-pine text-bone" : "border-pine/30 text-pine hover:border-pine"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-24" aria-live="polite">
        {visibleCategories.map((cat) => {
          const groups = groupBySubcategory(dishes.filter((d) => d.category === cat.id));
          return (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <h2 id={`cat-${cat.id}`} className="text-center font-serif text-4xl text-pine sm:text-5xl">
                {cat.label}
              </h2>
              <div className="ornament mt-4 justify-center text-brand" aria-hidden="true">◆</div>
              <div className="mt-12 space-y-14">
                {groups.map((g) => (
                  <div key={g.name ?? "all"}>
                    {g.name && (
                      <h3 className="mb-8 border-b border-pine/20 pb-2 text-[0.8rem] font-medium uppercase tracking-[0.3em] text-brand">
                        {g.name}
                      </h3>
                    )}
                    <ul className="space-y-8">
                      {g.items.map((d) => (
                        <DishRow key={d.code} d={d} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
