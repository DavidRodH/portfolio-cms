import Container from "../common/Container";
import { Hero as HeroType } from "@/types/hero";

interface HeroProps {
  hero: HeroType;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-slate-950 text-white"
    >
      <Container>
        <div className="flex min-h-screen items-center">

          <div>

            <span className="text-blue-500 font-semibold">
              Hola, soy
            </span>

            <h1 className="mt-4 text-5xl font-bold">
              {hero.title}
            </h1>

            <p className="mt-8 text-slate-400">
              {hero.subtitle}
            </p>

            <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3">
              {hero.buttonText}
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}

/* import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">

          <div className="max-w-2xl">

            <span className="text-blue-500 font-semibold">
              Hola, soy
            </span>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
              Carlos David <br />
              Rodríguez Hernández
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
              Desarrollador Web Front End
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Desarrollo aplicaciones modernas utilizando React,
              Next.js, TypeScript y Strapi para crear experiencias
              rápidas, escalables y optimizadas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
                Ver proyectos
              </button>

              <button className="rounded-xl border border-slate-700 px-8 py-3 font-semibold transition hover:bg-slate-800">
                Contáctame
              </button>

            </div>

          </div>

          <div className="mt-16 lg:mt-0">

            <div className="flex h-80 w-80 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900 text-8xl">
              👨‍💻
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
} */