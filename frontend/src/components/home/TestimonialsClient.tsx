"use client";

import { useState } from "react";

import TestimonialCard from "./TestimonialCard";

import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsClient({
  testimonials,
}: Props) {
  const [current, setCurrent] = useState(0);

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-slate-400">
        No hay testimonios disponibles.
      </p>
    );
  }

  const next = () => {
    setCurrent(
      (current + 1) % testimonials.length
    );
  };

  const previous = () => {
    setCurrent(
      (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <div>

      <TestimonialCard
        testimonial={testimonials[current]}
      />

      <div className="mt-8 flex justify-center gap-4">

        <button
          onClick={previous}
          aria-label="Testimonio anterior"
          className="rounded-full bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-700"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Siguiente testimonio"
          className="rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          →
        </button>

      </div>

      <div className="mt-5 flex justify-center gap-2">

        {testimonials.map(
          (testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() =>
                setCurrent(index)
              }
              aria-label={`Mostrar testimonio ${index + 1}`}
              className={`h-2 rounded-full transition ${
                current === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-700"
              }`}
            />
          )
        )}

      </div>

    </div>
  );
}