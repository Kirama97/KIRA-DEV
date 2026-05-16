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
  { name: 'React', icon: SiReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Html', icon: SiHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'Css', icon: SiCss, category: 'Frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
  { name: 'Ionic UI', icon: SiIonic, category: 'Frontend', color: '#3880FF' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend', color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Backend', color: '#47A248' },
  { name: 'React Native', icon: SiReact, category: 'Mobile', color: '#61DAFB' },
  { name: 'Filmora', icon: SiWondersharefilmora, category: 'Créatif', color: '#00D1FF' },
  { name: 'Canva', icon: SiCanva, category: 'Créatif', color: '#00C4CC' },
  { name: 'Figma', icon: SiFigma, category: 'Design', color: '#F24E1E' },
  { name: 'Notion', icon: SiNotion, category: 'DevOps', color: '#ffffff' },
  { name: 'Gitlab', icon: SiGitlab, category: 'DevOps', color: '#FC6D26' },
  { name: 'Git', icon: SiGit, category: 'DevOps', color: '#F05032' },
]

export const experiences = [
  {
    period: '2023 — Présent',
    role: 'Lead Frontend Developer',
    company: 'TechNova Agency',
    desc: 'Direction technique d\'une équipe de 4 développeurs. Conception d\'interfaces haut de gamme pour des clients grands comptes. Mise en place de design systems, CI/CD pipelines et architectures scalables.',
    tags: ['React', 'TypeScript', 'Team Lead'],
  },
  {
    period: '2022 — 2023',
    role: 'Fullstack Developer',
    company: 'StartupX — SaaS B2B',
    desc: 'Développement from scratch d\'une plateforme SaaS avec React & Node.js. Réduction du bundle size de 60% et amélioration des Core Web Vitals à 98/100. Mise en place de tests E2E avec Cypress.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    period: '2021 — 2022',
    role: 'Mobile Developer & Motion Designer',
    company: 'AppFactory',
    desc: 'Développement d\'apps React Native & Flutter publiées sur App Store et Google Play. Création de motion graphics et montages vidéo pour les campagnes marketing des clients. 50k+ téléchargements.',
    tags: ['React Native', 'Flutter', 'After Effects'],
  },
  {
    period: '2020 — 2021',
    role: 'Développeur Web Freelance',
    company: 'Indépendant',
    desc: 'Conception et développement de sites vitrine et e-commerce pour PMEs locales. Création de visuels et identités graphiques. 12 projets livrés, 100% clients satisfaits.',
    tags: ['React', 'Figma', 'Branding'],
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
