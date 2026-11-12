import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/component/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_AUTHOR } from "@/lib/site";
import { creativeWorkSchema } from "@/lib/structured-data";
import { getPayloadAffiliation } from "@/utils/payloadAffiliations";
import { getPayloadProjectBySlug } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// 1. Metadata dinamis dari konten Payload
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: project.title,
    description:
      project.desc ||
      `Explore the case study and technical details of ${project.title} by ${SITE_AUTHOR}.`,
    path: `/projects/${project.id}`,
    type: "article",
    // Cover images come from Supabase and are already absolute; their
    // dimensions vary, so no width/height is declared for them.
    image: project.img?.original
      ? { url: project.img.original, alt: `${project.title} Preview` }
      : undefined,
    // Drafts stay reachable by direct URL but are kept out of search results.
    noIndex: project.status === "draft",
  });
}

// 2. Component utama halaman
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);
  const technologies = await getPayloadTechnologies();
  const affiliationList = await getPayloadAffiliation();

  if (!project) {
    return notFound();
  }

  const techNames = project.techIds
    .map((techId) => technologies.find((tech) => tech.id === techId)?.title)
    .filter((title): title is string => Boolean(title));

  return (
    <>
      <JsonLd data={creativeWorkSchema(project, techNames)} />
      <ProjectDetailClient
        project={project}
        technologies={technologies}
        affiliationList={affiliationList}
      />
    </>
  );
}
