import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos."
        />

        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div>
            <h3 className="font-bold text-white">
              Email
            </h3>

            <p className="mt-2 text-slate-400">
              tuemail@example.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Ubicación
            </h3>

            <p className="mt-2 text-slate-400">
              Bogotá, Colombia
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Disponibilidad
            </h3>

            <p className="mt-2 text-slate-400">
              Proyectos freelance y oportunidades profesionales
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}
