import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4">
        Servicio no encontrado.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3"
      >
        Volver al inicio
      </Link>

    </main>
  );
}