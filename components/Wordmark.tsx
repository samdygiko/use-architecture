import Link from "next/link";

export default function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const cls =
    size === "lg"
      ? "text-[40px] md:text-[56px] leading-none"
      : "text-[18px] md:text-[20px] leading-none";
  return (
    <Link href="/" aria-label="USE•Architecture — home" className="inline-flex items-baseline tracking-tight hover:no-underline">
      <span className={`${cls} font-semibold text-accent`}>USE</span>
      <span className={`${cls} font-normal text-ink ml-[0.15em]`} aria-hidden="true">
        •
      </span>
      <span className={`${cls} font-normal text-ink`}>Architecture</span>
    </Link>
  );
}
