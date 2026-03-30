import { PROJECT_DATA } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient"; // Kita buat ini di bawah

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PROJECT_DATA.find(p => p.id === id);

    if (!project) {
        return notFound();
    }

    // Lempar data project ke komponen Client
    return <ProjectDetailClient project={project} />;
}