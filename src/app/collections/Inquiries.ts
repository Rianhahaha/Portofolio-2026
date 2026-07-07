// src/collections/Inquiries.ts
import { CollectionConfig, APIError } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        // Lewati validasi jika di-submit oleh Admin via Dashboard Payload
        if (req.user) return data;

        const token = data?.turnstileToken;

        if (!token) {
          throw new APIError("Security token is missing.", 400);
        }

        try {
          // Verifikasi token ke API Cloudflare
          const verificationResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY || "",
                response: token,
              }),
            },
          );

          const verificationResult = await verificationResponse.json();

          if (!verificationResult.success) {
            throw new APIError(
              "Spam verification failed. Request rejected.",
              400,
            );
          }

          // Clean up: Hapus token dari data agar tidak ikut tersimpan di DB
          if (data) {
            delete data.turnstileToken;
          }

          return data;
        } catch (error) {
          if (error instanceof APIError) throw error;
          throw new APIError("Internal security verification error.", 500);
        }
      },
    ],
  },
  fields: [
    { name: "email", type: "email", required: false },
    { name: "message", type: "textarea", required: true },
    // Virtual field untuk menampung token sementara waktu submit
    {
      name: "turnstileToken",
      type: "text",
      admin: { hidden: true },
    },
  ],
};
