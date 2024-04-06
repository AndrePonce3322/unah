import Title from "@/app/components/title";
import ComponentExample from "@/components/component-example";
import Example4 from "@/components/example-4";
import FooterExample from "@/components/footer-example";
import Link from "next/link";

export default function ComponentesTailwind() {
  return <section className="flex gap-4 flex-col">
    <Title>
      Componentes de TailwindCSS
    </Title>
    <p>Existe una gran variedad de componentes de Tailwind ya que Tailwind cuenta con una gran comunidad de desarrolladores que hacen componentes increibles que podemos usar en nuestras aplicaciones</p>

    <p className="mt-4">Estos son algunos ejemplos de componentes de tailwind que ha hecho la comunidad y empresas:</p>

    <div className="p-8 bg-[#efecf4]">


      <h4 className="text-3xl font-bold mb-12">#1 Primer ejemplo:</h4>


      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
          </span>
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
          </div>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image" />
          </span>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
          </div>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image" />
          </span>
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span className="font-semibold text-gray-900 dark:text-white">Finished</span></div>
          </div>
        </li>
      </ol>


      <h4 className="text-3xl font-bold my-12">#2 Segundo ejemplo:</h4>
      <ComponentExample />
      <h4 className="text-3xl font-bold my-12">#3 Tercer Ejemplo</h4>
      <Example4 />
      <h4 className="text-3xl font-bold my-12">#4 Cuarto Ejemplo</h4>
      <FooterExample />
    </div>

    <p>Para conseguir todos esos componentes y más, tienes la página oficial llamada Flowbite, este es el enlace:
      <a href="https://flowbite.com" target="_blank" className="underline text-blue-500 cursor-pointer ml-1">https://flowbite.com/</a>
    </p>

    <footer className="z-10 w-full flex justify-between mt-3">
      <Link href="/componentes-tailwind">
        <button className="p-4 bg-zinc-900 text-white rounded-lg">
          Anterior
        </button>
      </Link>

      <Link href="/end">
        <button className="p-4 bg-zinc-900 text-white rounded-lg bg-red">
          Terminar con la actividad
        </button>
      </Link>
    </footer>



  </section>
}