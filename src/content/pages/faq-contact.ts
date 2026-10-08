import type { Faq } from '../types';

export const faqContact = {
  "seo": {
    "title": "Questions fréquentes et contact — RAHAL",
    "description": "Venir seul, niveau requis, prochains départs, programme, inscription : les réponses aux questions fréquentes sur les voyages RAHAL, et un formulaire pour nous écrire."
  },
  "faq": {
    "kicker": "Questions fréquentes",
    "title": "Ce qu’on nous demande souvent.",
    "image": {
      "src": "chine/dragon-cascade.jpg",
      "alt": "Un dragon doré veille sur une cascade entre les rochers, dans les montagnes de Lianqing, près de Tengzhou.",
      "position": "center 55%",
      "mobilePosition": "center 60%"
    },
    "items": [
      {
        "question": "Peut-on venir seul ?",
        "answer": "Oui. Les groupes sont volontairement petits (9 personnes pour la Chine) : tu arrives seul, tu repars avec des compagnons de route."
      },
      {
        "question": "Faut-il déjà pratiquer, ou avoir un bon niveau physique ?",
        "answer": "Non. Chaque expérience est une initiation ouverte aux débutants : tu apprends sur place, avec des pratiquants. Une condition physique correcte et l’envie de t’investir suffisent. Le rythme de chaque voyage est détaillé sur sa page.",
        "link": {
          "label": "Voir les questions sur la Chine",
          "href": "/experiences/chine#questions"
        }
      },
      {
        "question": "Comment connaître les prochains départs ?",
        "answer": "Le prochain départ est la Chine, du 8 au 18 janvier 2027. Pour découvrir les prochaines destinations en avant-première, inscris-toi à la liste d’attente.",
        "link": {
          "label": "Rejoindre la liste d’attente",
          "href": "/experiences#next-titre"
        }
      },
      {
        "question": "Où trouver le programme ?",
        "answer": "Le programme jour par jour est sur la page de chaque voyage, avec ce qui est inclus et les réponses aux questions pratiques.",
        "link": {
          "label": "Voir le programme de la Chine",
          "href": "/experiences/chine#etapes"
        }
      },
      {
        "question": "Comment se déroule l’inscription ?",
        "answer": "Le séjour coûte 1 890 €, hors vols internationaux. Après validation de ta demande, un acompte de 630 € réserve ta place. Le solde peut être réglé en une fois ou en deux versements de 630 €, sans frais.",
        "link": {
          "label": "Faire une demande d’inscription",
          "href": "/experiences/chine/inscription"
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
