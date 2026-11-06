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
  SiPhp,
  SiExpress,
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
} from 'react-icons/hi2'

export const skillGroups = [
  {
    title: 'Ingénierie Web & Full-Stack',
    subtitle: 'Conception, développement et déploiement d’applications web',
    items: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'WordPress & CMS', icon: SiWordpress },
      { name: 'PHP', icon: SiPhp },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    title: 'Design Visuel & Audiovisuel IA',
    subtitle: 'Direction artistique, montage vidéo et workflows créatifs assistés par IA',
    items: [
      { name: 'Figma (UI/UX)', icon: SiFigma },
      { name: 'Canva Pro', icon: SiCanva },
      { name: 'Wondershare Filmora', icon: SiWondersharefilmora },
      { name: 'CapCut & VN Editor', icon: HiOutlineVideoCamera },
      { name: 'Production Audiovisuelle IA', icon: HiOutlineSparkles },
      { name: 'Affiches & Identité Visuelle', icon: HiOutlineSwatch },
    ],
  },
  {
    title: 'Infrastructure, DevOps & Leadership',
    subtitle: 'Direction technique (CTO), administration système/réseau et pédagogie',
    items: [
      { name: 'Git & Versioning', icon: SiGit },
      { name: 'Déploiement & CI/CD', icon: HiOutlineServerStack },
      { name: 'Direction Technique (CTO)', icon: HiOutlineCommandLine },
      { name: 'Formation & Mentorat', icon: HiOutlineAcademicCap },
      { name: 'Réseaux & Maintenance IT', icon: HiOutlineWrenchScrewdriver },
      { name: 'Intégration d’Outils IA', icon: HiOutlineCpuChip },
    ],
  },
]

export const skills = skillGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.title }))
)

export const experiences = [
  {
    period: 'Juin 2025 — Présent',
    role: 'Coach Formateur en Informatique',
    company: 'Bakeli School of Technology',
    location: 'Sénégal',
    desc: "Conception et animation de modules de formation axés sur le développement web, l'ingénierie logicielle et les technologies numériques. Encadrement, mentorat et évaluation d'apprenants dans la réalisation de projets professionnels.",
    tags: ['Ingénierie Logicielle', 'Développement Web', 'Pédagogie', 'Mentorat'],
  },
  {
    period: 'Février 2025 — Présent',
    role: 'Co-fondateur & Directeur Technique (CTO)',
    company: 'Studio Amed Njie',
    location: 'Sénégal',
    desc: "Création et pilotage d'un studio de réalisation audiovisuelle assistée par l'intelligence artificielle. Intégration d'outils et de workflows IA pour la production multimédia, dont la réalisation du clip officiel « Don de soi » pour l'artiste Abdou Guité Seck.",
    tags: ['Direction Technique', 'Workflows IA', 'Production Audiovisuelle', 'VFX'],
  },
  {
    period: 'Novembre 2024 — Présent',
    role: 'Chief Technology Officer (CTO)',
    company: 'OnlineClass',
    location: 'Sénégal',
    desc: "Direction technique, animation de formations en programmation et webinaires techniques. Conception de contenus pédagogiques et visuels multi-plateformes (YouTube, LinkedIn, Instagram, TikTok) et pilotage de la stratégie digitale.",
    tags: ['CTO', 'Architecture Web', 'Contenus Pédagogiques', 'Stratégie Digitale'],
  },
  {
    period: 'Janvier 2025 — Avril 2025',
    role: 'Développeur Web & Formateur (Stage)',
    company: 'Bakeli School of Technology',
    location: 'Sénégal',
    desc: "Réalisation de plateformes web internes et clientes (sites vitrines, plateformes e-commerce WordPress, intégration de plugins sur mesure). Assistance aux sessions de formation et accompagnement technique des étudiants.",
    tags: ['WordPress', 'E-commerce', 'Développement Web', 'Support'],
  },
  {
    period: 'Depuis 2022',
    role: 'Tuteur en Programmation',
    company: 'OnlineClass',
    location: 'Sénégal',
    desc: "Accompagnement personnalisé d'étudiants en algorithmique, structures de données et développement logiciel. Animation de séances de soutien technique et résolution de problèmes de code.",
    tags: ['Algorithmique', 'Structures de données', 'JavaScript'],
  },
  {
    period: 'Depuis 2018',
    role: 'Technicien Supérieur en Maintenance & Réseaux',
    company: 'Indépendant',
    location: 'Thiès / Dakar',
    desc: "Diagnostic, réparation, assemblage et maintenance de parcs informatiques. Conseil client, gestion de stock et recommandation d'architectures matérielles et logicielles adaptées aux besoins.",
    tags: ['Administration Système', 'Réseaux', 'Maintenance Matérielle & Logicielle'],
  },
]

export const education = [
  {
    period: '2024 — 2026',
    degree: 'Master en Ingénierie Logicielle',
    institution: 'UNCHK (Université Numérique Cheikh Hamidou Kane, ex-UVS)',
    detail: 'Architecture logicielle, gestion de projets complexes et ingénierie des systèmes d’information.',
  },
  {
    period: '2024 — 2025',
    degree: 'Certificat de Compétence Professionnelle (CCP) — Création de Site Web',
    institution: 'ISEP Thiès (Institut Supérieur d’Enseignement Professionnel)',
    detail: 'Conception, développement et mise en production d’applications web professionnelles.',
  },
  {
    period: '2020 — 2023',
    degree: 'Licence en Informatique & Développement Web / Mobile',
    institution: 'UNCHK (ex-UVS)',
    detail: 'Fondamentaux de l’informatique, algorithmique, bases de données et développement d’applications.',
  },
  {
    period: '2019 — 2020',
    degree: 'Baccalauréat Scientifique (Série S2)',
    institution: 'Lycée Valdiodio Ndiaye, Thiès',
    detail: 'Sciences expérimentales et mathématiques.',
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
    issuer: 'Programme Force N',
  },
]

export const services = [
  {
    icon: HiOutlineCommandLine,
    title: 'Ingénierie & Développement Web',
    desc: 'Conception et développement d’applications web full-stack sur mesure (React, Node.js, WordPress) rapides, maintenables et sécurisées.',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'Direction Technique & Workflows IA',
    desc: 'Accompagnement CTO, choix d’architecture technique, déploiement continu et intégration de solutions d’intelligence artificielle.',
  },
  {
    icon: HiOutlineVideoCamera,
    title: 'Production Vidéo & Réalisation IA',
    desc: 'Montage vidéo professionnel, clips et capsules promotionnelles assistés par l’IA (Filmora, CapCut, VN, outils génératifs).',
  },
  {
    icon: HiOutlineSwatch,
    title: 'Design Graphique & Identité Visuelle',
    desc: 'Création d’affiches publicitaires, supports de communication, maquettes UI/UX (Figma) et visuels pour réseaux sociaux.',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Formation & Coaching Tech',
    desc: 'Conception de programmes pédagogiques, animation de formations en développement web et mentorat d’équipes ou d’étudiants.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Infrastructure & Maintenance IT',
    desc: 'Administration système et réseau, diagnostic matériel/logiciel, support technique et conseil en équipement informatique.',
  },
]
