export interface AIProgrammerData {
  id: string;
  title: string;
  subtitle: string;
  collaborationPoints: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface CardTheme {
  gradient: string;
  textColor: string;
  borderColorHover: string;
}

export const aiProgrammerData: AIProgrammerData = {
  id: "ai-integration",
  title: "Intégration IA par John Doe",
  subtitle: "Comment John Doe, développeur full stack, exploite l'intelligence artificielle pour optimiser son workflow, améliorer la qualité du code et accélérer l'innovation.",
  collaborationPoints: [
    {
      icon: "Code",
      title: "Codage Accéléré",
      description: "Utilisation d'outils IA pour générer du code boilerplate, suggérer des optimisations et déboguer plus rapidement."
    },
    {
      icon: "Brain",
      title: "Apprentissage Continu",
      description: "Exploration de nouvelles technologies et concepts complexes facilitée par l'assistance et les explications de l'IA."
    },
    {
      icon: "Sparkles",
      title: "Créativité Augmentée",
      description: "Brainstorming d'idées, prototypage rapide de fonctionnalités et exploration de solutions innovantes en tandem avec l'IA."
    }
  ]
}; 

export const cardThemes: CardTheme[] = [
  {
    gradient: "from-teal-900/30 to-cyan-900/30",
    textColor: "text-teal-400",
    borderColorHover: "hover:border-teal-500/50"
  },
  {
    gradient: "from-cyan-900/30 to-sky-900/30",
    textColor: "text-emerald-400",
    borderColorHover: "hover:border-emerald-500/50"
  },
  {
    gradient: "from-purple-900/30 to-indigo-900/30",
    textColor: "text-purple-400",
    borderColorHover: "hover:border-purple-500/50"
  },
]; 

