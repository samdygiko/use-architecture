import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Use" };

export default function UsePage() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 md:px-8 py-12 md:py-20">
      <h1
        className="font-normal leading-[0.95] tracking-tight text-[120px] sm:text-[180px] md:text-[240px] mb-10 md:mb-16"
        aria-label="Use"
      >
        <span className="text-accent">Us</span>
        <span className="text-ink">e</span>
      </h1>

      <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div className="text-[14px] md:text-[15px] leading-relaxed text-ink/90">
          <p>
            Launched in 1990 by director Jo Hagan with an enigmatic brief to
            provide Live/Work a space for a iconic record producer, USE chose
            to interpret the brief with 3 sculptural objects personifying
            Work, Rest & Play, strategically placed within a dynamic Loft
            space. These foundational pillars expanded to create Urbane
            Sophisticated Environments to Work Rest and Play for a variety of
            clients and a multiplicity of purposes. From individual furniture
            commissions to regional masterplanning we apply the same energy,
            economy and elan to each project, irrespective of scale or
            budget. We consider our clients to be fellow travellers on a
            common journey to explore how best to invest space with emotion
            and meaning.
          </p>

          <div className="mt-10 md:mt-12">
            <p className="text-[13px] md:text-[14px] text-ink/80 mb-4">
              JH Hagan · Director
            </p>
            <div className="flex flex-wrap gap-2 text-[12px] md:text-[13px]">
              <a
                href="tel:+447939567345"
                className="inline-flex items-center border border-black/20 px-4 py-2 hover:border-accent hover:text-accent transition-colors no-underline hover:no-underline"
              >
                Call · 0044 7939 567345
              </a>
              <a
                href="https://wa.me/447939567345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-black/20 px-4 py-2 hover:border-accent hover:text-accent transition-colors no-underline hover:no-underline"
              >
                WhatsApp
              </a>
              <a
                href="mailto:jo@usearchitects.com"
                className="inline-flex items-center border border-black/20 px-4 py-2 hover:border-accent hover:text-accent transition-colors no-underline hover:no-underline"
              >
                jo@usearchitects.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="relative w-full aspect-[3/4] bg-black/5 overflow-hidden">
            <Image
              src="/images/use/use-01.jpg"
              alt="USE"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-[3/4] bg-black/5 overflow-hidden">
            <Image
              src="/images/use/use-02.jpg"
              alt="USE"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
