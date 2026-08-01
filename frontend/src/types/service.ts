export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  featured: boolean;
  image?: {
    url: string;
  };
}