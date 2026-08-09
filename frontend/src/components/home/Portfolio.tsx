import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import PortfolioClient from "./PortfolioClient";

import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function Portfolio({
  projects,
}: Props) {
  return (
    <section
      id="portfolio"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Portafolio"
          subtitle="Algunos proyectos desarrollados recientemente."
        />

        <PortfolioClient
          projects={projects}
        />

      </Container>
    </section>
  );
}