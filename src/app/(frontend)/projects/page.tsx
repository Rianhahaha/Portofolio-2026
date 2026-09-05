import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
import ProjectsClient from "./ProjectsClient";
import { getPayloadProjectTypes } from "@/utils/payloadProjectType";
import { Metadata } from "next";
import { getPayloadAffiliation } from "@/utils/payloadAffiliations";

// 1. Definisikan metadata khusus untuk halaman Projects
export const metadata: Metadata = {
  title: "Projects — Triandi Aprilio",
  description: "Explore web engineering projects, interactive UI components, and case studies by Triandi Aprilio.",
  openGraph: {
    title: "Projects — Triandi Aprilio Portfolio",
    description: "Browse selected front-end development works and case studies.",
    url: "https://portofolio-2026-mu.vercel.app/projects",
    images: [
      {
        url: "/og-projects-thumbnail.png", // Bisa bedakan gambar preview-nya khusus halaman projects
        width: 1200,
        height: 630,
        alt: "Triandi Aprilio Projects Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Triandi Aprilio",
    description: "Explore web engineering projects and case studies by Triandi Aprilio.",
    images: ["/og-projects-thumbnail.png"],
  },
};
export default async function Projects() {
  const projects = await getPayloadProjects();
  const technologies = await getPayloadTechnologies();
  const projectTypes = await getPayloadProjectTypes();
  const affiliation = await getPayloadAffiliation();

  // console.log("affiliation :", affiliation)


  return <ProjectsClient projects={projects} technologies={technologies} projectTypes={projectTypes} affiliation={affiliation} />;
}
