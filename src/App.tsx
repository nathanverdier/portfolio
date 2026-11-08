import { Career } from './components/Career'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About, Certifications, Contact, Skills, Training } from './components/Sections'
import { useLang } from './i18n/LangContext'

export default function App() {
  const { t } = useLang()

  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Header />
      <div className="container">
        <main id="main">
          <Hero />
          <About />
          <Career />
          <Certifications />
          <Training />
          <Projects />
          <Skills />
          <Contact />
          <footer className="footer">
            <p>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
