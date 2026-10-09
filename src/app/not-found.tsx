import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="Eroare 404" title="Pagina nu a fost găsită" />
      <div className="px-5 py-24 text-center">
        <p className="mb-8 text-lg text-ink/85">Ne cerem scuze, pagina căutată nu există.</p>
        <ButtonLink href="/">Înapoi acasă</ButtonLink>
      </div>
    </>
  );
}
