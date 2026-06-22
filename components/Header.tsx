"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

const NAV = [
  { label: "Work", href: "/work" },
  { label: "Rest", href: "/rest" },
  { label: "Play", href: "/play" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-black/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 h-[60px] md:h-[72px] flex items-center justify-between">
        <Wordmark size="md" />
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 md:gap-7 text-[13px] md:text-[14px]">
            {NAV.map((n) => {
              const active =
                pathname === n.href ||
                (n.href !== "/" && pathname?.startsWith(n.href));
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={
                      active
                        ? "text-accent"
                        : "text-ink hover:text-accent transition-colors no-underline hover:no-underline"
                    }
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
