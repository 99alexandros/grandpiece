import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-pine text-bone/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl text-bone">Grand Piece</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.45em] text-gold-soft">Ristorante</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <h2 className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.3em] text-gold-soft">Program</h2>
          <ul className="space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 border-b border-bone/10 pb-2">
                <span>{h.days}</span>
                <span className="text-bone">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.3em] text-gold-soft">Contact</h2>
          <address className="space-y-2 text-sm not-italic">
            <p>{site.address.full}</p>
            <p>
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold-soft">{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold-soft">{site.email}</a>
            </p>
            <p>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.social.instagram.handle} (se deschide într-o filă nouă)`}
                className="hover:text-gold-soft"
              >
                {site.social.instagram.handle}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-bone/55 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</p>
          <nav aria-label="Navigare subsol" className="flex flex-wrap justify-center gap-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold-soft">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
