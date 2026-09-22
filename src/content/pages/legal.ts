/**
 * Pages légales. Le contenu définitif sera fourni avant publication :
 * en attendant, un texte d'attente honnête est affiché.
 */
export const legalPages = {
  confidentialite: {
    seo: {
      title: 'Politique de confidentialité — RAHAL',
      description: 'Politique de confidentialité du site RAHAL.',
    },
    title: 'Politique de confidentialité',
    /** Paragraphes du contenu. Remplacer le texte d'attente par le contenu définitif. */
    paragraphs: [
      'Notre politique de confidentialité sera publiée sur cette page prochainement.',
      'Les informations transmises via les formulaires du site (prénom, email, numéro WhatsApp facultatif, message) servent uniquement à te répondre et à t’envoyer les informations que tu as demandées. Pour toute question sur tes données, écris-nous depuis la page contact.',
    ],
  },
  mentionsLegales: {
    seo: {
      title: 'Mentions légales — RAHAL',
      description: 'Mentions légales du site RAHAL.',
    },
    title: 'Mentions légales',
    paragraphs: [
      'Les mentions légales du site seront publiées sur cette page prochainement.',
      'Pour nous contacter, utilise le formulaire de la page contact.',
    ],
  },
} as const;
