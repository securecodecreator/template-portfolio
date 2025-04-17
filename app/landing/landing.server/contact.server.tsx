import { contactData } from "../landing.data/contact.data";
import ContactClient from "../landing.client/contact"; 

export default function ContactServer() {

  return <ContactClient contactData={contactData} />;
} 