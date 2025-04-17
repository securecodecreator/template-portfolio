import { heroData } from "../landing.data/hero.data";
import HeroClient from "../landing.client/hero"; 

export default function HeroServer() {

  return <HeroClient heroData={heroData} />;
} 