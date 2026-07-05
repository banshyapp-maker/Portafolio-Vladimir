export type ProjectStatus =
  | "En producción"
  | "Piloto"
  | "En desarrollo"
  | "Caso interno";

export interface FlowStep {
  n: number;
  title: string;
  detail: string;
}

/** Preset ratios keep autocomplete; any "W/H" string (e.g. "1917/957") is valid for exact screenshot fits. */
export type MediaAspect = "16/9" | "4/3" | "1/1" | "3/4" | "21/9" | (string & {});
export type MediaTint = "accent" | "neutral" | "warm" | "cool";

export interface Artifact {
  id: string;
  caption: string;
  alt: string;
  aspect: MediaAspect;
  tint?: MediaTint;
  kind?: "image" | "diagram" | "video";
  /** When a real asset exists, point here and it upgrades to next/image. */
  src?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  /** One business-value line. */
  valueProp: string;
  technologies: Technology[];
  year: string;
  status: ProjectStatus;
  role: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  artifacts: Artifact[];
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  shortBio: string;
  email: string;
  location: string;
  socials: SocialLink[];
  nav: NavItem[];
}
