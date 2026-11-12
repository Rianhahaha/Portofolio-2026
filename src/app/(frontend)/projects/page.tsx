import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getPayloadAffiliation } from "@/utils/payloadAffiliations";
import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadProjectTypes } from "@/utils/payloadProjectType";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
import ProjectsClient from "./ProjectsClient";

// 1. Definisikan metadata khusus untuk halaman Projects
export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore web engineering projects, interactive UI components, and case studies by Triandi Aprilio.",
  path: "/projects",
  image: {
    url: "/og-projects-thumbnail.png",
    width: 1200,
    height: 630,
    alt: "Triandi Aprilio Projects Preview",
  },
});
export default async function Projects() {
  const projects = await getPayloadProjects();
  const technologies = await getPayloadTechnologies();
  const projectTypes = await getPayloadProjectTypes();
  const affiliation = await getPayloadAffiliation();

  // console.log("affiliation :", affiliation)


  return <ProjectsClient projects={projects} technologies={technologies} projectTypes={projectTypes} affiliation={affiliation} />;
}
