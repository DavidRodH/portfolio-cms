"use client";

import { useMemo, useState } from "react";

import TechnologyCard from "./TechnologyCard";

import { Technology } from "@/types/technology";

interface Props {
  technologies: Technology[];
}

export default function TechnologiesClient({
  technologies,
}: Props) {

  const [selectedCategory, setSelectedCategory] =
    useState("Todas");

  const categories = [
    "Todas",
    ...new Set(
      technologies.map(
        (technology) => technology.category
      )
    ),
  ];

  const filteredTechnologies = useMemo(() => {

    if (selectedCategory === "Todas") {
      return technologies;
    }

    return technologies.filter(
      (technology) =>
        technology.category === selectedCategory
    );

  }, [
    technologies,
    selectedCategory,
  ]);

  return (
    <>
      {/* Filtros */}

      <div className="mb-10 flex flex-wrap gap-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`rounded-full px-5 py-2 transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Tecnologías */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filteredTechnologies.map(
          (technology) => (

            <TechnologyCard
              key={technology.id}
              technology={technology}
            />

          )
        )}

      </div>

    </>
  );
}