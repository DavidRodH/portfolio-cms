import { api } from "@/lib/api";
import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  try {
    const response = await api.get(
      "/services?populate=image"
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}