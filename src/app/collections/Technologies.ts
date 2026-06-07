import { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name', // e.g., 'React', 'Figma', 'Tailwind CSS'
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'techId', // Replaces your lowercase string ID (e.g., 'figma', 'tailwind-css')
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Machine-readable ID for frontend logic (no spaces)',
      },
    },
  ],
}