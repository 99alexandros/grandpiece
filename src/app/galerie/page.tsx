import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Fotografii din restaurantul Grand Piece: atmosferă, preparate și momente de neuitat în Timișoara.",
  alternates: { canonical: "/galerie" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Imagini" title="Galerie" intro="O privire în atmosfera și preparatele Grand Piece." />
      <GalleryGrid />
    </>
  );
}
