export type Lang = 'fr' | 'en'

export const LANGS: readonly Lang[] = ['fr', 'en']

/** Sections de la page, dans l'ordre. `top` est l'étiquette d'accueil (pas dans le menu). */
export const SECTION_IDS = [
  'top',
  'about',
  'career',
  'certifications',
  'training',
  'projects',
  'skills',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
export type NavId = Exclude<SectionId, 'top'>

export type Category = 'security' | 'ai' | 'mobile' | 'embedded' | 'game' | 'research'

export type Localized<T> = Record<Lang, T>

export interface Bullet {
  lead: string
  text: string
}

export interface TimelineItem {
  dates: string
  title: string
  org?: string
  place?: string
  text?: string
  bullets?: Bullet[]
  /** Poste ou formation en cours : affiche un repère « en cours ». */
  current?: boolean
}

/** Une ligne « terme / détail », utilisée pour l'entraînement, les certifications, les compétences et le contact. */
export interface RegisterItem {
  term: string
  detail: string
  href?: string
  /** Ajoute un bouton « copier » à côté de la valeur (adresse e-mail). */
  copy?: boolean
  /** Pastille de statut affichée à droite de la ligne (certifications). */
  tag?: { label: string; tone: 'ok' | 'warn' }
}

/** Une tuile chiffrée de l'accueil. */
export interface Metric {
  label: string
  value: string
  /** Unité affichée en plus petit après la valeur (jours, semaines). */
  unit?: string
  caption: string
  tone?: 'warn'
}

/** Un domaine d'intervention : titre, phrase d'explication et technologies associées. */
export interface Pillar {
  name: string
  text: string
  tags: string[]
}

/** Un groupe de compétences affiché en pastilles. */
export interface SkillGroup {
  term: string
  items: string[]
}

export interface Content {
  meta: { title: string; description: string }
  skip: string
  nav: { label: string; items: Record<NavId, string> }
  tools: { language: string; theme: string }
  hero: {
    role: string
    school: string
    status: string
    line: string
    metrics: Metric[]
    downloadCv: string
    contact: string
    portraitAlt: string
  }
  about: { title: string; paragraphs: string[]; pillarsTitle: string; pillars: Pillar[] }
  career: {
    title: string
    experience: string
    education: string
    other: string
    current: string
    experienceItems: TimelineItem[]
    educationItems: TimelineItem[]
    otherItems: TimelineItem[]
  }
  training: { title: string; intro: string; items: RegisterItem[] }
  certifications: { title: string; items: RegisterItem[] }
  skills: { title: string; groups: SkillGroup[] }
  projects: {
    title: string
    intro: string
    filterLabel: string
    all: string
    categories: Record<Category, string>
    stack: string
    close: string
    code: string
    details: string
    previous: string
    next: string
    count: string
  }
  contact: { title: string; text: string; copy: string; copied: string; items: RegisterItem[] }
  footer: { rights: string }
}
