"use client";

import { useState, useSyncExternalStore } from "react";

// PREVIZUALIZARE TEMPORARĂ a paletelor de culori. După ce alegi varianta, componenta se șterge
// (și linia care o folosește din layout.tsx), iar culorile alese devin cele implicite în globals.css.

const themes = [
  { id: "default", label: "Actual", note: "Playfair · verde-negru & roșu", swatch: ["#0e1511", "#b5232f", "#f4f0e8"] },
  { id: "rustic", label: "1 · Trattoria rustică", note: "Fraunces · cald, rotunjit", swatch: ["#17130f", "#b8432f", "#f6eedc"] },
  { id: "editorial", label: "2 · Editorial de lux", note: "Bodoni · negru & auriu", swatch: ["#0b0b0b", "#8f6f3c", "#f8f5ef"] },
  { id: "roman", label: "3 · Clasic roman", note: "Cinzel · vișiniu & marmură", swatch: ["#120d0e", "#7d1f2c", "#f3f1ec"] },
  { id: "modern", label: "4 · Bistro modern", note: "Outfit · alb & verde", swatch: ["#0a0a0a", "#1f6b45", "#ffffff"] },
] as const;

export const THEME_KEY = "gp-theme";
const KEY = THEME_KEY;

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const getSnapshot = () => document.documentElement.getAttribute("data-theme") ?? "default";
const getServerSnapshot = () => "default";

export default function ThemePreview() {
  // Tema este setată înainte de afișare de scriptul din layout; aici doar o citim și o schimbăm.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(id: string) {
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(KEY, id);
    } catch {
      /* ignorat */
    }
    listeners.forEach((l) => l());
  }

  const [open, setOpen] = useState(false);
  const current = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div className="fixed bottom-3 left-1/2 z-[60] -translate-x-1/2 text-white" aria-label="Previzualizare variante de stil">
      {open && (
        <ul className="absolute bottom-full left-1/2 mb-2 w-[min(92vw,22rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 bg-black/90 p-1 shadow-2xl backdrop-blur">
          {themes.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                aria-pressed={theme === t.id}
                onClick={() => {
                  choose(t.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  theme === t.id ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="flex -space-x-1" aria-hidden="true">
                  {t.swatch.map((c) => (
                    <span key={c} className="h-4 w-4 rounded-full border border-white/40" style={{ background: c }} />
                  ))}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-medium">{t.label}</span>
                  <span className="text-[0.7rem] text-white/60">{t.note}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border border-white/25 bg-black/85 px-4 py-2.5 text-xs font-medium shadow-xl backdrop-blur"
      >
        <span className="flex -space-x-1" aria-hidden="true">
          {current.swatch.map((c) => (
            <span key={c} className="h-3.5 w-3.5 rounded-full border border-white/40" style={{ background: c }} />
          ))}
        </span>
        Stil: {current.label} ▴
      </button>
    </div>
  );
}
