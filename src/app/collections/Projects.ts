import { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "startDate", "slug"],
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
      name: "subtitle",
      type: "text",
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
      name: "dateType",
      type: "select",
      options: [
        { label: "Year only", value: "year" },
        { label: "Year and month", value: "year-month" },
        { label: "Full date", value: "full" },
      ],
      defaultValue: "year",
      required: true,
      admin: {
        description: "Specify date granularity for the project duration.",
      },
    },
    {
      name: "startDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
        description: "Only selectable if Start Date is filled. Leave empty if ongoing / present.",
        condition: (data) => Boolean(data?.startDate),
      },
    },
    {
      name: "affiliations",
      type: "relationship",
      relationTo: "affiliation",
      hasMany: true,
      admin: {
        description: "Select one or multiple affiliations (companies, clients, or organizations).",
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
