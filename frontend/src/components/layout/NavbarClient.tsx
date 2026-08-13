"use client";

import { useState } from "react";

const navigation = [
  {
    name: "Inicio",
    href: "#home",
  },
  {
    name: "Sobre mí",
    href: "#about",
  },
  {
    name: "Servicios",
    href: "#services",
  },
  {
    name: "Portafolio",
    href: "#portfolio",
  },
  {
    name: "Tecnologías",
    href: "#technologies",
  },
  {
    name: "Testimonios",
    href: "#testimonials",
  },
];

export default function NavbarClient() {

  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-xl font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          David<span className="text-blue-500">.</span>
        </a>

        {/* Desktop */}

        <div className="hidden items-center gap-6 md:flex">

          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Contacto
          </a>

        </div>

        {/* Mobile button */}

        <button
          type="button"
          onClick={() =>
            setIsOpen(!isOpen)
          }
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>

      </nav>

      {/* Mobile menu */}

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">

          <div className="flex flex-col px-6 py-4">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  setIsOpen(false)
                }
                className="border-b border-slate-800 py-4 text-slate-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() =>
                setIsOpen(false)
              }
              className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Contacto
            </a>

          </div>

        </div>
      )}

    </header>
  );
}