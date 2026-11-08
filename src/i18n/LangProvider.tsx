import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content } from './content'
import { LangContext } from './LangContext'
import { LANGS, type Lang } from './types'

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && (LANGS as readonly string[]).includes(saved)) return saved as Lang
  } catch {
    // Stockage indisponible (navigation privée, par exemple) : on retombe sur la langue du navigateur.
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content[lang].meta.description)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      // Le choix reste valable pour la session en cours.
    }
  }, [])

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
