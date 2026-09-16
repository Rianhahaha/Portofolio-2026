'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Artwork } from "@/types";
import AlternatingBg from "@/component/artwork/AlternatingBg";
import Loader from "@/component/Loader";
import AnimatedModal from "@/component/modal/AnimatedModal";
import { useEffect, useState } from "react";

interface GalleryProps {
    artworks: Artwork[];
    isLoading?: boolean;
}

export default function GallerySection({ artworks, isLoading }: GalleryProps) {
    // 1. Kumpulkan semua State di urutan paling atas
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageModal, setImageModal] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    // STATE DEBUGGER
    const [debugStep, setDebugStep] = useState(1);

    // 2. Gabungkan useEffect yang dependen ke [imageModal] (DRY Principle)
    useEffect(() => {
        if (imageModal) {
            setIsImageLoading(true);
            setDebugStep(1);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "";
        };
    }, [imageModal]);

    // 3. Posisikan early return HANYA SETELAH semua hooks dideklarasikan
    if (isLoading || !artworks || artworks.length === 0) {
        return (
            <section id="gallery" className="w-full min-h-screen bg-[#111] flex items-center justify-center p-10">
                <Loader />
            </section>
        );
    }

    // Ekstraksi data aktif dengan aman
    const currentArt = artworks[activeIndex];
    const activeImageSrc = currentArt?.proxy?.regular;

    return (
        <>
            <section id="gallery" className="relative w-full min-h-screen py-[10vh] px-[4vw] md:px-[6vw] overflow-hidden select-none">

                {/* Gallery Header */}
                <AlternatingBg count={10} />
                <div className="font-artwork py-[10svh] text-white text-[20svw] text-center md:text-[10svw] drop-shadow-[1svh_1svw_0px_rgba(0,0,0,1)] leading-[0.85] z-[60] pointer-events-none select-none text-shadow-thin ">
                    <h1>Gallery</h1>
                </div>

                {/* Horizontal Wrap Masonry (Justified Grid) */}
                <div className="relative z-10 flex flex-wrap gap-[2vw] md:gap-[1vw] w-full max-w-[1800px] mx-auto">
                    {artworks.map((art, index) => {
                        const imgSrc = art.proxy?.small;

                        return (
                            <motion.div
                                key={art.id || index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ duration: 0.3, delay: (index % 5) * 0.05 }}
                                className="relative flex-auto flex-grow h-[35vh] md:h-[40vh] lg:h-[45vh] group cursor-pointer"
                                onClick={() => {
                                    // Binding menggunakan index mapping, bukan ID Pixiv
                                    setActiveIndex(index);
                                    setImageModal(true);
                                }}
                            >
                                <div className="size-full bg-black border-[.4svw] md:border-[.2svw] border-black overflow-hidden relative shadow-[.5svh_.5svh_0px_rgba(0,0,0,1)] hover:shadow-[1svh_1svh_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
                                    <img
                                        src={imgSrc}
                                        alt={art.title || "Artwork"}
                                        loading="lazy"
                                        className="size-full object-cover object-top transition-all duration-500"
                                    />

                                    {/* Meta Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 h-1/2 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-white font-bold text-sm md:text-base font-mono truncate uppercase text-wrap">
                                                {art.title || `ART_${art.id}`}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* GHOST ELEMENTS HACK */}
                    <div className="flex-grow-[10] h-0 pointer-events-none"></div>
                    <div className="flex-grow-[10] h-0 pointer-events-none"></div>
                    <div className="flex-grow-[10] h-0 pointer-events-none"></div>
                    <div className="flex-grow-[10] h-0 pointer-events-none"></div>
                </div>
            </section>

            {/* Modal Section */}
            <AnimatePresence>
                <AnimatedModal isOpen={imageModal} isArtwork={true}>
                    <div className="w-full h-[80vh] md:h-[90vh] relative flex items-stretch justify-center">

                        {/* Tombol Close */}
                        <div className="absolute z-[60] right-0 top-0">
                            <button
                                type="button"
                                className="text-white font-artwork text-[2.5rem] w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-red-600 hover:bg-red-500  outline-[2px]  outline-black cursor-pointer hover:scale-110 global-transition shadow-[.5svh_.5svh_0px_rgba(0,0,0,1)]"
                                onClick={() => setImageModal(false)}
                            >
                                <span className="leading-none">x</span>
                            </button>
                        </div>

                        {/* Kerangka Frame Rigid */}
                        <div className="relative z-10 flex justify-center min-w-[50vw] dan min-h-[50vh] max-w-[90vw] max-h-[90vh]">
                            {/* <div className="absolute top-0 left-0 bg-red-600 text-white font-mono text-xs md:text-sm p-3 z-[99999] border-b-[2px] border-r-[2px] border-white pointer-events-none drop-shadow-md">
                                <p className="font-bold border-b border-white/50 mb-1 pb-1">MODAL DEBUGGER</p>
                                <p>STEP: {debugStep === 1 ? '1 & 2 (METADATA FETCH / PLACEHOLDER)' : '3 (FULLY LOADED)'}</p>
                                <p>LOADING: {isImageLoading.toString()}</p>
                            </div> */}

                            {/* Loading State Spinner */}
                            {isImageLoading && (
                                <div className="absolute size-full inset-0 z-10 flex flex-col items-center justify-center bg-black backdrop-blur-md">
                                    <div className="h-12 w-12 animate-spin rounded-full border-[6px] border-solid border-[#FFBB03] border-t-transparent" />
                                    <p className="font-artwork text-[#FFBB03] mt-4 animate-pulse text-xl tracking-widest">
                                        LOADING...
                                    </p>
                                </div>
                            )}

                            {/* Syntax Class diperbaiki & bersih */}
                            <img
                                src={activeImageSrc}
                                alt="Fullscreen Artwork"
                                className={`max-w-full max-h-[90vh] object-contain global-rounded border-black border-10 transition-all duration-300 ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                                onLoad={() => { setIsImageLoading(false); setDebugStep(3); }}
                            />
                        </div>
                    </div>
                </AnimatedModal>
            </AnimatePresence>
        </>
    );
}