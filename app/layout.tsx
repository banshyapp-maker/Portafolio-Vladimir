import type { Metadata } from "next";
import { Barlow_Condensed, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageLoad } from "@/components/transitions/PageLoad";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortBio,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.shortBio,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <Providers>
          <PageLoad />
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
