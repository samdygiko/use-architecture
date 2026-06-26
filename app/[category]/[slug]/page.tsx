import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectBySlug, projects } from "@/lib/projects";

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
  if (params.category !== "work" && params.category !== "rest" && params.category !== "play") notFound();
  const p = projectBySlug(params.category, params.slug);
  if (!p) notFound();

  // Counter for priority/alt indexing across sections + flat images.
  let imgIndex = 0;
  const renderImage = (src: string) => {
    const i = imgIndex++;
    return (
      <figure key={src} className="relative w-full">
        <div className="relative w-full">
          <Image
            src={src}
            alt={`${p.title} — image ${i + 1}`}
            width={2200}
            height={1467}
            sizes="(min-width: 1100px) 1036px, 100vw"
            className="w-full h-auto"
            priority={i === 0}
          />
        </div>
      </figure>
    );
  };

  return (
    <main className="mx-auto max-w-[1100px] px-5 md:px-8 py-8 md:py-14">
      <header className="mb-10 md:mb-16 max-w-[68ch]">
        <p className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-ink/60 mb-3">
          {p.category}
          {p.subtitle ? <> · {p.subtitle}</> : null}
        </p>
        <h1 className="font-normal text-[28px] md:text-[44px] leading-[1.1] tracking-tight mb-6">
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
              "text-[15px] md:text-[16px] leading-relaxed " +
              (p.description.startsWith("[") ? "italic text-ink/50" : "text-ink/90")
            }
          >
            {p.description}
          </p>
        )}
      </header>

      {p.sections && p.sections.length > 0 ? (
        <div className="space-y-16 md:space-y-24">
          {p.sections.map((sec) => (
            <section key={sec.name} className="space-y-6 md:space-y-10">
              <h2 className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-ink/60 border-t border-ink/15 pt-3">
                {sec.name}
              </h2>
              {sec.images.map(renderImage)}
            </section>
          ))}
        </div>
      ) : (
        <div className="space-y-6 md:space-y-10">
          {p.images.map(renderImage)}
        </div>
      )}
    </main>
  );
}
