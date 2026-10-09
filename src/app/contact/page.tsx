import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { mapEmbedUrl, mapLinkUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Grand Piece Restaurant: Str. Coriolan Brediceanu nr. 37, Timișoara. Telefon, e-mail, program și hartă.",
  alternates: { canonical: "/contact" },
};

const h3 = "text-[0.75rem] font-medium uppercase tracking-[0.3em] text-brand";

export default function ContactPage() {
  const ig = site.social.instagram;
  return (
    <>
      <PageHeader eyebrow="Contact" title="Vizitați-ne" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:py-24">
        <Reveal>
          <div className="space-y-10">
            <div>
              <h2 className={h3}>Adresă</h2>
              <address className="mt-3 font-serif text-2xl not-italic text-pine">
                {site.address.street}
                <br />
                {site.address.city}
              </address>
              <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-wine underline underline-offset-4 hover:text-pine">
                Deschide în Google Maps<span className="sr-only"> (se deschide într-o filă nouă)</span>
              </a>
            </div>
            <div>
              <h2 className={h3}>Program</h2>
              <dl className="mt-3 divide-y divide-brand/30 border-y border-brand/30">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink/85">{h.days}</dt>
                    <dd className="font-serif text-xl text-pine">{h.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className={h3}>Telefon și e-mail</h2>
              <p className="mt-3 font-serif text-2xl">
                <a href={`tel:${site.phoneHref}`} className="text-pine hover:text-wine">{site.phone}</a>
              </p>
              <p className="mt-1 text-lg">
                <a href={`mailto:${site.email}`} className="text-pine underline underline-offset-4 hover:text-wine">{site.email}</a>
              </p>
            </div>
            <div>
              <h2 className={h3}>Rețele sociale</h2>
              <p className="mt-3">
                <a
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${ig.label} ${ig.handle} (se deschide într-o filă nouă)`}
                  className="text-lg text-pine underline underline-offset-4 hover:text-wine"
                >
                  {ig.label} · {ig.handle}
                </a>
              </p>
            </div>
            <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="min-h-[26rem] overflow-hidden rounded-[var(--r)] border border-brand/50 p-2 lg:h-full">
            <iframe
              title={`Harta: ${site.address.full}`}
              src={mapEmbedUrl}
              className="h-full min-h-[26rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
