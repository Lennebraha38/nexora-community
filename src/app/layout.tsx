import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora | Gelistirici Ekosistemi",
  description:
    "Yazilim gelistiricilerini, tasarimcilarini ve teknoloji meraklilarini ayni cati altinda bulusturan kolektif gelistirici ekosistemi.",
  openGraph: {
    title: "Nexora | Gelistirici Ekosistemi",
    description: "Teknoloji dunyasinda gelecegi seklendiren projelerin dogdugu merkez.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="grain">
        {children}
      </body>
    </html>
  );
}
