import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-0 min-h-[100svh]">
      <div className="text-balance z-10">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
          TailwindCSS - Introduction
        </h1>

        <div className="mt-4">
          <p>
            📌 Objetivos
          </p>

          <ul className="list-decimal ml-12 ">
            <li>Integrar TailwindCSS</li>
            <li>Clases cómunes de TailwindCSS</li>
            <li>Extensiones para el autocompletado de TailwindCSS</li>
            <li>Desarrollar una página web con componentes de TailwindCSS</li>
          </ul>
        </div>
      </div>

      <footer className="z-10 absolute bottom-8 right-12">
        <Link href="/integrar-tailwind">
          <button className="p-4 bg-zinc-900 text-white rounded-lg">
            Siguiente
          </button>
        </Link>
      </footer>
    </section>
  )
}
