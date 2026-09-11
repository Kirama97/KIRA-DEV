import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiCss,
  SiWondersharefilmora,
  SiCanva,
  SiNotion,
  SiJavascript,
  SiIonic,
} from 'react-icons/si'

import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineVideoCamera,
  HiOutlineSparkles,
  HiOutlineBolt,
} from 'react-icons/hi2'

export const skills = [
  { name: 'React.js', icon: SiReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, category: 'Frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', color: '#339933' },
  { name: 'WordPress', icon: SiReact, category: 'Backend', color: '#21759B' },
  { name: 'Filmora', icon: SiWondersharefilmora, category: 'Créatif', color: '#00D1FF' },
  { name: 'Capcut', icon: SiWondersharefilmora, category: 'Créatif', color: '#000000' },
  { name: 'VN', icon: SiWondersharefilmora, category: 'Créatif', color: '#FFE600' },
  { name: 'Canva', icon: SiCanva, category: 'Créatif', color: '#00C4CC' },
  { name: 'Figma', icon: SiFigma, category: 'Design', color: '#F24E1E' },
  { name: 'IA Audiovisuel', icon: SiNotion, category: 'Créatif', color: '#ffffff' },
  { name: 'Git', icon: SiGit, category: 'DevOps', color: '#F05032' },
]

export const experiences = [
  {
    period: 'Juin 2025 — Présent',
    role: 'Coach Formateur en Informatique',
    company: 'Bakeli School of Technology',
    desc: "Conception et animation de modules de formation axés sur le développement web, l'ingénierie logicielle et les technologies numériques. Encadrement, mentorat et évaluation d'apprenants dans la réalisation de projets informatiques professionnels.",
    tags: ['Formation', 'Ingénierie Logicielle'],
  },
  {
    period: 'Février 2025 — Présent',
    role: 'Co-fondateur & Directeur Technique',
    company: 'Studio Amed Njie',
    desc: "Intégration d'outils et workflows IA pour la production et l'automatisation du contenu multimédia. Création et pilotage d'un studio innovant de réalisation audiovisuelle assistée par l'intelligence artificielle.",
    tags: ['IA', 'Audiovisuel', 'CTO'],
  },
  {
    period: 'Novembre 2024 — Présent',
    role: 'Chief Technology Officer (CTO)',
    company: 'OnlineClass',
    desc: "Animation de formations en programmation et accompagnement des apprenants dans l’apprentissage des fondamentaux du développement web. Conception de contenus pédagogiques et promotionnels.",
    tags: ['CTO', 'Développement Web'],
  },
  {
    period: 'Janvier 2025 — Avril 2025',
    role: 'Stagiaire Développeur / Formateur',
    company: 'Bakeli School of Technology',
    desc: "Participation active à la création de projets web internes (site vitrine WordPress, site e-commerce WordPress). Assistance aux sessions de formation et accompagnement technique des étudiants.",
    tags: ['WordPress', 'Web', 'Formation'],
  },
  {
    period: 'Depuis 2022',
    role: 'Tuteur en Programmation',
    company: 'OnlineClass',
    desc: "Accompagnement personnalisé d'étudiants en algorithmique, structure de données et développement logiciel. Animation de séances de soutien technique.",
    tags: ['Algorithmique', 'Mentorat'],
  },
  {
    period: 'Depuis 2018',
    role: 'Technicien de Maintenance',
    company: 'Indépendant',
    desc: "Diagnostic, réparation et assemblage de matériels et équipements informatiques. Conseil client, gestion de stock et recommandation d'architectures matérielles adaptées aux besoins.",
    tags: ['Hardware', 'Réseau', 'IT'],
  },
]

export const services = [
  {
    icon: HiOutlineComputerDesktop,
    title: 'Web Development',
    desc: 'Applications web modernes et scalables avec React, Next.js et les dernières technologies front-end.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Mobile Apps',
    desc: 'Applications cross-platform iOS & Android avec React Native et Flutter, publiées sur les stores.',
  },
  {
    icon: HiOutlinePaintBrush,
    title: 'UI/UX Design',
    desc: 'Interfaces premium avec Figma, design systems cohérents et micro-interactions mémorables.',
  },
  {
    icon: HiOutlineVideoCamera,
    title: 'Montage Vidéo',
    desc: 'Montage professionnel, motion graphics et color grading pour un rendu cinématographique.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Création Visuelle',
    desc: 'Identité visuelle, assets graphiques, templates et contenus visuels pour réseaux sociaux.',
  },
  {
    icon: HiOutlineBolt,
    title: 'Performance Web',
    desc: 'Optimisation Core Web Vitals, lazy loading, bundling et CDN pour des sites ultra rapides.',
  },
]
