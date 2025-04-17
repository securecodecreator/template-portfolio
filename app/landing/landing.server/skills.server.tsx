import { mainStack, GLOW_INTERVAL, skillsSection } from "../landing.data/skills.data";
import SkillsClient from "../landing.client/skills"; 

export default function SkillsServer() {

  return (
    <SkillsClient 
      mainStack={mainStack} 
      GLOW_INTERVAL={GLOW_INTERVAL} 
      skillsSection={skillsSection} 
    />
  );
} 