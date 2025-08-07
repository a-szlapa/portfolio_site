import parseCSV from "@/csv-parser/csvParser";
import type { Project } from "@/types/types";

const getCSV = async (): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_spread_sheet_url);
  return response.text();
};

export const sampleProjects: Project[] = await getCSV()
  .then(parseCSV)
  .catch(() => []); // Fallback empty array if fetch fails
