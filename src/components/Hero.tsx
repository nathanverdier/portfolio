import portrait from '../assets/portrait.webp'
import { useLang } from '../i18n/LangContext'

/** Accueil : qui je suis en une phrase, puis quatre chiffres vérifiables (classement, séries, hackathon). */
export function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero__intro">
        <div className="hero__text">
          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            {h.status}
          </p>
          <h1 id="hero-name" className="hero__name">
            Nathan Verdier
          </h1>
          <p className="hero__role">{h.role}</p>
          <p className="hero__school">{h.school}</p>
          <p className="hero__line">{h.line}</p>
          <div className="hero__actions">
            <a className="button" href={h.cvUrl} download>
              {h.downloadCv}
            </a>
            <a className="button button--ghost" href="#contact">
              {h.contact}
            </a>
          </div>
        </div>
        <img className="hero__photo" src={portrait} alt={h.portraitAlt} width={640} height={800} decoding="async" />
      </div>

      <ul className="metrics">
        {h.metrics.map((metric) => (
          <li className="metric" key={metric.label} data-tone={metric.tone}>
            <p className="metric__label">{metric.label}</p>
            <p className="metric__value">
              {metric.value}
              {metric.unit && <span className="metric__unit"> {metric.unit}</span>}
            </p>
            <p className="metric__caption">{metric.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
