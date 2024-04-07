import Title from "@/app/components/title";
import Link from "next/link";

export default function Tailwind() {
  return <>
    <Title>¿Qué es y por qué deberia de usar Tailwind?</Title>

    <p className="mt-2 text-slate-800">Tailwind CSS es un marco de trabajo (framework) CSS que se centra en la utilidad y la composición. En lugar de proporcionar componentes predefinidos, como hacen otros frameworks como Bootstrap, Tailwind te ofrece clases CSS individuales que puedes usar para construir tus propias interfaces de manera rápida y consistente.</p>


    <p className="mt-4 text-blue-600 text-lg">Razones por las que podrías considerar usar Tailwind CSS</p>
    <ul className="mt-4 flex flex-col gap-4">
      <li><span className="font-bold">Productividad:</span> Tailwind CSS puede aumentar tu productividad al permitirte crear interfaces más rápidamente. Con sus clases de utilidad, puedes aplicar estilos directamente en tu HTML sin tener que escribir CSS adicional.
      </li>

      <li><span className="font-bold">Flexibilidad:</span> Tailwind no impone un diseño predefinido, lo que te brinda una mayor flexibilidad para diseñar tu propio aspecto y sensación. Puedes personalizar fácilmente los estilos utilizando configuraciones personalizadas o extendiendo las clases base.
      </li>

      <li><span className="font-bold">Mantemiento:</span> Al utilizar clases de utilidad, es más fácil mantener y escalar tu código. No tienes que preocuparte por las reglas de CSS específicas que podrían entrar en conflicto entre sí, ya que cada clase se encarga de una única propiedad.
      </li>

      <li>
        <span className="font-bold">Comunidad activa:</span> Tailwind CSS tiene una comunidad activa que comparte recursos, componentes y soluciones a través de diversas plataformas en línea. Esto puede ser útil cuando necesitas ayuda o inspiración para tu proyecto.
      </li>
    </ul>

    <footer className="z-10 w-full flex justify-between mt-12">
      <Link href="/">
        <button className="p-4 bg-zinc-900 text-white rounded-lg">
          Anterior
        </button>
      </Link>

      <Link href="/integrar-tailwind">
        <button className="p-4 bg-zinc-900 text-white rounded-lg">
          Siguiente
        </button>
      </Link>
    </footer>

  </>
}