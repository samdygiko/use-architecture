import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectBySlug, projects, sectionId } from "@/lib/projects";
import ImageCycler from "@/components/ImageCycler";

export function generateStaticParams() {
  return projects.map((p) => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const p = projectBySlug(params.category, params.slug);
  if (!p) return { title: "Not found" };
  return {
    title: p.title,
    description: p.description?.slice(0, 160),
    openGraph: {
      title: p.title,
      description: p.description?.slice(0, 160),
      images: [p.cover],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  if (
    params.category !== "work" &&
    params.category !== "rest" &&
    params.category !== "play"
  )
    notFound();
  const p = projectBySlug(params.category, params.slug);
  if (!p) notFound();

  const hasSections = p.sections && p.sections.length > 0;
  const firstSection = hasSections ? p.sections![0] : null;

  const TextColumn = (
    <div className="md:sticky md:top-[96px] md:self-start">
      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-ink/60 mb-2">
        {p.category}
        {p.subtitle ? <> · {p.subtitle}</> : null}
      </p>
      <h1 className="font-normal text-[16px] md:text-[20px] leading-[1.2] tracking-tight mb-3">
        {p.title}
      </h1>
      {p.meta && p.meta.length > 0 && (
        <ul className="text-[10px] md:text-[11px] text-ink/70 space-y-1 mb-3">
          {p.meta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      )}
      {p.description && (
        <p
          className={
            "text-[11px] md:text-[12px] leading-relaxed " +
            (p.description.startsWith("[")
              ? "italic text-ink/50"
              : "text-ink/90")
          }
        >
          {p.description}
        </p>
      )}
    </div>
  );

  return (
    <main className="mx-auto max-w-[1500px] px-5 md:px-8 py-6 md:py-10">
      <div
        id={firstSection ? sectionId(firstSection.name) : undefined}
        className="scroll-mt-[80px] md:scroll-mt-[100px] grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
      >
        {TextColumn}
        <div className="md:sticky md:top-[96px] md:self-start">
          {firstSection && (
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-ink/60 mb-2">
              {firstSection.name}
            </h2>
          )}
          <ImageCycler
            images={firstSection ? firstSection.images : p.images}
            alt={firstSection ? `${p.title} — ${firstSection.name}` : p.title}
            priority
          />
          {p.pdf && (
            <div className="mt-4 text-[11px] md:text-[12px]">
              <a
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-[4px] decoration-1 hover:no-underline hover:text-accent"
              >
                Download PDF
              </a>
            </div>
          )}
        </div>
      </div>

      {hasSections && p.sections!.length > 1 && (
        <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
          {p.sections!.slice(1).map((sec) => (
            <section
              key={sec.name}
              id={sectionId(sec.name)}
              className="scroll-mt-[80px] md:scroll-mt-[100px] grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
            >
              <div className="md:sticky md:top-[96px] md:self-start">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-ink/60 mb-2">
                  {p.category}
                  {p.subtitle ? <> · {p.subtitle}</> : null}
                </p>
                <h2 className="font-normal text-[15px] md:text-[18px] leading-[1.2] tracking-tight mb-2">
                  {sec.name}
                </h2>
                <p className="text-[10px] md:text-[11px] text-ink/60">
                  Part of {p.title}
                </p>
              </div>
              <div className="md:sticky md:top-[96px] md:self-start">
                <ImageCycler images={sec.images} alt={`${p.title} — ${sec.name}`} />
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
