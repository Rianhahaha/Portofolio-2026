import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getPublishedProjects } from "@/utils/payloadProjects";

export const revalidate = 3600;

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
  { url: absoluteUrl("/projects"), changeFrequency: "weekly", priority: 0.9 },
  { url: absoluteUrl("/artworks"), changeFrequency: "weekly", priority: 0.8 },
  { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let projectRoutes: MetadataRoute.Sitemap = [];

  // The sitemap must stay available even when Payload/Postgres is down.
  try {
    const projects = await getPublishedProjects();
    projectRoutes = projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.id}`),
      lastModified: project.updatedAt ? new Date(project.updatedAt) : undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("[sitemap] Failed to load published projects:", error);
  }

  return [...STATIC_ROUTES, ...projectRoutes];
}
