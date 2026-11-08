# Portfolio de Nathan Verdier

Portfolio personnel, bilingue (français / anglais), en React 18, TypeScript et Vite.

En ligne : <https://nathanverdier.github.io/portfolio/>

## Lancer le projet

```bash
npm ci          # installe les dépendances du lockfile
npm run dev     # serveur de développement
npm run build   # vérification des types puis build dans dist/
npm run preview # sert le build localement
npm run lint    # ESLint, sans aucun avertissement toléré
```

Node 20 ou plus récent est recommandé (la CI utilise Node 22).

## Structure

```
src/
  components/   Header (barre de navigation), Hero, Career, Projects, ProjectDialog, Sections…
  data/         links.ts (liens, CV) et projects.ts (liste des projets)
  hooks/        useTheme, useActiveSection
  i18n/         content.ts (tous les textes FR/EN), types.ts, LangProvider
  styles/       tokens.css (couleurs, typo), base.css, app.css
  assets/       portrait et images de projets (WebP)
public/         favicon et NATHAN_VERDIER_CV.pdf
```

## Modifier le contenu

- **Textes** : tout est dans `src/i18n/content.ts`, en français et en anglais. Le typage oblige à renseigner les deux langues.
- **Projets** : ajouter une entrée dans `src/data/projects.ts` (date `AAAA` ou `AAAA-MM`, catégories, stack, textes FR/EN, image optionnelle dans `src/assets/projects/`). La liste est triée automatiquement par date décroissante.
- **CV** : remplacer `public/NATHAN_VERDIER_CV.pdf`.
- **Couleurs et typographie** : variables CSS dans `src/styles/tokens.css` (thèmes clair et sombre).

## Déploiement

- **GitHub Pages** : `npm run deploy` construit le site et publie `dist/` avec `gh-pages`.
- **Conteneur (CodeFirst, IUT)** : `docker/Dockerfile` construit avec `--base=/containers/nathanverdier-portfolio/` puis sert `dist/` avec Nginx. Le pipeline Drone est défini dans `.drone.yml`.

`vite.config.ts` utilise un `base` relatif (`./`) : le même build fonctionne sous `/portfolio/`, dans un conteneur ou en local. Un `--base` passé en ligne de commande reste prioritaire.

## Intégration continue

`.github/workflows/ci.yml` lance le lint et le build à chaque push sur `main` et à chaque pull request.
