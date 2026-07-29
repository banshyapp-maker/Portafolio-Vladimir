import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-vladimir.veronicagil2402.chatgpt.site"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortBio,
  icons: {
    icon: [{ url: "/images/Foto-circular.png?v=2", type: "image/png" }],
    apple: [{ url: "/images/Foto-circular.png?v=2", type: "image/png" }],
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.shortBio,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/Foto-circular.png?v=2",
        width: 1086,
        height: 1251,
        alt: "Retrato profesional de Vladimir Cornejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.shortBio,
    images: ["/images/Foto-circular.png?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const whatsapp = site.socials.find((social) => social.label === "WhatsApp");
  const whatsappMessage = encodeURIComponent("estoy interesado en tus servicios de automatización");

  return (
    <html
      lang="es"
      className={barlow.variable}
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
          {whatsapp && (
            <a
              href={`${whatsapp.href}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Escribir a Vladimir por WhatsApp: estoy interesado en tus servicios de automatización"
              title="Escríbeme por WhatsApp"
              className="fixed right-5 z-[70] grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-[#25d366] text-white shadow-[0_12px_32px_rgba(37,211,102,.3)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none sm:right-7 sm:h-16 sm:w-16"
              style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <svg aria-hidden viewBox="0 0 32 32" className="h-7 w-7 fill-current sm:h-8 sm:w-8">
                <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.29.6 4.52 1.74 6.48L3 29l6.7-1.76A12.93 12.93 0 0 0 16 29h.01C23.18 29 29 23.18 29 16S23.18 3 16.01 3Zm0 23.81c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-3.98 1.04 1.06-3.88-.25-.4A10.8 10.8 0 1 1 16 26.81Zm5.92-8.1c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.73.16-.22.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.61-.97-.86-1.62-1.92-1.81-2.24-.19-.32-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
              </svg>
            </a>
          )}
        </Providers>
      </body>
    </html>
  );
}
