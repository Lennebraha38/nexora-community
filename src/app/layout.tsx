import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Toplulugu | Gelistirici Ekosistemi",
  description:
    "Yazilim gelistiricilerini, tasarlmcilari ve teknoloji meraklilarini ayni cati altinda bulusturan kolektif bir gelistirici ekosistemi.",
  keywords: [
    "yazilim",
    "topluluk",
    "gelistirici",
    "teknoloji",
    "kodlama",
    "ekosistem",
  ],
  openGraph: {
    title: "Nexora Toplulugu",
    description:
      "Teknoloji dunyasinda gelecegi seklendiren projelerin ve basarili takimlarin dogdugu bir merkez.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="antialiased">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
