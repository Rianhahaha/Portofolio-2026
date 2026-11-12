import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { MediaUrls, ProjectItem } from "@/types";
import { getMediaUrl, getStringField } from "./getMediaUrl";

export type PayloadRelation =
  | string
  | number
  | Record<string, unknown>
  | null
  | undefined;

type PayloadProject = {
  id?: string | number;
  title?: string | null;
  subtitle?: string | null;
  slug?: string | null;
  link?: string | null;
  desc?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  dateType?: "year" | "year-month" | "full" | null;
  ProjectType?: PayloadRelation[] | null;
  affiliations?: PayloadRelation[] | null;
  case?: string | null;
  techIds?: PayloadRelation[] | null;
  img?: PayloadRelation;
  previewImg?: Array<{
    id?: string;
    media?: PayloadRelation;
  }> | null;
  status?: "draft" | "published" | null;
  updatedAt?: string | null;
};

const extractMediaUrls = (media: PayloadRelation): MediaUrls => ({
  original: getMediaUrl(media),
  card: getMediaUrl(media, "card"),
  avatar: getMediaUrl(media, "avatar"),
});

export const normalizePayloadProject = (
  project: PayloadProject,
): ProjectItem => ({
  id: project.slug || String(project.id || ""),
  title: project.title || "",
  subtitle: project.subtitle || undefined,
  link: project.link || "",
  img: extractMediaUrls(project.img),
  desc: project.desc || "",
  startDate: project.startDate || undefined,
  endDate: project.endDate || undefined,
  dateType: project.dateType || undefined,
  type: (project.ProjectType || [])
    .map((type) => getStringField(type, "projectTypeId"))
    .filter((type): type is string => Boolean(type)),
  affiliations: (project.affiliations || [])
    .map((aff) => getStringField(aff, "affiliationId"))
    .filter((aff): aff is string => Boolean(aff)),
  case: project.case || "",
  techIds: (project.techIds || [])
    .map((tech) => getStringField(tech, "techId"))
    .filter((tech): tech is string => Boolean(tech)),
  previewImg: (project.previewImg || [])
    .filter((preview) => Boolean(preview?.media))
    .map((preview) => extractMediaUrls(preview!.media)),
  status: project.status || "published",
  updatedAt: project.updatedAt || undefined,
});

interface PayloadProjectsProps {
  limit?: number;
}

export const getPayloadProjects = async (
  options: PayloadProjectsProps = {},
) => {
  const { limit = 100 } = options;
  const payload = await getPayload({
    config: configPromise,
  });

  const projects = await payload.find({
    collection: "projects",
    depth: 2,
    limit,
    sort: "-startDate",
  });

  return projects.docs.map((project) =>
    normalizePayloadProject(project as PayloadProject),
  );
};

export const getPayloadProjectBySlug = async (slug: string) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const projects = await payload.find({
    collection: "projects",
    depth: 3,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const project = projects.docs[0];

  return project ? normalizePayloadProject(project as PayloadProject) : null;
};

export type PublishedProjectRef = {
  id: string;
  updatedAt?: string;
};

/**
 * Lightweight, sitemap-only query: published projects with their slug.
 * Deliberately does not normalize images/relations (depth 0) since the
 * sitemap only needs the URL and lastModified date.
 */
export const getPublishedProjects = async (): Promise<
  PublishedProjectRef[]
> => {
  const payload = await getPayload({
    config: configPromise,
  });

  const projects = await payload.find({
    collection: "projects",
    depth: 0,
    pagination: false,
    where: {
      status: {
        equals: "published",
      },
    },
  });

  return projects.docs
    .map((project) => project as PayloadProject)
    .filter((project) => Boolean(project.slug))
    .map((project) => ({
      id: project.slug as string,
      updatedAt: project.updatedAt || undefined,
    }));
};
