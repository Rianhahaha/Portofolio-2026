

import type { Metadata } from "next";
import Artworks from "./ArtworkPage";

export const metadata: Metadata = {
    title: "Artworks — Triandi Aprilio",
    description: "Explore the interactive artwork gallery, Pixiv curation, and Persona-inspired UI experiments by Triandi Aprilio.",
    openGraph: {
        title: "Artworks — Triandi Aprilio Portfolio",
        description: "Browse selected illustrations, front-end modules, and creative web designs.",
        url: "https://portofolio-2026-mu.vercel.app/artworks",
        images: [
            {
                url: "/og-artworks-thumbnail.png",
                width: 1200,
                height: 630,
                alt: "Triandi Aprilio Artworks Gallery",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Artworks & Gallery — Triandi Aprilio",
        description: "Explore interactive artwork collections and front-end design experiments.",
        images: ["/og-artworks-thumbnail.png"],
    },
};
export default function Page() {


    return <Artworks />
}