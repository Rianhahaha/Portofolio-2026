import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Media } from "./app/collections/Media";
import { Projects } from "./app/collections/Projects";
import { ProjectType } from "./app/collections/ProjectType";
import { Technologies } from "./app/collections/Technologies";
import { Users } from "./app/collections/Users";
import { Inquiries } from "./app/collections/Inquiries";
import { Affiliation } from "./app/collections/Affiliation";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const hasSupabaseS3Config = Boolean(
  process.env.SUPABASE_S3_ACCESS_KEY_ID &&
  process.env.SUPABASE_S3_SECRET_ACCESS_KEY &&
  process.env.SUPABASE_S3_REGION &&
  process.env.SUPABASE_S3_ENDPOINT &&
  process.env.SUPABASE_S3_BUCKET,
);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects, Technologies, ProjectType, Inquiries, Affiliation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
    // Dev-only escape hatch: set PAYLOAD_DB_PUSH=true to push schema
    // changes directly (Payload CLI is broken on Node 24).
    push: process.env.PAYLOAD_DB_PUSH === "true",
  }),
  sharp,
  plugins: [
    s3Storage({
      enabled: hasSupabaseS3Config,
      collections: {
        media: true,
      },
      bucket: process.env.SUPABASE_S3_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY || "",
        },
        endpoint: process.env.SUPABASE_S3_ENDPOINT,
        forcePathStyle: true,
        region: process.env.SUPABASE_S3_REGION,
      },
    }),
  ],
});
