

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Contact from "./ContactPage";

// 1. Definisikan metadata khusus untuk halaman Projects
export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Triandi Aprilio for front-end development projects, collaborations, or professional inquiries.",
  path: "/contact",
  image: {
    url: "/og-contact-thumbnail.png",
    width: 1200,
    height: 630,
    alt: "Contact Triandi Aprilio",
  },
});

export default function Page() {

  return <Contact />
}