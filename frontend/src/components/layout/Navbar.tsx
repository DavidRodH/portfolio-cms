export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          Portfolio CMS
        </h1>

        <ul className="hidden gap-8 text-slate-300 md:flex">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Portafolio</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}