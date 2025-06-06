import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased bg-[#f9f9f9]`}>
        <div className="flex max-h-screen grow max-w-screen-xl mx-auto py-8">
          <div className="menu flex flex-col bg-[#fff] rounded p-4 shadow-sm max-w-3xs h-full w-full">
            <Image src="/logo3.webp" alt="" className="block mx-auto p-4 mb-8" height="50" width="220"/>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="bg-[#dfe6e9] border-b border-[#ddd] p-1">
                <Link href={"/"} className="block text-base">Dashboard</Link>
              </li>
              <li className="border-b border-[#ddd] p-1">
                <Link href={"/agendamentos"} className="block text-base">Agendamentos</Link>
              </li>
              <li className="border-b border-[#ddd] p-1">
                <Link href={"/pacientes"} className="block text-base">Pacientes</Link>
              </li>
              <li className="border-b border-[#ddd] p-1">
                <Link href={"/procedimentos"} className="block text-base">Procedimentos</Link>
              </li>
              <li className="border-b border-[#ddd] p-1">
                <Link href={"#"} className="block text-base">Meu Perfil</Link>
              </li>
            </ul>
            <Link href={"#"} className="text-white rounded bg-[#d63031] p-1 mt-auto text-center">Sair</Link>
          </div>

          <div className="max-h-screen overflow-y-auto w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
