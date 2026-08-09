import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { getHero } from "@/services/heroService";
import { getServices } from "@/services/serviceService";
import Portfolio from "@/components/home/Portfolio";
import { getProjects } from "@/services/projectService";
import About from "@/components/home/About";
import { getAbout } from "@/services/aboutService";

export default async function Home() {

  const hero = await getHero();

  const services = await getServices();

  const projects = await getProjects();

  const about = await getAbout();

  if (!hero) {
    return <p>Error cargando Hero.</p>;
  }

  return (
    <>
      <Hero hero={hero} />

      {about && (
        <About about={about} />
      )}

      <Services services={services} />

      <Portfolio projects={projects} />
    </>
  );
}

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}




/* import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact"; */

/* export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
} */