/**
 * Single source of truth for every SEO URL and identity value.
 * Change the domain here (or via the SITE_URL env var) and everything follows.
 */

const FALLBACK_SITE_URL = "https://rianaprilio.vercel.app";

export const SITE_URL = (
  process.env.SITE_URL?.trim() || FALLBACK_SITE_URL
).replace(/\/+$/, "");

export const SITE_NAME = "Triandi Aprilio Portfolio";
export const SITE_AUTHOR = "Triandi Aprilio";
export const SITE_JOB_TITLE = "Front-End Developer & Illustrator";

export const SITE_TITLE_DEFAULT = `${SITE_AUTHOR} — ${SITE_JOB_TITLE}`;

export const SITE_DESCRIPTION =
  "Official portfolio of Triandi Aprilio. Front-end developer specializing in modern web apps, Svelte, React, and Next.js.";

export const TITLE_TEMPLATE = `%s — ${SITE_AUTHOR}`;

export const SITE_KEYWORDS = [
  "Triandi Aprilio",
  "front-end developer",
  "portfolio",
  "Next.js",
  "React",
  "Svelte",
  "illustrator",
  "web development",
];

export const SOCIAL_LINKS = [
  "https://www.instagram.com/triandi_aprilio/",
  "https://www.linkedin.com/in/triandiaprilio/",
  "https://github.com/Rianhahaha/",
];

export const OG_IMAGE = "/og-thumbnail.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = `${SITE_NAME} preview`;

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Resolve a path (or an already-absolute URL) against the canonical site URL.
 */
export const absoluteUrl = (path = "/") =>
  new URL(path, `${SITE_URL}/`).toString();

/**
 * Media records store relative Payload paths (`/api/media/file/x.png`) that are
 * not served when storage is S3-backed. Rewrite those to the Supabase public
 * bucket URL, mirroring the logic in `utils/getMediaUrl` and additionally
 * handling the relative form. Returns `undefined` when no usable URL exists.
 */
export const resolveImageUrl = (url?: string | null): string | undefined => {
  if (!url) {
    return undefined;
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  const endpoint = process.env.SUPABASE_S3_ENDPOINT;
  const bucket = process.env.SUPABASE_S3_BUCKET;
  const publicBaseUrl = process.env.SUPABASE_S3_PUBLIC_URL;
  const mediaPrefix = "api/media/file/";
  const relative = url.replace(/^\/+/, "");

  if (endpoint && bucket && relative.startsWith(mediaPrefix)) {
    const filename = relative.slice(mediaPrefix.length);

    if (publicBaseUrl) {
      return `${publicBaseUrl.replace(/\/$/, "")}/${bucket}/${filename}`;
    }

    if (endpoint.includes("/storage/v1/s3")) {
      return `${endpoint.replace(
        "/storage/v1/s3",
        "/storage/v1/object/public",
      )}/${bucket}/${filename}`;
    }
  }

  return absoluteUrl(url);
};
