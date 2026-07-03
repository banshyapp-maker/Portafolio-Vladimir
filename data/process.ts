import type { FlowStep } from "@/types";

/**
 * Los 6 pasos canónicos del sistema, usados por la sección ProcessFlow
 * del Home (la "firma" de motion del sitio).
 */
export const processSteps: FlowStep[] = [
  {
    n: 1,
    title: "Ingesta documental",
    detail: "Correo, carga o API: el documento entra al sistema.",
  },
  {
    n: 2,
    title: "Captura",
    detail: "OCR y extracción de campos clave a datos estructurados.",
  },
  {
    n: 3,
    title: "Automatización",
    detail: "Validación, reglas y enrutamiento sin intervención manual.",
  },
  {
    n: 4,
    title: "Base de datos",
    detail: "Almacenamiento estructurado, indexado y consultable.",
  },
  {
    n: 5,
    title: "Dashboard",
    detail: "Indicadores y búsqueda que se leen de un vistazo.",
  },
  {
    n: 6,
    title: "Decisión",
    detail: "Información lista para actuar, con control operativo.",
  },
];
