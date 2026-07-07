import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { ProjectItem } from "@/types";
import { getMediaUrl, getStringField } from "./getMediaUrl";
import { MediaUrls } from "@/types";

export type PayloadRelation =
  | string
  | number
  | Record<string, unknown>
  | null
  | undefined;

type PayloadProject = {
  id?: string | number;
  title?: string | null;
  slug?: string | null;
  link?: string | null;
  desc?: string | null;
  year?: number | null;
  ProjectType?: PayloadRelation[] | null;
  case?: string | null;
  techIds?: PayloadRelation[] | null;
  img?: PayloadRelation;
  previewImg?: Array<{
    id?: string;
    media?: PayloadRelation; // Sesuaikan "image" dengan nama field di config Payload kamu
  }> | null;
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
  link: project.link || "",
  img: extractMediaUrls(project.img),
  desc: project.desc || "",
  year: project.year || 0,
  type: (project.ProjectType || [])
    .map((type) => getStringField(type, "projectTypeId"))
    .filter((type): type is string => Boolean(type)),
  case: project.case || "",
  techIds: (project.techIds || [])
    .map((tech) => getStringField(tech, "techId"))
    .filter((tech): tech is string => Boolean(tech)),
  previewImg: (project.previewImg || [])
    .filter((preview) => Boolean(preview?.media))
    .map((preview) => extractMediaUrls(preview!.media)),
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
    sort: "-year",
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
