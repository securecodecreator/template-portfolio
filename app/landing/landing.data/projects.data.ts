import { RefObject } from "react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  message: string;
  buttonText: string;
  buttonIconKey: string;
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  projects: Project[];
}

export const projectsData: ProjectsData = {
  title: "Mes projets",
  subtitle: "Une sélection de mes réalisations récentes",
  projects: [
    {
      title: "Webazon",
      description: "Un éditeur frontend NO-CODE destiné aux designers amateurs, permettant de créer des interfaces web modernes et performantes avec une expérience de développement optimisée et intuitive pour conçevoir des templates de sites web.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      image: "/projects/webazon.png",
      demo: "https://webazon.fr",
      message: "",
      buttonText: "Voir le projet",
      buttonIconKey: "external"
    },
    {
      title: "Webamail",
      description: "Builder no-code d\'emails responsive permettant à tous de créer facilement des emails professionnels sans connaissances techniques particulières.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      image: "/projects/webamail.png",
      demo: "https://virtual-lab.fr/applications/webamail/application/public/app.html",
      message: "",
      buttonText: "Voir le projet",
      buttonIconKey: "external"
    },
    {
      title: "Ma Finance",
      description: "Une application IOS pour gérer l\'état de son pouvoir d\'achat.",
      tech: ["Swift", "SwiftUI", "SwiftData", "IOS 18+"],
      image: "/projects/mafinance.png",
      demo: "https://apps.apple.com/fr/app/ma-finance/id6740279523",
      message: "Cette application iOS est développée pour un usage personnel afin d\'améliorer ma productivité. Elle n\'est pas commercialisée et n\'inclut pas de fonctionnalités d\'achat intégrées.",
      buttonText: "Voir l\'application",
      buttonIconKey: "app"
    },
    {
      title: "Agendly",
      description: "Une application IOS pour gérer ses tâches et ses rendez-vous personnels / professionnels.",
      tech: ["Swift", "SwiftUI", "SwiftData", "IOS 18+"],
      image: "/projects/agendly.png",
      demo: "https://apps.apple.com/fr/app/agendly/id6740624711",
      message: "Cette application iOS est développée pour un usage personnel afin d\'améliorer ma productivité. Elle n\'est pas commercialisée et n\'inclut pas de fonctionnalités d\'achat intégrées.",
      buttonText: "Voir l\'application",
      buttonIconKey: "app"
    },
    {
      title: "Vaulto",
      description: "Une application IOS pour gérer et générer des mots de passe ultra-sécurisés.",
      tech: ["Swift", "SwiftUI", "SwiftData", "IOS 18+"],
      image: "/projects/vaulto.png",
      demo: "https://apps.apple.com/fr/app/vaulto/id6740998382",
      message: "Cette application iOS est développée pour un usage personnel afin d\'améliorer ma productivité. Elle n\'est pas commercialisée et n\'inclut pas de fonctionnalités d\'achat intégrées.",
      buttonText: "Voir l\'application",
      buttonIconKey: "app"
    }
  ]
};

export const projectsUtils = {
  updateActiveIndex: (carouselRef: RefObject<HTMLDivElement | null>, activeIndex: number, setActiveIndex: (index: number) => void) => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  },

  scrollToProject: (carouselRef: RefObject<HTMLDivElement | null>, index: number, projectsLength: number) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, projectsLength - 1));
      const scrollAmount = carouselRef.current.clientWidth * newIndex;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};
