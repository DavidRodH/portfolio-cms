import { api } from "@/lib/api";
import { Technology } from "@/types/technology";

export async function getTechnologies(): Promise<Technology[]> {
  try {
    const response = await api.get(
      "/technologies?populate=*"
    );

    return response.data.data;
  } catch (error) {
    console.error(
      "Error obteniendo tecnologías:",
      error
    );

    return [];
  }
}