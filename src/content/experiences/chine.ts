import type { Experience } from '../types';

export const chine: Experience = {
  slug: 'chine',
  name: 'Chapitre 1',
  country: 'Chine',
  practice: 'Kung‑fu',
  labels: ['Le prochain départ RAHAL', 'Chine', 'Janvier 2027'],
  tagline: '10 jours pour sortir de ta routine, découvrir la Chine autrement et t’initier au kung‑fu.',
  summary:
    'Pékin, une immersion kung‑fu à Tengzhou, puis Shanghai. Une première aventure faite pour découvrir, apprendre et se dépasser.',
  intro:
    'Une expérience, pas un voyage classique. Cette première aventure a été pensée pour découvrir la Chine, mais surtout pour vivre une immersion qui demande de la discipline, de l’humilité et l’envie de se dépasser.',
  status: 'demandes-ouvertes',
  published: true,

  hero: {
    src: 'chine/muraille.jpg',
    alt: 'La Grande Muraille serpente à travers les collines boisées de Mutianyu, près de Pékin.',
    position: 'center',
    mobilePosition: 'center',
  },
  card: {
    src: 'chine/entrainement.jpg',
    alt: 'Yassine, de dos, en tenue de kung‑fu grise devant le grand escalier de pierre d’un temple aux colonnes rouges, près de Tengzhou.',
    position: '50% 60%',
    mobilePosition: '50% 48%',
  },

  dates: 'Du 8 au 18 janvier 2027',
  duration: '10 jours',
  groupSize: '9 personnes',
  price: '1 890 €',
  priceNote: 'Paiement en 3 fois sans frais · Hors vols internationaux',

  dimensions: [
    {
      title: 'Découvrir autrement',
      text: 'Commencer à Pékin, changer de rythme à Tengzhou et terminer à Shanghai. Trois temps pour voir plusieurs visages de la Chine.',
      image: {
        src: 'chine/decouvrir.jpg',
        alt: 'La Grande Muraille serpente sur les crêtes boisées de Mutianyu, près de Pékin.',
      },
    },
    {
      title: 'Sortir de sa zone de confort',
      text: "Cinq journées d’immersion dans une école de kung‑fu, environ 6 heures d’entraînement par jour. Se lever tôt, essayer, recommencer : le maître adapte le rythme au niveau du groupe.",
      image: {
        src: 'chine/zone-de-confort.jpg',
        alt: 'Deux pratiquants, l’un en tenue grise, l’autre en robe safran, sur un chemin rocheux en forêt, près de Tengzhou.',
      },
    },
    {
      title: 'Vivre l’expérience ensemble',
      text: "Tu arrives seul, tu repars avec une famille. On se motive, on se soutient dans l’effort, dans une ambiance bienveillante, et chacun rentre la tête remplie de souvenirs en commun. 9 voyageurs maximum.",
      image: {
        src: 'chine/ensemble.jpg',
        alt: 'Des marcheurs avancent ensemble sur la Grande Muraille, vers une tour de guet.',
      },
    },
  ],

  programme: {
    intro:
      'Le voyage commence à Pékin et se termine à Shanghai. Trois étapes, dix jours, une seule aventure.',
    steps: [
      {
        kicker: '8–10 janvier · Pékin',
        title: 'Commencer par la Chine impériale',
        text: 'Rejoindre le groupe à Pékin, découvrir la capitale et la Grande Muraille, puis prendre le train rapide vers Tengzhou.',
        image: {
          src: 'chine/etape-pekin.jpg',
          alt: 'La Grande Muraille vue entre deux créneaux, avec une tour de guet et les collines de Mutianyu.',
        },
        days: [
          {
            title: 'Vendredi 8 janvier · Départ direction la Chine',
            text: 'Chacun rejoint Pékin pour le samedi 9 janvier au matin. Les billets d’avion pourront être coordonnés selon les villes et les dates de départ de chacun : un groupe sera créé pour s’organiser ensemble.',
          },
          {
            title: 'Samedi 9 janvier · Pékin impérial',
            text: 'Arrivée le matin, transfert collectif vers l’hôtel et rendez-vous du groupe à 12 h. Découverte de la Cité interdite et de la capitale impériale.',
          },
          {
            title: 'Dimanche 10 janvier · Grande Muraille et Tengzhou',
            text: 'Visite de la Grande Muraille, montée en téléphérique et descente en toboggan si la météo le permet. Après le déjeuner, transfert vers la gare et train rapide pour Tengzhou East.',
          },
        ],
      },
      {
        kicker: '11–15 janvier · Tengzhou',
        title: 'Entrer dans l’immersion kung‑fu',
        text: 'Cinq journées au cœur des montagnes de Lianqing, avec environ 6 heures d’entraînement par jour. Le maître adapte les séances au niveau du groupe, à sa progression et à la météo.',
        image: {
          src: 'chine/etape-tengzhou.jpg',
          alt: 'Le soleil se couche derrière les collines boisées autour de l’école de kung‑fu, près de Tengzhou.',
        },
        days: [
          {
            title: 'Une pratique complète',
            text: 'Qigong, conditionnement, formes Shaolin, Sanda, travail de la force, souplesse et méditation rythment l’immersion.',
          },
          {
            title: 'Un rythme progressif',
            text: 'Tu viens pour apprendre et essayer. Aucune expérience préalable du kung‑fu n’est nécessaire ; l’entraînement est ajusté au groupe.',
          },
          {
            title: 'La vie sur place',
            text: 'Six nuits à l’école, au rythme du groupe : entraînement, repas à la cantine, récupération et soirées partagées.',
          },
        ],
      },
      {
        kicker: '16–18 janvier · Shanghai',
        title: 'Terminer entre tradition et futur',
        text: 'Rejoindre Shanghai en train rapide, découvrir Yuyuan, le Bund et Lujiazui, puis prendre le temps de clôturer l’aventure ensemble.',
        image: {
          src: 'chine/etape-shanghai.jpg',
          alt: 'Les tours illuminées de Lujiazui et la tour de la Perle de l’Orient à Shanghai, au crépuscule.',
        },
        days: [
          {
            title: 'Samedi 16 janvier · Tengzhou → Shanghai',
            text: 'Train rapide vers Shanghai Hongqiao, transfert et installation à l’hôtel. En fin de journée : ruelles illuminées de Yuyuan, Bund et croisière nocturne sur le Huangpu.',
          },
          {
            title: 'Dimanche 17 janvier · Shanghai traditionnel et futuriste',
            text: 'Découverte de Lujiazui et montée à l’observatoire de la Shanghai Tower. Balades et temps libre selon les envies du groupe, puis dîner d’au revoir.',
          },
          {
            title: 'Lundi 18 janvier · Retour',
            text: 'Check-out et transfert collectif vers l’aéroport de Shanghai.',
          },
        ],
      },
    ],
  },

  practical: [
    {
      title: 'Tes vols',
      text: "Les vols internationaux ne sont pas inclus : arrivée à Pékin le samedi 9 janvier au matin, départ de Shanghai le 18 janvier. Un groupe dédié permet de coordonner les billets selon les villes et les dates de départ de chacun.",
    },
    {
      title: 'Hébergement et repas',
      text: "9 nuits : 1 à Pékin, 6 à l’école de kung‑fu et 2 à Shanghai, en chambres non mixtes partagées à deux. Les repas sont fournis pendant l’immersion ; à Pékin et à Shanghai, seuls les repas de groupe annoncés sont inclus.",
    },
    {
      title: 'Visa et assurance',
      text: "Selon ta nationalité, un visa peut être nécessaire pour janvier 2027. Une assurance voyage couvrant le séjour et la pratique du kung‑fu est obligatoire.",
    },
    {
      title: 'À mettre dans ton sac',
      text: "Le voyage a lieu en hiver : vêtements chauds pour Pékin et la Grande Muraille, une tenue souple, des chaussures confortables et une gourde. L’uniforme de kung‑fu est fourni.",
    },
  ],

  included: [
    '9 nuits d’hébergement : 1 à Pékin, 6 pendant l’immersion kung‑fu et 2 à Shanghai',
    'Chambres non mixtes partagées à deux durant tout le séjour',
    '5 journées d’immersion, environ 6 h d’entraînement par jour',
    'Uniforme de kung‑fu',
    '3 repas par jour pendant l’immersion',
    '2 trains rapides : Pékin → Tengzhou East et Tengzhou East → Shanghai Hongqiao',
    'Transferts collectifs prévus entre les aéroports, les gares et les hébergements',
    'Cité interdite, Grande Muraille, croisière sur le Huangpu et Shanghai Tower',
    'Accompagnement pendant toute l’expérience',
  ],
  notIncluded: [
    'Vols internationaux aller-retour',
    'Visa éventuel selon ta nationalité',
    'Assurance voyage obligatoire',
    'Repas à Pékin et Shanghai hors repas de groupe annoncés',
    'Supplément chambre individuelle',
    'Transferts effectués en dehors des créneaux collectifs',
    'Dépenses personnelles',
  ],

  conditions: [
    {
      title: '1 890 € au total',
      text: 'Le tarif est de 1 890 € par personne, hors vols internationaux. Le paiement est possible en 3 fois sans frais.',
    },
    {
      title: '630 € pour réserver ta place',
      text: 'Après validation de ta demande, un acompte obligatoire de 630 € confirme ta place. Le solde de 1 260 € peut ensuite être réglé en une fois ou en deux mensualités de 630 €, sans frais.',
    },
    {
      title: 'Une demande, puis une validation',
      text: 'Le formulaire constitue une demande d’inscription. Si ta demande est retenue, tu reçois un email ou un message de confirmation avec les prochaines étapes.',
    },
    {
      title: '9 places maximum',
      text: 'Une fois ta place validée, tu es ajouté au groupe WhatsApp pour rencontrer les autres participants et recevoir toutes les informations pratiques.',
    },
  ],

  faq: [
    {
      question: "Faut-il avoir déjà pratiqué le kung‑fu ?",
      answer: "Non, l’expérience est ouverte aux débutants. Une condition physique correcte et l’envie de t’investir suffisent : le programme mêle Qigong, conditionnement, formes Shaolin, Sanda, force, souplesse et méditation, au rythme du groupe.",
    },
    {
      question: "Peut-on venir seul ?",
      answer: "Oui. Tu fais connaissance avec les autres voyageurs dans le groupe WhatsApp avant le départ, puis tout se vit ensemble sur place.",
    },
  ],

  applicationUrl: 'https://tally.so/r/rj7y2L',
  brevo: {},
  seo: {
    title: 'Chapitre 1 : Chine · 10 jours et immersion kung‑fu — RAHAL',
    description:
      'Du 8 au 18 janvier 2027 : Pékin, immersion kung‑fu à Tengzhou et Shanghai. 9 voyageurs, 1 890 €, paiement en 3 fois sans frais.',
  },
};
