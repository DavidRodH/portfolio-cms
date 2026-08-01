/* import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact"; */

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

import { getHero } from "@/services/heroService";
import { getServices } from "@/services/serviceService";

export default async function Home() {

  const hero = await getHero();

  const services = await getServices();

  if (!hero) {
    return <p>Error cargando Hero.</p>;
  }

  return (
    <>
      <Hero hero={hero} />

      <Services services={services} />  
    </>
  );
}

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