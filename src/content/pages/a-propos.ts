import type { ImageRef } from '../types';

interface Chapter {
  kicker: string;
  title: string;
  text: string;
  image?: ImageRef;
}

/**
 * Page « L'esprit RAHAL » — racontée à la première personne par Yassine.
 * Les photos sont des photos personnelles de Yassine : leurs légendes le précisent.
 */
export const aPropos = {
  seo: {
    title: 'L’esprit RAHAL — L’histoire de Yassine',
    description:
      'Yassine raconte l’origine de RAHAL : un nom de famille, une passion du voyage et de l’apprentissage, un rêve d’enfant autour du kung-fu et l’envie de partager ça en petit groupe.',
  },

  hero: {
    kicker: 'L’esprit RAHAL',
    title: 'Je m’appelle Yassine, et RAHAL est né d’un rêve de gamin.',
    text: 'Passionné de voyage et d’apprentissage, j’ai créé RAHAL pour partager une façon de partir qui m’a marqué : apprendre une pratique sur place, avec les gens qui la vivent, et vivre l’aventure à plusieurs.',
    portrait: {
      src: 'yassine/portrait.jpg',
      alt: 'Portrait de Yassine, fondateur de RAHAL.',
      position: 'center 30%',
      caption: 'Yassine, fondateur de RAHAL.',
    },
  },

  sections: <Chapter[]>[
    {
      kicker: 'Le nom',
      title: 'Rahal, c’est mon nom de famille.',
      text: 'C’est aussi, à une lettre près, le mot arabe qui désigne le grand voyageur, celui qui ne tient pas en place. Quand j’ai cherché un nom pour ce projet, je n’ai pas eu à chercher longtemps : il était déjà là, sur ma carte d’identité.',
    },
    {
      kicker: 'Voyager pour apprendre',
      title: 'Je n’ai jamais voyagé pour cocher des lieux.',
      text: 'Ce qui me reste d’un voyage, ce n’est pas la liste des endroits vus. C’est ce que j’y ai appris : un geste, une recette, quelques mots d’une langue, une façon de faire les choses. C’est ce qui tient encore, bien après les photos.',
      image: {
        src: 'yassine/chine-1.jpg',
        alt: 'Photo personnelle de Yassine lors de son voyage en Chine.',
        caption: 'Photo personnelle de Yassine, lors de son voyage en Chine.',
      },
    },
    {
      kicker: 'Le kung-fu',
      title: 'Un rêve d’enfant, pris au sérieux des années plus tard.',
      text: 'Enfant, je regardais les films de kung-fu en boucle. Je rêvais de ces entraînements à l’aube, de cette rigueur, de cette discipline. Des années plus tard, je suis parti en Chine pour m’y confronter pour de vrai. J’ai eu mal partout, j’ai douté, et j’ai adoré. Je suis rentré avec une certitude : cette expérience méritait d’être partagée.',
      image: {
        src: 'yassine/chine-2.jpg',
        alt: 'Photo personnelle de Yassine à l’entraînement, en Chine.',
        caption: 'À l’entraînement, pendant le voyage personnel de Yassine en Chine.',
      },
    },
    {
      kicker: 'En petit groupe',
      title: 'Parce qu’on ose plus à plusieurs.',
      text: 'Un entraînement difficile passe mieux quand quelqu’un souffle à côté de toi. Les meilleurs moments d’un voyage sont souvent ceux qu’on n’avait pas prévus, autour d’une table ou sur un chemin. C’est pour ça que les expériences RAHAL se vivent en petit groupe : assez petit pour que chacun compte, assez grand pour que l’aventure soit partagée.',
      image: {
        src: 'yassine/chine-3.jpg',
        alt: 'Photo personnelle de Yassine : paysage traversé pendant son voyage en Chine.',
        caption: 'Sur la route, pendant le voyage personnel de Yassine en Chine.',
      },
    },
  ],

  pillars: {
    kicker: 'Les trois piliers',
    title: 'Apprendre. Essayer. Se dépasser.',
    items: [
      { title: 'Apprendre', text: 'Une pratique, transmise sur place, avec de vraies bases à la clé.' },
      { title: 'Essayer', text: 'Sortir de ses habitudes, une journée après l’autre.' },
      { title: 'Se dépasser', text: 'Un pas de plus que la veille, à son rythme, avec le groupe.' },
    ],
  },

  cta: {
    title: 'Envie de vivre ça ?',
    text: 'La première expérience RAHAL t’emmène en Chine, autour du kung-fu.',
    button: { label: 'Découvrir les expériences', href: '/experiences' },
  },
} as const;
