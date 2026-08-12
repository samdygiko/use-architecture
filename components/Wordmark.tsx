import Link from "next/link";
import { Saira_Stencil_One } from "next/font/google";

const stencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const cls =
    size === "lg"
      ? "text-[44px] md:text-[60px] leading-none"
      : "text-[22px] md:text-[26px] leading-none";
  return (
    <Link
      href="/"
      aria-label="USE-A — home"
      className={`${stencil.className} inline-flex items-baseline tracking-tight hover:no-underline`}
    >
      <span className={`${cls} text-ink`}>USE</span>
      <span className={`${cls} text-accent`}>-A</span>
    </Link>
  );
}
