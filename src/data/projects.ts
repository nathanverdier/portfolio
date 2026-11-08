import type { Category, Localized } from '../i18n/types'

import asl_cover from '../assets/projects/asl-cover.webp'
import asl_thumb from '../assets/projects/asl-thumb.webp'
import boardconquest_cover from '../assets/projects/boardconquest-cover.webp'
import boardconquest_thumb from '../assets/projects/boardconquest-thumb.webp'
import doushouqi_cover from '../assets/projects/doushouqi-cover.webp'
import doushouqi_thumb from '../assets/projects/doushouqi-thumb.webp'
import keepsafe_cover from '../assets/projects/keepsafe-cover.webp'
import keepsafe_thumb from '../assets/projects/keepsafe-thumb.webp'
import kotanga_cover from '../assets/projects/kotanga-cover.webp'
import kotanga_thumb from '../assets/projects/kotanga-thumb.webp'
import secumeltdown_thumb from '../assets/projects/secumeltdown-thumb.webp'
import starlearn_cover from '../assets/projects/starlearn-cover.webp'
import starlearn_thumb from '../assets/projects/starlearn-thumb.webp'
import syncup_cover from '../assets/projects/syncup-cover.webp'
import syncup_thumb from '../assets/projects/syncup-thumb.webp'
import toxireality_cover from '../assets/projects/toxireality-cover.webp'
import toxireality_thumb from '../assets/projects/toxireality-thumb.webp'

export interface Project {
  id: string
  title: string
  /** `AAAA-MM` ou `AAAA`. Sert au tri (plus récent d'abord) et à l'affichage. */
  date: string
  categories: Category[]
  stack: string[]
  tagline: Localized<string>
  text: Localized<string>
  thumb?: string
  cover?: string
  url?: string
}

