"use client";

import Image from "next/image";
import Card from "../common/Card";
import { Project } from "@/types/project";
import { getMediaUrl } from "@/lib/media";
import Badge from "../common/Badge";

import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
    >

      <Card>

        {project.thumbnail && (
          <Image
            src={getMediaUrl(project.thumbnail.url)}
            alt={project.title}
            width={600}
            height={350}
            className="rounded-xl"
            unoptimized
          />
        )}

        <h3 className="mt-6 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <Badge key={technology.id}>
              {technology.name}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            Demo
          </a>
        </div>

      </Card>
    </motion.div>
  );
}