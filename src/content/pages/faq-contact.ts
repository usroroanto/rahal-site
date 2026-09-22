import type { Faq } from '../types';

/** Page FAQ / Contact. Les réponses qui dépendent d'un voyage renvoient vers sa page. */
export const faqContact = {
  seo: {
    title: 'Questions fréquentes et contact — RAHAL',
    description:
      'Venir seul, niveau requis, prochains départs, programme, inscription : les réponses aux questions fréquentes sur les voyages RAHAL, et un formulaire pour nous écrire.',
  },

  faq: {
    kicker: 'Questions fréquentes',
    title: 'Ce qu’on nous demande souvent.',
    items: [
      {
        question: 'Peut-on venir seul ?',
        answer: 'Oui. Les expériences RAHAL sont pensées pour être vécues en petit groupe : que tu viennes seul ou accompagné, tu fais vite partie de l’équipe.',
      },
      {
        question: 'Faut-il avoir déjà pratiqué l’activité ?',
        answer: 'Non. Chaque expérience est une initiation : tu apprends sur place, avec des pratiquants. Les éventuels prérequis sont précisés sur la page de chaque séjour.',
        link: { label: 'Voir le séjour DISCIPLINE en Chine', href: '/experiences/chine' },
      },
      {
        question: 'Quel niveau physique est nécessaire ?',
        answer: 'Ça dépend de la pratique. Pour DISCIPLINE en Chine, une condition physique correcte et l’envie de s’y mettre suffisent. Tout est détaillé dans les informations pratiques du séjour.',
        link: { label: 'Lire les informations pratiques', href: '/experiences/chine#pratique' },
      },
      {
        question: 'Comment connaître les prochains départs ?',
        answer: 'Les dates sont publiées sur la page de chaque expérience dès qu’elles sont confirmées. Pour être prévenu directement, demande le programme du séjour qui t’intéresse : tu recevras les informations dès leur publication.',
        link: { label: 'Voir les expériences', href: '/experiences' },
      },
      {
        question: 'Comment recevoir le programme ?',
        answer: 'Depuis la page du séjour, remplis le formulaire « Recevoir le programme » avec ton prénom et ton email. Tu le reçois par email. Demander le programme ne constitue pas une réservation.',
        link: { label: 'Recevoir le programme du séjour en Chine', href: '/experiences/chine#programme' },
      },
      {
        question: 'Comment se déroule l’inscription ?',
        answer: 'Les modalités d’inscription et de paiement sont communiquées avec le programme, et affichées sur la page du séjour dès qu’elles sont confirmées. Une demande de programme ne réserve pas de place.',
        link: { label: 'Voir la page du séjour', href: '/experiences/chine' },
      },
    ] as Faq[],
  },

  contact: {
    kicker: 'Contact',
    title: 'Une question ? Écris-nous.',
    text: 'Pour tout ce qui n’est pas dans la FAQ, laisse-nous un message : on te répond dès que possible.',
    subjects: ['Question sur un séjour', 'Question sur l’inscription', 'Partenariat', 'Autre'],
  },
} as const;
