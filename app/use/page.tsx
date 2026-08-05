import type { Metadata } from "next";

export const metadata: Metadata = { title: "Use" };

export default function UsePage() {
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
        <p>
          USE Architects make Urbane Elegant Environments to Work Rest and Play
          for a variety of clients and a multiplicity of purposes. From
          individual furniture commissions to regional masterplanning we apply
          the same energy, authenticity and elan to each project, irrespective
          of scale or budget. We consider our clients to be fellow travellers
          on a common journey to explore how best to invest space with emotion
          and meaning.
        </p>
      </div>
    </main>
  );
}