const projects: Project[] = [
  {
    id: 'qoracle',
    title: 'qoracle',
    date: '2026',
    categories: ['research'],
    stack: ['Python'],
    tagline: {
      fr: 'Synthèse d’oracles quantiques, projet de recherche à l’ESIEA',
      en: 'Quantum oracle synthesis, a research project at ESIEA',
    },
    text: {
      fr: 'Projet de recherche encadré par Arnaud Valence à l’ESIEA. Il étudie l’effet de la structure des circuits booléens sur le coût en portes quantiques. Je développe un pipeline de recherche et un package Python, qoracle, avec une interface web. Il couvre trois synthèses : booléen vers réversible, réversible vers portes élémentaires, et booléen vers portes élémentaires en direct.',
      en: 'Research project supervised by Arnaud Valence at ESIEA. It studies how the structure of Boolean circuits affects quantum gate cost. I’m building a research pipeline and a Python package, qoracle, with a web interface. It covers three syntheses: Boolean to reversible, reversible to elementary gates, and Boolean to elementary gates directly.',
    },
  },
  {
    id: 'syncup-fitness',
    title: 'SyncUp Fitness',
    date: '2025-03',
    categories: ['mobile', 'embedded', 'ai'],
    stack: ['Flutter', 'Dart', 'Python', 'ESP32', 'Raspberry Pi', 'MediaPipe', 'OpenCV'],
    tagline: {
      fr: 'Application Android pour optimiser l’entraînement en salle de sport',
      en: 'Android app to optimise gym training',
    },
    text: {
      fr: 'SyncUp Fitness est une application mobile qui permet de suivre ses performances pendant les séances de musculation. Grâce à des capteurs ESP32 et à une caméra Raspberry Pi, elle collecte la fréquence cardiaque, la saturation en oxygène et d’autres paramètres corporels. Ces données sont affichées dans l’application et analysées par une IA qui donne des conseils personnalisés pour progresser et éviter les blessures. Le projet propose une alternative abordable à celles et ceux qui ne peuvent pas payer un coach personnel.',
      en: 'SyncUp Fitness is a mobile app that tracks performance during gym sessions. Using ESP32 sensors and a Raspberry Pi camera, it collects heart rate, blood oxygen level and other key body parameters. The data is shown in the app and analysed by an AI that gives personalised advice to improve performance and prevent injuries. The project offers an affordable alternative for people who can’t afford a personal coach.',
    },
    thumb: syncup_thumb,
    cover: syncup_cover,
    url: 'https://github.com/nathanverdier/SyncUp-Fitness',
  },
  {
    id: 'toxireality',
    title: 'ToxiReality',
    date: '2024-06',
    categories: ['ai'],
    stack: ['HoloLens 2'],
    tagline: {
      fr: 'Reconnaissance faciale sur HoloLens 2, inspirée de Black Mirror',
      en: 'Facial recognition on HoloLens 2, inspired by Black Mirror',
    },
    text: {
      fr: 'Inspiré de l’épisode « Chute libre » (Nosedive) de Black Mirror, ce projet associe IA et reconnaissance faciale en temps réel avec le HoloLens. L’application suit les personnes reconnues en comparant les visages scannés par le HoloLens à une base de données via une API. Quand une personne est rencontrée, le HoloLens scanne son visage et interroge l’IA pour savoir si elle est connue ; en cas de correspondance, son nom s’affiche dans le casque. Le projet comprend une application qui regroupe toutes les personnes reconnues et une API backend pour l’identification et la mise en correspondance des visages.',
      en: 'Inspired by the Black Mirror episode “Nosedive”, this project combines AI with real-time face recognition on the HoloLens. The application keeps track of recognised people by matching faces scanned by the HoloLens against a database through an API. When someone is encountered, the HoloLens scans their face and asks the AI whether they’re known; if there’s a match, their name appears on the headset. The project includes an app that gathers all recognised people and a robust backend API for face identification and matching.',
    },
    thumb: toxireality_thumb,
    cover: toxireality_cover,
    url: 'https://github.com/nathanverdier/ToxiReality/',
  },
  {
    id: 'dou-shou-qi',
    title: 'Dou Shou Qi',
    date: '2024-06',
    categories: ['mobile', 'game'],
    stack: ['Swift', 'SwiftUI', 'SpriteKit'],
    tagline: {
      fr: 'Application iOS du jeu de plateau chinois Dou Shou Qi',
      en: 'iOS app of the Chinese board game Dou Shou Qi',
    },
    text: {
      fr: 'Réalisée en équipe de trois pendant ma 3e année de BUT, l’application permet de jouer au jeu de plateau chinois Dou Shou Qi. Elle permet aussi de consulter la liste des joueurs créés et leurs scores respectifs. Elle est développée en Swift avec SpriteKit et SwiftUI.',
      en: 'Built in a team of three during my 3rd year of BUT, the app lets you play the Chinese board game Dou Shou Qi. It also lets you view the list of players you’ve created and their scores. It’s written in Swift with SpriteKit and SwiftUI.',
    },
    thumb: doushouqi_thumb,
    cover: doushouqi_cover,
    url: 'https://github.com/nathanverdier/DouShouQi_App',
  },
  {
    id: 'secumeltdown',
    title: 'SecuMeltdown',
    date: '2023-10',
    categories: ['security'],
    stack: ['Python', 'Bash', 'Debian'],
    tagline: {
      fr: 'Faille matérielle des processeurs Intel exploitant l’exécution spéculative',
      en: 'Hardware flaw in Intel processors exploiting speculative execution',
    },
    text: {
      fr: 'Meltdown est une faille matérielle des processeurs Intel x86 qui permet à un attaquant d’accéder à de la mémoire protégée grâce à l’exécution spéculative. Découverte en janvier 2018, elle permet à du code non autorisé d’exécuter des opérations privilégiées et d’exposer des données sensibles comme des mots de passe ou des clés de chiffrement. Elle touche particulièrement les fournisseurs de cloud et les systèmes à base de paravirtualisation comme Docker. Des correctifs, comme l’isolation des tables de pages du noyau (KPTI) sous Linux, atténuent la faille, au prix de pertes de performances.',
      en: 'Meltdown is a hardware vulnerability in Intel x86 processors that lets attackers read protected memory through speculative execution. Discovered in January 2018, it allows unauthorised code to run privileged operations and expose sensitive data such as passwords and encryption keys. It particularly affects cloud providers and systems using paravirtualisation such as Docker. Patches like Kernel Page Table Isolation on Linux mitigate it, at some cost in performance.',
    },
    thumb: secumeltdown_thumb,
    url: 'https://github.com/nathanverdier/SecuMeltdown',
  },
  {
    id: 'boardconquest',
    title: 'BoardConquest',
    date: '2023-06',
    categories: ['game'],
    stack: ['C++', 'Unreal Engine'],
    tagline: {
      fr: 'Jeu d’échecs 3D revisité, réalisé à l’UQAC',
      en: 'A revisited 3D chess game, built at UQAC',
    },
    text: {
      fr: 'Réalisé à deux pendant ma formation à l’UQAC, ce jeu est un jeu d’échecs en 3D dont les pièces appartiennent à différentes races. On choisit parmi 3 plateaux dont la taille et les pièces de départ varient, ainsi que 3 pouvoirs à utiliser stratégiquement pendant la partie. Le jeu est développé avec Unreal Engine, principalement en C++.',
      en: 'Built by a team of two during my training at UQAC, this is a 3D chess game with pieces of different races. You choose between 3 boards whose size and starting pieces vary, and 3 powers to use strategically during the game. It’s built with Unreal Engine and mostly written in C++.',
    },
    thumb: boardconquest_thumb,
    cover: boardconquest_cover,
    url: 'https://gitlab.com/nathanverdier/boardconquest',
  },
  {
    id: 'kotanga',
    title: 'Kotanga',
    date: '2023-04',
    categories: ['mobile'],
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'GitLab'],
    tagline: {
      fr: 'Application Android de partage de dépenses, en équipe de cinq',
      en: 'Android app for sharing expenses, built by a team of five',
    },
    text: {
      fr: 'Notre application s’appelle Kotanga, qui signifie « compter » en lingala. Elle facilite les paiements entre amis, au sein d’un groupe comme des colocataires ou une famille. Dans l’application, vous êtes notifié quand un autre membre du groupe envoie un message, met à jour ses dettes, déclare une nouvelle dépense, etc. Le scanner fait gagner du temps pour déclarer une dépense. L’application est entièrement gratuite et sans publicité, et vos données ne sont accessibles qu’à vous, dans une base de données sécurisée.',
      en: 'Our app is called Kotanga, which means “to count” in Lingala. It makes payments between friends easier within a group such as roommates or a family. You’re notified when another group member sends a message, updates their debts, declares a new expense, and more. The scanner saves time when declaring an expense. The app is completely free and ad-free, and your data is accessible only to you, stored in a secure database.',
    },
    thumb: kotanga_thumb,
    cover: kotanga_cover,
    url: 'https://gitlab.com/nathanverdier/kotanga',
  },
  {
    id: 'starlearn',
    title: 'StarLearn',
    date: '2023-04',
    categories: ['ai'],
    stack: ['KNN', 'SVM', 'CVFDT'],
    tagline: {
      fr: 'Classification d’exoplanètes par machine learning',
      en: 'Exoplanet classification with machine learning',
    },
    text: {
      fr: 'StarLearn consiste à entraîner un modèle qui classe de nouvelles planètes comme exoplanètes ou non. Le projet traite les valeurs manquantes, équilibre les classes et normalise les données (MinMax, standardisation), puis applique une réduction de dimension et une sélection de variables. Trois modèles de classification, dont K plus proches voisins, SVM et CVFDT, sont évalués avec des métriques de validation. Une interface permet d’importer ou de saisir de nouvelles planètes pour les classer et d’afficher les résultats et les métriques des modèles.',
      en: 'StarLearn trains a model to classify new planets as exoplanets or not. The project handles missing values, balances class distributions and normalises data (MinMax scaling, standardisation), then applies dimension reduction and feature selection. Three classification models, including K-Nearest Neighbors, SVM and CVFDT, are evaluated with validation metrics. A user interface lets you upload or enter new planets to classify, and shows the results and model evaluation metrics.',
    },
    thumb: starlearn_thumb,
    cover: starlearn_cover,
    url: 'https://github.com/nathanverdier/StarLearn',
  },
  {
    id: 'asl-recognition',
    title: 'ASL recognition',
    date: '2023-04',
    categories: ['ai'],
    stack: ['Python', 'Keras', 'JAX'],
    tagline: {
      fr: 'Reconnaissance en temps réel de la langue des signes américaine',
      en: 'Real-time recognition of American Sign Language',
    },
    text: {
      fr: 'ASL Recognizer est un projet d’IA qui détecte en temps réel des gestes de la langue des signes américaine (ASL) et les transcrit en texte. À l’aide de techniques de deep learning, il reconnaît les gestes de la main à partir d’images et les convertit en texte. Le jeu de données vient de Roboflow et regroupe des gestes capturés dans des conditions variées. Le projet utilise Keras pour construire le modèle et JAX pour optimiser l’entraînement.',
      en: 'ASL Recognizer is an AI project that detects American Sign Language (ASL) gestures in real time and transcribes them into text. Using deep learning, it recognises hand gestures from images and converts them into the matching text. The dataset comes from Roboflow and contains gestures captured under varied conditions. The project uses Keras to build the model and JAX to optimise training.',
    },
    thumb: asl_thumb,
    cover: asl_cover,
    url: 'https://github.com/nathanverdier/ASL_Recognizer',
  },
  {
    id: 'keepsafe',
    title: 'KeepSafe',
    date: '2023-01',
    categories: ['embedded', 'ai', 'security'],
    stack: ['Raspberry Pi'],
    tagline: {
      fr: 'Caméra de surveillance connectée avec détection par IA',
      en: 'Connected surveillance camera with AI detection',
    },
    text: {
      fr: 'KeepSafe est une caméra connectée pour surveiller à distance des bâtiments et d’autres lieux, utile notamment pour les propriétés isolées. Elle intègre la vision nocturne, la détection de mouvement et l’identification d’anomalies. Le principal défi est de surveiller efficacement avec un Raspberry Pi tout en protégeant la confidentialité et la sécurité des données. Le projet s’étend aussi à la photographie animalière et à la détection de fuites de chaleur, ce qui rend l’appareil polyvalent.',
      en: 'KeepSafe is a connected camera for remotely monitoring buildings and other areas, especially useful for remote properties. It includes night vision, motion detection and anomaly identification. The main challenge is effective surveillance on a Raspberry Pi while keeping data private and secure. The project also extends to wildlife photography and heat-leak detection, which makes the device versatile.',
    },
    thumb: keepsafe_thumb,
    cover: keepsafe_cover,
    url: 'https://github.com/nathanverdier/KeepSafe',
  },
]

export const PROJECTS: readonly Project[] = [...projects].sort((a, b) => b.date.localeCompare(a.date))
