import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { copy } from "@/data/copy";
import { images } from "@/data/images";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Povestea restaurantului Grand Piece și echipa care vă întâmpină în Timișoara.",
  alternates: { canonical: "/despre-noi" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Despre noi" title="Povestea Grand Piece" />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <h2 className="font-serif text-4xl text-pine">{copy.about.title}</h2>
            {copy.about.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute -inset-3 -translate-x-3 translate-y-3 border border-gold" aria-hidden="true" />
            <Image
              src={images.about}
              alt="Interiorul restaurantului Grand Piece"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-pine py-24" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div id="team-title">
              <SectionTitle eyebrow="Oamenii noștri" title="Echipa" light />
            </div>
          </Reveal>
          <ul className="mt-16 grid gap-12 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal as="li" key={i} delay={i * 130}>
                <article className="text-center">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(min-width: 768px) 30vw, 80vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-bone">{m.name}</h3>
                  <p className="mt-1 text-[0.75rem] uppercase tracking-[0.3em] text-gold-soft">{m.role}</p>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-bone/70">{m.bio}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 text-center">
        <Reveal>
          <p className="font-serif text-3xl italic text-pine sm:text-4xl">Vă așteptăm cu drag la masă.</p>
          <div className="mt-8">
            <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
