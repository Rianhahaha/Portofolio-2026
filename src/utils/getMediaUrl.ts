import { PayloadRelation } from "./payloadProjects";

export const getStringField = (value: PayloadRelation, field: string) => {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const fieldValue = value[field as keyof typeof value];
  return typeof fieldValue === "string" ? fieldValue : undefined;
};

export type MediaSize = "card" | "avatar";
export const getMediaUrl = (value: PayloadRelation, size?: MediaSize) => {
  if (!value || typeof value !== "object") {
    return "";
  }

  let url: string | undefined;

  if (
    size &&
    "sizes" in value &&
    typeof value.sizes === "object" &&
    value.sizes
  ) {
    const sizesObj = value.sizes as Record<string, { url?: string }>;
    if (sizesObj[size]?.url) {
      url = sizesObj[size].url;
    }
  }

  if (!url) {
    url = getStringField(value, "url");
  }

  if (!url) {
    return "";
  }

  const endpoint = process.env.SUPABASE_S3_ENDPOINT;
  const bucket = process.env.SUPABASE_S3_BUCKET;
  const publicBaseUrl = process.env.SUPABASE_S3_PUBLIC_URL;

  if (publicBaseUrl && bucket && url.startsWith(`${endpoint}/${bucket}/`)) {
    return url.replace(
      `${endpoint}/${bucket}`,
      `${publicBaseUrl.replace(/\/$/, "")}/${bucket}`,
    );
  }

  if (
    endpoint &&
    bucket &&
    endpoint.includes("/storage/v1/s3") &&
    url.startsWith(`${endpoint}/${bucket}/`)
  ) {
    return url.replace(
      `${endpoint}/${bucket}`,
      `${endpoint.replace("/storage/v1/s3", "/storage/v1/object/public")}/${bucket}`,
    );
  }

  return url;
};
