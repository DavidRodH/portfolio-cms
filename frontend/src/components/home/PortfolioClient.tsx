"use client";

import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";

import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function PortfolioClient({
  projects,
}: Props) {

  const [search, setSearch] = useState("");

  const [selectedTechnology, setSelectedTechnology] =
  useState("Todas");

  const technologies = [
    "Todas",
    ...new Set(
      projects.flatMap(
        (project) =>
          project.technologies?.map(
            (technology) => technology.name
          ) ?? []
        )
    ),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesTechnology =
        selectedTechnology === "Todas" ||
        project.technologies?.some(
          (technology) =>
            technology.name === selectedTechnology
        );

      return (
        matchesSearch &&
        matchesTechnology
      );
    });
  }, [
    projects,
    search,
    selectedTechnology,
  ]);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="mt-6 flex flex-wrap gap-3">

        {technologies.map((technology) => (

          <button
            key={technology}
            onClick={() =>
              setSelectedTechnology(technology)
            }
            className={`rounded-full px-4 py-2 transition ${
              selectedTechnology === technology
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {technology}
          </button>

        ))}

      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">

        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

        {filteredProjects.length === 0 && (

          <div className="mt-16 text-center text-slate-400">

            No se encontraron proyectos.

          </div>

        )}

      </div>
    </>
  );
}