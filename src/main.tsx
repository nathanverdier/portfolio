import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/space-grotesk/wght.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/app.css'
import App from './App'
import { LangProvider } from './i18n/LangProvider'

// Le portfolio s'ouvre toujours en haut de page : pas de restauration du défilement au rechargement
// (en développement, chaque modification recharge la page) et pas d'ancre « #parcours » qui traîne.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
if (location.hash) history.replaceState(null, '', location.pathname + location.search)
window.scrollTo({ top: 0, behavior: 'instant' })

const root = document.getElementById('root')
if (!root) throw new Error('Élément #root introuvable dans index.html')

createRoot(root).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
