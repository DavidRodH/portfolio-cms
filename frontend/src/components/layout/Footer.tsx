export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Información */}

          <div>

            <h2 className="text-xl font-bold text-white">
              David<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-slate-400">
              Desarrollo sitios web modernos,
              rápidos y orientados a resultados.
            </p>

          </div>

          {/* Navegación */}

          <div>

            <h3 className="font-semibold text-white">
              Navegación
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="#about"
                className="text-slate-400 transition hover:text-white"
              >
                Sobre mí
              </a>

              <a
                href="#services"
                className="text-slate-400 transition hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#portfolio"
                className="text-slate-400 transition hover:text-white"
              >
                Portafolio
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition hover:text-white"
              >
                Contacto
              </a>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="font-semibold text-white">
              Redes
            </h3>

            <div className="mt-4 flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} David.
          Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}