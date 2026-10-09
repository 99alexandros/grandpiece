import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "brand" | "outline" | "outline-dark" | "wine";

const variants: Record<Variant, string> = {
  brand: "bg-brand text-bone hover:bg-wine border border-brand hover:border-wine",
  wine: "bg-wine text-bone hover:bg-[#8a2a39] border border-wine",
  outline: "border border-bone/70 text-bone hover:bg-bone hover:text-pine",
  "outline-dark": "border border-pine text-pine hover:bg-pine hover:text-bone",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "brand",
  className = "",
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const cls = `inline-flex items-center justify-center px-8 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${variants[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
