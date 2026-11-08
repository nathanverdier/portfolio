import { useLang } from '../i18n/LangContext'
import type { TimelineItem } from '../i18n/types'
import { Section } from './Section'

function Timeline({ items }: { items: TimelineItem[] }) {
  const { t } = useLang()
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline__item" key={`${item.dates}-${item.title}`}>
          <p className="timeline__dates">
            {item.dates}
            {item.current && (
              <span className="badge">
                <span className="status__dot" aria-hidden="true" />
                {t.career.current}
              </span>
            )}
          </p>
          <div className="timeline__body">
            <h4 className="timeline__title">{item.title}</h4>
            {(item.org || item.place) && (
              <p className="timeline__org">{[item.org, item.place].filter(Boolean).join(', ')}</p>
            )}
            {item.text && <p className="timeline__text">{item.text}</p>}
            {item.bullets && (
              <ul className="bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet.lead}>
                    <strong>{bullet.lead}</strong> : {bullet.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Career() {
  const { t } = useLang()
  const c = t.career

  return (
    <Section id="career" title={c.title}>
      <h3 className="subhead">{c.experience}</h3>
      <Timeline items={c.experienceItems} />
      <h3 className="subhead">{c.education}</h3>
      <Timeline items={c.educationItems} />
      <h3 className="subhead">{c.other}</h3>
      <Timeline items={c.otherItems} />
    </Section>
  )
}
