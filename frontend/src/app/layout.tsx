import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio David Rodríguez",
  description: "Portafolio de poryectos desarrollados por David Rodriguez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}