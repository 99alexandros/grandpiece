"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { categories, dishes, formatPrice, type Category, type Dish } from "@/data/menu";

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

function DishCard({ d, priority, as: Heading }: { d: Dish; priority?: boolean; as: "h3" | "h4" }) {
  return (
    <li className="group flex flex-col overflow-hidden border border-pine/10 bg-white shadow-sm shadow-black/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-pine">
        {d.image && (
          <Image
            src={d.image}
            alt={`${d.name} – ${d.description}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <span className="absolute bottom-0 left-0 bg-brand px-2.5 py-1 font-serif text-sm font-semibold text-on-brand sm:px-4 sm:py-2 sm:text-lg">
          {formatPrice(d.price)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <Heading className="font-serif text-[0.95rem] font-semibold leading-snug text-pine sm:text-xl">{d.name}</Heading>
        <p className="mt-1.5 text-[0.78rem] leading-snug text-ink/85 first-letter:uppercase sm:mt-2 sm:text-[0.95rem] sm:leading-relaxed">{d.description}</p>
      </div>
    </li>
  );
}

function DishLine({ d, as: Heading }: { d: Dish; as: "h3" | "h4" }) {
  return (
    <li className="flex items-baseline gap-3 py-3">
      <div className="min-w-0">
        <Heading className="font-serif text-lg font-semibold text-pine">{d.name}</Heading>
        <p className="text-sm text-ink/85 first-letter:uppercase">{d.description}</p>
      </div>
      <span className="mb-1 flex-1 self-end border-b border-dotted border-pine/30" aria-hidden="true" />
      <span className="whitespace-nowrap font-serif text-lg font-semibold text-brand">{formatPrice(d.price)}</span>
    </li>
  );
}

const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const getHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

export default function MenuBrowser() {
  // Linkurile de tip /meniu#pizza deschid direct categoria respectivă.
  const hash = useSyncExternalStore(subscribeHash, getHash, getServerHash);
  const hashFilter = categories.find((c) => c.id === hash)?.id;
  const [picked, setPicked] = useState<Filter | null>(null);
  const active: Filter = picked ?? hashFilter ?? "all";
  const setActive = setPicked;

  // La intrarea pe o categorie, pagina se oprește la începutul meniului (sub navbar), nu la poziția paginii anterioare.
  useEffect(() => {
    if (!hashFilter) return;
    const id = requestAnimationFrame(() => {
      document.getElementById("menu-top")?.scrollIntoView({ block: "start", behavior: "instant" });
      // Pe telefon, bara cu categorii se derulează lateral până la categoria aleasă (doar orizontal).
      const btn = document.querySelector<HTMLElement>("#menu-top [aria-pressed=true]");
      const strip = btn?.parentElement;
      if (btn && strip) strip.scrollLeft = btn.offsetLeft - (strip.clientWidth - btn.offsetWidth) / 2;
    });
    return () => cancelAnimationFrame(id);
  }, [hashFilter]);

  const tabs: { id: Filter; label: string }[] = [{ id: "all", label: "Toate" }, ...categories];
  const visibleCategories = categories.filter((c) => active === "all" || c.id === active);

  return (
    <div id="menu-top">
      <div className="sticky top-20 z-30 border-b border-pine/10 bg-cream/95 backdrop-blur">
        <div
          role="group"
          aria-label="Filtrează meniul pe categorii"
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:justify-center sm:px-8"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={active === t.id}
              onClick={() => setActive(t.id)}
              className={`shrink-0 border px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                active === t.id
                  ? "border-pine bg-pine text-bone"
                  : "border-pine/25 bg-white text-pine hover:border-pine"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:space-y-24 sm:px-8 sm:py-16 lg:py-20" aria-live="polite">
        {visibleCategories.map((cat, catIndex) => {
          const groups = groupBySubcategory(dishes.filter((d) => d.category === cat.id));
          return (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <div className="text-center">
                <h2 id={`cat-${cat.id}`} className="font-serif text-4xl font-semibold text-pine sm:text-5xl">
                  {cat.label}
                </h2>
                <div className="ornament mt-5 justify-center text-brand" aria-hidden="true">◆</div>
              </div>

              <div className="mt-8 space-y-10 sm:mt-12 sm:space-y-14">
                {groups.map((g) => {
                  const withPhoto = g.items.filter((d) => d.image);
                  const plain = g.items.filter((d) => !d.image);
                  return (
                    <div key={g.name ?? "all"}>
                      {g.name && (
                        <h3 className="mb-6 flex items-center gap-4 text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-brand">
                          {g.name}
                          <span className="h-px flex-1 bg-pine/15" aria-hidden="true" />
                        </h3>
                      )}
                      {withPhoto.length > 0 && (
                        <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                          {withPhoto.map((d, i) => (
                            <DishCard
                              key={d.code}
                              d={d}
                              as={g.name ? "h4" : "h3"}
                              priority={catIndex === 0 && i < 3}
                            />
                          ))}
                        </ul>
                      )}
                      {plain.length > 0 && (
                        <ul className="mx-auto mt-6 max-w-2xl divide-y divide-pine/10 border-y border-pine/10">
                          {plain.map((d) => (
                            <DishLine key={d.code} d={d} as={g.name ? "h4" : "h3"} />
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
