'use client';

import { motion, Transition } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface MenuItem {
    id: number;
    label: string;
    href: string;
    accentColor: string; // Custom color triggered on hover
}

export default function ArtworksHome() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        { id: 1, label: "MY PIXIV", href: "#", accentColor: "#0096FA" },
        { id: 2, label: "GALLERY", href: "#recent-artwork", accentColor: "#FFBB03" },
        { id: 3, label: "COMMISSIONS", href: "#", accentColor: "#00FF66" },
        { id: 4, label: "ABOUT ME", href: "#", accentColor: "#FF007F" },
    ];

    // CSS standard for 3D extruded text style without using external images
    const extrudedTextShadow = {
        textShadow: `
      2px 2px 0px #000,
      4px 4px 0px #000,
      6px 6px 0px #000,
      8px 8px 0px #000,
      10px 10px 0px #000,
      12px 12px 0px #000
    `
    };

    // Fast and snappy spring physics for Persona-like kinetic transition
    const snappyTransition: Transition = {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8
    };

    return (
        <section className="relative w-full h-[100svh] bg-[#0c0c0c] overflow-hidden font-sans select-none">

            {/* =========================================================================
          BACKGROUND LAYER (Procedural Halftone & Slanted Shapes)
          ========================================================================= */}

            {/* Procedural Halftone Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 20%, transparent 20%)",
                    backgroundSize: "24px 24px"
                }}
            />

            {/* Crimson Red Slanted Background Split */}
            <motion.div
                initial={{ x: "-100%", skewX: -15 }}
                animate={{ x: 0, skewX: -12 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-0 -left-[10%] w-[65vw] bg-[#D30A0A] origin-top border-r-[10px] border-black shadow-[20px_0_0_0_rgba(0,0,0,0.3)] z-10"
            />

            {/* Solid Black Backing Accent Line */}
            <motion.div
                initial={{ x: "-100%", skewX: -15 }}
                animate={{ x: 0, skewX: -12 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-0 -left-[5%] w-[10vw] bg-black origin-top z-10"
            />

            {/* =========================================================================
          HERO CHARACTER SPOTLIGHT (The Visual Anchor)
          ========================================================================= */}
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, ...snappyTransition }}
                className="absolute bottom-0 left-[35%] md:left-[30%] lg:left-[40%] w-[50vw] max-w-[85vh] h-[90vh] z-20 pointer-events-none"
            >
                {/* Shadow Overlay beneath the character for depth mapping */}
                <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black via-transparent to-transparent z-25 opacity-80" />
                <img
                    className="size-full object-contain object-bottom filter drop-shadow-[15px_15px_0px_rgba(0,0,0,0.6)]"
                    src="/artwork/miku-hero-full.png"
                    alt="Featured Character Artwork"
                />
            </motion.div>

            {/* =========================================================================
          FOREGROUND UI CONTENT
          ========================================================================= */}
            <div className="relative size-full flex flex-col justify-between p-[5vh] z-30 pointer-events-none">

                {/* Top Header: Identity & Navigation Metadata */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, ...snappyTransition }}
                    className="flex justify-between items-start w-full pointer-events-auto"
                >
                    {/* Level Emblem / Brand Tag */}
                    <div className="bg-black text-white px-4 py-2 border-[4px] border-white shadow-[6px_6px_0px_#000] -rotate-3 flex items-center gap-3">
                        <span className="font-black bg-[#FFBB03] text-black px-2 py-0.5 text-xs">LV. 99</span>
                        <span className="font-black tracking-widest text-sm uppercase">RIAN // PORTFOLIO</span>
                    </div>

                    {/* Subtitle Details */}
                    <div className="text-right text-white font-mono text-xs tracking-widest leading-relaxed hidden md:block">
                        <p>SYSTEM STATUS: ACTIVE</p>
                        <p>LOC: YOGYAKARTA, IDN</p>
                    </div>
                </motion.div>

                {/* Core Layout: Left Extruded Title & Right Skewed Menu */}
                <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center w-full h-full pb-[5vh] gap-8">

                    {/* LEFT: Massive Extruded Title Card */}
                    <motion.div
                        initial={{ x: -100, opacity: 0, rotate: -5 }}
                        animate={{ x: 0, opacity: 1, rotate: -3 }}
                        transition={{ delay: 0.3, ...snappyTransition }}
                        className="flex flex-col"
                    >
                        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_#000] max-w-xl">
                            <h1
                                style={extrudedTextShadow}
                                className="text-[#D30A0A] text-[clamp(2.5rem,7vw,6.5rem)] font-black uppercase leading-[0.85] tracking-tighter"
                            >
                                MY <br />
                                <span className="text-black bg-white inline-block px-2 -ml-2 select-none">ART</span>WORK
                            </h1>
                        </div>

                        {/* Decorative tape / slant sticker underneath */}
                        <div className="bg-black text-white py-1.5 px-6 border-x-[4px] border-b-[4px] border-black text-xs font-mono tracking-[0.3em] font-bold uppercase self-start ml-8 shadow-[6px_6px_0px_rgba(0,0,0,0.4)]">
              /// SYSTEM VERSION 2.0
                        </div>
                    </motion.div>

                    {/* RIGHT: High Contrast Stacked Navigation Buttons */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, ...snappyTransition }}
                        className="flex flex-col gap-4 w-full max-w-[400px] lg:max-w-[320px] xl:max-w-[400px] pointer-events-auto [transform:rotateZ(-3deg)_skewX(-5deg)]"
                    >
                        {menuItems.map((item, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <Link key={item.id} href={item.href} passHref legacyBehavior>
                                    <motion.a
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        style={{
                                            backgroundColor: isHovered ? item.accentColor : '#ffffff',
                                            color: isHovered ? '#000000' : '#000000',
                                            x: isHovered ? -6 : 0,
                                            y: isHovered ? -6 : 0,
                                            boxShadow: isHovered
                                                ? '14px 14px 0px 0px #000000'
                                                : '8px 8px 0px 0px #000000'
                                        }}
                                        transition={{ type: "tween", duration: 0.1 }}
                                        className="w-full text-left font-black text-xl md:text-2xl tracking-widest uppercase border-[5px] border-black px-6 py-4 flex justify-between items-center cursor-pointer transition-colors duration-75 select-none"
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-sm font-black transition-transform duration-150 group-hover:translate-x-1">
                                            {isHovered ? "▶" : "▷"}
                                        </span>
                                    </motion.a>
                                </Link>
                            );
                        })}
                    </motion.div>

                </div>

            </div>

        </section>
    );
}