import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import MenuBrowser from "@/components/menu/MenuBrowser";
import ButtonLink from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meniu",
  description: "Descoperă meniul Grand Piece: aperitive, feluri principale, deserturi și băuturi într-o atmosferă italiană elegantă.",
  alternates: { canonical: "/meniu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHeader eyebrow="Gusturi italiene" title="Meniu" intro="Preparate și băuturi alese cu grijă, servite într-o atmosferă elegantă. Pentru alergeni și intoleranțe, întrebați-ne oricând." />
      <MenuBrowser />
      <aside
        aria-labelledby="allergens-title"
        className="mx-4 mb-16 mt-4 max-w-3xl border border-brand/40 bg-cream-deep px-6 py-6 text-center sm:mx-auto sm:px-10"
      >
        <h2 id="allergens-title" className="font-serif text-xl font-semibold text-pine">Alergeni și intoleranțe</h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/85">
          Unele preparate pot conține sau pot veni în contact cu alergeni (de exemplu gluten, lactate, ouă, pește, crustacee,
          nuci sau țelină). Dacă aveți alergii sau intoleranțe, vă rugăm să ne spuneți înainte de a comanda, iar ospătarul vă va
          ghida spre alegerile potrivite.
        </p>
      </aside>
      <div className="pb-24 text-center">
        <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
      </div>
    </>
  );
}
