import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "David Rodriguez | Desarrollador Web",
    template: "%s | David Rodriguez",
  },

  description:
    "Portafolio profesional de David, desarrollador web especializado en React, Next.js, TypeScript y Strapi.",

  keywords: [
    "desarrollador web",
    "React",
    "Next.js",
    "TypeScript",
    "Strapi",
    "JavaScript",
    "desarrollo web",
    "Bogotá",
  ],

  authors: [
    {
      name: "David Rodriguez",
    },
  ],

  creator: "David Rodriguez",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "David Rodriguez | Desarrollador Web",

    description:
      "Portafolio profesional de David Rodriguez, desarrollador web.",

    type: "website",

    locale: "es_CO",

    siteName: "David Rodriguez | Desarrollador Web",

    images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Portafolio de David",
    },
  ],
  },
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

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}