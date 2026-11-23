import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProjectItem } from "@/types";
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

type SearchParams = Promise<{
  tech?: string;
  type?: string;
  affiliation?: string;
}>;

function parseFilter(value?: string): string[] {
  return (
    value
      ?.split(",")
      .map((v) => v.trim())
      .filter(Boolean) ?? []
  );
}

function filterProjects(
  projects: ProjectItem[],
  tech?: string,
  type?: string,
  affiliation?: string,
): ProjectItem[] {
  const techList = parseFilter(tech);
  const typeList = parseFilter(type);
  const affiliationList = parseFilter(affiliation);

  return projects.filter((project) => {
    const techMatch =
      techList.length === 0 ||
      techList.some((t) => project.techIds?.includes(t));
    const typeMatch =
      typeList.length === 0 || typeList.some((t) => project.type?.includes(t));
    const affiliationMatch =
      affiliationList.length === 0 ||
      affiliationList.some((a) => project.affiliations?.includes(a));
    return techMatch && typeMatch && affiliationMatch;
  });
}

export default async function Projects({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const tech = params.tech;
  const type = params.type;
  const affiliationParam = params.affiliation;

  const [projects, technologies, projectTypes, affiliation] = await Promise.all(
    [
      getPayloadProjects(),
      getPayloadTechnologies(),
      getPayloadProjectTypes(),
      getPayloadAffiliation(),
    ],
  );

  const filteredProjects = filterProjects(
    projects,
    tech,
    type,
    affiliationParam,
  );

  return (
    <ProjectsClient
      projects={filteredProjects}
      technologies={technologies}
      projectTypes={projectTypes}
      affiliation={affiliation}
      initialFilters={{
        tech: parseFilter(tech),
        type: parseFilter(type),
        affiliation: parseFilter(affiliationParam),
      }}
    />
  );
}
