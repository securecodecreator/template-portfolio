export interface AboutData {
  title: string;
  subtitle: string;
  description: string[];
}

export interface CardData {
  title: string;
  subtitle: string;
  icon: string;
}

export const aboutData: AboutData = {
  title: "À propos de John Doe",
  subtitle: "DÉVELOPPEUR FULL STACK PASSIONNÉ",
  description: [
    "John Doe est un développeur full stack avec une expertise dans la création d'applications web modernes et performantes.",
    "Il maîtrise à la fois les technologies frontend et backend, ce qui lui permet de concevoir des solutions complètes et cohérentes.",
    "Passionné par l'apprentissage continu, John explore constamment de nouveaux outils et frameworks pour rester à la pointe de la technologie."
  ],
}

export const cardData: CardData[] = [
  {
    title: "Développement Frontend",
    subtitle: "Création d'interfaces utilisateur dynamiques et réactives avec React, Next.js et Tailwind CSS.",
    icon: "FiLayout",
  },
  {
    title: "Gestion de Données",
    subtitle: "Conception et gestion de bases de données SQL et NoSQL, intégration de données via des API RESTful.",
    icon: "FiDatabase",
  },
  {
    title: "Développement Backend",
    subtitle: "Construction d'API RESTful robustes et évolutives avec Node.js, Express, et gestion de serveurs.",
    icon: "FiServer",
  },
]