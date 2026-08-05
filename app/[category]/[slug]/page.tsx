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
      <p className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-ink/60 mb-3">
        {p.category}
        {p.subtitle ? <> · {p.subtitle}</> : null}
      </p>
      <h1 className="font-normal text-[26px] md:text-[36px] leading-[1.15] tracking-tight mb-6">
        {p.title}
      </h1>
      {p.meta && p.meta.length > 0 && (
        <ul className="text-[13px] md:text-[14px] text-ink/70 space-y-1 mb-6">
          {p.meta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      )}
      {p.description && (
        <p
          className={
            "text-[14px] md:text-[15px] leading-relaxed " +
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
    <main className="mx-auto max-w-[1400px] px-5 md:px-8 py-8 md:py-14">
      <div
        id={firstSection ? sectionId(firstSection.name) : undefined}
        className="scroll-mt-[80px] md:scroll-mt-[100px] grid gap-10 md:gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      >
        {TextColumn}
        <div className="md:sticky md:top-[96px] md:self-start">
          {firstSection && (
            <h2 className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-ink/60 mb-3">
              {firstSection.name}
            </h2>
          )}
          <ImageCycler
            images={firstSection ? firstSection.images : p.images}
            alt={firstSection ? `${p.title} — ${firstSection.name}` : p.title}
            priority
          />
        </div>
      </div>

      {hasSections && p.sections!.length > 1 && (
        <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
          {p.sections!.slice(1).map((sec) => (
            <section
              key={sec.name}
              id={sectionId(sec.name)}
              className="scroll-mt-[80px] md:scroll-mt-[100px] grid gap-10 md:gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div className="md:sticky md:top-[96px] md:self-start">
                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-ink/60 mb-3">
                  {p.category}
                  {p.subtitle ? <> · {p.subtitle}</> : null}
                </p>
                <h2 className="font-normal text-[22px] md:text-[30px] leading-[1.15] tracking-tight mb-3">
                  {sec.name}
                </h2>
                <p className="text-[13px] md:text-[14px] text-ink/60">
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
