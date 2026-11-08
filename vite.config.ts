import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base relative : le même build fonctionne sur GitHub Pages (/portfolio/), en conteneur ou en local.
  // Un `--base=/chemin/` en ligne de commande (voir docker/Dockerfile) reste prioritaire.
  base: './',
})
