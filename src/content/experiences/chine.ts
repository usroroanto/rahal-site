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
    src: 'chine/terrasse-kungfu.jpg',
    alt: 'Trois pratiquants en tenue grise enchaînent des mouvements de kung‑fu sur une terrasse, devant des toits dorés et les montagnes de Lianqing.',
    position: 'center 45%',
    mobilePosition: '38% center',
  },
  card: {
    src: 'chine/entrainement.jpg',
    alt: 'Yassine, de dos, en tenue de kung‑fu grise devant le grand escalier de pierre d’un temple aux colonnes rouges, près de Tengzhou.',
    position: '50% 60%',
    mobilePosition: '50% 48%',
  },

  dates: 'Du 8 au 18 janvier 2027',
  datesNote: 'Arrivée à Pékin le 9 au matin',
  duration: '10 jours',
  groupSize: '9 personnes',
  price: '1 890 €',
  priceNote: 'Paiement en 1 à 3 fois sans frais · Hors vols internationaux',

  dimensions: [
    {
      title: 'Découvrir autrement',
      text: 'Commencer à Pékin, s’initier au kung‑fu à Tengzhou et terminer à Shanghai. Trois temps pour voir plusieurs visages de la Chine.',
      image: {
        src: 'chine/decouvrir.jpg',
        alt: 'La Grande Muraille serpente sur les crêtes boisées de Mutianyu, près de Pékin.',
      },
    },
    {
      title: 'Sortir de sa zone de confort',
      text: 'Cinq journées d’immersion dans une école de kung‑fu, environ 6 heures d’entraînement par jour. Se lever tôt, essayer, recommencer : le maître adapte le rythme au niveau du groupe.',
      image: {
        src: 'chine/zone-de-confort.jpg',
        alt: 'Deux pratiquants, l’un en tenue grise, l’autre en robe safran, sur un chemin rocheux en forêt, près de Tengzhou.',
      },
    },
    {
      title: 'Vivre l’expérience ensemble',
      text: 'Tu arrives seul, tu repars avec une famille. On se motive, on se soutient dans l’effort, dans une ambiance bienveillante, et chacun rentre la tête remplie de souvenirs en commun.',
      image: {
        src: 'chine/etape-shanghai.jpg',
        alt: 'Les gratte-ciel de Shanghai et la tour de la Perle de l’Orient illuminés au crépuscule.',
        position: 'center center',
        mobilePosition: 'center center',
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
            text: 'Vol vers Pékin : chacun rejoint la capitale pour le samedi 9 janvier au matin. Les billets d’avion pourront être coordonnés selon les villes et les dates de départ de chacun : un groupe sera créé pour s’organiser ensemble. Ne réserve pas ton billet avant la validation de ta demande.',
          },
          {
            title: 'Samedi 9 janvier · Pékin impérial',
            text: 'Arrivée le matin, transfert collectif vers l’hôtel et rendez-vous du groupe à 12 h. Découverte de la Cité interdite et de la capitale impériale.',
          },
          {
            title: 'Dimanche 10 janvier · Grande Muraille et Tengzhou',
            text: 'Visite de la Grande Muraille, montée en téléphérique et descente en toboggan si la météo le permet. Après le déjeuner, transfert vers la gare et train rapide pour Tengzhou East.',
          },
        ],
      },
      {
        kicker: '11–15 janvier · Kung‑fu à Tengzhou',
        title: 'Entrer dans l’immersion kung‑fu',
        daysLabel: 'Voir le détail de l’immersion',
        text: 'Cinq journées au cœur des montagnes de Lianqing, avec environ 6 heures d’entraînement par jour. Le maître adapte les séances au niveau du groupe, à sa progression et à la météo.',
        image: {
          src: 'chine/maitre-escaliers.jpg',
          alt: 'Le maître, en robe safran, descend les escaliers de marbre d’un temple aux toits dorés, dans les montagnes près de Tengzhou.',
          position: 'center 50%',
        },
        days: [
          {
            title: 'Une pratique complète',
            text: 'Qigong, conditionnement, formes Shaolin, Sanda, travail de la force, souplesse et méditation rythment l’immersion.',
          },
          {
            title: 'Un rythme progressif',
            text: 'Tu viens pour apprendre et essayer. Aucune expérience préalable du kung‑fu n’est nécessaire ; l’entraînement est ajusté au groupe.',
          },
          {
            title: 'La vie sur place',
            text: 'Six nuits à l’école, au rythme du groupe : entraînement, repas à la cantine, récupération et soirées partagées.',
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
            text: 'Train rapide vers Shanghai Hongqiao, transfert et installation à l’hôtel. En fin de journée : ruelles illuminées de Yuyuan, Bund et croisière nocturne sur le Huangpu.',
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

  included: [
    '9 nuits d’hébergement : 1 à Pékin, 6 pendant l’immersion kung‑fu et 2 à Shanghai',
    'Chambres non mixtes partagées à deux durant tout le séjour',
    '5 journées d’immersion, environ 6 h d’entraînement par jour',
    'Uniforme de kung‑fu',
    '3 repas par jour pendant l’immersion',
    '2 trains rapides : Pékin → Tengzhou East et Tengzhou East → Shanghai Hongqiao',
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

  pricing: {
    total: '1 890 €',
    note: 'par personne, hors vols internationaux · En 1 fois : 1 890 €, ou en 2 ou 3 fois selon le détail ci-dessous',
    lines: [
      { label: 'Acompte', value: '300 €', note: 'premier versement du paiement en 2 ou 3 fois, après validation de ta demande' },
      { label: 'Solde', value: '1 590 €', note: 'en une fois, ou en deux versements de 795 € sans frais' },
    ],
  },
  applicationSteps: [
    {
      title: 'Tu fais ta demande.',
      text: 'Quelques minutes pour te présenter et répondre à quelques questions sur ton voyage.',
    },
    {
      title: 'On revient vers toi.',
      text: 'Si ta demande est retenue, tu reçois un email ou un message de confirmation.',
    },
    {
      title: 'Tu confirmes ta place.',
      text: 'Tu réserves ta place avec 300 € d’acompte en choisissant le paiement en 2 ou 3 fois, ou avec le règlement intégral de 1 890 €. Puis tu rejoins le groupe WhatsApp pour rencontrer les autres participants.',
    },
  ],

  faq: [
    {
      question: 'Faut-il avoir déjà pratiqué le kung‑fu ?',
      answer: 'Non, l’expérience est ouverte aux débutants. Une condition physique correcte et l’envie de t’investir suffisent : le maître adapte les séances au niveau du groupe et à sa progression.',
    },
    {
      question: 'Peut-on venir seul ?',
      answer: "Bien sûr ! Tu fais connaissance avec les autres voyageurs dans le groupe WhatsApp avant le départ, puis on partage l'aventure ensemble !",
    },
    {
      question: 'À quoi ressemble une journée à l’école ?',
      answer: 'Environ 6 heures d’entraînement, entre Qigong, conditionnement, formes Shaolin, Sanda, travail de la force, souplesse et méditation. Le reste du temps : repas à la cantine, récupération et soirées partagées avec le groupe.',
    },
    {
      question: 'Quand commence le voyage, et les vols sont-ils inclus ?',
      answer: 'Le voyage a lieu du 8 au 18 janvier 2027 : départ le vendredi 8 janvier pour arriver à Pékin le samedi 9 au matin, puis fin du séjour à Shanghai le lundi 18 janvier. Les vols internationaux ne sont pas inclus. Attends la validation de ta demande avant de réserver ton billet. Un groupe WhatsApp sera créé pour coordonner les billets d’avion selon les villes et les dates de départ de chacun.',
    },
    {
      question: 'Où dort-on, et comment se passent les repas ?',
      answer: '9 nuits : 1 à Pékin, 6 à l’école de kung‑fu et 2 à Shanghai, en chambres non mixtes partagées à deux. Pendant l’immersion, les 3 repas par jour sont fournis par la cantine de l’école ; à Pékin et à Shanghai, seuls les repas de groupe annoncés sont inclus. Une chambre individuelle est possible avec supplément, sur demande et selon disponibilité.',
    },
    {
      question: 'Faut-il un visa et une assurance ?',
      answer: 'Selon ta nationalité et les règles d’entrée en vigueur en janvier 2027, un visa peut être nécessaire, et ton passeport doit être valide au moins 6 mois après le retour. Une assurance voyage couvrant le séjour est obligatoire.',
    },
    {
      question: 'Que mettre dans son sac ?',
      answer: 'Le voyage a lieu en hiver : prévois des vêtements chauds pour Pékin et la Grande Muraille, une tenue souple et des chaussures confortables. L’uniforme de kung‑fu est fourni.',
    },
    {
      question: 'Comment se déroule l’inscription ?',
      answer: 'Tu fais ta demande en ligne, en quelques minutes. Si elle est retenue, tu reçois les modalités de paiement : 1 890 € en une fois, ou 300 € d’acompte puis un versement de 1 590 € ou deux versements de 795 €, sans frais. Une fois ta place validée, tu rejoins le groupe WhatsApp des participants.',
      link: { label: 'Faire ma demande', href: '/experiences/chine/inscription' },
    },
  ],

  applicationUrl: '/experiences/chine/inscription',
  registration: {
    title: 'Ta demande d’inscription',
    intro:
      'Trois courtes étapes pour te présenter. Ce formulaire constitue une demande d’inscription : ta place est réservée après validation de ta demande et paiement de 300 € d’acompte si tu choisis le règlement en 2 ou 3 fois, ou de 1 890 € en une fois.',
    subject: 'Demande d’inscription · Chine, janvier 2027',
    steps: [
      {
        id: 'toi',
        title: 'Faisons connaissance',
        text: 'Tes coordonnées pour recevoir les prochaines étapes.',
        fields: [
          { name: 'Prénom', label: 'Prénom', type: 'text', required: true, autocomplete: 'given-name', placeholder: 'Ton prénom', width: 'half' },
          { name: 'Nom', label: 'Nom de famille', type: 'text', required: true, autocomplete: 'family-name', placeholder: 'Ton nom', width: 'half' },
          { name: 'Date de naissance', label: 'Date de naissance', type: 'date', required: true, autocomplete: 'bday', width: 'half' },
          { name: 'Sexe', label: 'Sexe', type: 'choice', required: true, options: ['Homme', 'Femme'], hint: 'Pour la répartition des chambres non mixtes.', width: 'half' },
          { name: 'email', label: 'Adresse email', type: 'email', required: true, autocomplete: 'email', placeholder: 'ton@email.com' },
          { name: 'WhatsApp', label: 'Numéro WhatsApp', type: 'tel', required: true, autocomplete: 'tel', placeholder: '+33 6 12 34 56 78', hint: 'Avec l’indicatif. Il sert à te transmettre les prochaines étapes de l’inscription.', width: 'half' },
          { name: 'Instagram', label: 'Instagram', type: 'text', placeholder: '@tonpseudo', width: 'half' },
        ],
      },
      {
        id: 'voyage',
        title: 'Ton voyage',
        text: 'Ces quelques réponses nous permettent de vérifier que l’expérience correspond bien à tes disponibilités et à ton projet.',
        fields: [
          { name: 'Passeport valide 6 mois après le retour', label: 'As-tu un passeport valide au moins 6 mois après le retour ?', type: 'choice', required: true, options: ['Oui', 'Mon renouvellement est en cours ou prévu', 'Non'] },
          { name: 'Pays du passeport', label: 'Quel pays a délivré ton passeport ?', type: 'text', required: true, autocomplete: 'country-name', placeholder: 'Ex. France' },
          { name: 'Assurance voyage', label: 'As-tu souscrit une assurance voyage ?', type: 'choice', required: true, options: ['Oui', 'Pas encore'], hint: 'Elle est obligatoire pour participer.' },
          { name: 'Rythme soutenu', label: 'Es-tu prêt(e) à suivre un rythme soutenu pendant l’immersion kung‑fu ?', type: 'choice', required: true, hint: 'L’expérience est accessible à tous les niveaux, mais elle implique des réveils matinaux, plusieurs heures d’entraînement et l’envie de se challenger.', options: ['Oui, je suis prêt(e) à vivre l’expérience à fond', 'Oui, mais j’ai quelques réserves ou questions', 'Non, ce rythme ne me correspond pas'] },
          { name: 'Paiement', label: 'Comment souhaites-tu régler ton voyage ?', type: 'choice', required: true, hint: 'Les instructions de paiement te sont transmises après validation de ta demande.', options: ['En 1 fois : 1 890 €', 'En 2 fois : 300 € d’acompte, puis 1 590 €', 'En 3 fois : 300 € d’acompte, puis deux versements de 795 €'] },
        ],
      },
      {
        id: 'envoi',
        title: 'Avant d’envoyer',
        text: 'Deux dernières questions et une confirmation, puis tu vérifies tes réponses.',
        fields: [
          { name: 'Droit à l’image', label: 'Acceptes-tu que les photos et vidéos du voyage où tu es reconnaissable soient publiées sur les réseaux sociaux de RAHAL ?', type: 'choice', required: true, hint: 'Ton choix n’a aucune incidence sur ta participation au voyage.', options: ['Oui, j’autorise cette utilisation de mon image', 'Non, je ne souhaite pas apparaître sur les publications de RAHAL'] },
          { name: 'Question ou contrainte', label: 'Une question, une contrainte ou un problème de santé à nous signaler ?', type: 'textarea', placeholder: 'Facultatif' },
          { name: 'Confirmation', label: 'Je confirme avoir pris connaissance du programme, des prestations incluses et non incluses et des modalités d’inscription et de paiement. J’ai compris que les vols internationaux ne sont pas inclus et que je dois être à Pékin le samedi 9 janvier 2027 au matin.', type: 'consent', required: true },
        ],
      },
    ],
    success: {
      title: 'Ta demande d’inscription est bien envoyée.',
      text: [
        'Tu recevras par email ou WhatsApp les prochaines étapes et les modalités du paiement choisi.',
        'Ta place sera définitivement réservée après validation de ta demande et réception des 300 € d’acompte pour le paiement en 2 ou 3 fois, ou des 1 890 € pour le paiement en une fois.',
      ],
    },
    fallbackUrl: 'https://tally.so/r/rj7y2L',
  },

  brevo: {},
  seo: {
    title: 'Chapitre 1 : Chine · 10 jours et immersion kung‑fu — RAHAL',
    description:
      'Du 8 au 18 janvier 2027 : Pékin, immersion kung‑fu à Tengzhou et Shanghai. 9 voyageurs, 1 890 €, paiement en 1 à 3 fois sans frais.',
  },
};
