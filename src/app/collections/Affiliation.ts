import { CollectionConfig } from "payload";

export const Affiliation: CollectionConfig = {
  slug: "affiliation",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "affiliationId"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "affiliationId",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "Machine-readable ID for frontend logic (e.g. company-name)",
      },
    },
  ],
};
