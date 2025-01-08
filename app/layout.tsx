import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body className="bg-pink-400">
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

        <main>{children}</main>
      </body>
    </html>
  );
}
