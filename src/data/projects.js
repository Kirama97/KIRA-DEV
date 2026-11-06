export const projects = [
  {
    id: 1,
    slug: 'sunu-cv',
    title: 'Sunu CV — Plateforme SaaS de Création de CV Pro',
    category: 'SaaS & IA',
    shortDesc:
      'Plateforme SaaS de création de CV professionnels assistée par IA avec paiement mobile intégré (Wave, Orange Money) et export PDF/Word.',
    fullDesc: `Sunu CV (sunu_cv) est une plateforme SaaS complète permettant aux candidats et professionnels de concevoir des CV modernes, optimisés pour les systèmes ATS grâce à l'intelligence artificielle.

La plateforme propose plus de 20 modèles professionnels personnalisables en temps réel, un module d'aide à la rédaction par IA et un système d'exportation immédiat.

Sur le plan technique, l'application Full-Stack a été développée avec React (Vite) et Tailwind CSS côté client, et Node.js / MongoDB côté serveur. Elle intègre la gestion des images via Cloudinary, l'envoi transactionnel d'e-mails via NodeMailer, ainsi que les moyens de paiement locaux Wave et Orange Money (avec gestion de codes promotionnels, dont le code promo de 50% : BAKELI).`,
    features: [
      'Conception de CV professionnels assistée par IA et optimisation ATS',
      'Paiement mobile intégré via Wave et Orange Money',
      'Système de codes promotionnels (Code test -50% : BAKELI)',
      'Stockage et optimisation des médias via Cloudinary',
      'Notifications et envois d’e-mails automatisés avec NodeMailer',
    ],
    tags: ['React Vite', 'Node.js', 'MongoDB', 'Cloudinary'],
    tech: ['React Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'NodeMailer', 'Cloudinary', 'Wave & Orange Money'],
    demo: '#',
    github: '',
    year: 'Oct. 2026 — Actuel',
    role: 'Développeur Full-Stack',
    duration: 'En production',
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
    id: 2,
    slug: 'sbci',
    title: 'SBCI Thiès — E-Commerce Informatique & Mobilier',
    category: 'Plateforme E-Commerce',
    shortDesc:
      'Site e-commerce complet pour la vente de matériel informatique, électronique et de mobilier de bureau à Thiès.',
    fullDesc: `SBCI (Senegal Business Computers and Informatics) est une plateforme e-commerce conçue pour digitaliser la vente de matériel informatique, électronique et de mobilier de bureau à Thiès.

La plateforme propose une organisation claire des produits par catégories et sous-catégories avec recherche et filtrage instantanés, gestion des comptes clients, commandes en ligne et suivi par notifications e-mail.

Développée autour d'une architecture Full-Stack (React Vite, Tailwind CSS, Node.js et MongoDB), elle utilise Cloudinary pour l'hébergement optimisé des visuels produits et NodeMailer pour les notifications de commande, complétée par un tableau de bord d'administration complet.`,
    features: [
      'Catalogue e-commerce structuré (matériel informatique et mobilier de bureau)',
      'Architecture Full-Stack React Vite, Node.js et MongoDB',
      'Gestion des médias produits dans le cloud avec Cloudinary',
      'Notifications transactionnelles par e-mail via NodeMailer',
      'Tableau de bord administrateur pour la gestion des produits et des commandes',
    ],
    tags: ['React Vite', 'Node.js', 'MongoDB', 'Cloudinary'],
    tech: ['React Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'NodeMailer', 'Cloudinary'],
    demo: 'https://v2-votrenom.vercel.app',
    github: '',
    year: 'Juin 2026 — Nov. 2026',
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
    id: 3,
    slug: 'ndeye_diagne',
    title: 'Ndèye Diagne — Plateforme Commerciale & MLM',
    category: 'Site Vitrine & E-Commerce',
    shortDesc:
      'Site vitrine et e-commerce dédié à l’entrepreneuriat à domicile et à la distribution de produits de bien-être.',
    fullDesc: `La plateforme ndeyediagne.com est un site vitrine et e-commerce conçu pour accompagner les activités entrepreneuriales (Business Team Power) et la commercialisation de gammes de produits de bien-être et de soin.

Le projet couvre la présentation des opportunités d'accompagnement et de coaching, la mise en avant du catalogue de produits bien-être, ainsi que des canaux de contact directs orientés vers la France et le Sénégal.

Sur le plan technique, j'ai assuré l'intégration complète sous WordPress, la configuration de l'hébergement sur Hostinger ainsi que la sécurisation des envois d'e-mails via protocole SMTP.`,
    features: [
      'Présentation des programmes d’entrepreneuriat à domicile et de coaching',
      'Espace boutique dédié aux produits de bien-être et de soin',
      'Intégration sur mesure sous WordPress et responsive design',
      'Configuration de l’hébergement Hostinger et sécurisation SMTP des e-mails',
    ],
    tags: ['WordPress', 'Hostinger', 'SMTP'],
    tech: ['WordPress', 'PHP', 'SMTP', 'Hostinger', 'HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://ndeyediagne.com/',
    github: '',
    year: 'Fév. 2026 — Avr. 2026',
    role: 'Développeur Web',
    duration: '3 mois',
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
  {
    id: 4,
    slug: 'villa-petit-baobab',
    title: 'Villa Petit Baobab — Site de Réservation de Séjours',
    category: 'Système de Réservation',
    shortDesc:
      'Site de réservation de séjours à Warang (Mbour) avec calendrier interactif et gestion autonome des demandes.',
    fullDesc: `La Villa Petit Baobab est une résidence hôtelière située à Warang (Mbour). L'objectif de ce projet était de concevoir sa plateforme de réservation en ligne permettant aux voyageurs de réserver leurs séjours en toute autonomie.

J'ai réalisé l'intégration sous WordPress / WooCommerce avec le thème spécialisé WP Rental, configuré le calendrier interactif des disponibilités, mis en place la passerelle d'envoi d'e-mails transactionnels (SMTP) et déployé la solution sur l'hébergement Hostinger.`,
    features: [
      'Réservation de séjours en ligne avec calendrier interactif adaptatif',
      'Gestion autonome des demandes et tableau de bord administrateur',
      'Intégration WordPress / WooCommerce (thème WP Rental)',
      'Configuration de la passerelle SMTP pour les alertes e-mail',
      'Déploiement et mise en production sur Hostinger',
    ],
    tags: ['WordPress', 'WooCommerce', 'WP Rental'],
    tech: ['WordPress', 'WooCommerce', 'WP Rental', 'SMTP', 'Hostinger'],
    demo: 'https://villa-petitbaobab.com/?bypass_code=ZemkLnitHVGfezkQ',
    github: '',
    year: 'Sept. 2025 — Déc. 2025',
    role: 'Développeur Web',
    duration: '4 mois',
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
    id: 5,
    slug: 'luxe-commerce',
    title: 'Perso My Style — E-Commerce & Personnalisation',
    category: 'Application Full-Stack',
    shortDesc:
      'Boutique en ligne moderne avec personnalisation d’articles, panier temps réel et tableau de bord d’administration.',
    fullDesc: `Perso My Style est une plateforme e-commerce dédiée à la vente et à la personnalisation d'articles de mode et d'accessoires, conçue pour offrir une navigation fluide et rapide.

Elle intègre un panier dynamique mis à jour en temps réel, un tunnel de commande optimisé et un panneau d'administration complet pour la gestion du catalogue, le suivi automatique des stocks et l'analyse des ventes.`,
    features: [
      'Catalogue interactif et personnalisation de produits',
      'Panier dynamique en temps réel',
      'Panneau d’administration complet (catalogue, stocks, commandes)',
      'Suivi analytique des ventes en temps réel',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    demo: 'https://front-tache212.vercel.app/accueil',
    github: '',
    year: '2026',
    role: 'Développeur Front-End',
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
    id: 6,
    slug: 'Cours_js',
    title: 'CoursJS — Plateforme Interactive d’Apprentissage',
    category: 'EdTech & Programmation',
    shortDesc:
      'Plateforme éducative interactive pour apprendre JavaScript avec éditeur de code intégré, console temps réel et quiz.',
    fullDesc: `Dans le cadre de mes activités de formateur et tuteur en programmation, j'ai conçu CoursJS afin d'offrir aux étudiants un support interactif pour apprendre le langage JavaScript de zéro jusqu'à la manipulation avancée du DOM.

La plateforme intègre un éditeur de code avec console d'exécution en temps réel directement dans le navigateur, des quiz d'auto-évaluation à chaque étape, un suivi de progression et un module de soutien communautaire via Wave.`,
    features: [
      'Parcours structuré : variables, fonctions, tableaux, objets et DOM',
      'Éditeur de code intégré avec console d’exécution en temps réel',
      'Quiz de validation des acquis à chaque chapitre',
      'Suivi des progrès et sauvegarde locale',
      'Module de soutien communautaire via Wave',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    tech: ['React (Vite)', 'JavaScript ES6+', 'Tailwind CSS', 'LocalStorage API'],
    demo: 'https://coursjs.vercel.app/',
    github: '',
    year: '2025',
    role: 'Développeur Front-End',
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
    id: 7,
    slug: 'J2C',
    title: 'J2C — Job Conception & Construction',
    category: 'Site Vitrine BTP & Immobilier',
    shortDesc:
      'Site vitrine et supports visuels pour une entreprise spécialisée dans les plans 2D/3D, le béton armé et la construction à Thiès.',
    fullDesc: `J2C (Job Conception & Construction) est une entreprise spécialisée dans l'étude architecturale, la conception de plans 2D/3D, le calcul de plans béton armé et le suivi complet de chantiers immobiliers à Thiès.

J'ai conçu et développé le site vitrine de l'entreprise ainsi que ses affiches promotionnelles afin de présenter ses réalisations, détailler ses prestations techniques et faciliter la prise de contact des clients.`,
    features: [
      'Présentation des services : plans 2D/3D, béton armé et suivi de chantier',
      'Galerie des projets immobiliers et réalisations architecturales',
      'Interface responsive et prise de contact rapide',
      'Conception de l’affiche publicitaire et des supports visuels',
    ],
    tags: ['React Vite', 'Tailwind CSS', 'JavaScript'],
    tech: ['React Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    demo: 'https://j2c-five.vercel.app/',
    github: '',
    year: '2025',
    role: 'Concepteur & Développeur Web',
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
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
