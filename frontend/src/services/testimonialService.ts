import { api } from "@/lib/api";
import { Testimonial } from "@/types/testimonial";

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await api.get(
      "/testimonials?populate=*"
    );

    return response.data.data;
  } catch (error) {
    console.error(
      "Error obteniendo testimonios:",
      error
    );

    return [];
  }
}