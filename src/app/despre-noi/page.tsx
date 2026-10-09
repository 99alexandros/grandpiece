import type { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { copy } from "@/data/copy";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Povestea restaurantului Grand Piece din Timișoara: mâncare italiană împărtășită cu familia și prietenii.",
  alternates: { canonical: "/despre-noi" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Despre noi" title="Povestea Grand Piece" />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink/90">
            <h2 className="font-serif text-4xl text-pine">{copy.about.title}</h2>
            {copy.about.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute -inset-2 -translate-x-2 translate-y-2 sm:-inset-3 sm:-translate-x-3 sm:translate-y-3 border border-brand rounded-[var(--r)]" aria-hidden="true" />
            <SafeImage
              src={images.about}
              alt="Masă elegantă pregătită pentru oaspeți"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover rounded-[var(--r)]"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-24 text-center">
        <Reveal>
          <p className="font-display text-3xl italic text-pine sm:text-4xl">Vă așteptăm cu drag la masă.</p>
          <div className="mt-8">
            <ButtonLink href="/rezervari" variant="wine">Rezervă o masă</ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
