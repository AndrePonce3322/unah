
export default function Steps({ children }: { children: React.ReactNode }) {
  return <>
    <main className='w-full flex flex-col items-center justify-center pb-14 '>
      <section className="flex flex-col pt-16 px-4 md:px-0 min-h-[100svh] max-w-2xl">
        {children}
      </section>
    </main>
  </>;
}