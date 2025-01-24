import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/store/Providers";

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
    <html lang="en">
      <body>
        <nav className="bg-blue-300 p-4">
          <ul className="flex justify-between items-center container mx-auto max-w-4xl">
            <li>
              <Link href="/">Мое портфолио</Link>
            </li>
            <li>
              <Link href="/projects">Проекты</Link>
            </li>
          </ul>
        </nav>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
