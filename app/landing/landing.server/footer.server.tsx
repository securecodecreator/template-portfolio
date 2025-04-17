import { footerData } from "../landing.data/footer.data";
import FooterClient from "../landing.client/footer"; 

export default function FooterServer() {

  return <FooterClient footerData={footerData} />;
} 