import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[820px] px-5 md:px-8 py-12 md:py-24">
      <h1
        className="font-normal leading-[0.95] tracking-tight text-[120px] sm:text-[180px] md:text-[240px] mb-12 md:mb-20"
        aria-label="Use"
      >
        <span className="text-accent">Us</span>
        <span className="text-ink">e</span>
      </h1>
      <div className="max-w-[60ch] text-[15px] md:text-[16px] leading-relaxed text-ink/90">
        <p className="italic text-ink/50">[ABOUT COPY TO BE ADDED]</p>
      </div>
    </main>
  );
}
