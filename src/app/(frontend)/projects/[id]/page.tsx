import { notFound } from "next/navigation";
import { getPayloadProjectBySlug } from "@/utils/payloadProjects";
import ProjectDetailClient from "./ProjectDetailClient";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);
  const skills = await getPayloadTechnologies()

  console.log(project)

  if (!project) {
    return notFound();
  }

  return <ProjectDetailClient project={project} skills={skills} />;
}
