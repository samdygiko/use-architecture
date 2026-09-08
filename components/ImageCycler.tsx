"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ImageCycler({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  const [i, setI] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = images.length;

  const next = useCallback(
    () => setI((prev) => (prev + 1) % total),
    [total],
  );
  const prev = useCallback(
    () => setI((prev) => (prev - 1 + total) % total),
    [total],
  );

  // Keyboard on the inline scroll: only while the wrapper is focused.
  const onWrapperKey = (e: React.KeyboardEvent) => {
    if (total <= 1) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  // Keyboard + body scroll lock while lightbox is open.
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      else if (e.key === "ArrowRight" && total > 1) next();
      else if (e.key === "ArrowLeft" && total > 1) prev();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, next, prev, total]);

  return (
    <div
      className="w-full outline-none"
      tabIndex={0}
      onKeyDown={onWrapperKey}
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="block w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent group cursor-zoom-in"
        aria-label={`${alt} — image ${i + 1} of ${total}. Click to enlarge.`}
      >
        <div className="relative w-full aspect-[4/3] bg-black/5 overflow-hidden">
          <Image
            src={images[i]}
            alt={`${alt} — image ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-contain"
            priority={priority && i === 0}
          />
        </div>
      </button>

      {total > 1 && (
        <div className="mt-2 flex items-center justify-between text-[11px] md:text-[12px] text-ink/60">
          <button
            type="button"
            onClick={prev}
            className="text-ink/70 hover:text-accent transition-colors"
            aria-label="Previous image"
          >
            ← Prev
          </button>
          <span className="tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={next}
            className="text-ink/70 hover:text-accent transition-colors"
            aria-label="Next image"
          >
            Next →
          </button>
        </div>
      )}

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — enlarged view`}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
            }}
            aria-label="Close enlarged view"
            className="absolute top-3 right-4 md:top-5 md:right-6 text-white/80 hover:text-white text-3xl md:text-4xl leading-none w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-5xl leading-none w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-5xl leading-none w-10 h-10 flex items-center justify-center"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative w-[92vw] h-[85vh] md:w-[90vw] md:h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[i]}
              alt={`${alt} — image ${i + 1} enlarged`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {total > 1 && (
            <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-[11px] md:text-[12px] tabular-nums">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
