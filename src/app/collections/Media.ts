import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    formatOptions: {
      format: "png",
      options: {
        quality: 75,
        effort: 4,
      },
    },
    disableLocalStorage: true,
    imageSizes: [
      { name: "card", width: 600, height: 400 }, // untuk thumbnail card
      { name: "avatar", width: 120, height: 120 }, // untuk foto profil
    ],

    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg"],
  },
};
