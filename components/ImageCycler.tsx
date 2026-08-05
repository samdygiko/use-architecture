"use client";

import Image from "next/image";
import { useState } from "react";

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
  const total = images.length;
  const cycle = () => setI((prev) => (prev + 1) % total);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={cycle}
        className="block w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent group"
        aria-label={`${alt} — image ${i + 1} of ${total}. Click to view next.`}
      >
        <div className="relative w-full aspect-[4/3] bg-black/5 overflow-hidden">
          <Image
            src={images[i]}
            alt={`${alt} — image ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
            priority={priority && i === 0}
          />
        </div>
      </button>
      {total > 1 && (
        <div className="mt-3 flex items-center justify-between text-[12px] md:text-[13px] text-ink/60">
          <span className="tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={cycle}
            className="text-ink/70 hover:text-accent transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
