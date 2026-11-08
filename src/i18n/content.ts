import { HTB_STREAK_WEEKS, THM_STREAK_DAYS } from '../data/stats'
import { CV_URL, EMAIL, GITHUB, HACKTHEBOX, LINKEDIN, ROOTME, TRYHACKME } from '../data/links'
import type { Content, Lang } from './types'

const fr: Content = {
  meta: {
    title: 'Nathan Verdier, élève-ingénieur en informatique, majeure cybersécurité',
    description:
      'Portfolio de Nathan Verdier : élève-ingénieur en informatique à l’ESIEA, majeure cybersécurité (ISO 27001, EBIOS RM, tests d’intrusion), machine learning et systèmes embarqués. En alternance chez IMAAAGERY.',
  },
  skip: 'Aller au contenu',
  nav: {
    label: 'Sections de la page',
    items: {
      about: 'Profil',
      career: 'Parcours',
      certifications: 'Certifications',
      training: 'Entraînement',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
  },
  tools: { language: 'Langue', theme: 'Changer de thème clair ou sombre' },
  hero: {
    role: 'Élève-ingénieur en informatique, majeure cybersécurité',
    school: 'ESIEA, 5e année',
    status: 'En alternance chez IMAAAGERY, Clermont-Ferrand',
    line: 'Je conçois et je sécurise des systèmes : conformité ISO 27001, infrastructure, tests d’intrusion et machine learning.',
    metrics: [
      {
        label: 'TryHackMe',
        value: 'Top 2 %',
        caption: 'Ligue Gold, parcours Pre Security et Cyber Security 101 terminés',
        tone: 'warn',
      },
      {
        label: 'Série TryHackMe',
        value: String(THM_STREAK_DAYS),
        unit: 'jours',
        caption: 'Plus longue série d’activité, entraînement quotidien depuis un an',
      },
      {
        label: 'Série Hack The Box',
        value: String(HTB_STREAK_WEEKS),
        unit: 'semaines',
        caption: 'Academy : Junior Cybersecurity Analyst à 89 % (16 modules sur 20)',
      },
      {
        label: 'Hackathon du CND 2025',
        value: '4e',
        unit: 'place',
        caption: 'Au Mont-Valérien',
      },
    ],
    downloadCv: 'Télécharger le CV',
    contact: 'Me contacter',
    portraitAlt: 'Portrait de Nathan Verdier',
  },
  about: {
    title: 'Profil',
    paragraphs: [
      'Je suis élève-ingénieur en informatique à l’ESIEA, en majeure cybersécurité, et je travaille en alternance chez IMAAAGERY, une entreprise d’intelligence artificielle pour la cosmétique à Clermont-Ferrand. J’y mène la mise en conformité ISO 27001:2022 et la conception d’une architecture sécurisée, et je développe des pipelines de machine learning pour l’analyse d’images.',
      'Je m’entraîne tous les jours sur Hack The Box et TryHackMe depuis un an, après avoir commencé par la sécurité web sur Root-Me. J’aime aussi descendre au niveau du matériel : systèmes embarqués, Linux, hardware hacking.',
      'Hors écran, je fais de la musculation depuis dix ans, un peu de tennis et de la guitare.',
    ],
    pillarsTitle: 'Domaines d’intervention',
    pillars: [
      {
        name: 'Gouvernance et conformité',
        text: 'Cadrer le risque, écrire la politique de sécurité et prouver la conformité.',
        tags: ['ISO 27001:2022', 'EBIOS RM', 'PSSI', 'CNIL et RGPD', 'PCA et PRA'],
      },
      {
        name: 'Sécurité offensive',
        text: 'Pratique quotidienne depuis un an : web, réseau et systèmes. Top 2 % sur TryHackMe, 4e au hackathon du CND 2025.',
        tags: ['Hack The Box', 'TryHackMe', 'Root-Me', 'Burp Suite', 'Injections SQL', 'XSS'],
      },
      {
        name: 'Infrastructure sûre',
        text: 'Réseau segmenté, authentification forte, identités centralisées et sauvegardes chiffrées.',
        tags: ['UniFi', 'VLAN', 'WPA3-Enterprise', 'RADIUS', 'WireGuard', 'Entra ID', 'Intune'],
      },
      {
        name: 'Développement et IA',
        text: 'Pipelines de machine learning pour l’analyse d’images, applications web, mobiles et embarquées.',
        tags: ['Python', 'PyTorch', 'OpenCV', 'React', 'Flutter', 'Raspberry Pi'],
      },
    ],
  },
  career: {
    title: 'Parcours',
    experience: 'Expérience',
    education: 'Formation',
    other: 'Autres expériences',
    current: 'En cours',
    experienceItems: [
      {
        dates: 'Depuis avr. 2025',
        current: true,
        title: 'Ingénieur cybersécurité et machine learning, en alternance',
        org: 'IMAAAGERY',
        place: 'Clermont-Ferrand',
        bullets: [
          {
            lead: 'SMSI ISO 27001:2022',
            text: 'de bout en bout : annexes A1 à A45, PSSI et 13 recommandations de l’ANSSI pour les PME (guide « La cybersécurité pour les TPE/PME en 13 questions »).',
          },
          {
            lead: 'Architecture',
            text: 'pivot d’une infrastructure auto-hébergée vers une pile Microsoft cloud ; réseau UniFi, VLAN, WPA3-Enterprise avec RADIUS.',
          },
          {
            lead: 'Conformité et sensibilisation',
            text: 'formation des employés, obligations CNIL, RGPD et ISO 27001 ; plan de continuité (PCA) et plan de reprise d’activité (PRA).',
          },
          {
            lead: 'Sauvegarde',
            text: 'sauvegarde incrémentale et chiffrée sur NAS Synology, avec réplication sur le cloud.',
          },
          {
            lead: 'Machine learning',
            text: 'Projet Lumière (capture photo intelligente et « shade finder » qui restitue la teinte authentique de la peau) ; pipeline SunDamage (CLAHE, MediaPipe, ondelettes de Daubechies, seuillage d’Otsu adapté au phototype).',
          },
        ],
      },
      {
        dates: 'Sept. 2023 – sept. 2024',
        title: 'Alternance en web, machine learning et deep learning',
        org: 'IMAAAGERY',
        place: 'Clermont-Ferrand',
        bullets: [
          {
            lead: 'Vision et ML',
            text: 'segmentation, classification et clustering avec PyTorch, YOLOv8 et KNN.',
          },
          { lead: 'Web', text: 'outils web en React JS et Radix UI.' },
        ],
      },
      {
        dates: 'Avr. – juin 2023',
        title: 'Stage en développement de jeu vidéo',
        org: 'Université du Québec à Chicoutimi (UQAC)',
        place: 'Chicoutimi, Canada',
        text: '10 semaines au laboratoire d’informatique : Unreal Engine, C++ et gestion de versions avec Perforce.',
      },
    ],
    educationItems: [
      {
        dates: '2025 – aujourd’hui',
        current: true,
        title: 'Diplôme d’ingénieur, majeure cybersécurité (5e année)',
        org: 'ESIEA',
        text: 'Méthodologie de la sécurité (ENT5003), sécurité des réseaux locaux, pare-feu et proxy, audit, forensic. Projet de recherche qoracle.',
      },
      {
        dates: '2024 – 2025',
        title: 'Master Systèmes embarqués pour le traitement du signal, de l’image et du son',
        org: 'Université Clermont Auvergne, EUPI',
        place: 'Clermont-Ferrand',
        text: 'Systèmes embarqués (microcontrôleurs, FPGA, C/C++, assembleur), machine learning et IA embarqués, intégration matériel-logiciel, traitement du signal et de l’image.',
      },
      {
        dates: '2021 – 2024',
        title: 'BUT Informatique',
        org: 'IUT Informatique, Université Clermont Auvergne',
        place: 'Clermont-Ferrand',
        text: 'Prix « Numérique responsable » aux 24h pour entreprendre.',
      },
      {
        dates: 'Janv. – juin 2023',
        title: 'Programme court d’informatique pour étudiants en échange',
        org: 'UQAC',
        place: 'Chicoutimi, Canada',
      },
      {
        dates: '2018 – 2020',
        title: 'Baccalauréat STI2D',
        org: 'Lycée Jean-Zay',
        place: 'Thiers',
        text: 'Diplômé avec mention.',
      },
    ],
    otherItems: [
      {
        dates: 'Juin – oct. 2021 et juin – août 2022',
        title: 'Équipier polyvalent en restauration rapide',
        org: 'McDonald’s',
        text: 'Travail en équipe, gestion du stress et des coups de feu.',
      },
      {
        dates: 'Juin – août 2018',
        title: 'Job d’été en atelier de maintenance aéronautique',
        text: 'Inventaire du magasin, installation de l’atelier et assistance aux opérateurs pour la réparation de composants d’avion.',
      },
    ],
  },
  training: {
    title: 'Entraînement',
    intro: 'Pratique quotidienne depuis un an, en plus des cours et de l’alternance.',
    items: [
      {
        term: 'TryHackMe',
        detail: `Top 2 % du classement, ligue Gold, série de ${THM_STREAK_DAYS} jours. Parcours Pre Security et Cyber Security 101 terminés ; AI Security en cours (59 %), SOC Level 1 et Junior Penetration Tester entamés.`,
        href: TRYHACKME,
      },
      {
        term: 'Hack The Box',
        detail: `Academy : parcours Junior Cybersecurity Analyst à 89 % (16 modules sur 20), préparation de la certification CJCA, niveau 42, ${HTB_STREAK_WEEKS} semaines consécutives d’activité. Labs en complément.`,
        href: HACKTHEBOX,
      },
      {
        term: 'Root-Me',
        detail:
          'Mon point de départ en sécurité web : 24 challenges validés (HTTP, upload de fichiers, open redirect, contournement de filtrage IP).',
        href: ROOTME,
      },
    ],
  },
  certifications: {
    title: 'Certifications et distinctions',
    items: [
      {
        term: 'EBIOS Risk Manager',
        detail: 'Certification en analyse de risques cybersécurité.',
        tag: { label: 'Certifié', tone: 'ok' },
      },
      {
        term: 'SecNumacadémie',
        detail: 'MOOC de l’ANSSI, suivi et validé.',
        tag: { label: 'Validé', tone: 'ok' },
      },
      {
        term: 'MOOC RGPD',
        detail: 'Formation à la protection des données personnelles (CNIL), suivie et validée.',
        tag: { label: 'Validé', tone: 'ok' },
      },
      {
        term: 'AWS Academy Cloud Foundations',
        detail: 'Fondamentaux du cloud AWS.',
        tag: { label: 'Validé', tone: 'ok' },
      },
      {
        term: 'AWS Academy Cloud Security Foundations',
        detail: 'Fondamentaux de la sécurité sur AWS.',
        tag: { label: 'Validé', tone: 'ok' },
      },
      {
        term: 'Hackathon du CND 2025',
        detail: '4e place, au Mont-Valérien.',
        tag: { label: '4e place', tone: 'warn' },
      },
      {
        term: 'Prix « Numérique responsable »',
        detail: 'Décerné aux 24h pour entreprendre.',
        tag: { label: 'Récompense', tone: 'warn' },
      },
    ],
  },
  skills: {
    title: 'Compétences',
    groups: [
      {
        term: 'Sécurité et conformité',
        items: [
          'ISO 27001:2022',
          'EBIOS RM',
          'PSSI',
          'Recommandations ANSSI pour les PME',
          'Analyse de risques',
          'Obligations CNIL',
          'Injections SQL',
          'XSS',
          'Cryptographie',
          'Buffer overflow',
        ],
      },
      {
        term: 'Réseau et infrastructure',
        items: [
          'Wi-Fi',
          'NAT',
          'Routage',
          'UniFi',
          'VLAN',
          'WPA3-Enterprise',
          'RADIUS',
          'WireGuard',
          'Entra ID',
          'Intune',
          'Defender for Business',
        ],
      },
      {
        term: 'DevSecOps et machine learning',
        items: ['CI/CD', 'SonarQube', 'Trivy', 'Burp Suite', 'PyTorch', 'YOLOv8', 'KNN', 'OpenCV', 'MediaPipe'],
      },
      {
        term: 'Langages',
        items: [
          'Python',
          'C',
          'C++',
          'C#',
          'Java',
          'Bash',
          '.NET',
          'VHDL',
          'PHP',
          'Swift',
          'Kotlin',
          'Dart',
          'TypeScript',
        ],
      },
      {
        term: 'Web, mobile et bases de données',
        items: ['React JS', 'React Native', 'Flutter', 'HTML', 'CSS', 'Oracle SQL', 'PostgreSQL', 'MongoDB'],
      },
      {
        term: 'Systèmes et embarqué',
        items: ['Linux (Debian 12)', 'Parrot OS', 'Windows 11', 'Arduino', 'Raspberry Pi 4', 'ESP32', 'FPGA (MAX10)'],
      },
    ],
  },
  projects: {
    title: 'Projets',
    intro: 'Projets de recherche, de cours et personnels. Un clic sur un projet ouvre son détail.',
    filterLabel: 'Filtrer les projets par domaine',
    all: 'Tous',
    categories: {
      security: 'Sécurité',
      ai: 'IA et ML',
      mobile: 'Mobile',
      embedded: 'Embarqué',
      game: 'Jeux',
      research: 'Recherche',
    },
    stack: 'Technologies',
    close: 'Fermer',
    code: 'Voir le code sur',
    details: 'Voir le détail de',
    previous: 'Projet précédent',
    next: 'Projet suivant',
    count: 'sur',
  },
  contact: {
    title: 'Contact',
    text: 'Une question, une opportunité ou un projet à discuter : écris-moi.',
    copy: 'Copier',
    copied: 'Copié',
    items: [
      { term: 'E-mail', detail: EMAIL, href: `mailto:${EMAIL}`, copy: true },
      { term: 'LinkedIn', detail: 'nathan-verdier', href: LINKEDIN },
      { term: 'GitHub', detail: 'nathanverdier', href: GITHUB },
      { term: 'CV', detail: 'Télécharger le CV (PDF, 1 page)', href: CV_URL },
    ],
  },
  footer: { rights: 'Nathan Verdier. Site réalisé avec React et Vite.' },
}

const en: Content = {
  meta: {
    title: 'Nathan Verdier, computer engineering student, cybersecurity major',
    description:
      'Portfolio of Nathan Verdier: computer engineering student at ESIEA, cybersecurity major (ISO 27001, EBIOS RM, penetration testing), machine learning and embedded systems. Work-study at IMAAAGERY.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Page sections',
    items: {
      about: 'Profile',
      career: 'Career',
      certifications: 'Certifications',
      training: 'Training',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
  },
  tools: { language: 'Language', theme: 'Switch between light and dark theme' },
  hero: {
    role: 'Computer engineering student, cybersecurity major',
    school: 'ESIEA, 5th year',
    status: 'Work-study at IMAAAGERY, Clermont-Ferrand',
    line: 'I design and secure systems: ISO 27001 compliance, infrastructure, penetration testing and machine learning.',
    metrics: [
      {
        label: 'TryHackMe',
        value: 'Top 2%',
        caption: 'Gold league, Pre Security and Cyber Security 101 paths completed',
        tone: 'warn',
      },
      {
        label: 'TryHackMe streak',
        value: String(THM_STREAK_DAYS),
        unit: 'days',
        caption: 'Longest activity streak, daily training for a year',
      },
      {
        label: 'Hack The Box streak',
        value: String(HTB_STREAK_WEEKS),
        unit: 'weeks',
        caption: 'Academy: Junior Cybersecurity Analyst path at 89% (16 of 20 modules)',
      },
      {
        label: 'CND 2025 hackathon',
        value: '4th',
        unit: 'place',
        caption: 'At Mont-Valérien',
      },
    ],
    downloadCv: 'Download my CV',
    contact: 'Get in touch',
    portraitAlt: 'Portrait of Nathan Verdier',
  },
  about: {
    title: 'Profile',
    paragraphs: [
      'I’m a computer engineering student at ESIEA with a cybersecurity major, on a work-study programme at IMAAAGERY, an AI company for cosmetics in Clermont-Ferrand. There I lead the ISO 27001:2022 compliance work and the design of a secure architecture, and I build machine learning pipelines for image analysis.',
      'I’ve trained every day on Hack The Box and TryHackMe for a year, after starting with web security on Root-Me. I also like going down to the hardware level: embedded systems, Linux, hardware hacking.',
      'Away from the screen: weight training for ten years, some tennis and guitar.',
    ],
    pillarsTitle: 'Areas of work',
    pillars: [
      {
        name: 'Governance and compliance',
        text: 'Frame the risk, write the security policy and prove compliance.',
        tags: ['ISO 27001:2022', 'EBIOS RM', 'Security policy (PSSI)', 'CNIL and GDPR', 'BCP and DRP'],
      },
      {
        name: 'Offensive security',
        text: 'Daily practice for a year: web, network and systems. Top 2% on TryHackMe, 4th at the CND 2025 hackathon.',
        tags: ['Hack The Box', 'TryHackMe', 'Root-Me', 'Burp Suite', 'SQL injection', 'XSS'],
      },
      {
        name: 'Secure infrastructure',
        text: 'Segmented network, strong authentication, centralised identities and encrypted backups.',
        tags: ['UniFi', 'VLAN', 'WPA3-Enterprise', 'RADIUS', 'WireGuard', 'Entra ID', 'Intune'],
      },
      {
        name: 'Development and AI',
        text: 'Machine learning pipelines for image analysis, plus web, mobile and embedded applications.',
        tags: ['Python', 'PyTorch', 'OpenCV', 'React', 'Flutter', 'Raspberry Pi'],
      },
    ],
  },
  career: {
    title: 'Career',
    experience: 'Experience',
    education: 'Education',
    other: 'Other experience',
    current: 'Current',
    experienceItems: [
      {
        dates: 'Since Apr 2025',
        current: true,
        title: 'Cybersecurity and machine learning engineer (work-study)',
        org: 'IMAAAGERY',
        place: 'Clermont-Ferrand, France',
        bullets: [
          {
            lead: 'ISO 27001:2022 ISMS',
            text: 'end to end: annexes A1 to A45, security policy (PSSI) and the 13 ANSSI recommendations for SMEs (guide “La cybersécurité pour les TPE/PME en 13 questions”).',
          },
          {
            lead: 'Architecture',
            text: 'moved from a self-hosted infrastructure to a Microsoft cloud stack; UniFi network, VLANs, WPA3-Enterprise with RADIUS.',
          },
          {
            lead: 'Compliance and awareness',
            text: 'employee training, CNIL obligations, GDPR and ISO 27001; business continuity (PCA) and disaster recovery (PRA) plans.',
          },
          {
            lead: 'Backup',
            text: 'incremental, encrypted backups on a Synology NAS, replicated to the cloud.',
          },
          {
            lead: 'Machine learning',
            text: 'Lumière project (smart photo capture and a “shade finder” that returns the person’s true skin tone); SunDamage pipeline (CLAHE, MediaPipe, Daubechies wavelets, Otsu thresholding adapted to skin phototype).',
          },
        ],
      },
      {
        dates: 'Sep 2023 – Sep 2024',
        title: 'Work-study in web, machine learning and deep learning',
        org: 'IMAAAGERY',
        place: 'Clermont-Ferrand, France',
        bullets: [
          {
            lead: 'Vision and ML',
            text: 'segmentation, classification and clustering with PyTorch, YOLOv8 and KNN.',
          },
          { lead: 'Web', text: 'web tools built with React JS and Radix UI.' },
        ],
      },
      {
        dates: 'Apr – Jun 2023',
        title: 'Video game development internship',
        org: 'Université du Québec à Chicoutimi (UQAC)',
        place: 'Chicoutimi, Canada',
        text: '10 weeks in the computer lab: Unreal Engine, C++ and version control with Perforce.',
      },
    ],
    educationItems: [
      {
        dates: '2025 – present',
        current: true,
        title: 'Engineering degree, cybersecurity major (5th year)',
        org: 'ESIEA',
        text: 'Security methodology (ENT5003), local network security, firewalls and proxies, auditing, forensics. Research project qoracle.',
      },
      {
        dates: '2024 – 2025',
        title: 'Master’s in embedded systems for signal, image and sound processing',
        org: 'Université Clermont Auvergne, EUPI',
        place: 'Clermont-Ferrand, France',
        text: 'Embedded systems (microcontrollers, FPGA, C/C++, assembly), machine learning and AI for embedded systems, hardware-software integration, signal and image processing.',
      },
      {
        dates: '2021 – 2024',
        title: 'Bachelor of Technology in Computer Science (BUT)',
        org: 'IUT Informatique, Université Clermont Auvergne',
        place: 'Clermont-Ferrand, France',
        text: '“Responsible Digital” prize at the “24h to undertake” event.',
      },
      {
        dates: 'Jan – Jun 2023',
        title: 'Short computer science programme for exchange students',
        org: 'UQAC',
        place: 'Chicoutimi, Canada',
      },
      {
        dates: '2018 – 2020',
        title: 'High school diploma (STI2D)',
        org: 'Lycée Jean-Zay',
        place: 'Thiers, France',
        text: 'Graduated with honours.',
      },
    ],
    otherItems: [
      {
        dates: 'Jun – Oct 2021 and Jun – Aug 2022',
        title: 'Crew member, fast food',
        org: 'McDonald’s',
        text: 'Teamwork, stress management and handling rushes.',
      },
      {
        dates: 'Jun – Aug 2018',
        title: 'Summer job in an aircraft maintenance workshop',
        text: 'Store inventory, workshop setup and helping operators repair aircraft components.',
      },
    ],
  },
  training: {
    title: 'Training',
    intro: 'Daily practice for a year, on top of classes and work-study.',
    items: [
      {
        term: 'TryHackMe',
        detail: `Top 2% of the ranking, Gold league, ${THM_STREAK_DAYS}-day streak. Pre Security and Cyber Security 101 paths completed; AI Security in progress (59%), SOC Level 1 and Junior Penetration Tester started.`,
        href: TRYHACKME,
      },
      {
        term: 'Hack The Box',
        detail: `Academy: Junior Cybersecurity Analyst path at 89% (16 of 20 modules), preparing the CJCA certification, level 42, ${HTB_STREAK_WEEKS} consecutive weeks of activity. Labs alongside.`,
        href: HACKTHEBOX,
      },
      {
        term: 'Root-Me',
        detail:
          'My starting point in web security: 24 challenges solved (HTTP, file upload, open redirect, IP filter bypass).',
        href: ROOTME,
      },
    ],
  },
  certifications: {
    title: 'Certifications and awards',
    items: [
      {
        term: 'EBIOS Risk Manager',
        detail: 'Certification in cybersecurity risk analysis.',
        tag: { label: 'Certified', tone: 'ok' },
      },
      {
        term: 'SecNumacadémie',
        detail: 'ANSSI MOOC, completed and passed.',
        tag: { label: 'Completed', tone: 'ok' },
      },
      {
        term: 'GDPR MOOC',
        detail: 'Personal data protection course (CNIL), completed and passed.',
        tag: { label: 'Completed', tone: 'ok' },
      },
      {
        term: 'AWS Academy Cloud Foundations',
        detail: 'AWS cloud fundamentals.',
        tag: { label: 'Completed', tone: 'ok' },
      },
      {
        term: 'AWS Academy Cloud Security Foundations',
        detail: 'AWS security fundamentals.',
        tag: { label: 'Completed', tone: 'ok' },
      },
      {
        term: 'CND 2025 hackathon',
        detail: '4th place, at Mont-Valérien.',
        tag: { label: '4th place', tone: 'warn' },
      },
      {
        term: '“Responsible Digital” prize',
        detail: 'Awarded at the “24h to undertake” event.',
        tag: { label: 'Award', tone: 'warn' },
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        term: 'Security and compliance',
        items: [
          'ISO 27001:2022',
          'EBIOS RM',
          'Security policy (PSSI)',
          'ANSSI recommendations for SMEs',
          'Risk analysis',
          'CNIL obligations',
          'SQL injection',
          'XSS',
          'Cryptography',
          'Buffer overflow',
        ],
      },
      {
        term: 'Network and infrastructure',
        items: [
          'Wi-Fi',
          'NAT',
          'Routing',
          'UniFi',
          'VLAN',
          'WPA3-Enterprise',
          'RADIUS',
          'WireGuard',
          'Entra ID',
          'Intune',
          'Defender for Business',
        ],
      },
      {
        term: 'DevSecOps and machine learning',
        items: ['CI/CD', 'SonarQube', 'Trivy', 'Burp Suite', 'PyTorch', 'YOLOv8', 'KNN', 'OpenCV', 'MediaPipe'],
      },
      {
        term: 'Languages',
        items: [
          'Python',
          'C',
          'C++',
          'C#',
          'Java',
          'Bash',
          '.NET',
          'VHDL',
          'PHP',
          'Swift',
          'Kotlin',
          'Dart',
          'TypeScript',
        ],
      },
      {
        term: 'Web, mobile and databases',
        items: ['React JS', 'React Native', 'Flutter', 'HTML', 'CSS', 'Oracle SQL', 'PostgreSQL', 'MongoDB'],
      },
      {
        term: 'Systems and embedded',
        items: ['Linux (Debian 12)', 'Parrot OS', 'Windows 11', 'Arduino', 'Raspberry Pi 4', 'ESP32', 'FPGA (MAX10)'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro: 'Research, course and personal projects. Select a project to see its details.',
    filterLabel: 'Filter projects by field',
    all: 'All',
    categories: {
      security: 'Security',
      ai: 'AI and ML',
      mobile: 'Mobile',
      embedded: 'Embedded',
      game: 'Games',
      research: 'Research',
    },
    stack: 'Technologies',
    close: 'Close',
    code: 'View the code on',
    details: 'See details for',
    previous: 'Previous project',
    next: 'Next project',
    count: 'of',
  },
  contact: {
    title: 'Contact',
    text: 'A question, an opportunity or a project to discuss: write to me.',
    copy: 'Copy',
    copied: 'Copied',
    items: [
      { term: 'Email', detail: EMAIL, href: `mailto:${EMAIL}`, copy: true },
      { term: 'LinkedIn', detail: 'nathan-verdier', href: LINKEDIN },
      { term: 'GitHub', detail: 'nathanverdier', href: GITHUB },
      {
        term: 'CV',
        detail: 'Download my CV (PDF, 1 page, in French)',
        href: CV_URL,
      },
    ],
  },
  footer: { rights: 'Nathan Verdier. Built with React and Vite.' },
}

export const content: Record<Lang, Content> = { fr, en }
