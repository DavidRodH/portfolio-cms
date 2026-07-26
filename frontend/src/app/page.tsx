export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-7xl">
            Portfolio CMS
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Desarrollado con Next.js + Strapi
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
            Comenzar
          </button>
        </div>
      </section>
    </main>
  );
}