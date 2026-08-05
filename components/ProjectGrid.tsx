import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14 md:gap-x-14 md:gap-y-20"
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
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 md:mt-4 text-[13px] md:text-[14px] leading-tight text-ink group-hover:text-accent transition-colors">
              {p.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
