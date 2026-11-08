import { useEffect, useRef } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { useLang } from '../i18n/LangContext'
import { LANGS, SECTION_IDS, type NavId } from '../i18n/types'

const NAV_IDS = SECTION_IDS.filter((id): id is NavId => id !== 'top')

/** Barre fixe en haut : nom, navigation par section, langue, thème et CV. */
export function Header() {
  const { lang, setLang, t } = useLang()
  const { toggle } = useTheme()
  const active = useActiveSection(SECTION_IDS)
  const navRef = useRef<HTMLElement>(null)

  // Sur petit écran le menu défile horizontalement : on garde le lien actif visible, sans faire bouger la page.
  useEffect(() => {
    const nav = navRef.current
    if (!nav || nav.scrollWidth <= nav.clientWidth) return
    const link = nav.querySelector<HTMLElement>('[aria-current="true"]')
    if (!link) {
      // En haut de page (accueil), aucun lien n'est actif : le menu revient au début.
      nav.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    const n = nav.getBoundingClientRect()
    const l = link.getBoundingClientRect()
    const left = nav.scrollLeft + (l.left - n.left) - (n.width - l.width) / 2
    nav.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="#top">
          <span className="topbar__mark" aria-hidden="true" />
          Nathan Verdier
        </a>

        <nav ref={navRef} className="topbar__nav" aria-label={t.nav.label}>
          <ul className="topbar__list">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a className="topbar__link" href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                  {t.nav.items[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__tools">
          <div className="seg" role="group" aria-label={t.tools.language}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className="icon-button" aria-label={t.tools.theme} onClick={toggle}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
