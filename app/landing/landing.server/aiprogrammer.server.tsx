import { aiProgrammerData, cardThemes } from "../landing.data/aiprogrammer.data";
import AIProgrammerClient from "../landing.client/aiprogrammer"; 

export default function AIProgrammerServer() {

  return (
    <AIProgrammerClient 
      aiProgrammerData={aiProgrammerData} 
      cardThemes={cardThemes} 
    />
  );
} 