"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  image: string;
  name: string;
  /** Small uppercase line shown above the name on the image overlay. e.g. "Founder & Director" or "Board Topper" */
  eyebrow?: string;
  /** Right-aligned badge over the image (top-right). e.g. "95%" */
  badge?: string;
  /** Secondary line shown on the image overlay below the name - school, class, subjects + experience */
  meta?: string;
  /** Optional longer description / quote shown BELOW the image */
  description?: string;
};

interface Props {
  items: LightboxItem[];
  openIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function PhotoLightbox({ items, openIndex, onClose, onIndexChange }: Props) {
  const next = useCallback(() => {
    if (openIndex === null) return;
    onIndexChange((openIndex + 1) % items.length);
  }, [openIndex, items.length, onIndexChange]);
  const prev = useCallback(() => {
    if (openIndex === null) return;
    onIndexChange((openIndex - 1 + items.length) % items.length);
  }, [openIndex, items.length, onIndexChange]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, onClose, next, prev]);

  if (openIndex === null) return null;
  const active = items[openIndex];
  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/92 p-4 backdrop-blur-md sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo of ${active.name}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Edge arrows - hidden on mobile (image fills width), shown sm+ where there's gutter space */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="fixed left-6 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="fixed right-6 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="relative my-auto w-full max-w-2xl py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image - keeps its own aspect ratio so portraits don't get letter-boxed
            inside a forced 4:5 frame. We cap height/width with CSS and let the
            image decide its own ratio via Next/Image's intrinsic sizing. */}
        <div className="relative mx-auto flex max-h-[72vh] w-fit max-w-full justify-center overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
          <Image
            src={active.image}
            alt={active.name}
            width={1200}
            height={1600}
            sizes="(max-width: 768px) 100vw, 720px"
            className="h-auto max-h-[72vh] w-auto max-w-full object-contain"
            priority
          />
          {active.badge ? (
            <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
              {active.badge}
            </span>
          ) : null}
        </div>

        {/* Caption block (eyebrow + name + meta) below the image so we never crop the photo */}
        <div className="mt-4 flex flex-col items-start gap-2 px-1">
          {active.eyebrow ? (
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
              {active.eyebrow}
            </span>
          ) : null}
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {active.name}
          </h3>
          {active.meta ? (
            <p className="text-sm leading-snug text-white/80">{active.meta}</p>
          ) : null}
        </div>

        {/* Description / bio below the image */}
        {active.description ? (
          <div className="mt-4 rounded-xl bg-white/[0.06] p-5 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-white/85 sm:text-[15px]">
              {active.description}
            </p>
          </div>
        ) : null}

        {/* Mobile nav bar (prev / counter / next) - hidden on sm+ where edge arrows are used */}
        <div className="mt-5 flex items-center justify-between gap-3 sm:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition active:bg-neutral-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <p className="text-[12px] font-semibold tracking-[0.2em] text-white/70">
            {String(openIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition active:bg-neutral-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide counter (sm+ only - mobile shows it in the nav bar above) */}
        <p className="mt-3 hidden text-center text-[11px] font-semibold tracking-[0.2em] text-white/55 sm:block">
          {String(openIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
