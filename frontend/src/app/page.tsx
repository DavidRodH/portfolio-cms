import Hero from "@/components/home/Hero";
/* import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact"; */

import { getHero } from "@/services/heroService";

export default async function Home() {
  const hero = await getHero();

  if (!hero) {
    return <p>Error cargando el Hero.</p>;
  }

  return (
    <>
      <Hero hero={hero} />
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