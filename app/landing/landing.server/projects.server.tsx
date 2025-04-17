import { projectsData } from "../landing.data/projects.data";
import ProjectsClient from "../landing.client/projects"; 

export default function ProjectsServer() {

  return <ProjectsClient projectsData={projectsData} />;
} 