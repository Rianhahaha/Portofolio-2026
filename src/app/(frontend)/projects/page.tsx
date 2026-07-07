import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
import ProjectsClient from "./ProjectsClient";
import { getPayloadProjectTypes } from "@/utils/payloadProjectType";

export default async function Projects() {
  const projects = await getPayloadProjects();
  const technologies = await getPayloadTechnologies();
  const projectTypes = await getPayloadProjectTypes();
  // console.log(projectTypes)

  return <ProjectsClient projects={projects} technologies={technologies} projectTypes={projectTypes} />;
}
