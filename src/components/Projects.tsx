import { useMemo, useState } from 'react'
import { PROJECTS } from '../data/projects'
import { useLang } from '../i18n/LangContext'
import type { Category } from '../i18n/types'
import { formatProjectDate } from '../utils/formatDate'
import { ProjectDialog } from './ProjectDialog'
import { Section } from './Section'

type Filter = Category | 'all'

const CATEGORY_ORDER: Category[] = ['security', 'research', 'ai', 'embedded', 'mobile', 'game']

export function Projects() {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const categories = useMemo(
    () => CATEGORY_ORDER.filter((category) => PROJECTS.some((p) => p.categories.includes(category))),
    [],
  )
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))
  const selectedIndex = visible.findIndex((p) => p.id === selectedId)
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null

  // Précédent / suivant : on boucle sur la liste actuellement filtrée.
  const step = (delta: -1 | 1) => {
    const next = visible[(selectedIndex + delta + visible.length) % visible.length]
    setSelectedId(next.id)
  }

  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro}>
      <div className="filters" role="group" aria-label={t.projects.filterLabel}>
        {(['all', ...categories] as Filter[]).map((value) => (
          <button
            key={value}
            type="button"
            className="filter"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {value === 'all' ? t.projects.all : t.projects.categories[value]}
          </button>
        ))}
      </div>

      <ul className="projects">
        {visible.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              className="project"
              aria-label={`${t.projects.details} ${project.title}`}
              onClick={() => setSelectedId(project.id)}
            >
              {project.thumb ? (
                <img className="project__thumb" src={project.thumb} alt="" width={64} height={64} decoding="async" />
              ) : (
                <span className="project__thumb project__thumb--text" aria-hidden="true">
                  {project.title.slice(0, 1)}
                </span>
              )}
              <span className="project__text">
                <span className="project__title">{project.title}</span>
                <span className="project__tagline">{project.tagline[lang]}</span>
              </span>
              <span className="project__meta">
                <span>{formatProjectDate(project.date, lang)}</span>
                <span>{project.stack.slice(0, 3).join(', ')}</span>
              </span>
              <svg className="project__arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <ProjectDialog
          project={selected}
          index={selectedIndex}
          total={visible.length}
          onClose={() => setSelectedId(null)}
          onStep={step}
        />
      )}
    </Section>
  )
}
