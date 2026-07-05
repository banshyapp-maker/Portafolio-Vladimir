import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Vladimir Cornejo",
  role: "Application Engineer · Automation & AI Solutions",
  shortBio:
    "Automatización, RPA e IA aplicada para reducir tareas manuales, conectar datos y darle más control a cada operación.",
  email: "vcornejo0297@gmail.com",
  location: "Panamá, Panamá",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vladimir-cornejo",
      handle: "/in/vladimir-cornejo",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/50768384242",
      handle: "+507 6838-4242",
    },
    { label: "GitHub", href: "#", handle: "@vcornejo" }, // PLACEHOLDER — añade tu URL de GitHub
    { label: "Email", href: "mailto:vcornejo0297@gmail.com", handle: "vcornejo0297@gmail.com" },
  ],
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/about" },
    { label: "Portafolio", href: "/work" },
    { label: "Contacto", href: "/contact" },
  ],
};
