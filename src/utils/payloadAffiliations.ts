import { Affiliation } from "@/types";
import { getMediaUrl } from "./getMediaUrl";
import { getPayload } from "payload";
import configPromise from "@payload-config";

type PayloadAffiliation = {
  id?: string | number | null;
  affiliationId?: string | null;
  title?: string | null;
};

export const normalizedPayloadAffiliation = (
  affiliations: PayloadAffiliation,
): Affiliation => ({
  // Use the machine-readable affiliationId so the id domain matches
  // project.affiliations (same pattern as techId / projectTypeId)
  id: affiliations.affiliationId || String(affiliations.id || ""),
  title: affiliations.title || "",
});

export const getPayloadAffiliation = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const affiliations = await payload.find({
    collection: "affiliation",
    depth: 2,
    limit: 0,
    sort: "id",
  });
  return affiliations.docs.map((affiliation) =>
    normalizedPayloadAffiliation(affiliation as PayloadAffiliation),
  );
};
