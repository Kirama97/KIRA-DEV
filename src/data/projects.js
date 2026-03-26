export const projects = [
  {
    id: 1,
    slug: 'nova-dashboard',
    title: 'Nova Dashboard',
    shortDesc: 'Tableau de bord analytics temps réel avec KPIs, visualisations D3.js et filtres avancés.',
    fullDesc: `Nova Dashboard est une application analytics complète conçue pour les équipes data-driven qui veulent des insights en temps réel sans compromis sur l'expérience utilisateur.

L'interface épurée cache une architecture robuste : WebSocket pour les données live, workers pour les calculs lourds, et rendu optimisé pour gérer des milliers de points de données sans lag.

Chaque composant a été pensé pour réduire la friction cognitive : les KPIs les plus importants sont visibles au premier coup d'œil, les filtres sont accessibles en un clic, et les exports se font en background.`,
    features: [
      'Visualisations temps réel via WebSocket',
      'Dashboard customisable drag & drop',
      'Export CSV / PDF automatisé',
      'Alertes intelligentes par email',
      'Mode sombre natif',
      'API REST + GraphQL',
    ],
    tags: ['React', 'TypeScript', 'D3.js'],
    tech: ['React 18', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
    emoji: '🚀',
    gradient: 'from-[#0d0d20] to-[#1a0535]',
    gradientStyle: 'linear-gradient(135deg, #0d0d20, #1a0535)',
    accentColor: '#6C63FF',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2024',
    role: 'Fullstack Developer',
    duration: '3 mois',
    visible: true,
  },
  {
    id: 2,
    slug: 'luxe-commerce',
    title: 'Luxe Commerce',
    shortDesc: 'Plateforme e-commerce premium avec animations 3D, panier temps réel et Stripe.',
    fullDesc: `Luxe Commerce redéfinit l'expérience d'achat en ligne en mettant l'esthétique au cœur de chaque interaction. Chaque produit bénéficie d'une présentation 3D interactive, permettant aux clients de l'examiner sous tous les angles.

Le parcours d'achat a été optimisé pour maximiser la conversion : ajout au panier en un clic, checkout en 2 étapes, et confirmation instantanée. L'intégration Stripe garantit une sécurité maximale.

Le panel admin offre une gestion complète du catalogue, des stocks, des commandes et des analytics ventes en temps réel.`,
    features: [
      'Viewer produit 3D interactif',
      'Panier temps réel avec animations',
      'Checkout Stripe optimisé',
      'Panel admin complet',
      'Gestion des stocks automatique',
      'Analytics ventes en temps réel',
    ],
    tags: ['Next.js', 'Stripe', 'Three.js'],
    tech: ['Next.js 14', 'Three.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind', 'Vercel'],
    emoji: '💎',
    gradient: 'from-[#001a0d] to-[#003320]',
    gradientStyle: 'linear-gradient(135deg, #001a0d, #003320)',
    accentColor: '#00D4FF',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2024',
    role: 'Frontend Developer',
    duration: '2 mois',
    visible: true,
  },
  {
    id: 3,
    slug: 'pulse-chat',
    title: 'PulseChat',
    shortDesc: 'Messagerie temps réel avec chiffrement E2E, rooms thématiques et partage de fichiers.',
    fullDesc: `PulseChat est une application de messagerie d'entreprise qui prend la sécurité au sérieux. Chaque message est chiffré de bout en bout, garantissant que seuls les destinataires légitimes peuvent lire les conversations.

L'architecture microservices permet une scalabilité horizontale : chaque composant (auth, messages, fichiers, notifications) est indépendant et peut être mis à l'échelle séparément selon la charge.

L'expérience mobile-first garantit une fluidité parfaite sur tous les appareils, avec des notifications push natives et un mode hors-ligne complet.`,
    features: [
      'Chiffrement E2E sur tous les messages',
      'Rooms publiques et privées',
      'Partage de fichiers jusqu\'à 1GB',
      'Notifications push natives',
      'Mode hors-ligne complet',
      'Historique de recherche illimité',
    ],
    tags: ['React Native', 'Socket.io', 'Node.js'],
    tech: ['React Native', 'Expo', 'Socket.io', 'Node.js', 'Redis', 'MongoDB', 'JWT', 'AES-256'],
    emoji: '⚡',
    gradient: 'from-[#0a0a1a] to-[#1a1a35]',
    gradientStyle: 'linear-gradient(135deg, #0a0a1a, #1a1a35)',
    accentColor: '#FF6B9D',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2023',
    role: 'Mobile Developer',
    duration: '4 mois',
    visible: true,
  },
  {
    id: 4,
    slug: 'artflow-studio',
    title: 'ArtFlow Studio',
    shortDesc: 'Outil de création visuelle collaborative avec canvas infini, calques vectoriels et sync cloud.',
    fullDesc: `ArtFlow Studio transforme la création visuelle collaborative en une expérience fluide et intuitive. Le canvas infini permet de travailler à n'importe quelle échelle, des wireframes rapides aux illustrations détaillées.

La collaboration en temps réel permet à plusieurs personnes de travailler simultanément, avec des curseurs visibles et des modifications synchronisées instantanément. Le système de calques inspiré de Figma offre un contrôle total sur la composition.

La bibliothèque d'assets intégrée propose des milliers d'icônes, illustrations et templates prêts à l'emploi.`,
    features: [
      'Canvas infini avec zoom fluide',
      'Collaboration temps réel multi-curseurs',
      'Système de calques vectoriels',
      'Export SVG / PNG / PDF',
      'Bibliothèque de 5000+ assets',
      'Historique d\'actions illimité',
    ],
    tags: ['Vue.js', 'Canvas API', 'WebRTC'],
    tech: ['Vue 3', 'Pinia', 'Canvas API', 'WebRTC', 'Firebase', 'Vite', 'GSAP'],
    emoji: '🎨',
    gradient: 'from-[#1a0a0a] to-[#300a20]',
    gradientStyle: 'linear-gradient(135deg, #1a0a0a, #300a20)',
    accentColor: '#6C63FF',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2023',
    role: 'Frontend Developer',
    duration: '5 mois',
    visible: true,
  },
  {
    id: 5,
    slug: 'trailmind-ai',
    title: 'TrailMind AI',
    shortDesc: 'Plateforme d\'apprentissage adaptatif IA avec parcours personnalisés et quiz intelligents.',
    fullDesc: `TrailMind AI révolutionne l'apprentissage en ligne en utilisant l'intelligence artificielle pour personnaliser chaque aspect du parcours éducatif. L'algorithme analyse les performances, identifie les lacunes et adapte le contenu en temps réel.

Contrairement aux plateformes traditionnelles, TrailMind ne propose pas des cours linéaires mais des arbres de compétences dynamiques qui s'adaptent à votre rythme et style d'apprentissage.

Les quiz intelligents utilisent l'IA pour générer des questions calibrées à votre niveau actuel, maximisant la rétention à long terme grâce à la répétition espacée.`,
    features: [
      'Algorithme d\'IA adaptatif',
      'Parcours de compétences dynamiques',
      'Quiz générés par IA',
      'Répétition espacée intelligente',
      'Analytics progrès détaillés',
      'Certificats vérifiables on-chain',
    ],
    tags: ['Python', 'FastAPI', 'React'],
    tech: ['React 18', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    emoji: '🧠',
    gradient: 'from-[#0a1a1a] to-[#0a2030]',
    gradientStyle: 'linear-gradient(135deg, #0a1a1a, #0a2030)',
    accentColor: '#00D4FF',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2024',
    role: 'Fullstack Developer',
    duration: '6 mois',
    visible: true,
  },
  {
    id: 6,
    slug: 'cinecraft-edit',
    title: 'CineCraft Edit',
    shortDesc: 'Éditeur vidéo web professionnel avec transitions ciné, color grading et export multi-format.',
    fullDesc: `CineCraft Edit apporte la puissance du montage professionnel directement dans le navigateur. Aucun logiciel à installer, un lien à partager et l'équipe peut collaborer sur le même projet en temps réel.

La bibliothèque de transitions cinématographiques a été conçue par des monteurs professionnels pour donner un rendu digne des productions Hollywood. Le color grading intégré offre des outils LUT, courbes et corrections colorimétriques avancées.

L'export est optimisé pour chaque plateforme : H.264 pour YouTube, HEVC pour les mobiles, ProRes pour les diffusions broadcast.`,
    features: [
      'Timeline multi-pistes drag & drop',
      '200+ transitions cinématographiques',
      'Color grading avec LUTs',
      'Collaboration temps réel',
      'Export multi-format optimisé',
      'Bibliothèque de musiques libres',
    ],
    tags: ['React', 'WebGL', 'FFmpeg.wasm'],
    tech: ['React 18', 'WebGL', 'FFmpeg.wasm', 'Web Workers', 'Canvas API', 'Node.js', 'AWS S3'],
    emoji: '🎬',
    gradient: 'from-[#0a0a0a] to-[#1a1020]',
    gradientStyle: 'linear-gradient(135deg, #0a0a0a, #1a1020)',
    accentColor: '#FF6B9D',
    github: 'https://github.com',
    demo: 'https://example.com',
    year: '2024',
    role: 'Frontend Developer',
    duration: '4 mois',
    visible: true,
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
