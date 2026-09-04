'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArtworkButton from "@/component/artwork/ArtworkButton";
import { Menu } from "lucide-react";
import ColorfulBg from "@/component/artwork/ColorfulBg";
import ArtworkArrow from "@/component/artwork/ArtworkArrow";

interface MenuItem {
    id: number;
    label: string;
    href: string;
    accentColor: string; // Custom color triggered on hover
}

export default function ArtworksHomeMain() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        { id: 1, label: "MY PIXIV", href: "#", accentColor: "#0096FA" },
        { id: 2, label: "GALLERY", href: "#recent-artwork", accentColor: "#FFBB03" },
        { id: 3, label: "COMMISSIONS", href: "#", accentColor: "#00FF66" },
        { id: 4, label: "ABOUT ME", href: "#", accentColor: "#FF007F" },
    ];


    const snappyTransition = {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8
    };

    return (
        <section className="relative w-full h-[100svh]   font-artwork select-none overflow-hidden ">
            <div className="absolute top-3 left-2  md:top-[5svh] md:left-[2svw] md:px-10 flex flex-col items-center md:items-start gap-[2svw] w-fit  text-center md:text-left z-50">
                <svg className="text-[#FFBB03] hover:text-[#e0ff14] w-[15svw] md:w-[8svw] global-transition cursor-pointer hover:-translate-x-2" width="144" height="127" viewBox="0 0 144 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M73.41 25.8927L74.6072 43.5093C81.9731 42.5228 96.6459 40.442 122.723 36.4938L128.535 35.614L129.534 41.4062L135.306 74.8753L136.53 81.9772L129.324 81.8948L77.96 81.3055L79.8247 104.009L80.7857 115.709L70.7403 109.634L16.5525 76.8637L9.82913 72.797L15.5225 67.382L63.2887 21.9517L72.544 13.1501L73.41 25.8927Z" fill="currentColor" stroke="black" stroke-width="12" />
                </svg>
            </div>
            <div className="absolute top-3 right-2  md:top-[10svh] md:right-[2svw] md:px-10 flex flex-col items-center md:items-start gap-[2svw] w-fit  text-center md:text-left z-50 rotate-0 md:rotate-6">
                <div className="size-full bg-black px-[2svw] py-[3svh]     text-[8svw] md:text-[2.5svw]
     outline-[.5svw] outline-white shadow-[-10px_10px_0px_6px_rgba(0,_0,_0,_1)] hidden md:block
">
                    RIAN \\ PORTOFOLIO

                </div>
            </div>

            <div className="absolute size-full -rotate-1 pointer-events-none  bg-black py-[3svh] px-[1.5svw] overflow-hidden">
                <div className="relative size-full">
                    <ColorfulBg />
                    <img className="size-full object-cover opacity-50" src={'/artwork/art-bg.png'} alt="art-bg" />
                    <img src="/artwork/dot-pattern-white-2.svg" alt="" className="absolute bottom-0 left-0  mix-blend-overlay" />
                    <img src="/artwork/dot-pattern-black-2.svg" alt="" className="absolute bottom-0 left-0  mix-blend-overlay" />
                    <img src="/artwork/dot-pattern-white-2.svg" alt="" className="absolute bottom-0 right-0  mix-blend-overlay scale-x-[-1]" />
                    <img src="/artwork/dot-pattern-black-2.svg" alt="" className="absolute bottom-0 right-0  mix-blend-overlay scale-x-[-1]" />
                </div>

            </div>
            <div className="flex size-full z-10 relative">

                <div className=" h-full flex flex-col justify-center items-center max-w-[100svw] md:max-w-[60svw] max-h-[35svh]  md:max-h-[50svh] m-auto mt-[3svh] md:mt-[15svh]">

                    <div className="relative h-full w-full  flex flex-col ">

                        <img
                            className="pointer-events-none w-full h-full object-contain object-bottom filter drop-shadow-[2svh_0px_0px_rgba(0,0,0,1)]"
                            src="/artwork/miku-hero-half.png"
                            alt="Featured Character Artwork"
                        />
                        <div className="absolute bottom-[-5svw] left-1/2 -translate-x-1/2 -rotate-3 text-white text-[20svw] md:text-[10svw] drop-shadow-[1svh_1svw_0px_rgba(0,0,0,1)]  leading-[0.85] z-[50] pointer-events-none select-none text-shadow-thin ">
                            <h1>MY <br /> ARTWORK</h1>
                        </div>
                    </div>


                </div>
            </div>
            {/* Buttons */}
            <div className="absolute bottom-auto top-[60%] left-1/2 -translate-1/2 md:translate-0 md:top-auto md:bottom-[5svh] md:left-[3svw] flex flex-col items-center md:items-start gap-[2svw] w-full md:w-fit px-10 text-center md:text-left rotate-0 md:-rotate-6 z-50">
                <ArtworkButton noblank={false} text="MY PIXIV" type="link" href="https://www.pixiv.net/en/users/67360022" className=" bg-[#0096FA] hover:bg-[#00eeff]  w-full md:w-auto" />
                <ArtworkButton noblank={true} text="RECENT ART" type="link" href="#recent-artwork" className=" bg-[#FFBB03] hover:bg-[#e0ff14]  w-full md:w-auto" />

            </div>





        </section>
    );
}