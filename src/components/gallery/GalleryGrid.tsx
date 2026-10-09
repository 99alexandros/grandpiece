"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages as allImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);
  // Pozele care nu se încarcă sunt ascunse, ca să nu apară casete goale.
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const galleryImages = allImages.filter((g) => !failed.has(g.src));
  const markFailed = (src: string) => setFailed((f) => new Set(f).add(src));
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const n = galleryImages.length;

  const close = useCallback(() => {
    setIndex(null);
    triggerRef.current?.focus();
  }, []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + n) % n)), [n]);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % n)), [n]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab") {
        // Focus trap simplu
        const focusables = document.querySelectorAll<HTMLElement>("[data-lightbox] button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const current = index !== null ? galleryImages[index] : null;
  const arrowCls =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-bone/40 text-2xl text-bone transition-colors hover:bg-bone hover:text-pine";

  return (
    <>
      <ul className="mx-auto max-w-7xl columns-2 gap-3 px-4 py-12 sm:gap-4 sm:px-8 lg:columns-3 lg:py-24 [&>li]:mb-3 sm:[&>li]:mb-4">
        {galleryImages.map((img, i) => (
          <li key={i} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Mărește imaginea: ${img.alt}`}
              className="group relative block w-full overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                onError={() => markFailed(img.src)}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-pine/0 transition-colors duration-500 group-hover:bg-pine/30" aria-hidden="true" />
              <span className="absolute inset-3 border border-brand/0 transition-colors duration-500 group-hover:border-brand" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      {current && index !== null && (
        <div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label="Galerie foto"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-pine/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Închide galeria"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center border border-bone/40 text-2xl text-bone transition-colors hover:bg-bone hover:text-pine"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Imaginea anterioară"
            className={`${arrowCls} left-3 sm:left-6`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Imaginea următoare"
            className={`${arrowCls} right-3 sm:right-6`}
          >
            ›
          </button>
          <figure className="lightbox-in relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <figcaption className="sr-only">
              {current.alt} – imaginea {index + 1} din {n}
            </figcaption>
          </figure>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm tracking-widest text-bone/85" aria-hidden="true">
            {index + 1} / {n}
          </p>
        </div>
      )}
    </>
  );
}
