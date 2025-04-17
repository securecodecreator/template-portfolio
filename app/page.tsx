import HeaderServer from "./landing/landing.server/header.server";
import HeroServer from "./landing/landing.server/hero.server";
import AboutServer from "./landing/landing.server/about.server";
import AIProgrammerServer from "./landing/landing.server/aiprogrammer.server";
import SkillsServer from "./landing/landing.server/skills.server";
import ProjectsServer from "./landing/landing.server/projects.server";
import ContactServer from "./landing/landing.server/contact.server";
import FooterServer from "./landing/landing.server/footer.server";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderServer />
      <HeroServer />
      <AboutServer />
      <AIProgrammerServer />
      <SkillsServer />
      <ProjectsServer />
      <ContactServer />
      <FooterServer />
    </main>
  );
}
