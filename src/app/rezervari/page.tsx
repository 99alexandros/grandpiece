import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ReservationForm from "@/components/reservations/ReservationForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Rezervări",
  description: "Rezervă o masă la Grand Piece Restaurant, Timișoara. Completează formularul sau sună-ne.",
  alternates: { canonical: "/rezervari" },
};

export default function ReservationsPage() {
  return (
    <>
      <PageHeader eyebrow="Rezervări" title="Rezervă o masă" intro="Completați formularul și vă vom contacta pentru confirmare." />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:py-24">
        <ReservationForm />
        <aside className="space-y-8 lg:pt-4" aria-label="Informații utile">
          <div>
            <h2 className="font-serif text-3xl text-pine">Preferați telefonul?</h2>
            <p className="mt-3 text-ink/75">Ne puteți suna oricând în timpul programului.</p>
            <a href={`tel:${site.phoneHref}`} className="mt-3 inline-block font-serif text-3xl text-wine hover:underline">
              {site.phone}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-pine">Program</h2>
            <dl className="mt-3 divide-y divide-brand/30">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/75">{h.days}</dt>
                  <dd className="font-medium text-pine">{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-pine">Adresă</h2>
            <address className="mt-3 not-italic text-ink/75">{site.address.full}</address>
          </div>
        </aside>
      </div>
    </>
  );
}
