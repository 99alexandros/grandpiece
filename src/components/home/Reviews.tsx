import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { reviews } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <p className="text-gold" role="img" aria-label={`${rating} din 5 stele`}>
      {"★".repeat(rating)}
      <span className="text-gold/30">{"★".repeat(5 - rating)}</span>
    </p>
  );
}

export default function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="reviews-title">
      <Reveal>
        <div id="reviews-title">
          <SectionTitle eyebrow="Impresii" title="Ce spun oaspeții noștri" />
        </div>
      </Reveal>
      <ul className="mt-16 grid gap-8 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal as="li" key={r.id} delay={i * 130}>
            <figure className="relative h-full border border-gold/40 bg-cream-deep/50 p-8 pt-12">
              <span className="absolute left-8 top-2 font-serif text-7xl leading-none text-gold/50" aria-hidden="true">“</span>
              <Stars rating={r.rating} />
              <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-ink/85">{r.text}</blockquote>
              <figcaption className="mt-6 text-[0.75rem] font-medium uppercase tracking-[0.25em] text-pine">
                — {r.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
