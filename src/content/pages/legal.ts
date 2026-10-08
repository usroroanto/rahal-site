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
      'Les informations transmises via le formulaire de contact (prénom, email, sujet et message) et la liste d’attente (email) nous parviennent par email via le service FormSubmit et servent uniquement à te répondre et à t’envoyer les informations que tu as demandées.',
      'La demande d’inscription à un voyage recueille ton identité (prénom, nom, date de naissance, sexe), tes coordonnées (email, numéro WhatsApp, compte Instagram facultatif), des informations sur ton voyage (passeport, assurance, rythme, mode de paiement souhaité, droit à l’image) et, seulement si tu choisis de les signaler, d’éventuelles informations de santé. Ces réponses nous sont transmises par email via le service FormSubmit (ou via le service Tally si tu utilises le formulaire de secours proposé en cas d’échec de l’envoi) et servent uniquement à traiter ta demande et à organiser le voyage.',
      'Pour toute question sur tes données, écris-nous depuis la page contact.',
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
