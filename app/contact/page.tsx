import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[820px] px-5 md:px-8 py-16 md:py-32">
      <div className="text-[15px] md:text-[16px] leading-relaxed space-y-2">
        <p>JH Hagan, Director, USE•Architecture</p>
        <p className="tabular-nums">
          m.{" "}
          <a href="tel:+447939567345" className="text-ink">
            0044 7939 567345
          </a>
        </p>
      </div>
    </main>
  );
}
