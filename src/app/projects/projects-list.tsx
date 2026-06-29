"use client";

import { ProjectShowcase } from "./project-showcase";

import { projects } from "@/types/projects.const";
export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 2xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectShowcase key={project.title} project={project} />
      ))}
    </div>
  );
}
