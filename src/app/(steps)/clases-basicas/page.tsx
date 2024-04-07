import SyntaxHigh from "@/app/components/SyntaxHigh";
import Title from "@/app/components/title";
import Link from "next/link";

export default function ClasesBasicas() {

  const code = `<!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
  </html>
  `

  return (
    <div className="flex flex-col gap-4 h-full">
      <header>
        <Title>
          Clases más comunes de Tailwind
        </Title>
        <p className="mt-2">Todas las clases de Tailwind se encuentran en su página oficial <a target="_blank" className="underline text-blue-500" href="https://tailwindcss.com">https://tailwindcss.com</a> como son muchas solo vamos a ver las básicas.</p>
      </header>

      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-pretty">Para empezar vamos a hacer este texto con Tailwind:</h3>

        <div className="bg-[#efecf4] p-6 font-bold underline text-3xl rounded-md">
          ¡Hola mundo!
        </div>

        <div>
          <p>Para hacerlo vamos a usar 3 clases</p>
          <ul className="list-disc text-slate-800">
            <li>text-3xl <span className="text-sm text-green-600">{'(Agranda el Texto)'}</span></li>
            <li>font-bold <span className="text-sm text-green-600">{'(Hace el texto más ancho)'}</span></li>
            <li>underline <span className="text-sm text-green-600">{'(Decoración de la linea debajo)'}</span></li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-pretty">Nuestro código quedará de la siguiente manera:</h3>
        <SyntaxHigh code={code} />
      </section>

      <footer className="z-10 w-full flex justify-between mt-3">
        <Link href="/integrar-tailwind">
          <button className="p-4 bg-zinc-900 text-white rounded-lg">
            Anterior
          </button>
        </Link>

        <Link href="/extensiones-autocompletado">
          <button className="p-4 bg-zinc-900 text-white rounded-lg bg-red">
            Siguiente
          </button>
        </Link>
      </footer>
    </div>
  )
}

