import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/services/serviceService";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl py-24 px-6">

    <nav className="mb-8 text-sm text-slate-400">
        Inicio / Servicios / {service.title}
    </nav>

      <h1 className="text-5xl font-bold">
        {service.title}
      </h1>

      <p className="mt-8 text-lg">
        {service.description}
      </p>

    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}
