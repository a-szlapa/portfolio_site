// src/components/ProjectsList.tsx
import { useEffect } from "react";
import { FilterToggle } from "./FilterToggle";
import { ProjectsGrid } from "./ProjectsGrid";
import SearchBar from "./SearchBar";
import parseCSV from "@/csv-parser/csvParser";
import { useProjects } from "@/data/useProjects";
import { sampleProjects } from "@/data/getData";

export const ProjectsList = () => {
  const {
    activeFilter,
    setActiveFilter,
    searchTerm,
    setSearchTerm,
    filteredProjects
  } = useProjects(sampleProjects);

  useEffect(() => {
    const fetchData = async () => {
      const url = import.meta.env.VITE_spread_sheet_url;
      const response = await fetch(url);
      const textData = await response.text();
      console.log(parseCSV(textData));
    };
    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col items-center gap-8">
      <div className="text-white flex flex-row justify-between w-7/9">
        <FilterToggle
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </div>
      <ProjectsGrid projects={filteredProjects} />
    </section>
  );
};

export default ProjectsList;