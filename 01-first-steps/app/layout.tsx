import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Por magia la metada se agrega automaticamente al exportar el objeto
// se tiene que llamar forzosamente "metadata"
export const metadata: Metadata = {
  title: "Emiliano's Home Page",
  description: "Generated by love with vercel"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
