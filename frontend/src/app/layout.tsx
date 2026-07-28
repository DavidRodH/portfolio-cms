import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
      <body className="bg-slate-950">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}