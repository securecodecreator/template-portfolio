export interface HeroButton {
  title: string;
  href: string;
  primary: boolean;
}

export interface HeroData {
  title: string;
  description: string;
  cta: HeroButton[];
}

export const heroData: HeroData = {
  title: "John Doe - Développeur Full Stack",
  description: "Passionné par la création d'applications web robustes et intuitives, je maîtrise l'ensemble du processus de développement, du frontend au backend, pour donner vie à vos projets numériques.",
  cta: [
    { title: "Découvrir mes projets", href: "#projects", primary: true },
    { title: "Me contacter", href: "#contact", primary: false }
  ]
}
