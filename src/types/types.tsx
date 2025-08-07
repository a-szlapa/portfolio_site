export interface LinkItem {
  url: string;
  label: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  links?: LinkItem[];
  date?: string;
  projectType?: string;
}