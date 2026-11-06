import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss,
  SiWondersharefilmora,
  SiCanva,
  SiJavascript,
  SiWordpress,
  SiCloudinary,
  SiVite,
} from 'react-icons/si'

import {
  HiOutlineCommandLine,
  HiOutlineServerStack,
  HiOutlineAcademicCap,
  HiOutlineVideoCamera,
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineSwatch,
  HiOutlineWrenchScrewdriver,
  HiOutlineEnvelope,
} from 'react-icons/hi2'

export const skillGroups = [
  {
    title: 'Développement Web',
    subtitle: 'Applications web Front-End, Full-Stack & solutions CMS',
    items: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'React.js / Vite', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'WordPress & WooCommerce', icon: SiWordpress },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'NodeMailer / SMTP', icon: HiOutlineEnvelope },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    title: 'Technologies Émergentes & Design',
    subtitle: 'Outils IA audiovisuels, montage vidéo, UI design & graphisme',
    items: [
      { name: 'Figma (UI Design)', icon: SiFigma },
      { name: 'Canva (Graphisme)', icon: SiCanva },
      { name: 'Wondershare Filmora', icon: SiWondersharefilmora },
      { name: 'CapCut & VN', icon: HiOutlineVideoCamera },
      { name: 'Outils IA Audiovisuels', icon: HiOutlineSparkles },
      { name: 'Infographie & Affiches', icon: HiOutlineSwatch },
    ],
  },
  {
    title: 'Infrastructure, Maintenance & Leadership',
    subtitle: 'Réseaux, maintenance IT, direction technique (CTO) & mentorat',
    items: [
      { name: 'Direction Technique (CTO)', icon: HiOutlineCommandLine },
      { name: 'Formation & Mentorat', icon: HiOutlineAcademicCap },
      { name: 'Déploiement CI/CD & Hostinger', icon: HiOutlineServerStack },
      { name: 'Git & Gestion d’équipe', icon: SiGit },
      { name: 'Réseaux Informatiques', icon: HiOutlineCpuChip },
      { name: 'Maintenance Matérielle & Logicielle', icon: HiOutlineWrenchScrewdriver },
    ],
  },
]

export const skills = skillGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.title }))
)

