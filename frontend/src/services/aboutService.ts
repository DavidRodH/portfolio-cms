import { api } from "@/lib/api";
import { About } from "@/types/about";

export async function getAbout(): Promise<About | null> {
  try {
    const response = await api.get(
      "/about?populate=*"
    );

    return response.data.data;
  } catch (error) {
    console.error("Error obteniendo About:", error);

    return null;
  }
}