import { notFound } from "next/navigation";
import { getPayloadProjectBySlug } from "@/utils/payloadProjects";
import ProjectDetailClient from "./ProjectDetailClient";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);

  if (!project) {
    return notFound();
  }

  return <ProjectDetailClient project={project} />;
}
