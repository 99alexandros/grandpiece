"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { images } from "@/data/images";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Închide meniul la Escape; blochează scroll-ul când e deschis.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  // Pe telefon, în hero logo-ul mare e deja vizibil – nu îl dublăm în navbar (pe desktop rămâne).
  const hideLogo = pathname === "/" && !solid;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-pine/95 py-3 shadow-lg shadow-black/20 backdrop-blur" : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`block transition-opacity duration-500 ${hideLogo ? "max-lg:pointer-events-none max-lg:opacity-0" : ""}`}
          aria-label={`${site.name} – prima pagină`}
        >
          <Image
            src={images.logo}
            alt=""
            width={1100}
            height={668}
            priority
            className={`w-auto transition-all duration-500 ${solid ? "h-14" : "h-[4.5rem]"}`}
          />
        </Link>

        <nav aria-label="Navigare principală" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative text-[0.78rem] font-medium uppercase tracking-[0.22em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300 hover:text-sand ${
                isActive(l.href) ? "text-sand after:scale-x-100" : "text-bone after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/rezervari"
            className="rounded-[var(--r-btn)] border border-brand bg-brand px-6 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-on-brand transition-colors hover:border-sand hover:bg-transparent hover:text-sand"
          >
            Rezervări
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Meniu</span>
          <span aria-hidden="true" className="relative block h-4 w-7">
            <span
              className={`absolute left-0 h-px w-7 bg-bone transition-all duration-300 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-7 bg-bone transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-7 bg-bone transition-all duration-300 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-pine transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navigare mobilă" className="flex flex-col items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`font-serif text-4xl ${isActive(l.href) ? "text-sand" : "text-bone"} hover:text-sand`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/rezervari"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="rounded-[var(--r-btn)] mt-4 border border-brand bg-brand px-10 py-3.5 text-sm font-medium uppercase tracking-[0.25em] text-on-brand"
          >
            Rezervări
          </Link>
        </nav>
        <p className="mt-12 text-sm text-bone/60">{site.phone}</p>
      </div>
    </>
  );
}