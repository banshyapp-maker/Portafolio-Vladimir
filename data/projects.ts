import type { Project } from "@/types";

/**
 * Contenido de proyectos. Para añadir uno nuevo, copia un objeto y edítalo.
 * `featured: true` lo muestra en "Selected Work" del Home.
 * Arkivoo es el caso de estudio completo; el resto está estructurado y listo
 * para profundizar.
 */
export const projects: Project[] = [
  {
    slug: "arkivoo",
    title: "Arkivoo",
    category: "Gestión documental",
    valueProp: "Archivadores digitales a medida para encontrar cualquier documento en segundos.",
    stack: ["FastAPI", "Supabase", "PostgreSQL", "Jinja2", "Vercel"],
    year: "2026",
    status: "En producción",
    role: "Diseño de producto, arquitectura y desarrollo full-stack",
    problem:
      "Las facturas y documentos vivían en carpetas, correos y discos sin un criterio común. Buscar un comprobante implicaba abrir archivos uno por uno, y cada persona archivaba a su manera. No había forma fiable de saber qué se tenía ni de recuperarlo rápido.",
    solution:
      "Arkivoo crea archivadores digitales a medida, cada uno con sus propios campos (texto, número, moneda, fecha, selección). Los documentos entran con metadatos —manualmente o capturados por automatización externa— y se vuelven buscables al instante por proveedor, categoría, fecha, estado o número. Roles admin/usuario, panel con indicadores y previsualización integrada.",
    flow: [
      {
        n: 1,
        title: "Captura",
        detail: "Ingesta vía formulario o API protegida (X-API-Key) que recibe facturas extraídas por automatización externa.",
      },
      {
        n: 2,
        title: "Estructura",
        detail: "Cada documento se indexa con los campos del archivador; el archivo va a Storage privado.",
      },
      {
        n: 3,
        title: "Indexación",
        detail: "Postgres con índices por metadato y función de panel para contadores agregados.",
      },
      {
        n: 4,
        title: "Búsqueda",
        detail: "Filtros combinados y paginación; resultados en segundos.",
      },
      {
        n: 5,
        title: "Consulta",
        detail: "Detalle con metadatos y previsualización/descarga con URL firmada.",
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
    impact: [
      { value: "−85%", label: "Tiempo de búsqueda", note: "de minutos a segundos" },
      { value: "<3s", label: "Recuperación de un documento", note: "por metadato indexado" },
      { value: "−70%", label: "Pasos manuales de archivado", note: "captura asistida" },
      { value: "−60%", label: "Errores de clasificación", note: "campos validados" },
      { value: "100%", label: "Trazabilidad", note: "auditoría de cada acción, por usuario e IP" },
      { value: "1", label: "Repositorio único", note: "todo el archivo en un solo lugar" },
    ],
    learnings:
      "Definir bien los campos del archivador es el 80% del valor: la búsqueda solo es tan buena como sus metadatos. Mantener un único punto de entrada simplificó el despliegue serverless.",
    next: "Búsqueda full-text sobre el contenido del PDF, OCR en la ingesta y alertas por vencimiento de documentos.",
    featured: true,
  },

  {
    slug: "invoice-pipeline",
    title: "Invoice Pipeline",
    category: "Automatización",
    valueProp: "De documento en bruto a dato estructurado y reporte, sin intervención manual.",
    stack: ["n8n", "Supabase", "Airtable", "OCR / IA", "BI"],
    year: "2026",
    status: "En producción",
    role: "Diseño e implementación del pipeline",
    problem:
      "La digitación de facturas era manual, lenta y propensa a error; los datos llegaban tarde a quien debía decidir.",
    solution:
      "Pipeline de extremo a extremo: intake del documento, extracción de campos, validación, carga estructurada y reportes de BI actualizados automáticamente.",
    flow: [
      { n: 1, title: "Intake", detail: "Recepción por correo, carpeta o API." },
      { n: 2, title: "Extracción", detail: "OCR y parsing de campos clave a JSON." },
      { n: 3, title: "Validación", detail: "Reglas de consistencia y nivel de confianza." },
      { n: 4, title: "Carga", detail: "Inserción estructurada en la base de datos." },
      { n: 5, title: "Reporte", detail: "BI se refresca con los nuevos registros." },
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
    impact: [
      { value: "−90%", label: "Digitación manual" },
      { value: "~95%", label: "Precisión de extracción" },
      { value: "min → seg", label: "Latencia del dato disponible" },
      { value: "−50%", label: "Costo de procesamiento" },
      { value: "0", label: "Reescritura entre sistemas" },
      { value: "24/7", label: "Procesamiento desatendido" },
    ],
    learnings:
      "Un umbral de confianza explícito evita propagar errores: lo dudoso va a revisión humana en lugar de contaminar la base.",
    next: "Conciliación automática y detección de duplicados.",
    featured: true,
  },

  {
    slug: "docuware-hr-archive",
    title: "DocuWare HR Archive",
    category: "Estrategia documental",
    valueProp: "Archivo de RR.HH. con menos campos, mejor búsqueda y captura más usable.",
    stack: ["DocuWare", "Diseño de índices", "API REST"],
    year: "2025",
    status: "En producción",
    role: "Arquitectura de indexación y rediseño de captura",
    problem:
      "El gabinete de RR.HH. tenía demasiados campos de índice; capturar era tedioso y buscar, inconsistente.",
    solution:
      "Rediseño del esquema: minimizar campos a los que realmente se buscan, normalizar valores y simplificar la pantalla de captura para que sea rápida y a prueba de error.",
    flow: [
      { n: 1, title: "Auditoría", detail: "Inventario de campos y patrones de búsqueda reales." },
      { n: 2, title: "Reducción", detail: "Eliminar o combinar campos sin valor de recuperación." },
      { n: 3, title: "Normalización", detail: "Listas de selección y formatos consistentes." },
      { n: 4, title: "Captura", detail: "Pantalla simplificada con valores por defecto." },
      { n: 5, title: "Búsqueda", detail: "Filtros alineados a cómo busca RR.HH." },
    ],
    artifacts: [
      {
        id: "esquema",
        caption: "Esquema de índices antes y después.",
        alt: "Comparación de esquema de índices antes y después",
        aspect: "16/9",
        tint: "accent",
        kind: "diagram",
      },
      {
        id: "captura",
        caption: "Pantalla de captura simplificada.",
        alt: "Pantalla de captura de documentos simplificada",
        aspect: "4/3",
        tint: "neutral",
        kind: "image",
      },
      {
        id: "busqueda",
        caption: "Búsqueda por campos normalizados.",
        alt: "Búsqueda por campos normalizados",
        aspect: "4/3",
        tint: "warm",
        kind: "image",
      },
    ],
    impact: [
      { value: "−40%", label: "Campos de índice", note: "solo lo que realmente se busca" },
      { value: "−55%", label: "Tiempo de captura", note: "pantalla simplificada" },
      { value: "1", label: "Estándar de indexación", note: "valores normalizados" },
    ],
    learnings:
      "Menos campos, mejor búsqueda: hay que indexar por lo que se busca, no por lo que existe.",
    next: "Plantillas de captura por tipo documental y validaciones server-side.",
    featured: false,
  },

  {
    slug: "digitrack",
    title: "DigiTrack",
    category: "Reporting / Visibilidad operativa",
    valueProp: "Métricas en vivo de la operación de escaneo, conectadas al ERP.",
    stack: ["ERP (conector)", "Capa de datos", "Dashboards", "BI"],
    year: "2025",
    status: "En producción",
    role: "Diseño del sistema de reportes e indicadores",
    problem:
      "El avance del escaneo se medía a destiempo y a mano; no se detectaban los retrasos hasta que ya eran un problema.",
    solution:
      "Sistema de reporting conectado al ERP que muestra en tiempo real avance, productividad, volúmenes procesados e incidencias, desglosado por equipo, sede y usuario, para decidir con datos vivos.",
    flow: [
      { n: 1, title: "Conexión", detail: "Lectura de datos operativos del ERP." },
      { n: 2, title: "Modelado", detail: "Indicadores: avance, productividad, volumen, incidencias." },
      { n: 3, title: "Segmentación", detail: "Por equipo, sede y usuario." },
      { n: 4, title: "Tablero", detail: "Dashboards en vivo con alertas de retraso." },
      { n: 5, title: "Decisión", detail: "Reasignación y control con datos del momento." },
    ],
    artifacts: [
      {
        id: "tablero",
        caption: "Tablero de avance por equipo y sede.",
        alt: "Dashboard de avance de escaneo por equipo y sede",
        aspect: "16/9",
        tint: "accent",
        kind: "image",
      },
      {
        id: "productividad",
        caption: "Productividad por usuario.",
        alt: "Gráfico de productividad por usuario",
        aspect: "4/3",
        tint: "cool",
        kind: "image",
      },
      {
        id: "volumenes",
        caption: "Volúmenes procesados e incidencias.",
        alt: "Reporte de volúmenes procesados e incidencias",
        aspect: "4/3",
        tint: "neutral",
        kind: "image",
      },
    ],
    impact: [
      { value: "Tiempo real", label: "Visibilidad del avance", note: "antes se medía a destiempo y a mano" },
      { value: "4", label: "Indicadores en vivo", note: "avance, productividad, volumen, incidencias" },
      { value: "1", label: "Fuente única de métricas", note: "conectada al ERP" },
    ],
    learnings:
      "Medir por equipo, sede y usuario convierte un número global en una palanca de gestión concreta.",
    next: "Pronóstico de carga y alertas automáticas de desvío.",
    featured: true,
  },
];

export const allProjects = projects;

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
