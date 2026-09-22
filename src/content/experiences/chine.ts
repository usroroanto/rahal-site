import type { Experience } from '../types';

/**
 * DISCIPLINE — Chine.
 * Les champs laissés vides (dates, prix, école, inclus…) ne sont pas encore confirmés :
 * ils sont masqués ou remplacés par une formulation d'attente. Renseigne-les ici dès qu'ils sont connus.
 */
export const chine: Experience = {
  slug: 'chine',
  name: 'DISCIPLINE',
  country: 'Chine',
  practice: 'Kung-fu',
  labels: ['Chine', 'Kung-fu', 'Petit groupe'],
  tagline: 'Pars en Chine pour t’initier au kung-fu, explorer le pays et partager l’aventure en petit groupe.',
  summary:
    'Une initiation au kung-fu au cœur de la Chine, entre entraînements, découverte du pays et vie de groupe.',
  intro:
    'Un séjour construit autour de trois choses : l’entraînement au kung-fu, la découverte de la Chine et la vie en petit groupe. Tu apprends une discipline exigeante avec des pratiquants, tu explores un pays immense, et tu vis tout ça avec quelques personnes venues pour la même raison que toi.',
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

  // Bandeau d'informations — à renseigner dès confirmation.
  dates: undefined, // ex. 'Du 12 au 24 avril 2027'
  duration: undefined, // ex. '12 jours'
  groupSize: 'Petit groupe', // ex. '8 à 12 personnes'
  price: undefined, // ex. '2 450 € par personne'
  priceNote: undefined, // ex. 'Hors vols internationaux'

  dimensions: [
    {
      title: 'S’initier au kung-fu',
      text: 'Des séances d’entraînement pour poser de vraies bases : postures, déplacements, premiers enchaînements. Tu apprends avec des pratiquants, dans le respect de la discipline et à ton rythme. Aucune expérience préalable n’est demandée.',
      image: {
        src: 'chine/entrainement.jpg',
        alt: 'Entraînement de kung-fu : postures et enchaînements travaillés en groupe.',
      },
    },
    {
      title: 'Explorer la Chine',
      text: 'Entre les entraînements, tu découvres le pays : ses grands paysages, ses villes, sa cuisine, ses gestes du quotidien. Pas de visite au pas de course, mais du temps pour regarder, marcher, goûter et se laisser surprendre.',
      image: {
        src: 'chine/paysage.jpg',
        alt: 'Paysage de montagnes en Chine, baigné de brume.',
      },
    },
    {
      title: 'Partager l’aventure',
      text: 'Un petit groupe, des journées vécues ensemble, des efforts partagés et des soirées à refaire la journée. Que tu viennes seul ou accompagné, tu fais partie de l’équipe dès le premier jour.',
      image: {
        src: 'chine/groupe.jpg',
        alt: 'Moment de vie en groupe autour d’un repas partagé.',
      },
    },
  ],

  // Programme par étapes. Tant qu'aucune étape n'est renseignée, le site affiche
  // « Programme détaillé prochainement disponible ». Exemple de structure dans le README.
  programme: {
    intro:
      'Le séjour alterne entraînements, exploration et temps partagés. Le programme détaillé, jour par jour, est en cours de finalisation.',
    steps: [],
  },

  practical: [
    {
      title: 'Niveau physique et débutants',
      text: 'Aucune pratique du kung-fu n’est nécessaire : le séjour est pensé comme une initiation. Une condition physique correcte et l’envie de s’y mettre suffisent. En cas de doute, écris-nous avant de demander le programme.',
    },
    {
      title: 'École et encadrement',
      text: 'Les séances sont encadrées par des pratiquants expérimentés. Le nom de l’école et le détail de l’encadrement sont précisés dans le programme.',
    },
    {
      title: 'Hébergement et chambres',
      text: 'Tu partages le quotidien du groupe, y compris le soir. Le type d’hébergement et la répartition des chambres sont précisés dans le programme.',
    },
    {
      title: 'Repas',
      text: 'Manger fait partie du voyage : les repas sont l’occasion de goûter la cuisine locale ensemble. Le détail des repas prévus figure dans le programme.',
    },
    {
      title: 'Transports et arrivée',
      text: 'Le point de rendez-vous, les horaires et les transports sur place sont indiqués dans le programme.',
    },
    {
      title: 'Le rôle de Yassine',
      text: 'Yassine accompagne le groupe pendant tout le séjour : il fait le lien avec l’école et les personnes rencontrées, veille au rythme de chacun et vit l’expérience avec toi.',
    },
  ],

  // Listes inclus / non inclus : masquées tant qu'elles ne sont pas confirmées.
  included: undefined, // ex. ['Hébergement', 'Entraînements encadrés', 'Petit-déjeuners']
  notIncluded: undefined, // ex. ['Vols internationaux', 'Assurance voyage']

  // Modalités d'inscription, paiement, annulation : masquées tant qu'elles ne sont pas confirmées.
  conditions: undefined,

  faq: [
    {
      question: 'Faut-il avoir déjà pratiqué le kung-fu ?',
      answer: 'Non. DISCIPLINE est une initiation : tu apprends sur place, avec des pratiquants, en partant de zéro si besoin.',
    },
    {
      question: 'Peut-on venir seul ?',
      answer: 'Oui. Le séjour est pensé pour être vécu en petit groupe : que tu viennes seul ou accompagné, tu fais vite partie de l’équipe.',
    },
    {
      question: 'Quand connaîtra-t-on les dates et le prix ?',
      answer: 'Dès qu’ils sont confirmés, ils sont publiés sur cette page. En demandant le programme, tu es prévenu directement par email.',
    },
    {
      question: 'Demander le programme, est-ce que ça m’engage ?',
      answer: 'Non. Une demande de programme n’est pas une réservation : tu reçois simplement le détail du séjour et les modalités pour t’inscrire si tu le souhaites.',
    },
  ],

  // Lien vers le programme (PDF à déposer dans public/programmes/). Laisser vide tant qu'il n'existe pas.
  programmeUrl: undefined, // ex. '/programmes/discipline-chine.pdf'

  brevo: {
    listId: undefined, // ex. 12
    templateId: undefined, // ex. 3
  },

  seo: {
    title: 'DISCIPLINE — Initiation au kung-fu en Chine, en petit groupe',
    description:
      'Pars en Chine avec RAHAL pour t’initier au kung-fu, explorer le pays et partager l’aventure en petit groupe. Demande le programme du séjour.',
  },
};
