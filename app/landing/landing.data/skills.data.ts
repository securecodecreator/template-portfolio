export interface SkillItem {
  name: string;
  iconName: string;
  color: string;
}

export interface SkillsSectionData {
  title: string;
  description: string;
}

export const mainStack: SkillItem[] = [
  { name: "React", iconName: "FaReact", color: "text-sky-400" },
  { name: "Next.js", iconName: "TbBrandNextjs", color: "text-gray-300 dark:text-gray-400" },
  { name: "Tailwind", iconName: "TbBrandTailwind", color: "text-teal-400" },
  { name: "PostgreSQL", iconName: "DiPostgresql", color: "text-blue-500" },
  { name: "Prisma", iconName: "SiPrisma", color: "text-teal-400" },
  { name: "TypeScript", iconName: "SiTypescript", color: "text-blue-400" },
];

export const GLOW_INTERVAL = 2500;

export const skillsSection: SkillsSectionData = {
  title: "Ma Stack Principale",
  description: "Les technologies au cœur de mes projets, combinant performance et design moderne."
};