import SectionTitle from "./SectionTitle";

/** Antet pentru paginile interioare (fundal închis, sub navbar). */
export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="bg-pine px-4 pb-16 pt-36 text-center sm:pt-40">
      <SectionTitle eyebrow={eyebrow} title={title} light as="h1" />
      {intro && <p className="mx-auto mt-6 max-w-xl text-bone/75">{intro}</p>}
    </header>
  );
}
