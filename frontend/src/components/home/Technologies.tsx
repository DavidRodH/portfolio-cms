import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import TechnologiesClient from "./TechnologiesClient";

import { Technology } from "@/types/technology";

interface Props {
  technologies: Technology[];
}

export default function Technologies({
  technologies,
}: Props) {
  return (
    <section
      id="technologies"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Tecnologías"
          subtitle="Herramientas y tecnologías que utilizo."
        />

        <TechnologiesClient
          technologies={technologies}
        />

      </Container>
    </section>
  );
}