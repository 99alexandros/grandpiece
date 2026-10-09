"use client";

import { useSyncExternalStore } from "react";

// PREVIZUALIZARE TEMPORARĂ a paletelor de culori. După ce alegi varianta, componenta se șterge
// (și linia care o folosește din layout.tsx), iar culorile alese devin cele implicite în globals.css.

const themes = [
  { id: "default", label: "Actual", swatch: ["#0e1511", "#b5232f", "#f4f0e8"] },
  { id: "gold", label: "A · Noir & Auriu", swatch: ["#14100d", "#c9a04a", "#f7f1e5"] },
  { id: "terra", label: "B · Terra & Noapte", swatch: ["#0c1620", "#b0502c", "#f1ede4"] },
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

  return (
    <div
      role="group"
      aria-label="Previzualizare variante de culori"
      className="fixed bottom-3 left-1/2 z-[60] flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/80 p-1 shadow-xl backdrop-blur"
    >
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          aria-pressed={theme === t.id}
          onClick={() => choose(t.id)}
          className={`flex items-center gap-2 rounded-full px-3 py-2 text-[0.7rem] font-medium text-white transition-colors sm:px-4 sm:text-xs ${
            theme === t.id ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <span className="flex -space-x-1" aria-hidden="true">
            {t.swatch.map((c) => (
              <span key={c} className="h-3.5 w-3.5 rounded-full border border-white/40" style={{ background: c }} />
            ))}
          </span>
          <span className="whitespace-nowrap">{t.label}</span>
        </button>
      ))}
    </div>
  );
}
