export interface ContactData {
  title: string;
  description: string;
  email: string;
  phone: string;
  emailSectionTitle: string;
  phoneSectionTitle: string;
  youtubeSectionTitle: string;
  youtubeButtonText: string;
  youtube: {
    url: string;
    channelName: string;
    subscribers: string;
    description: string;
  };
}

export const contactData: ContactData = {
  title: "Contacter John Doe",
  description: "Pour toute question, proposition de projet ou collaboration, n'hésitez pas à me joindre via les informations ci-dessous.",
  email: "contact@johndoe.dev",
  phone: "+1 234 567 890",
  emailSectionTitle: "Email",
  phoneSectionTitle: "Téléphone",
  youtubeSectionTitle: "Retrouvez mes partages sur le développement web sur ma chaîne (Placeholder)",
  youtubeButtonText: "Voir la chaîne",
  youtube: {
    url: "https://www.youtube.com/@AnthonyMarandon",
    channelName: "John Doe Dev",
    subscribers: "1K+",
    description: "Partage de connaissances et tutoriels sur le développement full stack.",
  }
}
