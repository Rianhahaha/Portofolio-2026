import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Artworks from "./ArtworkPage";

export const metadata: Metadata = buildMetadata({
  title: "Artworks",
  description:
    "Explore the interactive artwork gallery, Pixiv curation, and Persona-inspired UI experiments by Triandi Aprilio.",
  path: "/artworks",
  // og-artworks-thumbnail.png does not exist; reuse the global portfolio card.
  image: {
    url: "/og-thumbnail.png",
    width: 1200,
    height: 630,
    alt: "Triandi Aprilio Artworks Gallery",
  },
});

export default function Page() {
  return <Artworks />;
}
