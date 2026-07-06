import type { Project } from "@/types";

/**
 * Contenido de proyectos. Para añadir uno nuevo, copia un objeto y edítalo.
 * `featured: true` lo muestra en "Selected Work" del Home.
 * Arkivoo es el caso de estudio completo; el resto está estructurado y listo
 * para profundizar.
 * Arkivoo es agnóstico al tipo documental; la demo usa facturas solo como ejemplo.
 */
export const projects: Project[] = [
  {
    slug: "arkivoo",
    title: "Arkivoo",
    category: "Gestión documental",
    valueProp: "Centraliza documentos, automatiza formularios y flujos de aprobación, y controla cada proceso desde una sola plataforma.",
    technologies: [
      {
        name: "FastAPI",
        category: "Backend y API",
        description:
          "Gestiona la lógica de negocio, la validación de datos y los endpoints protegidos que conectan Arkivoo con automatizaciones externas.",
      },
      {
        name: "PostgreSQL + Supabase",
        category: "Datos",
        description:
          "Almacena documentos, usuarios y metadatos en un modelo relacional preparado para búsquedas rápidas, filtros combinados y crecimiento operativo.",
      },
      {
        name: "Supabase Storage",
        category: "Archivos",
        description:
          "Mantiene los documentos en almacenamiento privado y controla su consulta mediante accesos temporales y seguros.",
      },
      {
        name: "Jinja2",
        category: "Interfaz web",
        description:
          "Renderiza formularios y vistas orientadas al proceso con una experiencia rápida, clara y consistente para el usuario.",
      },
      {
        name: "Vercel",
        category: "Despliegue",
        description:
          "Publica la aplicación en una infraestructura serverless con despliegues repetibles y una operación simplificada.",
      },
    ],
    year: "2026",
    status: "En producción",
    role: "Diseño de producto, arquitectura y desarrollo full-stack",
    problem:
      "Los documentos estaban dispersos entre carpetas, correos y discos, sin una estructura común para clasificarlos ni seguir su estado. Buscar un archivo implicaba revisar ubicaciones y criterios distintos, y la operación no tenía una vista confiable de qué existía, dónde estaba ni en qué etapa del proceso se encontraba.",
    solution:
      "Arkivoo centraliza documentos y procesos en una sola plataforma. Permite crear formularios web y archivadores a medida, automatizar la captura y clasificación de documentos, asignar estados y consultar cada registro en segundos. Incluye roles, trazabilidad, panel de indicadores y previsualización integrada para mantener la operación bajo control.",
    features: [
      {
        title: "Archivadores configurables",
        description:
          "Cada operación define sus propios campos de texto, fecha, moneda, número o selección sin depender de una estructura genérica.",
      },
      {
        title: "Formularios web",
        description:
          "La captura se adapta al tipo de documento y valida la información antes de incorporarla al archivo digital.",
      },
      {
        title: "Automatización documental",
        description:
          "Una API protegida recibe documentos y metadatos desde flujos externos para reducir la carga manual.",
      },
      {
        title: "Búsqueda multicampo",
        description:
          "Proveedor, categoría, fecha, estado o número pueden combinarse para localizar un documento en segundos.",
      },
      {
        title: "Procesos y estados",
        description:
          "Cada registro puede avanzar por estados definidos, facilitando el seguimiento de pendientes y responsables.",
      },
      {
        title: "Control y trazabilidad",
        description:
          "Roles, historial de acciones, indicadores y previsualización permiten supervisar la operación desde un solo lugar.",
      },
    ],
    artifacts: [
      {
        id: "login",
        caption: "Pantalla de inicio de sesión de Arkivoo.",
        alt: "Pantalla de inicio de sesión de Arkivoo",
        aspect: "1917/957",
        tint: "accent",
        kind: "image",
        src: "/images/arkivo/login.png",
      },
      {
        id: "lista",
        caption: "Búsqueda multicampo con resultados en tabla.",
        alt: "Vista de lista de documentos con filtros de búsqueda",
        aspect: "1917/951",
        tint: "neutral",
        kind: "image",
        src: "/images/arkivo/buscar-2.png",
      },
      {
        id: "detalle",
        caption: "Detalle de documento con metadatos y previsualización.",
        alt: "Vista de detalle de un documento archivado",
        aspect: "1916/949",
        tint: "warm",
        kind: "image",
        src: "/images/arkivo/buscar-3.png",
      },
      {
        id: "config",
        caption: "Captura de documento con los campos personalizados del archivador.",
        alt: "Pantalla de captura de un documento con sus campos",
        aspect: "1917/952",
        tint: "neutral",
        kind: "image",
        src: "/images/arkivo/archivar-2.png",
      },
    ],
    featured: true,
  },

  {
    slug: "invoice-pipeline",
    title: "Invoice Pipeline",
    category: "Automatización",
    valueProp: "Convierte facturas en datos confiables y reportes actualizados sin digitación manual, para cerrar más rápido y decidir mejor.",
    technologies: [
      {
        name: "n8n",
        category: "Orquestación",
        description:
          "Coordina la recepción, validación, extracción, registro y notificación de cada factura dentro de un único flujo automatizado.",
      },
      {
        name: "OCR + IA aplicada",
        category: "Extracción inteligente",
        description:
          "Interpreta documentos no estructurados y convierte campos como proveedor, fecha, número y total en datos utilizables.",
      },
      {
        name: "Supabase",
        category: "Base de datos",
        description:
          "Conserva la información procesada en una estructura centralizada, consultable y preparada para integraciones posteriores.",
      },
      {
        name: "Airtable",
        category: "Operación",
        description:
          "Ofrece una vista accesible para seguimiento, revisión y control de los registros que requieren intervención humana.",
      },
      {
        name: "Business Intelligence",
        category: "Analítica",
        description:
          "Transforma los registros procesados en indicadores de facturación que se actualizan sin consolidaciones manuales.",
      },
    ],
    year: "2026",
    status: "En producción",
    role: "Diseño e implementación del pipeline",
    problem:
      "La digitación de facturas era manual, lenta y propensa a error; los datos llegaban tarde a quien debía decidir.",
    solution:
      "Una solución de extremo a extremo que recibe cada factura, extrae sus datos con IA, valida la información y la registra automáticamente. El equipo reduce horas de digitación y obtiene reportes actualizados para dar seguimiento a la facturación sin esperar cierres manuales.",
    features: [
      {
        title: "Recepción automática",
        description:
          "El flujo detecta nuevas facturas desde el correo y obtiene sus archivos adjuntos sin intervención manual.",
      },
      {
        title: "Lectura inteligente",
        description:
          "OCR e IA extraen los campos relevantes y los convierten en una estructura lista para validar y registrar.",
      },
      {
        title: "Validación de confianza",
        description:
          "Las reglas de negocio separan los documentos confiables de aquellos que necesitan una revisión humana.",
      },
      {
        title: "Registro sincronizado",
        description:
          "Los datos aprobados se distribuyen a las herramientas operativas sin volver a digitarlos entre sistemas.",
      },
      {
        title: "Notificaciones",
        description:
          "El equipo recibe confirmaciones o alertas según el resultado del procesamiento de cada documento.",
      },
      {
        title: "Información para decidir",
        description:
          "La información consolidada alimenta reportes de facturación y mantiene los indicadores al día.",
      },
    ],
    artifacts: [
      {
        id: "workflow",
        caption: "Workflow de n8n: del intake al registro estructurado.",
        alt: "Diagrama de workflow de automatización en n8n",
        aspect: "1544/836",
        tint: "accent",
        kind: "diagram",
        src: "/images/invoice-pipeline/flujo-ejecutandose.png",
      },
      {
        id: "bi",
        caption: "Reporte de BI alimentado por el pipeline.",
        alt: "Reporte de business intelligence con métricas de facturación",
        aspect: "1485/833",
        tint: "warm",
        kind: "image",
        src: "/images/invoice-pipeline/dashboard-facturacion.png",
      },
      {
        id: "notificacion-error",
        caption: "Alerta cuando el documento no puede extraerse, para revisión manual.",
        alt: "Correo de error en la extracción de una factura",
        aspect: "1193/510",
        tint: "cool",
        kind: "image",
        src: "/images/invoice-pipeline/notificacion-error.png",
      },
      {
        id: "notificacion-exito",
        caption: "Notificación automática al completar el procesamiento de una factura.",
        alt: "Correo de confirmación de factura procesada exitosamente",
        aspect: "1190/209",
        tint: "neutral",
        kind: "image",
        src: "/images/invoice-pipeline/notificacion-exito.png",
      },
    ],
    featured: true,
  },

  {
    slug: "digitrack",
    title: "DigiTrack",
    category: "Reporting / Visibilidad operativa",
    valueProp: "Convierte la operación de escaneo en indicadores en vivo para anticipar retrasos, medir productividad y decidir a tiempo.",
    technologies: [
      {
        name: "Conector ERP",
        category: "Integración",
        description:
          "Obtiene la actividad operativa desde la fuente de negocio para evitar reportes separados y consolidaciones manuales.",
      },
      {
        name: "Capa de transformación",
        category: "Procesamiento de datos",
        description:
          "Limpia, organiza y convierte los registros del ERP en métricas comparables por equipo, sede y usuario.",
      },
      {
        name: "Modelo de indicadores",
        category: "Analítica",
        description:
          "Estructura las reglas para medir avance, productividad, volumen procesado e incidencias con un criterio común.",
      },
      {
        name: "Dashboards BI",
        category: "Visualización",
        description:
          "Presenta la operación en vistas ejecutivas y de seguimiento para detectar desvíos y actuar con información reciente.",
      },
    ],
    year: "2025",
    status: "En producción",
    role: "Diseño del sistema de reportes e indicadores",
    problem:
      "El avance del escaneo se medía a destiempo y a mano; no se detectaban los retrasos hasta que ya eran un problema.",
    solution:
      "Un sistema de reporting conectado al ERP transforma la actividad diaria en indicadores de avance, productividad, volumen e incidencias. La operación gana visibilidad por equipo, sede y usuario para corregir desvíos antes de que se conviertan en retrasos.",
    features: [
      {
        title: "Integración con el ERP",
        description:
          "La información operativa se obtiene desde el sistema de origen para mantener una única versión de los datos.",
      },
      {
        title: "Avance en tiempo real",
        description:
          "El tablero muestra cuánto se ha procesado y qué parte de la carga continúa pendiente.",
      },
      {
        title: "Productividad segmentada",
        description:
          "Las métricas pueden analizarse por equipo, sede y usuario para identificar capacidad y oportunidades de mejora.",
      },
      {
        title: "Control de incidencias",
        description:
          "Los desvíos dejan de estar ocultos en reportes tardíos y se incorporan al seguimiento diario.",
      },
      {
        title: "Indicadores consistentes",
        description:
          "Las mismas reglas de cálculo se aplican a toda la operación para comparar resultados con confianza.",
      },
      {
        title: "Decisiones oportunas",
        description:
          "Los responsables pueden reasignar carga y corregir retrasos antes de que afecten el cumplimiento.",
      },
    ],
    artifacts: [
      {
        id: "general",
        caption: "Vista general del avance, metas y entregables del proyecto.",
        alt: "Dashboard general anonimizado de DigiTrack",
        aspect: "1838/856",
        tint: "accent",
        kind: "image",
        src: "/images/digitrack/general-anonimo.png",
      },
      {
        id: "sitio-1",
        caption: "Seguimiento de productividad por sitio y por digitalizador.",
        alt: "Vista anonimizada de productividad de un sitio en DigiTrack",
        aspect: "1852/849",
        tint: "neutral",
        kind: "image",
        src: "/images/digitrack/sitio-1-anonimo.png",
      },
      {
        id: "marcaciones",
        caption: "Control diario de marcaciones y jornadas completadas.",
        alt: "Vista anonimizada de marcaciones en DigiTrack",
        aspect: "1829/860",
        tint: "cool",
        kind: "image",
        src: "/images/digitrack/marcaciones-anonimo.png",
      },
      {
        id: "incidencias",
        caption: "Reporte consolidado de incidencias por categoría y sitio.",
        alt: "Vista anonimizada del reporte de incidencias de DigiTrack",
        aspect: "1835/857",
        tint: "warm",
        kind: "image",
        src: "/images/digitrack/incidencias-anonimo.png",
      },
    ],
    featured: true,
  },
];

export const allProjects = projects;

export const featuredProjects = projects.filter((p) => p.featured);

function toProjectSummary(project: Project) {
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    valueProp: project.valueProp,
    technologyNames: project.technologies.slice(0, 4).map(({ name }) => name),
    year: project.year,
    status: project.status,
    cover: project.artifacts.at(0),
  };
}

export type ProjectSummary = ReturnType<typeof toProjectSummary>;

export const allProjectSummaries = projects.map(toProjectSummary);

export const featuredProjectSummaries = projects.filter((p) => p.featured).map(toProjectSummary);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
