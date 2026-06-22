import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[2px] md:gap-[3px]"
    >
      {items.map((p) => (
        <li key={`${p.category}-${p.slug}`} className="aspect-square">
          <Link
            href={`/${p.category}/${p.slug}`}
            className="group relative block w-full h-full bg-black/5 hover:no-underline focus:outline-none"
            aria-label={`${p.title} — open project`}
          >
            <Image
              src={p.cover}
              alt={p.title}
              fill
              sizes="(min-width: 1280px) 12.5vw, (min-width: 1024px) 16.66vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-opacity duration-200 group-hover:opacity-25"
            />
            <div className="absolute inset-0 hidden group-hover:flex group-focus-visible:flex items-center justify-center p-2 text-center pointer-events-none">
              <span className="text-[12px] md:text-[13px] leading-tight text-ink">
                <span className="text-accent">·</span> {p.title}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
