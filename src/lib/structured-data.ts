import type { ProjectItem } from "@/types";
import {
  absoluteUrl,
  PERSON_ID,
  resolveImageUrl,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  WEBSITE_ID,
} from "./site";

/** Person — global identity, cross-linked by @id from the other schemas. */
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_AUTHOR,
  url: SITE_URL,
  image: absoluteUrl("/profile.png"),
  jobTitle: SITE_JOB_TITLE,
  description: SITE_DESCRIPTION,
  sameAs: SOCIAL_LINKS,
});

/** WebSite — global site entity. No SearchAction: the site has no search. */
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
});

/** CreativeWork — one per project detail page, built from existing CMS data. */
export const creativeWorkSchema = (
  project: ProjectItem,
  technologies: string[] = [],
) => {
  const url = absoluteUrl(`/projects/${project.id}`);
  const image = resolveImageUrl(project.img?.original);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.title,
    description:
      project.desc || `Case study of ${project.title} by ${SITE_AUTHOR}.`,
    url,
    inLanguage: "en",
    creator: { "@id": PERSON_ID },
    ...(image ? { image } : {}),
    ...(project.startDate ? { dateCreated: project.startDate } : {}),
    ...(technologies.length > 0 ? { keywords: technologies.join(", ") } : {}),
    ...(project.link ? { sameAs: project.link } : {}),
  };
};
