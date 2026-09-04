'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorfulBg from "@/component/artwork/ColorfulBg";
import { Artwork } from "@/types";
import Loader from "@/component/Loader";

interface RecentArtworksProps {
    artworks: Artwork[];
    isLoading?: boolean;
}

export default function RecentArtworksSection({ artworks, isLoading }: RecentArtworksProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    // State to track direction for the animation (1 for next, -1 for prev)
    const [direction, setDirection] = useState(1);



    // Safeguard & Loading Placeholder
    if (isLoading || !artworks || artworks.length === 0) {
        return (
            <section className="h-screen relative flex items-center justify-center bg-black" id="recent-artwork">
                <Loader />
            </section>
        );
    }

    const currentArt = artworks[activeIndex];

    // Sesuaikan property ini dengan struktur response /api/pixiv lu
    // Biasanya URL ada di proxy.regular, image_urls.large, atau sejenisnya
    const activeImageSrc = currentArt?.proxy?.regular

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % artworks.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
    };

    // Animation Variants for Framer Motion
    const slideVariants: any = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            rotate: direction > 0 ? 4 : -4,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            rotate: direction < 0 ? 4 : -4,
            scale: 0.95,
            transition: { duration: 0.2 }
        })
    };


    const triggerNext = () => {
        setDirection(1);
        handleNext();
    };

    const triggerPrev = () => {
        setDirection(-1);
        handlePrev();
    };

    return (
        <section className="h-screen relative overflow-hidden" id="recent-artwork">
            {/* Header Text */}
            <div className="font-artwork absolute top-[0svw] right-[2svw] -rotate-3 text-white text-[20svw] md:text-[10svw] drop-shadow-[1svh_1svw_0px_rgba(0,0,0,1)] leading-[0.85] z-[60] pointer-events-none select-none text-shadow-thin">
                <h1>RECENT <br /> ARTWORK</h1>
            </div>

            {/* Background Slanted Container */}
            <div className="absolute h-full w-full md:w-[55%] rotate-2 bg-black pointer-events-none py-[3svh] px-[1.5svw] overflow-hidden z-0">
                <div className="relative size-full overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`bg-${currentArt.id || activeIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute size-full object-top scale-150 object-cover grayscale"
                            src={activeImageSrc}
                            alt="art-bg"
                        />
                    </AnimatePresence>
                    <ColorfulBg />
                    <img src="/artwork/dot-pattern-white-2.svg" alt="" className="absolute bottom-0 left-0 mix-blend-overlay hidden md:block" />
                    <img src="/artwork/dot-pattern-black-2.svg" alt="" className="absolute bottom-0 left-0 mix-blend-overlay hidden md:block" />
                    <img src="/artwork/dot-pattern-white-2.svg" alt="" className="absolute top-0 right-0 mix-blend-overlay scale-[-1] hidden md:block" />
                    <img src="/artwork/dot-pattern-black-2.svg" alt="" className="absolute top-0 right-0 mix-blend-overlay scale-[-1] hidden md:block" />
                </div>
            </div>

            {/* Foreground Main Slider */}
            <div className="size-full relative z-50 flex items-end justify-center">
                <div className="w-full max-w-[80svw] md:max-w-[40svw] h-[75svh] mb-[5svh] mx-auto relative md:-rotate-3">

                    {/* Outline / Frame (Pisahkan dari motion.img agar tidak ikut terdistorsi saat animasi) */}
                    {/* <div className="absolute inset-0 outline-[1svw] outline-black pointer-events-none z-50" /> */}

                    {/* Image Motion Container */}
                    <div className="relative size-full  ">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.img
                                key={`fg-${currentArt.id || activeIndex}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute size-full object-top object-cover outline-[1svw] outline-black"
                                src={activeImageSrc}
                                alt={currentArt.title || "Recent Artwork"}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Bottom Gradient & Fullscreen Icon */}
                    <div className="h-1/2 bg-gradient-to-t from-black to-transparent w-full absolute z-40 -bottom-1 pointer-events-none">
                        <div className="absolute bottom-0 right-0 cursor-pointer opacity-50 hover:opacity-100 global-transition scale-65 hover:scale-75 pointer-events-auto">
                            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_349_5)">
                                    <path d="M7.0752 21.2268V7.07568H21.2264M35.3775 7.07568H49.5287V21.2268M7.0752 35.378V49.5292H21.2264M49.5287 35.378V49.5292H35.3775" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_349_5" x="4.5752" y="4.57568" width="47.4531" height="47.4534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_349_5" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_349_5" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Controls */}
                    <div onClick={triggerPrev} className="font-artwork text-[6svw] absolute left-[-5svw] top-1/2 -translate-y-1/2 cursor-pointer opacity-80 hover:opacity-100 global-transition hover:-translate-x-2 select-none z-50">
                        {'<'}
                    </div>
                    <div onClick={triggerNext} className="font-artwork text-[6svw] absolute right-[-5svw] top-1/2 -translate-y-1/2 cursor-pointer opacity-80 hover:opacity-100 global-transition hover:translate-x-2 select-none z-50">
                        {'>'}
                    </div>
                </div>
            </div>
        </section>
    );
}