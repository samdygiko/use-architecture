import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-5 md:gap-x-3 md:gap-y-7"
    >
      {items.map((p) => (
        <li key={`${p.category}-${p.slug}`}>
          <Link
            href={`/${p.category}/${p.slug}`}
            className="group block hover:no-underline focus:outline-none"
            aria-label={`${p.title} — open project`}
          >
            <div className="relative w-full aspect-[4/3] bg-black/5 overflow-hidden">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-2 text-[11px] md:text-[12px] leading-tight text-ink group-hover:text-accent transition-colors">
              {p.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
