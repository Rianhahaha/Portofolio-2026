import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'slug'],
  },
  access: {
    read: () => true, // Exposes the API endpoint to your Next.js frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug', // Replaces your 'id' property (e.g., 'lacak', 'ala')
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        step: 1,
      },
    },
    {
      name: 'ProjectType',
      type: 'relationship',      
      relationTo: 'project-type',
      hasMany:true,

    },
    {
      name: 'case',
      type: 'textarea', // Textarea is used over richText for strict layout control on frontend
    },
    {
      name: 'techIds',
      type: 'relationship',
      relationTo: 'technologies' , // Establishes a many-to-many relationship with Technologies
      hasMany: true,
    },
    {
      name: 'img',
      type: 'upload', // Temporary fallback to string path
      relationTo: 'media'
    },
    {
      name: 'previewImg',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}