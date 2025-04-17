import { headerData } from "../landing.data/header.data";
import HeaderClient from "../landing.client/header"; 

export default function HeaderServer() {

  return <HeaderClient headerData={headerData} />;
} 