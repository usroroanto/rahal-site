/**
 * Paramètres généraux du site : marque, navigation, coordonnées, pied de page.
 * Les coordonnées vides sont simplement masquées.
 */
export const site = {
  name: 'RAHAL',
  tagline: 'Apprendre. Essayer. Se dépasser.',
  description:
    'RAHAL organise des voyages en petit groupe pour découvrir un pays à travers une pratique, des rencontres et des expériences qui font sortir de ses habitudes.',
  locale: 'fr_FR',
  lang: 'fr',

  founder: {
    firstName: 'Yassine',
  },

  /** Coordonnées : laisser vide pour masquer. */
  contact: {
    email: '',
    instagram: '', // ex. 'https://www.instagram.com/rahal'
    instagramHandle: '', // ex. '@rahal'
    whatsapp: '', // ex. 'https://wa.me/33600000000'
  },

  nav: [
    { label: 'Nos expériences', href: '/experiences' },
    { label: 'L’esprit RAHAL', href: '/a-propos' },
    { label: 'FAQ / Contact', href: '/faq-contact' },
  ],

  /** Bouton mis en avant dans le menu. */
  navCta: { label: 'Prochain départ : Chine', href: '/experiences/chine' },

  /** Liens légaux du pied de page (configurables). */
  legalLinks: [
    { label: 'Confidentialité', href: '/confidentialite' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ],

  footer: {
    note: 'Voyages en petit groupe. Une destination, une pratique, une aventure partagée.',
  },
} as const;
