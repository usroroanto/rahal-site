import type { Faq } from '../types';

export const faqContact = {
  "seo": {
    "title": "Questions fréquentes et contact — RAHAL",
    "description": "Venir seul, niveau requis, prochains départs, programme, inscription : les réponses aux questions fréquentes sur les voyages RAHAL, et un formulaire pour nous écrire."
  },
  "faq": {
    "kicker": "Questions fréquentes",
    "title": "Ce qu’on nous demande souvent.",
    "items": [
      {
        "question": "Peut-on venir seul ?",
        "answer": "Oui. Pour le prochain départ en Chine, le groupe est limité à 9 personnes. Que tu viennes seul ou accompagné, tu fais vite partie de l’équipe."
      },
      {
        "question": "Faut-il avoir déjà pratiqué l’activité ?",
        "answer": "Non. Chaque expérience est une initiation : tu apprends sur place, avec des pratiquants. Les éventuels prérequis sont précisés sur la page de chaque séjour.",
        "link": {
          "label": "Voir le séjour DISCIPLINE en Chine",
          "href": "/experiences/chine"
        }
      },
      {
        "question": "Quel niveau physique est nécessaire ?",
        "answer": "Ça dépend de la pratique. Pour DISCIPLINE en Chine, une condition physique correcte et l’envie de s’y mettre suffisent. Tout est détaillé dans les informations pratiques du séjour.",
        "link": {
          "label": "Lire les informations pratiques",
          "href": "/experiences/chine#pratique"
        }
      },
      {
        "question": "Comment connaître les prochains départs ?",
        "answer": "Notre prochain départ est la Chine, du 8 au 18 janvier 2027 : dix jours sur place à partir du 9 janvier. Les prochaines destinations seront présentées ici lorsqu’elles seront annoncées.",
        "link": {
          "label": "Voir les expériences",
          "href": "/experiences"
        }
      },
      {
        "question": "Où consulter le programme ?",
        "answer": "L’itinéraire et le détail jour par jour sont consultables directement sur la page du séjour. La consultation du programme ne constitue pas une réservation.",
        "link": {
          "label": "Voir le programme de la Chine",
          "href": "/experiences/chine#etapes"
        }
      },
      {
        "question": "Comment se déroule l’inscription ?",
        "answer": "Le séjour en Chine coûte 1 890 €, hors vols internationaux, et peut être réglé en 1 à 3 fois sans frais. Les échéances et les conditions de réservation et d’annulation doivent être précisées avant tout règlement.",
        "link": {
          "label": "Voir la page du séjour",
          "href": "/experiences/chine"
        }
      }
    ] as Faq[]
  },
  "contact": {
    "kicker": "Contact",
    "title": "Une question ? Écris-nous.",
    "text": "Pour tout ce qui n’est pas dans la FAQ, laisse-nous un message : on te répond dès que possible.",
    "subjects": [
      "Question sur un séjour",
      "Question sur l’inscription",
      "Partenariat",
      "Autre"
    ]
  }
} as const;
