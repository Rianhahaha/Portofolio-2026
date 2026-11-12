import type { Metadata } from "next";
import {
  absoluteUrl,
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  resolveImageUrl,
  SITE_AUTHOR,
  SITE_NAME,
} from "./site";

export type SeoImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

const MAX_DESCRIPTION_LENGTH = 160;

/** Trim to a word boundary so meta descriptions stay in the useful range. */
const truncateDescription = (text: string) => {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= MAX_DESCRIPTION_LENGTH) {
    return normalized;
  }

  const cut = normalized.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};

type BuildMetadataOptions = {
  /** Page title. Runs through the global template unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/projects" or "/projects/my-slug". */
  path: string;
  /** Defaults to the global OG image. Cover images may omit width/height. */
  image?: SeoImage;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

/**
 * Builds a complete page metadata object.
 *
 * Next.js replaces the whole `openGraph` object when a page defines one, so
 * every page must carry a full OG/Twitter payload. Centralising that here keeps
 * canonicals and absolute image URLs consistent and prevents pages from
 * silently losing the OG image.
 */
export const buildMetadata = ({
  title,
  description,
  path,
  image,
  type = "website",
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataOptions): Metadata => {
  const ogImage: SeoImage = image ?? {
    url: OG_IMAGE,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: OG_IMAGE_ALT,
  };
  const ogImageUrl = resolveImageUrl(ogImage.url) ?? absoluteUrl(ogImage.url);
  const canonical = absoluteUrl(path);
  const resolvedDescription = truncateDescription(description);
  // The title template only formats <title>; OG/Twitter titles need it too.
  const resolvedTitle = absoluteTitle ? title : `${title} — ${SITE_AUTHOR}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: resolvedDescription,
    alternates: { canonical },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ ...ogImage, url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImageUrl],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
};
