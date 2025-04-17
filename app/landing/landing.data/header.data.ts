export interface MenuItem {
  title: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  menu: MenuItem[];
}

export const headerData: HeaderData = {
  logo: "JohnDoe.dev",
  menu: [
    { title: "Accueil", href: "/" },
    { title: "À propos", href: "#about" },
    { title: "Compétences", href: "#skills" },
    { title: "Projets", href: "#projects" },
    { title: "Contact", href: "#contact" }
  ],
  
}
