// src/components/ProjectsGrid.tsx
import type { Project } from "@/types/types";
import Tile from "./Tile";

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="w-7/9 grid grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <Tile key={index} {...project} />
      ))}
    </div>
  );
};