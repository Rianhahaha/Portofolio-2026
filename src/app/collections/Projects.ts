import { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "year", "slug"],
  },
  access: {
    read: () => true, // Exposes the API endpoint to your Next.js frontend
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug", // Replaces your 'id' property (e.g., 'lacak', 'ala')
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "desc",
      type: "textarea",
      required: true,
    },
    {
      name: "year",
      type: "number",
      required: true,
      admin: {
        step: 1,
      },
    },
    {
      name: "ProjectType",
      type: "relationship",
      relationTo: "project-type",
      hasMany: true,
    },
    {
      name: "case",
      type: "richText",
      editor: lexicalEditor({}), // Inisialisasi default Lexical editor
      admin: {
        description: "Provide a detailed case study using rich formatting.",
      },
    },
    {
      name: "techIds",
      type: "relationship",
      relationTo: "technologies", // Establishes a many-to-many relationship with Technologies
      hasMany: true,
    },
    {
      name: "img",
      type: "upload", // Temporary fallback to string path
      relationTo: "media",
    },
    {
      name: "previewImg",
      type: "array",
      labels: {
        singular: "Preview Image",
        plural: "Preview Images",
      },
      admin: {
        description:
          "Select or upload multiple preview images for this project.",
      },
      fields: [
        {
          name: "media", // Diganti dari 'url' text menjadi relasi upload
          type: "upload",
          relationTo: "media",
          required: true,
        },
        // Keuntungan arsitektur array: Kamu bisa dengan mudah menambahkan field
        // khusus di masa depan tanpa merusak struktur existing.
        // Contoh:
        // { name: 'caption', type: 'text' }
      ],
    },
    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "published",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
