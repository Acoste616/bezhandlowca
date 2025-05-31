import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BezHandlowca.pl - Outsourcing Sprzedaży B2B",
  description: "Zaawansowana platforma B2B oferująca outsourcing sprzedaży w modelu SaaS. Skaluj sprzedaż bez zatrudniania własnych handlowców.",
  keywords: ["outsourcing sprzedaży", "B2B", "SaaS", "CRM", "handlowcy", "lead generation"],
  authors: [{ name: "BezHandlowca.pl" }],
  creator: "BezHandlowca.pl",
  publisher: "BezHandlowca.pl",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bezhandlowca.pl",
    title: "BezHandlowca.pl - Outsourcing Sprzedaży B2B",
    description: "Zaawansowana platforma B2B oferująca outsourcing sprzedaży w modelu SaaS",
    siteName: "BezHandlowca.pl",
  },
  twitter: {
    card: "summary_large_image",
    title: "BezHandlowca.pl - Outsourcing Sprzedaży B2B",
    description: "Zaawansowana platforma B2B oferująca outsourcing sprzedaży w modelu SaaS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
