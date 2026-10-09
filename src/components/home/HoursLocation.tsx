import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { mapEmbedUrl, mapLinkUrl, site } from "@/data/site";

export default function HoursLocation() {
  return (
    <section className="bg-cream-deep py-24 lg:py-32" aria-labelledby="hours-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div id="hours-title">
            <SectionTitle eyebrow="Vizitați-ne" title="Program și locație" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="h-full border border-gold/50 bg-cream p-8 sm:p-12">
              <h3 className="font-serif text-3xl text-pine">Program</h3>
              <dl className="mt-6 divide-y divide-gold/30">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 py-4">
                    <dt className="text-ink/80">{h.days}</dt>
                    <dd className="font-serif text-xl text-pine">{h.label}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="mt-10 font-serif text-3xl text-pine">Adresă</h3>
              <address className="mt-4 not-italic leading-relaxed text-ink/80">
                {site.address.street}
                <br />
                {site.address.city}
              </address>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
                <ButtonLink href={mapLinkUrl} variant="outline-dark" external>Deschide harta</ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full min-h-[22rem] border border-gold/50 p-2">
              <iframe
                title={`Harta: ${site.address.full}`}
                src={mapEmbedUrl}
                className="h-full min-h-[22rem] w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
