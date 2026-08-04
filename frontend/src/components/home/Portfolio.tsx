import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function Portfolio({
  projects,
}: Props) {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

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

        <div className="grid gap-8 md:grid-cols-2">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}