import { TechnologyItem } from "@/types";
import { getMediaUrl } from "./getMediaUrl";
import { getPayload } from "payload";
import configPromise from "@payload-config";

type PayloadTechnologies = {
  techId?: string;
  name?: string;
  img?: string;
  type?: "programming" | "other";
};

export const normalizedPayloadTechnologies = (
  technologies: PayloadTechnologies,
): TechnologyItem => ({
  id: technologies.techId,
  title: technologies.name,
  img: getMediaUrl(technologies.img),
  type: technologies.type,
});

export const getPayloadTechnologies = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const technologies = await payload.find({
    collection: "technologies",
    depth: 2,
    limit: 0,
    sort: "name",
  });
  return technologies.docs.map((technology) =>
    normalizedPayloadTechnologies(technology as PayloadTechnologies),
  );
};
