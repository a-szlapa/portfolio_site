// src/data/projects.ts
import parseCSV from "@/csv-parser/csvParser";
import type { Project } from "@/types/types";

const getCSV = async (): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_spread_sheet_url);
  return response.text();
};

// Top-level await (requires ES2022/module: esnext in tsconfig)
export const sampleProjects: Project[] = await getCSV()
  .then(parseCSV)
  .catch(() => []); // Fallback empty array if fetch fails