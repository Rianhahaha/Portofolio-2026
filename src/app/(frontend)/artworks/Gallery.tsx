'use client';

import { motion } from "framer-motion";
import { Artwork } from "@/types";
import AlternatingBg from "@/component/artwork/AlternatingBg";
import Loader from "@/component/Loader";

interface GalleryProps {
    artworks: Artwork[];
    isLoading?: boolean;
}

export default function GallerySection({ artworks, isLoading }: GalleryProps) {
    // Safeguard Loading
    if (isLoading || !artworks || artworks.length === 0) {
        return (
            <section id="gallery" className="w-full min-h-screen bg-[#111] flex items-center justify-center p-10">
                <Loader />
            </section>
        );
    }

    const accentColors = [
        "bg-[#0096FA]", "bg-[#FF007F]", "bg-[#FFBB03]", "bg-[#00FF66]"
    ];
    console.log(artworks)

    return (
        <section id="gallery" className="relative w-full min-h-screen  py-[10vh] px-[4vw] md:px-[6vw] overflow-hidden select-none">

            {/* Background Texture */}


            {/* Gallery Header */}
            <AlternatingBg count={10} />
            <div className="font-artwork py-[10svh]    text-white text-[20svw] text-center md:text-[10svw] drop-shadow-[1svh_1svw_0px_rgba(0,0,0,1)]  leading-[0.85] z-[60] pointer-events-none select-none text-shadow-thin ">
                <h1>Gallery</h1>
            </div>

            {/* Horizontal Wrap Masonry (Justified Grid) */}
            <div className="relative z-10 flex flex-wrap gap-[2vw] md:gap-[1vw] w-full max-w-[1800px] mx-auto">
                {artworks.map((art, index) => {
                    const imgSrc = art.proxy?.regular
                    const tapeColor = accentColors[index % accentColors.length];

                    return (
                        <motion.div
                            key={art.id || index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.3, delay: (index % 5) * 0.05 }}
                            // flex-auto & flex-grow adalah kunci horizontal masonry-nya
                            className="relative flex-auto flex-grow h-[35vh] md:h-[40vh] lg:h-[45vh] min-w-[40vw] md:min-w-[25vw] lg:min-w-[15vw] max-w-full group cursor-pointer"
                        >
                            <div className="size-full bg-black border-[.4svw] md:border-[.2svw] border-black overflow-hidden relative shadow-[.5svh_.5svh_0px_rgba(0,0,0,1)] hover:shadow-[1svh_1svh_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">

                                {/* Gambar Object Cover (Biar proporsi tetap padat walau melar) */}
                                <img
                                    src={imgSrc}
                                    alt={art.title || "Artwork"}
                                    loading="lazy"
                                    className="size-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Meta Overlay yang nongol saat dihover */}
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 ${tapeColor} border border-white`} />
                                        <h3 className="text-white font-bold text-sm md:text-base font-mono truncate uppercase">
                                            {art.title || `ART_${art.id}`}
                                        </h3>
                                    </div>
                                </div>

                                {/* Label ID kecil di pojok kiri atas (Static) */}
                                <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 border-b border-r border-white/20 font-mono text-xs font-bold pointer-events-none">
                                    #{index + 1}
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}