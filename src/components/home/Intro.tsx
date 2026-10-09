import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { images } from "@/data/images";
import { copy } from "@/data/copy";

export default function Intro() {
  return (
    <section id="intro" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <Reveal>
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-2 translate-x-2 translate-y-2 sm:-inset-3 sm:translate-x-3 sm:translate-y-3 border border-brand" aria-hidden="true" />
          <SafeImage
            src={images.intro}
            alt="Masă la lumina lumânării, cu paste și vin alb"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div className="text-center lg:text-left">
          <SectionTitle eyebrow={copy.intro.eyebrow} title={copy.intro.title} align="left" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
            {copy.intro.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/despre-noi" variant="outline-dark">Descoperă povestea noastră</ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
