import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <main className="mx-auto max-w-[820px] px-5 md:px-8 py-16 md:py-32">
      <h1 className="font-normal text-[40px] md:text-[56px] leading-none tracking-tight">
        Press
      </h1>
    </main>
  );
}
