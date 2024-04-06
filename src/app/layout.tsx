import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailwindCSS - Introduction · UNAH",
  description: "Aprende TailwindCSS con ejemplos prácticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <div className="bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] inset-0 absolute bg-bottom bg-no-repeat" ></div> */}
        {children}
      </body>


    </html>
  );
}
