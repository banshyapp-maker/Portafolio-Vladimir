import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Vladimir Cornejo",
  role: "Application Engineer · Automation & AI Solutions",
  shortBio:
    "Automatización, gestión documental y analítica de extremo a extremo: documentos, facturas y datos que se procesan solos.",
  email: "vcornejo0297@gmail.com",
  location: "Panamá, Panamá",
  availability: "Disponible para proyectos",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vladimir-cornejo",
      handle: "/in/vladimir-cornejo",
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
