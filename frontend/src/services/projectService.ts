import { api } from "@/lib/api";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await api.get(
      "/projects?populate=*"
    );

    return response.data.data;
  } catch (error) {
    console.error(error);

    return [];
  }
}