

import { Metadata } from "next";
import Contact from "./ContactPage";

// 1. Definisikan metadata khusus untuk halaman Projects
export const metadata: Metadata = {
  title: "Contact — Triandi Aprilio",
  description: "Get in touch with Triandi Aprilio for front-end development projects, collaborations, or professional inquiries.",
  openGraph: {
    title: "Contact Triandi Aprilio — Front-End Developer",
    description: "Reach out for web development work, collaborations, or technical discussions.",
    url: "https://portofolio-2026-mu.vercel.app/contact",
    images: [
      {
        url: "/og-contact-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Contact Triandi Aprilio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Triandi Aprilio",
    description: "Get in touch for projects and collaborations.",
    images: ["/og-contact-thumbnail.png"],
  },
};

export default function Page() {

  return <Contact />
}