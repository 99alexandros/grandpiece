interface Props {
  eyebrow?: string;
  title: string;
  light?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2";
}

export default function SectionTitle({ eyebrow, title, light, align = "center", as: Tag = "h2" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-4 text-[0.75rem] font-medium uppercase tracking-[0.35em] ${
            light ? "text-sand" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-serif text-4xl font-medium leading-tight sm:text-5xl ${
          light ? "text-bone" : "text-pine"
        }`}
      >
        {title}
      </Tag>
      {align === "center" && <div className={`ornament mt-6 justify-center ${light ? "text-sand" : "text-brand"}`} aria-hidden="true">◆</div>}
    </div>
  );
}
