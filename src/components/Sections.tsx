import { useLang } from '../i18n/LangContext'
import { Register } from './Register'
import { Section } from './Section'
import { Tags } from './Tags'

export function About() {
  const { t } = useLang()
  return (
    <Section id="about" title={t.about.title}>
      <div className="prose">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="subhead">{t.about.pillarsTitle}</h3>
      <div className="pillars">
        {t.about.pillars.map((pillar) => (
          <article className="pillar" key={pillar.name}>
            <h4 className="pillar__name">{pillar.name}</h4>
            <p className="pillar__text">{pillar.text}</p>
            <Tags items={pillar.tags} />
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Training() {
  const { t } = useLang()
  return (
    <Section id="training" title={t.training.title} intro={t.training.intro}>
      <Register items={t.training.items} linkOn="term" />
    </Section>
  )
}

export function Certifications() {
  const { t } = useLang()
  return (
    <Section id="certifications" title={t.certifications.title}>
      <ul className="statuslist">
        {t.certifications.items.map((item) => (
          <li className="statusrow" key={item.term}>
            <div>
              <p className="statusrow__term">{item.term}</p>
              <p className="statusrow__detail">{item.detail}</p>
            </div>
            {item.tag && (
              <span className="pill" data-tone={item.tag.tone}>
                {item.tag.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" title={t.skills.title}>
      <dl className="register">
        {t.skills.groups.map((group) => (
          <div className="register__row" key={group.term}>
            <dt className="register__term">{group.term}</dt>
            <dd className="register__detail register__detail--wide">
              <Tags items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Contact() {
  const { t } = useLang()
  return (
    <Section id="contact" title={t.contact.title} intro={t.contact.text}>
      <Register items={t.contact.items} />
    </Section>
  )
}
