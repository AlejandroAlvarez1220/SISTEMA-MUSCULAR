import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sistema Muscular | Educación Médica",
  description:
    "Sitio educativo sobre el sistema muscular humano, sus tipos, funciones, anatomía y ejemplos visuales.",
  keywords: [
    "sistema muscular",
    "músculos",
    "anatomía",
    "educación médica",
    "bíceps",
    "tríceps"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-medical-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
