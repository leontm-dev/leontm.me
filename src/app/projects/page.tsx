import type { Metadata } from "next";
import { PageFooter } from "@/components/outwards/footer";
import { MainSidebar } from "@/components/main-sidebar";
import { ProjectsPageHero } from "./hero";
import { ProjectsList } from "./projects-list";

export const metadata: Metadata = {
  title: "Projects | leontm.me",
  description: "View all of my projects.",
};
export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-screen flex-col gap-4">
      <ProjectsPageHero />
      <MainSidebar />
      <div className="mx-auto flex w-8/10 flex-col">
        <ProjectsList />
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <PageFooter />
      </div>
    </div>
  );
}
