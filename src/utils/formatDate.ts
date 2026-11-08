import type { Lang } from '../i18n/types'

/** `2024-06` devient « juin 2024 » ou « June 2024 » ; `2026` reste `2026`. */
export function formatProjectDate(date: string, lang: Lang): string {
  const [year, month] = date.split('-').map(Number)
  if (!year || !month) return String(year ?? date)
  return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1))
}
