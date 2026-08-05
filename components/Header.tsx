"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import {
  projectsByCategory,
  projectBySlug,
  sectionId,
  type Category,
} from "@/lib/projects";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "work", label: "Work" },
  { key: "rest", label: "Rest" },
  { key: "play", label: "Play" },
];

const TOP_NAV = [
  { label: "Use", href: "/use" },
  { label: "Contact", href: "/contact" },
  { label: "Press", href: "/press" },
];

const mobileArch = projectBySlug("play", "mobile-architecture");
const mobileArchSubs =
  mobileArch?.sections?.map((s) => ({ name: s.name, id: sectionId(s.name) })) ??
  [];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCat, setOpenCat] = useState<Category | null>(null);
  const [openMA, setOpenMA] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setOpenCat(null);
    setOpenMA(false);
  }, [pathname]);

  const linkCls = (active: boolean) =>
    active
      ? "text-accent"
      : "text-ink hover:text-accent transition-colors no-underline hover:no-underline";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-black/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 h-[60px] md:h-[72px] flex items-center justify-between">
        <Wordmark size="md" />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[14px]">
            {/* Projects — nested dropdown */}
            <li className="group relative">
              <button
                type="button"
                aria-haspopup="menu"
                className={
                  "inline-flex items-center py-[26px] -my-[26px] " +
                  linkCls(
                    pathname === "/" ||
                      pathname?.startsWith("/work") ||
                      pathname?.startsWith("/rest") ||
                      pathname?.startsWith("/play"),
                  )
                }
              >
                Projects
              </button>
              {/*
                Menu container sits inside the same <li> parent as the trigger
                and starts at top-full with pt-2 padding (not margin) so there
                is no dead space between trigger and menu. group-hover keeps it
                open across the whole path.
              */}
              <div className="hidden group-hover:block group-focus-within:block absolute top-full left-0 pt-2 z-50">
                <ul
                  role="menu"
                  className="min-w-[180px] bg-white border border-black/10 py-2 shadow-sm"
                >
                  {CATEGORIES.map((cat) => (
                    <li key={cat.key} className="group/sub relative">
                      <Link
                        href={`/${cat.key}`}
                        className="flex items-center justify-between px-4 py-2 text-ink hover:bg-black/5 hover:no-underline"
                      >
                        <span>{cat.label}</span>
                        <span aria-hidden="true" className="text-ink/40 ml-6">
                          ›
                        </span>
                      </Link>
                      {/* Level 2: projects in this category. Positioned at
                          left-full top-0 so it touches the parent item — no
                          gap. group/sub keeps it open. */}
                      <div className="hidden group-hover/sub:block group-focus-within/sub:block absolute left-full top-0 pl-1 z-50">
                        <ul
                          role="menu"
                          className="min-w-[240px] bg-white border border-black/10 py-2 shadow-sm max-h-[70vh] overflow-y-auto"
                        >
                          {projectsByCategory(cat.key).map((p) => {
                            const isMA =
                              cat.key === "play" &&
                              p.slug === "mobile-architecture" &&
                              mobileArchSubs.length > 0;
                            if (isMA) {
                              return (
                                <li
                                  key={p.slug}
                                  className="group/subsub relative"
                                >
                                  <Link
                                    href={`/${p.category}/${p.slug}`}
                                    className="flex items-center justify-between px-4 py-2 text-ink hover:bg-black/5 hover:no-underline"
                                  >
                                    <span>{p.title}</span>
                                    <span
                                      aria-hidden="true"
                                      className="text-ink/40 ml-6"
                                    >
                                      ›
                                    </span>
                                  </Link>
                                  {/* Level 3: Mobile Architecture sub-projects */}
                                  <div className="hidden group-hover/subsub:block group-focus-within/subsub:block absolute left-full top-0 pl-1 z-50">
                                    <ul
                                      role="menu"
                                      className="min-w-[200px] bg-white border border-black/10 py-2 shadow-sm"
                                    >
                                      {mobileArchSubs.map((s) => (
                                        <li key={s.id}>
                                          <Link
                                            href={`/play/mobile-architecture#${s.id}`}
                                            className="block px-4 py-2 text-ink hover:bg-black/5 hover:no-underline"
                                          >
                                            {s.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </li>
                              );
                            }
                            return (
                              <li key={p.slug}>
                                <Link
                                  href={`/${p.category}/${p.slug}`}
                                  className="block px-4 py-2 text-ink hover:bg-black/5 hover:no-underline"
                                >
                                  {p.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {TOP_NAV.map((n) => {
              const active =
                pathname === n.href || pathname?.startsWith(n.href + "/");
              return (
                <li key={n.href}>
                  <Link href={n.href} className={linkCls(!!active)}>
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile stacked accordion menu */}
      {mobileOpen && (
        <nav
          aria-label="Primary mobile"
          className="md:hidden border-t border-black/10 bg-white max-h-[calc(100vh-60px)] overflow-y-auto"
        >
          <ul className="text-[15px] py-2">
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-3 text-ink"
                aria-expanded={openCat !== null || openMA}
                onClick={() => {
                  if (openCat !== null || openMA) {
                    setOpenCat(null);
                    setOpenMA(false);
                  } else {
                    setOpenCat("work");
                  }
                }}
              >
                <span>Projects</span>
                <span aria-hidden="true" className="text-ink/40">
                  {openCat !== null || openMA ? "−" : "+"}
                </span>
              </button>
              {(openCat !== null || openMA) && (
                <ul className="pl-4 pb-2">
                  {CATEGORIES.map((cat) => {
                    const isOpen = openCat === cat.key;
                    return (
                      <li key={cat.key}>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-2 text-ink"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenCat(isOpen ? null : cat.key)
                          }
                        >
                          <span>{cat.label}</span>
                          <span
                            aria-hidden="true"
                            className="text-ink/40"
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <ul className="pl-4 pb-2">
                            <li>
                              <Link
                                href={`/${cat.key}`}
                                className="block px-4 py-2 text-ink/70 hover:text-accent hover:no-underline"
                              >
                                All {cat.label}
                              </Link>
                            </li>
                            {projectsByCategory(cat.key).map((p) => {
                              const isMA =
                                cat.key === "play" &&
                                p.slug === "mobile-architecture" &&
                                mobileArchSubs.length > 0;
                              if (isMA) {
                                return (
                                  <li key={p.slug}>
                                    <button
                                      type="button"
                                      className="w-full flex items-center justify-between px-4 py-2 text-ink"
                                      aria-expanded={openMA}
                                      onClick={() =>
                                        setOpenMA((v) => !v)
                                      }
                                    >
                                      <span>{p.title}</span>
                                      <span
                                        aria-hidden="true"
                                        className="text-ink/40"
                                      >
                                        {openMA ? "−" : "+"}
                                      </span>
                                    </button>
                                    {openMA && (
                                      <ul className="pl-4 pb-2">
                                        <li>
                                          <Link
                                            href={`/${p.category}/${p.slug}`}
                                            className="block px-4 py-2 text-ink/70 hover:text-accent hover:no-underline"
                                          >
                                            Overview
                                          </Link>
                                        </li>
                                        {mobileArchSubs.map((s) => (
                                          <li key={s.id}>
                                            <Link
                                              href={`/play/mobile-architecture#${s.id}`}
                                              className="block px-4 py-2 text-ink hover:text-accent hover:no-underline"
                                            >
                                              {s.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                );
                              }
                              return (
                                <li key={p.slug}>
                                  <Link
                                    href={`/${p.category}/${p.slug}`}
                                    className="block px-4 py-2 text-ink hover:text-accent hover:no-underline"
                                  >
                                    {p.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            {TOP_NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block px-5 py-3 text-ink hover:text-accent hover:no-underline"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
