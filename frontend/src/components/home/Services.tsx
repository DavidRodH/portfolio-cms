import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { Service } from "@/types/service";

interface Props {
  services: Service[];
}

export default function Services({
  services,
}: Props) {
  return (
    <section className="py-32">

      <Container>

        <SectionTitle
          title="Servicios"
          subtitle="Estos son algunos de los servicios que ofrezco."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </Container>

    </section>
  );
}