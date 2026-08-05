'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
    id: number;
    label: string;
    href: string;
    accentColor: string; // Custom color triggered on hover
}

export default function ArtworksHome2() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        { id: 1, label: "MY PIXIV", href: "#", accentColor: "#0096FA" },
        { id: 2, label: "GALLERY", href: "#recent-artwork", accentColor: "#FFBB03" },
        { id: 3, label: "COMMISSIONS", href: "#", accentColor: "#00FF66" },
        { id: 4, label: "ABOUT ME", href: "#", accentColor: "#FF007F" },
    ];

    // CSS standard for 3D extruded text style without using external images

    // Fast and snappy spring physics for Persona-like kinetic transition
    const snappyTransition = {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8
    };

    return (
        <section className="relative w-full h-[100svh] bg-black  font-artwork select-none overflow-hidden">

            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 20%, transparent 20%)",
                    backgroundSize: "24px 24px"
                }}
            />
            <div className="absolute h-full right-0 pointer-events-none">

                <img className="w-fit h-full object-contain blur-sm rotate-25 scale-150" src={'/artwork/art-bg.png'} alt="art-bg" />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="size-fit overflow-hidden">

                    <div className="h-fit w-full px-[3svh]  ">

                        <img
                            className="pointer-events-none w-full h-full object-contain object-bottom filter drop-shadow-[2svh_0px_0px_rgba(0,0,0,1)]"
                            src="/artwork/miku-hero-half.png"
                            alt="Featured Character Artwork"
                        />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2  text-white text-[10svw] drop-shadow-[1svh_1svw_0px_rgba(0,0,0,1)]  leading-[0.85] z-[50] pointer-events-none select-none text-shadow-thin">
                        <h1>MY <br /> ARTWORK</h1> asd
                    </div>
                </div>


            </div>



        </section>
    );
}