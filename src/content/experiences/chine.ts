import type { Experience } from '../types';

export const chine: Experience = {
  slug: 'chine',
  name: 'Chapitre 1',
  country: 'Chine',
  practice: 'Kung-fu',
  labels: ['Le prochain départ RAHAL', 'Chine', 'Janvier 2027'],
  tagline: '10 jours pour sortir de ta routine, découvrir la Chine autrement et t’initier au kung-fu.',
  summary:
    'Pékin, une immersion kung-fu à Tengzhou, puis Shanghai. Une première aventure faite pour découvrir, apprendre et redevenir débutant.',
  intro:
    'Une expérience, pas un voyage classique. Cette première aventure a été pensée pour découvrir la Chine, mais surtout pour vivre une immersion qui demande de la discipline, de l’humilité et le courage de redevenir débutant.',
  status: 'demandes-ouvertes',
  published: true,

  hero: {
    src: 'chine/muraille.jpg',
    alt: 'La Grande Muraille de Chine serpentant sur les crêtes, au petit matin.',
    position: 'center 45%',
    mobilePosition: '40% center',
  },
  card: {
    src: 'chine/entrainement.jpg',
    alt: 'Séance d’entraînement de kung-fu en extérieur.',
    position: 'center',
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
    },
    {
      title: 'Redevenir débutant',
      text: 'Cinq journées d’immersion, environ 6 heures d’entraînement par jour. Le programme s’adapte au niveau du groupe, à sa progression et à la météo.',
    },
    {
      title: 'Vivre l’expérience ensemble',
      text: '9 voyageurs maximum, des efforts partagés et des souvenirs qui se construisent au fil des journées. Tu peux venir seul ou accompagné.',
    },
  ],

  programme: {
    intro:
      'Le voyage commence à Pékin et se termine à Shanghai. Les horaires des trains et l’ordre des visites seront confirmés, mais le contenu essentiel de l’expérience reste inchangé.',
    steps: [
      {
        kicker: '8–10 janvier · Pékin',
        title: 'Commencer par la Chine impériale',
        text: 'Rejoindre le groupe à Pékin, découvrir la capitale et la Grande Muraille, puis prendre le train rapide vers Tengzhou.',
        days: [
          {
            title: 'Vendredi 8 janvier · Départ direction la Chine',
            text: 'Chacun organise librement son vol international pour être à Pékin le samedi 9 janvier au matin. Ne réserve pas ton billet avant le feu vert de RAHAL.',
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
        title: 'Entrer dans l’immersion kung-fu',
        text: 'Cinq journées au cœur des montagnes de Lianqing, avec environ 6 heures d’entraînement par jour. Le maître adapte les séances au niveau du groupe, à sa progression et à la météo.',
        days: [
          {
            title: 'Une pratique complète',
            text: 'Qigong, conditionnement, formes Shaolin, Sanda, travail de la force, souplesse et méditation rythment l’immersion.',
          },
          {
            title: 'Un rythme progressif',
            text: 'Tu viens pour apprendre et essayer. Aucune expérience préalable du kung-fu n’est nécessaire ; l’entraînement est ajusté au groupe.',
          },
          {
            title: 'La vie sur place',
            text: 'Six nuits sur le lieu d’immersion, chambres non mixtes partagées à deux, trois repas par jour à la cantine et uniforme fourni.',
          },
        ],
      },
      {
        kicker: '16–18 janvier · Shanghai',
        title: 'Terminer entre tradition et futur',
        text: 'Rejoindre Shanghai en train rapide, découvrir Yuyuan, le Bund et Lujiazui, puis prendre le temps de clôturer l’aventure ensemble.',
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
            text: 'Check-out et transfert collectif vers l’aéroport de Shanghai dans le créneau communiqué au groupe.',
          },
        ],
      },
    ],
  },

  practical: [
    {
      title: 'Tes vols',
      text: 'Les vols internationaux ne sont pas inclus. Prévois une arrivée à Pékin le samedi 9 janvier au matin et un départ de Shanghai le 18 janvier. Ne réserve rien avant le feu vert : on peut t’aider à trouver des horaires adaptés.',
    },
    {
      title: 'Le groupe',
      text: 'L’expérience est limitée à 9 voyageurs. Tu peux venir seul ou accompagné. Après validation de ta place, tu rejoins le groupe WhatsApp pour faire connaissance et recevoir les informations pratiques.',
    },
    {
      title: 'Le niveau demandé',
      text: 'Tu n’as pas besoin d’avoir déjà pratiqué. Prévois simplement une condition physique correcte et l’envie de t’investir pendant cinq journées d’entraînement.',
    },
    {
      title: 'Les chambres',
      text: '9 nuits sont prévues : 1 à Pékin, 6 pendant l’immersion et 2 à Shanghai. Les chambres sont non mixtes et partagées à deux. Une chambre individuelle peut être demandée avec supplément, selon disponibilité.',
    },
    {
      title: 'Les repas',
      text: 'Pendant les cinq journées d’immersion, trois repas par jour sont fournis par la cantine. À Pékin et Shanghai, les repas qui ne sont pas expressément annoncés comme repas de groupe restent à ta charge.',
    },
    {
      title: 'Visa et assurance',
      text: 'Selon ta nationalité et les règles applicables en janvier 2027, un visa peut être nécessaire. Une assurance voyage couvrant le séjour et la pratique du kung-fu est obligatoire pour participer.',
    },
    {
      title: 'Transferts collectifs',
      text: 'Les transferts prévus entre les aéroports, les gares et les hébergements sont inclus dans les créneaux communiqués. Tout transfert organisé en dehors de ces créneaux reste à ta charge.',
    },
    {
      title: 'À mettre dans ton sac',
      text: 'Le voyage a lieu en hiver. Emporte des vêtements chauds pour Pékin et la Grande Muraille, une tenue souple, des chaussures confortables et une gourde. L’uniforme de kung-fu est fourni.',
    },
  ],

  included: [
    '9 nuits d’hébergement : 1 à Pékin, 6 pendant l’immersion kung-fu et 2 à Shanghai',
    'Chambres non mixtes partagées à deux durant tout le séjour',
    '5 journées d’immersion, environ 6 h d’entraînement par jour',
    'Uniforme de kung-fu',
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
      question: 'Faut-il avoir déjà pratiqué le kung-fu ?',
      answer: 'Non. L’expérience est ouverte aux débutants. Le maître adapte le programme au niveau du groupe, à sa progression et à la météo.',
    },
    {
      question: 'Combien d’heures va-t-on s’entraîner ?',
      answer: 'Environ 6 heures par jour pendant cinq journées, du 11 au 15 janvier. Le programme mêle notamment Qigong, conditionnement, formes Shaolin, Sanda, force, souplesse et méditation.',
    },
    {
      question: 'Peut-on venir seul ?',
      answer: 'Oui. L’expérience accueille 9 voyageurs maximum. Tu peux venir seul ou accompagné, puis faire connaissance avec le groupe avant le départ.',
    },
    {
      question: 'Peut-on payer en plusieurs fois ?',
      answer: 'Oui. Après validation de ta demande, l’acompte est de 630 €. Le solde peut être réglé en une fois ou en deux mensualités de 630 €, sans frais.',
    },
    {
      question: 'Les vols internationaux sont-ils inclus ?',
      answer: 'Non. Tu dois arriver à Pékin le 9 janvier au matin et repartir de Shanghai le 18 janvier. Attends le feu vert de RAHAL avant de réserver.',
    },
    {
      question: 'Le programme peut-il changer ?',
      answer: 'Les horaires des trains et l’ordre des visites seront confirmés. Le contenu essentiel du voyage reste inchangé.',
    },
  ],

  applicationUrl: 'https://tally.so/r/rj7y2L',
  brevo: {},
  seo: {
    title: 'Chapitre 1 : Chine · 10 jours et immersion kung-fu — RAHAL',
    description:
      'Du 8 au 18 janvier 2027 : Pékin, immersion kung-fu à Tengzhou et Shanghai. 9 voyageurs, 1 890 €, paiement en 3 fois sans frais.',
  },
};
