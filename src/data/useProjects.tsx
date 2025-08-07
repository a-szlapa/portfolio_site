import type { Project } from "@/types/types";
import { useState } from "react";


export const useProjects = (initialProjects: Project[]) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = initialProjects.filter(project => {
    const typeMatch = activeFilter === "all" || project.projectType === activeFilter;
    const searchMatch = 
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.tags && project.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    
    return typeMatch && searchMatch;
  });

  return {
    activeFilter,
    setActiveFilter,
    searchTerm,
    setSearchTerm,
    filteredProjects
  };
};