export const experiences = [
  {
    period: 'Octobre 2026 — Actuellement',
    role: 'Développeur Full-Stack',
    company: 'SaaS — sunu_cv',
    desc: "Conception et développement complet d'une plateforme SaaS de création de CV professionnels assistée par l'IA. Intégration des paiements mobiles (Wave, Orange Money), gestion des médias via Cloudinary, envoi d'e-mails avec NodeMailer et système de code promotionnel (BAKELI -50%).",
    tags: ['React Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'NodeMailer', 'Cloudinary', 'Wave / Orange Money'],
  },
  {
    period: 'Juin 2026 — Novembre 2026',
    role: 'Développeur Full-Stack',
    company: 'Plateforme E-commerce — SBCI Thiès',
    desc: "Conception et réalisation d'une plateforme e-commerce complète dédiée à la vente de matériel informatique et de mobilier de bureau à Thiès.",
    tags: ['React Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'NodeMailer', 'Cloudinary'],
  },
  {
    period: 'Février 2026 — Avril 2026',
    role: 'Développeur Web',
    company: 'Plateforme Commerciale & MLM — Ndeye Diagne',
    desc: "Conception d'un site vitrine et e-commerce dédié à l'entrepreneuriat à domicile et aux produits de bien-être. Intégration sous WordPress, configuration de l'hébergement Hostinger et sécurisation des envois d'e-mails (SMTP).",
    tags: ['WordPress', 'Hostinger', 'SMTP', 'E-commerce'],
  },
  {
    period: 'Septembre 2025 — Décembre 2025',
    role: 'Développeur Web',
    company: 'Site de Réservation — Villa Petit Baobab',
    desc: "Conception d'un site de réservation de séjours avec calendrier interactif et gestion autonome des demandes. Intégration WordPress / WooCommerce (thème WP Rental), passerelle SMTP et hébergement Hostinger.",
    tags: ['WordPress', 'WooCommerce', 'WP Rental', 'SMTP', 'Hostinger'],
  },
  {
    period: 'Février 2025 — Présent',
    role: 'Co-fondateur & Directeur Technique',
    company: 'Studio Amed Njie',
    desc: "Intégration d'outils et workflows IA pour la production et l'automatisation du contenu multimédia. Création et pilotage d'un studio innovant de réalisation audiovisuelle assistée par l'intelligence artificielle. Réalisation d'un clip vidéo généré par IA pour l'artiste Abdou Guitte Seck (« Don de soi »).",
    tags: ['Direction Technique', 'Workflows IA', 'Audiovisuel IA', 'Montage & VFX'],
  },
  {
    period: 'Janvier 2025 — Avril 2025',
    role: 'Stagiaire Développeur / Formateur',
    company: 'Bakeli School of Technology',
    desc: "Participation active à la création de projets web internes (site vitrine WordPress, site e-commerce WordPress, intégration de plugins WordPress). Assistance aux sessions de formation et accompagnement technique des étudiants.",
    tags: ['WordPress', 'E-commerce', 'Plugins', 'Accompagnement'],
  },
  {
    period: 'Novembre 2024 — Présent',
    role: 'Chief Technology Officer (CTO)',
    company: 'OnlineClass',
    desc: "Formation & Mentorat : Animation de cours et webinaires en développement web et accompagnement personnalisé des apprenants. Contenu & Communication : Création de supports pédagogiques et multimédias (Reels, vidéos, posts sur YouTube, Instagram, TikTok et LinkedIn) pour maximiser l'engagement communautaire.",
    tags: ['CTO', 'Formation & Webinaires', 'Création de Contenu', 'Stratégie Digitale'],
  },
  {
    period: 'Depuis 2022',
    role: 'Tuteur en Programmation',
    company: 'OnlineClass',
    desc: "Accompagnement personnalisé d'étudiants en algorithmique, structures de données et développement web. Animation de séances de soutien technique et résolution de problèmes de code complexes.",
    tags: ['Algorithmique', 'Structures de données', 'Développement Web'],
  },
  {
    period: 'Depuis 2018',
    role: 'Technicien de Vente & Maintenance en Matériel Informatique',
    company: 'Indépendant / Commerce',
    desc: "Diagnostic, réparation et assemblage de matériels et équipements informatiques. Conseil client, gestion de stock et recommandation d'architectures matérielles adaptées aux besoins.",
    tags: ['Diagnostic & Réparation', 'Maintenance IT', 'Conseil & Architectures Matérielles'],
  },
]

export const education = [
  {
    period: '2025 — Actuellement',
    degree: 'Formation Développement Web / Mobile',
    institution: 'Bakeli School of Technology',
    detail: 'Pratique intensive du développement web full-stack, mobile et réalisation de projets professionnels.',
  },
  {
    period: '2024 — 2026',
    degree: 'Master 2 en Ingénierie Logicielle',
    institution: 'UNCHK (ex UVS)',
    detail: 'Conception logicielle avancée, architecture des systèmes d’information et gestion de projets.',
  },
  {
    period: '2024 — 2025',
    degree: 'Certificat de Compétence Professionnelle (CCP) en création de site web',
    institution: 'ISEP Thiès',
    detail: 'Création, intégration et déploiement de sites et applications web.',
  },
  {
    period: '2020 — 2023',
    degree: 'Licence Informatique & Développement Web / Mobile',
    institution: 'UNCHK (ex UVS)',
    detail: 'Algorithmique, programmation, bases de données et technologies web et mobiles.',
  },
  {
    period: '2019 — 2020',
    degree: 'Baccalauréat Scientifique (S2)',
    institution: 'Lycée Valdiodio Ndiaye Kaolack',
    detail: 'Série scientifique S2.',
  },
  {
    period: '2014 — 2015',
    degree: 'BFEM (Brevet de Fin d’Études Moyennes)',
    institution: 'Collège Privé Kocc Barma Thiès',
    detail: '',
  },
]

export const certifications = [
  {
    year: '2023',
    title: 'Certification en Développement Web',
    issuer: 'GOMYCODE',
  },
  {
    year: '2023',
    title: 'Certification Marketing & Commerce Digital',
    issuer: 'Force N',
  },
]

export const services = [
  {
    icon: HiOutlineCommandLine,
    title: 'Développement Front-End & Full-Stack',
    desc: 'Création d’applications web modernes avec React (Vite), Tailwind CSS, Node.js, MongoDB et intégration WordPress / WooCommerce.',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'Direction Technique (CTO) & IA',
    desc: 'Pilotage de projets technologiques, intégration d’outils IA dans les workflows métiers et déploiement CI/CD.',
  },
  {
    icon: HiOutlineVideoCamera,
    title: 'Montage Vidéo & Audiovisuel IA',
    desc: 'Réalisation de clips et vidéos promotionnelles assistés par IA, montage dynamique (Filmora, VN, CapCut) et habillage visuel.',
  },
  {
    icon: HiOutlineSwatch,
    title: 'UI Design & Infographie',
    desc: 'Conception d’interfaces sur Figma, affiches publicitaires, supports multimédias (Reels, posts) et identités visuelles sur Canva.',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Formation, Tutorat & Webinaires',
    desc: 'Animation de cours et séances de soutien en programmation, algorithmique, structures de données et développement web.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Maintenance Informatique & Réseaux',
    desc: 'Diagnostic, réparation, assemblage matériel, configuration réseau et support technique pour particuliers et entreprises.',
  },
]
