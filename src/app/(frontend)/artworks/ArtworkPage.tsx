'use client';
import ArtworkLayout from "@/component/ArtworkLayout";
import { useEffect, useState } from "react";
import RecentArtworksSection from "./RecentArtworks";
import ArtworksHomeMain from "./ArtworksHomeMain";
import GallerySection from "./Gallery";
import { Artwork } from "@/types";


export default function Artworks() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    useEffect(() => {
        fetch("/api/pixiv")
            .then((res) => res.json())
            .then((data) => {
                setArtworks(data);
            });
    }, []);

    return (
        <ArtworkLayout>
            <ArtworksHomeMain />
            <RecentArtworksSection
                artworks={artworks.slice(0, 5)}
                isLoading={artworks.length === 0} />
            <GallerySection artworks={artworks} />
        </ArtworkLayout>
    );
}