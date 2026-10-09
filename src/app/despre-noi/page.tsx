import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { copy } from "@/data/copy";
import { images } from "@/data/images";
import { team, type Member } from "@/data/team";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Povestea restaurantului Grand Piece și echipa care vă întâmpină în Timișoara.",
  alternates: { canonical: "/despre-noi" },
};

function MemberCard({ member, large }: { member: Member; large?: boolean }) {
  return (
    <article
      className={`border border-sand/30 bg-pine-soft/40 px-6 text-center ${large ? "w-full max-w-sm py-10" : "py-7"}`}
    >
      <p className={`font-serif text-bone ${large ? "text-4xl" : "text-2xl"}`}>{member.name}</p>
      <p className="mt-2 text-[0.72rem] uppercase tracking-[0.3em] text-sand">{member.role}</p>
    </article>
  );
}

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
            <div className="absolute -inset-3 -translate-x-3 translate-y-3 border border-brand" aria-hidden="true" />
            <Image
              src={images.about}
              alt="Fritto misto, specialitate Grand Piece"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-pine py-24" aria-labelledby="team-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div id="team-title">
              <SectionTitle eyebrow="Oamenii noștri" title="Echipa Grand Piece" light />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 flex justify-center">
              <MemberCard member={team.lead} large />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="mb-6 text-center text-[0.75rem] uppercase tracking-[0.35em] text-sand">Administrație și sală</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {team.staff.map((m) => (
                  <li key={m.name}><MemberCard member={m} /></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="mb-6 text-center text-[0.75rem] uppercase tracking-[0.35em] text-sand">Bucătărie</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {team.kitchen.map((m, i) => (
                  <li key={m.name} className={i === 0 ? "sm:col-span-2" : ""}><MemberCard member={m} /></li>
                ))}
              </ul>
            </Reveal>
          </div>
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
