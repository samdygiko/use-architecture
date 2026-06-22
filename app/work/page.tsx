import ProjectGrid from "@/components/ProjectGrid";
import { projectsByCategory } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-[1600px] px-5 md:px-8 py-6 md:py-10">
      <ProjectGrid items={projectsByCategory("work")} />
    </main>
  );
}
