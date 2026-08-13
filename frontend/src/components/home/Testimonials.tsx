import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import TestimonialsClient from "./TestimonialsClient";

import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({
  testimonials,
}: Props) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-32"
    >
      <Container>

        <SectionTitle
          title="Testimonios"
          subtitle="Lo que dicen algunos de mis clientes."
        />

        <div className="mx-auto max-w-3xl">

          <TestimonialsClient
            testimonials={testimonials}
          />

        </div>

      </Container>
    </section>
  );
}