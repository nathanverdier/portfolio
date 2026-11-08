import { useEffect, useId, useRef } from 'react'
import type { Project } from '../data/projects'
import { useLang } from '../i18n/LangContext'
import { formatProjectDate } from '../utils/formatDate'
import { Tags } from './Tags'

interface ProjectDialogProps {
  project: Project
  /** Position du projet dans la liste affichée (à partir de 0) et taille de cette liste. */
  index: number
  total: number
  onClose: () => void
  /** Passe au projet précédent (-1) ou suivant (+1) de la liste affichée. */
  onStep: (delta: -1 | 1) => void
}

/** Détail d'un projet dans un `<dialog>` natif : focus piégé, Échap et clic sur le fond gérés par le navigateur. */
export function ProjectDialog({ project, index, total, onClose, onStep }: ProjectDialogProps) {
  const { lang, t } = useLang()
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  // Quand on change de projet, la fiche repart du haut.
  useEffect(() => {
    ref.current?.scrollTo({ top: 0 })
  }, [project.id])

  const host = project.url ? (new URL(project.url).hostname.includes('gitlab') ? 'GitLab' : 'GitHub') : null
  const several = total > 1

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // Un clic directement sur le <dialog> (et non sur son contenu) est un clic sur le fond.
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
      onKeyDown={(event) => {
        if (!several || event.altKey || event.ctrlKey || event.metaKey) return
        if (event.key === 'ArrowLeft') onStep(-1)
        if (event.key === 'ArrowRight') onStep(1)
      }}
    >
      <div className="dialog__body">
        <div className="dialog__head">
          <div>
            <h3 id={titleId} className="dialog__title">
              {project.title}
            </h3>
            <p className="dialog__date">{formatProjectDate(project.date, lang)}</p>
          </div>
          <button type="button" className="button button--ghost" onClick={() => ref.current?.close()}>
            {t.projects.close}
          </button>
        </div>

        {project.cover && (
          <img className="dialog__cover" src={project.cover} alt="" loading="lazy" decoding="async" />
        )}

        <p className="dialog__tagline">{project.tagline[lang]}</p>
        <p className="dialog__text">{project.text[lang]}</p>

        <div>
          <p className="dialog__label">{t.projects.stack}</p>
          <Tags items={project.stack} />
        </div>

        {project.url && host && (
          <p>
            <a className="button" href={project.url} target="_blank" rel="noopener noreferrer">
              {t.projects.code} {host}
            </a>
          </p>
        )}

        {several && (
          <nav className="dialog__steps" aria-label={t.projects.title}>
            <button type="button" className="step" onClick={() => onStep(-1)}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" />
              </svg>
              {t.projects.previous}
            </button>
            <p className="dialog__count">
              {index + 1} {t.projects.count} {total}
            </p>
            <button type="button" className="step" onClick={() => onStep(1)}>
              {t.projects.next}
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </dialog>
  )
}
