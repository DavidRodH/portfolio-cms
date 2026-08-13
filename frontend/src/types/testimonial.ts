export interface Testimonial {
  id: number;

  clientName: string;

  position: string;

  company: string;

  message: string;

  rating: number;

  photo?: {
    url: string;
  };
}