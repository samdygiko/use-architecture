import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1600px] px-5 md:px-8 py-6 md:py-10">
      <ProjectGrid items={projects} />
    </main>
  );
}
