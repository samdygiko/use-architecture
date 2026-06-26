import type { Metadata } from "next";

export const metadata: Metadata = { title: "Library" };

const items: { label: string; href: string }[] = [
  { label: "Vicalex", href: "/downloads/vicalex.pdf" },
  { label: "African Rainbow", href: "/downloads/african-rainbow.pdf" },
];

export default function LibraryPage() {
  return (
    <main className="mx-auto max-w-[820px] px-5 md:px-8 py-16 md:py-32">
      <ul className="space-y-4 text-[15px] md:text-[16px] leading-relaxed">
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-[4px] decoration-1 hover:no-underline"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
