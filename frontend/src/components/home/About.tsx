import Image from "next/image";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { About as AboutType } from "@/types/about";
import { getMediaUrl } from "@/lib/media";

interface Props {
  about: AboutType;
}

export default function About({
  about,
}: Props) {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Sobre mí"
          subtitle="Conoce un poco más sobre mi experiencia."
        />

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Imagen */}

          <div>

            {about.profileImage && (
              <Image
                src={getMediaUrl(
                  about.profileImage.url
                )}
                alt={about.fullName}
                width={600}
                height={600}
                className="rounded-2xl"
                unoptimized
              />
            )}

          </div>

          {/* Información */}

          <div>

            <h3 className="text-3xl font-bold text-white">
              {about.fullName}
            </h3>

            <p className="mt-3 text-xl text-blue-500">
              {about.profession}
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              {about.description}
            </p>

            <div className="mt-8">

              <span className="text-4xl font-bold text-white">
                {about.experience}+
              </span>

              <p className="text-slate-400">
                años de experiencia
              </p>

            </div>

            {/* CV */}

            {about.cv && (
              <a
                href={getMediaUrl(about.cv.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Descargar CV
              </a>
            )}

          </div>

        </div>

      </Container>
    </section>
  );
}