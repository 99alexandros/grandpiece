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
      <PageHeader eyebrow="Gusturi italiene" title="Meniu" intro="Preparate și băuturi alese cu grijă, servite într-o atmosferă elegantă." />
      <MenuBrowser />
      <div className="pb-24 text-center">
        <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
      </div>
    </>
  );
}
