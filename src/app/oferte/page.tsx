import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import OffersBrowser from "@/components/offers/OffersBrowser";

export const metadata: Metadata = {
  title: "Oferte",
  description:
    "Oferte zilnice și de sărbători la Grand Piece Restaurant, Timișoara: pizza + băutură, meniul zilei, happy hour, Revelion, Crăciun și multe altele.",
  alternates: { canonical: "/oferte" },
};

export default function OffersPage() {
  return (
    <>
      <PageHeader eyebrow="Avantaje" title="Oferte" intro="Oferte zilnice și ocazii speciale la Grand Piece." />
      <OffersBrowser />
    </>
  );
}
