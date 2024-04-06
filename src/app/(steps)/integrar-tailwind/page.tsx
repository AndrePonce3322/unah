import Title from '@/app/components/title';
import Link from 'next/link';
import SyntaxHigh from '../../components/SyntaxHigh';

export default function IntegrarTailwind() {

  const code = `<!doctype html>
  <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    </head>
  </html>
  `

  return (
    <>
      <div>
        <Title>
          ¿Cómo integrar TailwindCSS en nuestra página web?
        </Title>
        <p className="mt-2">Para agregar Tailwind en nuestra página web es tan simple como agregar esta línea en nuestro archivo HTML:
          <span className='text-xs p-1 ml-2 px-3 bg-[#efecf4] rounded-lg select-all'>{`<script src="https://cdn.tailwindcss.com"></script>`}</span>
        </p>

        <p className='mt-4'>Ya poniendo esa linea de código en nuestro archivo HTML TailwindCSS empezará a funcionar en nuestra página web, pero la pregunta es dónde ponemos esa línea?</p>
        <p className='mt-4'>La linea que acabo de proporcionarles deben de ponerla dentro de la etiqueta {'<head>'}</p>
        <p>Quedando de esta forma:</p>
      </div>

      <SyntaxHigh code={code} className='mt-4' />

      <div className='mt-4 flex flex-col gap-4'>
        <p>Tailwind empezará a funcionar en nuestra página web, podemos escribir todas las clases básicas que se mostraran en la siguiente lección</p>
      </div>

      <footer className="z-10 w-full flex justify-between mt-12">
        <Link href="/">
          <button className="p-4 bg-zinc-900 text-white rounded-lg">
            Anterior
          </button>
        </Link>

        <Link href="/clases-basicas">
          <button className="p-4 bg-zinc-900 text-white rounded-lg">
            Siguiente
          </button>
        </Link>
      </footer>
    </>
  )
}