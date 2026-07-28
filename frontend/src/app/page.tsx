import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function Home() {
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
}