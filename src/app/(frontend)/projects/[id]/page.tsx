import { notFound } from "next/navigation";
import { getPayloadProjectBySlug } from "@/utils/payloadProjects";
import ProjectDetailClient from "./ProjectDetailClient";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// 1. Buat fungsi generateMetadata dinamis bawaan Next.js
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);

  if (!project) {
    return {
      title: "Project Not Found — Triandi Aprilio",
      description: "The requested project could not be found.",
    };
  }

  // Ambil gambar utama project untuk thumbnail OpenGraph (fallback ke default jika kosong)
  const thumbnailImage = project?.img?.original || "/og-thumbnail.png";

  return {
    title: `${project.title} — Triandi Aprilio Projects`,
    description: project.desc || `Explore the case study and technical details of ${project.title} by Triandi Aprilio.`,
    openGraph: {
      title: `${project.title} — Triandi Aprilio`,
      description: project.desc || `Explore details about ${project.title}.`,
      url: `https://portofolio-2026-mu.vercel.app/projects/${id}`,
      siteName: "Triandi Aprilio Portfolio",
      images: [
        {
          url: thumbnailImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Triandi Aprilio`,
      description: project.desc || `Explore details about ${project.title}.`,
      images: [thumbnailImage],
    },
  };
}

// 2. Component utama halaman
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getPayloadProjectBySlug(id);
  const technologies = await getPayloadTechnologies();

  if (!project) {
    return notFound();
  }

  return <ProjectDetailClient project={project} technologies={technologies} />;
}