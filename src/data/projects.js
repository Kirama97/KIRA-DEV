export const projects = [
  {
    id: 1,
    slug: 'sbci',
    title: 'SBCI — E-Commerce Informatique & Mobilier',
    category: 'Application Full-Stack',
    shortDesc:
      'Plateforme e-commerce complète dédiée à la vente d’équipements informatiques, électroniques et de mobilier de bureau au Sénégal.',
    fullDesc: `SBCI (Senegal Business Computers and Informatics) est une plateforme e-commerce conçue pour digitaliser la distribution de matériel informatique, électronique et de mobilier de bureau professionnel.

La plateforme structure un large catalogue par catégories et sous-catégories avec un moteur de recherche et de filtrage rapide. Chaque fiche produit présente les spécifications techniques détaillées, la disponibilité en temps réel et permet aussi bien la commande en ligne que la commande rapide assistée via WhatsApp.

Sur le plan architectural, l'application repose sur une séparation claire entre le client React (Vite + Tailwind CSS) et l'API REST Node.js / Express adossée à MongoDB. Elle intègre une authentification sécurisée par JWT, une gestion des rôles et un tableau de bord d'administration complet pour le suivi des stocks, des produits et des commandes.`,
    features: [
      'Architecture Full-Stack découplée (React Vite + Node.js / Express / MongoDB)',
      'Catalogue structuré par catégories avec recherche et filtrage instantanés',
      'Authentification sécurisée par JWT et gestion des comptes clients',
      'Tunnel de commande hybride : panier classique et commande directe WhatsApp',
      'Tableau de bord administrateur complet (produits, stocks, commandes)',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Socket.IO'],
    demo: 'https://v2-votrenom.vercel.app',
    github: '',
    year: '2026',
    role: 'Développeur Full-Stack',
    duration: '5 mois',
    image: '/sbci/sbci_image1.png',
    gallery: [
      '/sbci/sbci_image1.png',
      '/sbci/sbci_image2.png',
      '/sbci/sbci_image3.png',
      '/sbci/sbci_image4.png',
      '/sbci/sbci_image5.png',
      '/sbci/sbci_image6.png',
    ],
    visible: true,
  },
  {
    id: 2,
    slug: 'sunu-cv',
    title: 'Sunu CV — Générateur de CV assisté par IA',
    category: 'Plateforme SaaS & IA',
    shortDesc:
      'Application web permettant de concevoir des CV professionnels optimisés pour les systèmes ATS grâce à l’intelligence artificielle.',
    fullDesc: `Sunu CV est une plateforme SaaS pensée pour accompagner les candidats et professionnels dans la création de CV modernes, structurés et conformes aux standards ATS (Applicant Tracking Systems).

L'application combine plus de 20 modèles de mise en page professionnels avec un assistant de rédaction par intelligence artificielle qui aide à formuler les expériences, synthétiser le profil et optimiser les mots-clés métiers.

L'interface offre une prévisualisation en temps réel et permet un export immédiat au format PDF ou Word haute définition.`,
    features: [
      'Éditeur de CV interactif avec prévisualisation en temps réel',
      'Assistance à la rédaction et optimisation ATS par intelligence artificielle',
      'Catalogue de plus de 20 modèles professionnels personnalisables',
      'Exportation instantanée aux formats PDF et Word',
      'Interface fluide, responsive et centrée sur l’expérience utilisateur',
    ],
    tags: ['React', 'IA Générative', 'Tailwind CSS'],
    tech: ['React.js', 'Tailwind CSS', 'Intégration API IA', 'Export PDF'],
    demo: '#',
    github: '',
    year: '2026',
    role: 'Concepteur & Développeur Full-Stack',
    duration: '2 mois',
    image: '/sunu_cv/sunu_cv_image1.png',
    gallery: [
      '/sunu_cv/sunu_cv_image1.png',
      '/sunu_cv/sunu_cv_image2.png',
      '/sunu_cv/sunu_cv_image3.png',
      '/sunu_cv/sunu_cv_image4.png',
    ],
    visible: true,
  },
  {
    id: 3,
    slug: 'villa-petit-baobab',
    title: 'Villa Petit Baobab — Réservation Hôtelière',
    category: 'Système de Réservation',
    shortDesc:
      'Plateforme officielle de présentation et de réservation en ligne pour une résidence hôtelière située à Warang, Mbour.',
    fullDesc: `La Villa Petit Baobab est une résidence d'exception située à Warang (Mbour, Sénégal). Ce projet consistait à concevoir sa présence digitale complète ainsi que son système de réservation directe en ligne.

Le site met en valeur l'architecture et les espaces de la résidence (chambres, piscine, jardin, services) tout en intégrant un moteur de réservation avec calendrier de disponibilité en temps réel, calcul automatique des tarifs selon les saisons et notifications par e-mail pour les propriétaires comme pour les voyageurs.

J'ai également réalisé les capsules vidéo tutoriels permettant aux clients de maîtriser le parcours de demande de réservation en quelques secondes.`,
    features: [
      'Système de réservation en ligne avec calendrier de disponibilité adaptatif',
      'Alertes et confirmations automatisées par e-mail',
      'Tableau de bord de gestion des réservations et des tarifs saisonniers',
      'Galerie photographique optimisée et présentation détaillée des prestations',
      'Production de capsules vidéo explicatives pour accompagner les clients',
    ],
    tags: ['WordPress', 'Booking System', 'PHP'],
    tech: ['WordPress', 'WP Rentals', 'PHP', 'CSS3', 'Responsive Design'],
    demo: 'https://villa-petitbaobab.com/?bypass_code=ZemkLnitHVGfezkQ',
    github: '',
    year: '2025',
    role: 'Développeur Web & Créateur Média',
    duration: '3 mois',
    image: '/villa_petit_baobab/villa_petit_baobab_1.png',
    gallery: [
      '/villa_petit_baobab/villa_petit_baobab_1.png',
      '/villa_petit_baobab/villa_petit_baobab_2.png',
      '/villa_petit_baobab/villa_petit_baobab_3.png',
      '/villa_petit_baobab/villa_petit_baobab_4.png',
    ],
    visible: true,
  },
  {
    id: 4,
    slug: 'luxe-commerce',
    title: 'Perso My Style — E-Commerce & Personnalisation',
    category: 'Application Full-Stack',
    shortDesc:
      'Boutique en ligne moderne avec personnalisation de produits, gestion de panier temps réel et tableau de bord analytique.',
    fullDesc: `Perso My Style est une plateforme e-commerce dédiée à la vente et à la personnalisation d'articles de mode et d'accessoires. L'objectif du projet était d'offrir une expérience d'achat fluide, visuelle et rapide.

Le parcours client intègre une exploration dynamique des collections, un panier mis à jour en temps réel et un processus de commande simplifié en deux étapes.

Côté administration, la plateforme dispose d'un back-office complet permettant de piloter le catalogue, de suivre l'état des stocks automatiquement et de visualiser les statistiques de ventes.`,
    features: [
      'Catalogue interactif et personnalisation d’articles',
      'Panier dynamique en temps réel',
      'Tunnel de commande optimisé et sécurisé',
      'Panneau d’administration complet (catalogue, stocks, commandes)',
      'Suivi analytique des performances commerciales',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    demo: 'https://front-tache212.vercel.app/accueil',
    github: '',
    year: '2026',
    role: 'Développeur Frontend & Intégrateur',
    duration: '4 mois',
    image: '/perso_my_style/tache_21_1.png',
    gallery: [
      '/perso_my_style/tache_21_1.png',
      '/perso_my_style/tache_21_2.png',
      '/perso_my_style/tache_21_3.png',
      '/perso_my_style/tache_21_4.png',
    ],
    visible: true,
  },
  {
    id: 5,
    slug: 'Cours_js',
    title: 'CoursJS — Plateforme Interactive d’Apprentissage',
    category: 'EdTech & Pédagogie',
    shortDesc:
      'Plateforme éducative interactive pour apprendre JavaScript de zéro avec éditeur de code intégré, console temps réel et quiz.',
    fullDesc: `En tant que formateur et tuteur en programmation, j'ai conçu CoursJS pour offrir aux étudiants et autodidactes un environnement d'apprentissage du langage JavaScript à la fois structuré et immédiatement pratique.

La plateforme couvre l'ensemble du programme fondamental : variables, structures de contrôle, fonctions, tableaux, objets, manipulation du DOM et gestion des événements.

Chaque leçon est accompagnée d'un bac à sable (sandbox) avec éditeur de code et console d'exécution intégrée permettant de tester son code directement dans le navigateur, ainsi que de quiz d'auto-évaluation et d'un suivi de progression sauvegardé localement.`,
    features: [
      'Parcours pédagogique progressif du niveau débutant au niveau avancé',
      'Éditeur de code intégré avec console d’exécution en temps réel',
      'Quiz de validation des acquis à chaque chapitre',
      'Sauvegarde automatique de la progression de l’apprenant',
      'Module de soutien communautaire intégré (Wave)',
    ],
    tags: ['React', 'JavaScript', 'EdTech'],
    tech: ['React (Vite)', 'JavaScript ES6+', 'Tailwind CSS', 'LocalStorage API'],
    demo: 'https://coursjs.vercel.app/',
    github: '',
    year: '2025',
    role: 'Concepteur Pédagogique & Développeur',
    duration: '1 mois',
    image: '/cour_js/cour_js.png',
    gallery: [
      '/cour_js/cour_js.png',
      '/cour_js/cour_js_image1.png',
      '/cour_js/cour_js_image2.png',
      '/cour_js/cour_js_image3.png',
      '/cour_js/cour_js_image4.png',
      '/cour_js/cour_js_image5.png',
    ],
    visible: true,
  },
  {
    id: 6,
    slug: 'J2C',
    title: 'J2C — Job Conception & Construction',
    category: 'Site Vitrine BTP & Architecture',
    shortDesc:
      'Plateforme digitale et identité visuelle pour une entreprise d’ingénierie du bâtiment, d’architecture 2D/3D et de construction à Thiès.',
    fullDesc: `J2C (Job Conception & Construction) est une entreprise spécialisée dans l'étude architecturale, l'ingénierie béton armé et la construction immobilière clé en main basée à Thiès (Cité Senghor).

Ce projet global comprenait à la fois le développement du site vitrine professionnel et la conception de supports de communication visuelle (affiches publicitaires print et digitales).

Le site présente de manière structurée l'ensemble des prestations de l'entreprise (plans d'architecture 2D/3D, plans béton armé, suivi de chantier, réalisation complète), intègre un portefeuille de réalisations immobilières et facilite la prise de rendez-vous et de devis pour les particuliers et promoteurs.`,
    features: [
      'Présentation structurée des expertises BTP (Plans 2D/3D, Béton armé, Suivi de chantier)',
      'Galerie des réalisations architecturales et chantiers livrés',
      'Formulaire de demande de devis et prise de contact rapide',
      'Conception conjointe des affiches publicitaires et de l’identité visuelle',
      'Optimisation mobile et déploiement haute performance',
    ],
    tags: ['React', 'Tailwind CSS', 'BTP & Immobilier'],
    tech: ['React (Vite)', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Identité Visuelle'],
    demo: 'https://j2c-five.vercel.app/',
    github: '',
    year: '2025',
    role: 'Concepteur Web & Designer Graphique',
    duration: '2 mois',
    image: '/j2c/j2C_image1.png',
    gallery: [
      '/j2c/j2C_image1.png',
      '/j2c/j2C_image2.png',
      '/j2c/j2C_image3.png',
      '/j2c/j2C_image4.png',
      '/j2c/j2C_image5.png',
      '/j2c/j2C_image6.png',
    ],
    visible: true,
  },
  {
    id: 7,
    slug: 'ndeye_diagne',
    title: 'Ndèye Diagne — Plateforme Entrepreneuriale & Bien-être',
    category: 'Site Vitrine & E-Business',
    shortDesc:
      'Portail professionnel et commercial dédié à l’entrepreneuriat, au coaching et à la présentation de gammes bien-être entre la France et le Sénégal.',
    fullDesc: `Le site ndeyediagne.com est une plateforme digitale professionnelle conçue pour accompagner les activités de Ndèye Diagne (Team Power) dans les domaines du coaching entrepreneurial et de la distribution de produits de bien-être et de soin.

L'architecture de l'information a été pensée pour répondre à trois objectifs : présenter les programmes d'accompagnement et de formation en ligne, mettre en avant les gammes de produits partenaires (énergie, nutrition, soin), et offrir un canal de prise de contact direct adapté aux audiences basées en France et au Sénégal.`,
    features: [
      'Espace dédié à l’accompagnement entrepreneurial et au coaching d’équipe',
      'Catalogue de présentation des gammes bien-être et nutrition',
      'Système de prise de contact multicanal (formulaire PHP Mailer et intégration WhatsApp)',
      'Administration autonome des contenus via WordPress',
    ],
    tags: ['WordPress', 'PHP', 'JavaScript'],
    tech: ['WordPress', 'PHP', 'PHPMailer', 'HTML5', 'CSS3', 'JavaScript', 'Hostinger'],
    demo: 'https://ndeyediagne.com/',
    github: '',
    year: '2026',
    role: 'Concepteur & Développeur Web',
    duration: '2 mois',
    image: '/ndeye_diagne/ndeye_diagne_image3.png',
    gallery: [
      '/ndeye_diagne/ndeye_diagne_image3.png',
      '/ndeye_diagne/ndeye_diagne_image1.png',
      '/ndeye_diagne/ndeye_diagne_image2.png',
      '/ndeye_diagne/ndeye_diagne_image4.png',
      '/ndeye_diagne/ndeye_diagne_image5.png',
    ],
    visible: true,
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
