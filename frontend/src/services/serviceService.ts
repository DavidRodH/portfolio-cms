import { api } from "@/lib/api";
import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  try {
    const response = await api.get("/services?populate=*");

    return response.data.data;
  } catch {
    return [];
  }
}

export async function getServiceBySlug(
  slug: string
): Promise<Service | null> {
  try {
    const response = await api.get(
      `/services?filters[slug][$eq]=${slug}&populate=*`
    );

    return response.data.data[0] ?? null;
  } catch {
    return null;
  }
}