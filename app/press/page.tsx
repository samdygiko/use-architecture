import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press" };

const DOWNLOADS: { title: string; note: string; href: string }[] = [
  {
    title: "Facing the Future — USE Architects breathe new life into Hackney",
    note: "News Release, July 2014 · DuPont™ Corian® façade, Mentmore Terrace",
    href: "/downloads/use-press-3-mentmore-news-release.pdf",
  },
  {
    title: "DuPont Corian Façade — Mentmore Terrace",
    note: "USE Architects · press draft",
    href: "/downloads/use-press-dupont-corian-mentmore.pdf",
  },
];

const FEATURED: { outlet: string; title: string; href: string }[] = [
  { outlet: "The Telegraph", title: "Bar of the week: South Pole bar at the North Pole", href: "#" },
  { outlet: "e-architect", title: "Mentmore Terrace Hackney, London Property", href: "#" },
  { outlet: "Social Design Magazine", title: "Façade Corian and references to the Bauhaus in the heart of London by architects USE", href: "#" },
  { outlet: "netMAGmedia", title: "Everybody needs good neighbours", href: "#" },
  { outlet: "DuPont Corian Design", title: "Corian Design — posts featuring USE Architects", href: "#" },
  { outlet: "Kingspan", title: "Kingspan Optim-R provides luxury finish to mixed-use development", href: "#" },
  { outlet: "CrowdLords", title: "Meet the Developer — Jo Hagan (5 Mentmore Terrace)", href: "#" },
  { outlet: "It's Rude To Stare", title: "Institute of Light: Helio's cantina, retro cinema and record store opens in London Fields", href: "#" },
  { outlet: "Restaurant Interiors", title: "Restaurant Bocca di Lupo by Mindseye", href: "#" },
  { outlet: "Mindseye", title: "Bocca Di Lupo", href: "#" },
  { outlet: "London Design Festival", title: "Portobello Pavilion", href: "#" },
  { outlet: "Art House", title: "Portobello Pavilion 2015", href: "#" },
  { outlet: "LondonTown.com", title: "InTransit Festival images — Notting Hill, London", href: "#" },
  { outlet: "Royal Borough of Kensington & Chelsea", title: "InTRANSIT Festival of Arts 2016 — guidance for expressions of interest", href: "#" },
  { outlet: "Symbols & Secrets", title: "Secrets of Old Street — who remembers the Dansette record player?", href: "#" },
  { outlet: "Alamy", title: "USE Architects — Jo Hagan · stock photography index", href: "#" },
];

export default function PressPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-normal text-[32px] md:text-[44px] leading-none tracking-tight mb-12 md:mb-16">
        Press
      </h1>

      <section className="mb-14 md:mb-20">
        <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.08em] text-ink/60 mb-5">
          From the practice
        </h2>
        <ul className="border-t border-black/10">
          {DOWNLOADS.map((d) => (
            <li key={d.href} className="border-b border-black/10">
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 md:py-5 group hover:no-underline"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[14px] md:text-[15px] text-ink group-hover:text-accent transition-colors">
                    {d.title}
                  </span>
                  <span className="shrink-0 text-[11px] md:text-[12px] text-ink/60 group-hover:text-accent transition-colors underline underline-offset-[4px] decoration-1">
                    Download PDF
                  </span>
                </div>
                <p className="mt-1 text-[12px] md:text-[13px] text-ink/60">
                  {d.note}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.08em] text-ink/60 mb-5">
          As featured in
        </h2>
        <ul className="border-t border-black/10">
          {FEATURED.map((a, i) => (
            <li key={i} className="border-b border-black/10">
              <a
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[220px_minmax(0,1fr)] gap-x-4 gap-y-1 py-3 md:py-4 group hover:no-underline"
              >
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.06em] text-ink/70 group-hover:text-accent transition-colors">
                  {a.outlet}
                </span>
                <span className="text-[13px] md:text-[14px] text-ink/90 group-hover:text-accent transition-colors">
                  {a.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
