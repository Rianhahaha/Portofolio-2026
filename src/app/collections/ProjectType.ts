import { unique } from "next/dist/build/utils";
import { CollectionConfig } from "payload";
import { tr } from "payload/i18n/tr";

export const ProjectType: CollectionConfig = {
  slug: "project-type",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      unique:true,
    },
    {
        name: 'projectTypeId',
        type: 'text',
        required: true,
        unique: true,
        admin: {
            description: "Machine-readable ID for frontend logic (no spaces)"
        }

    }
  ],
};
