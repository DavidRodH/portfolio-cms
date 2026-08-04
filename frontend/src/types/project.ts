export interface Technology {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  github: string;
  demo: string;
  featured: boolean;

  thumbnail?: {
    url: string;
  };

  technologies?: Technology[];
}