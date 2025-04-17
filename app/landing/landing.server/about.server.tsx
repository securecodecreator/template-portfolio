import { aboutData, cardData } from "../landing.data/about.data";
import AboutClient from "../landing.client/about"; 

export default function AboutServer() {

  return <AboutClient aboutData={aboutData} cardData={cardData} />;
} 