import SyntaxHigh from "@/app/components/SyntaxHigh";
import Title from "@/app/components/title";
import Link from "next/link";

export default function ExtensionesAutocompletado() {

  const code = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [],
    theme: {
      extend: {},
    },
    plugins: [],
  }`

  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <Title>
          Extensiones para el autocompletado de TailwindCSS
        </Title>

        <p>Una extensión en visual studio code es una herramienta que nos agiliza tareas, cualquiera puede desarrollar una extesión que nos ayude
          a mejorar la productivad en nuestro flujo de trabajo.
        </p>
      </header>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-pretty ">Instalar la extensión de TailwindCSS</h3>
        <p>La instalación solo se hará una vez</p>
      </div>

      <ul className="list-decimal ml-8">
        <li>Dirigirse a la pestaña de extensiones</li>
        <img src="/ext-1.png" />
        <li>Buscar la extensión Tailwind</li>
        <img src="/ext-2.png" />
        <li>Darle click al botón de instalar</li>
        <img src="/ext-3.png" />
      </ul>

      <p>
        Ya instalado tenemos que crear una carpeta llamada &apos;tailwind.config.js&apos; y pegar este código dentro de la carpeta:
      </p>
      <SyntaxHigh code={code} lang="typescript" />


      <p>Con esto ya tendriamos todo el autocompletado para tener todas las clases de Tailwind a la vista y este es un ejemplo de autocompletado:</p>
      <img src="/ext-4.png" />

      <footer className="z-10 w-full flex justify-between mt-3">
        <Link href="/clases-basicas">
          <button className="p-4 bg-zinc-900 text-white rounded-lg">
            Anterior
          </button>
        </Link>

        <Link href="/componentes-tailwind">
          <button className="p-4 bg-zinc-900 text-white rounded-lg bg-red">
            Componentes Tailwind
          </button>
        </Link>
      </footer>
    </section>
  )
}