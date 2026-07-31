import { api } from "@/lib/api";
import { Hero } from "@/types/hero";

export async function getHero(): Promise<Hero | null> {
  try {
    const response = await api.get("/hero?populate=image");
    return response.data.data;
  } catch (error) {
    console.error("Error obteniendo Hero:", error);
    return null;
  }
}