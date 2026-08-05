'use client';
import ArtworkButton from "@/component/artwork/ArtworkButton";
import ArtworkLayout from "@/component/ArtworkLayout";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArtworksHome from "./home";
import ArtworksHome2 from "./home2";

interface Artwork {
    id: number;
    title: string;
    proxy: {
        original: string,
        thumb: string,
        regular: string,
        small: string,
    };
}
// Definisikan variants animasi Brutalist di luar komponen agar tidak dirender ulang
const brutalistSlide: Variants = {
    enter: {
        x: "100%",
        skewX: -15,
        rotate: "25deg",
        y: "50svh",
        // perspective: '100vw',
        opacity: 0
    },
    // [transform:perspective(100svw)_rotateY(25deg)] 
    center: {
        x: 0,
        rotate: "0deg",

        y: 0,
        skewX: 0,
        opacity: 1,
        // TypeScript sekarang mengenali array ini sebagai valid Bezier tuple
        transition: { duration: 1, ease: "easeInOut" }
    },
    exit: {
        x: "-100%",
        rotate: "-25deg",

        y: "50svh",

        skewX: 0,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" }
    }
};
export default function Artworks() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    useEffect(() => {
        fetch("/api/pixiv")
            .then((res) => res.json())
            .then((data) => {
                setArtworks(data);
                console.log("Artworks hasil scrape:", data);
            });
    }, []);
    console.log(artworks)

    const [activeIndex, setActiveIndex] = useState(0);

    // const dummyArtworks: Artwork[] = [
    //     { id: 1, title: "Art 1", proxy: "/artwork/4.png" },
    //     { id: 2, title: "Artwork long title", proxy: "/artwork/2.png" },
    //     { id: 3, title: "Art 3", proxy: "/artwork/4.png" },
    //     { id: 4, title: "Art 4", proxy: "/artwork/2.png" },
    //     { id: 5, title: "Art 5", proxy: "/artwork/4.png" },
    // ];

    // const artworksData = dummyArtworks.slice(0, 5);
    const currentArt = artworks[activeIndex];
    const nextArt = artworks[(activeIndex + 1) % artworks.length];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % artworks.length);
    };
    return (
        <ArtworkLayout>
            {/* <ArtworksHome /> */}
            <ArtworksHome2 />
            <section className="relative scroll-smooth" id="hero">
                {/* Overflowing */}
                <div className="left-[0] bottom-[-16svh] w-[100svw] lg:w-[70svw] absolute z-60  [transform:perspective(80svw)_rotateY(36deg)_rotateZ(-20deg)] scale-50">
                    <div className="relative size-full">

                        <ArtworkButton noblank={true} text="MY PIXIV" type="link" href="#recent-artwork" className=" bg-[#0096FA] hover:bg-[#00eeff]  -translate-x-[10svw]" />
                        <ArtworkButton noblank={true} text="GALLERY" type="link" href="#recent-artwork" className=" bg-[#FFBB03] hover:bg-[#fbff13]  -translate-x-[1svw]" />
                    </div>
                </div>
                {/* <ArtworkButton text="MY PIXIV" type="link" href="#" className="absolute left-[14svw] bottom-[32svh] [transform:perspective(45svw)_rotateY(45deg)_rotateZ(-13deg)] bg-[#0096FA] hover:bg-[#00eeff]" />
                <ArtworkButton noblank={true} text="GALLERY" type="link" href="#recent-artwork" className="absolute left-[34svh] bottom-[13svh] [transform:perspective(45svw)_rotateY(49deg)_rotateZ(-23deg)] bg-[#FFBB03] hover:bg-[#fbff13]" /> */}

                <div className="w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black relative font-artwork">
                    <img className="absolute top-[-20svh] left-[-25svh] lg:left-[-40svh] w-[30svh] lg:w-[50svh] scale-200 rotate-[210deg] fill-white" src="/artwork/dot-pattern-white.svg" alt="" />
                    {/* <div className="absolute top-[6svh] left-[4svw]">

                        <div className="relative text-white text-[10svw] font-artwork font-bold [transform:perspective(64svw)_rotateY(45deg)_rotateZ(-4deg)] z-50 pointer-events-none select-none
               text-O-[0px_0px_20px_#000000] text-shadow leading-[9svw] tracking-wider">
                            <h1>
                                MY <br /> ARTWORK
                            </h1>
                        </div>
                    </div> */}
                    <div className="absolute top-[5svh] left-[4svw] text-white  text-[8svw] [transform:perspective(64svw)_rotateY(35deg)_rotateZ(-8deg)] z-[50] pointer-events-none select-none text-shadow leading-[9svw]">
                        <h1>MY <br /> ARTWORK</h1>
                    </div>

                    <div className="absolute bottom-0 right-0 w-full lg:w-[70svw] h-[100svh] overflow-hidden z-50">
                        <img className="size-full object-top-left object-cover scale-100 origin-top-left" src={'/artwork/miku-hero.png'} alt="miku-hero" />
                    </div>
                    {/* <div className="absolute bottom-[-90svh] sm:bottom-[-60svh] md:bottom-[-80svh] right-[-30svw] md:right-[5svw] w-[100svh] z-50">
                        <Image className="size-full hidden" src={'/artwork/miku-hero-full.png'} alt="miku-hero" width={2000} height={2000} />
                        <img className="size-full scale-200" src={'/artwork/miku-hero-full.png'} alt="miku-hero" />
                    </div> */}
                    <div className="absolute right-[2svw] inset-y-[3svh] bg-[#0096FA] w-[200svw] md:w-[140svw] right-0 overflow-hidden [transform:perspective(230svw)_rotateY(-50deg)] origin-right" >
                        <div className="relative size-full">

                            <img className="absolute bottom-[-5svh] right-[-15svh] w-[50svh] scale-200 rotate-[37deg] fill-white" src="/artwork/dot-pattern-black.svg" alt="" />
                        </div>
                    </div>
                    {/* <h1>Coming Soon :)</h1> */}
                    {/* {artworks.map((artwork) => (
          <div key={artwork.id}>
            <h2>{artwork.title}</h2>
            <img src={artwork.proxy} alt={artwork.title} />
            </div>
        ))} */}
                </div>
            </section>
            <section className="relative font-artwork" id="recent-artwork">
                <div className="absolute top-[10svh] right-[-4svw] text-white text-[16svh] [transform:perspective(64svw)_rotateY(35deg)_rotateZ(-8deg)] z-[100] pointer-events-none select-none text-shadow leading-[15svh]">
                    <h1>RECENT <br /> ARTWORK</h1>
                </div>

                <div className="relative w-full h-[100svh] overflow-hidden bg-black ">

                    {/* 1. YELLOW BOX (ACTIVE) - GHOST WRAPPER */}
                    <div className="absolute left-[3svw] top-[10svh] w-[35svw] h-[80svh] z-[70]">

                        {/* TITLE BADGE (Overlapping top-left) */}


                        {/* LAYER MOTION UNTUK GAMBAR */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                variants={brutalistSlide}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 size-full bg-[#FFBB03] outline-[1.5svh] outline-black group  p-2"
                            >
                                <div className="absolute top-[-3svh] left-[-3svw] bg-black px-[2svw] py-[1svh] z-[90] outline-[0.5svh] outline-white [transform:rotateZ(-4deg)] shadow-[10px_10px_0px_0px_rgba(0,150,250,1)]">
                                    <h2 className="text-white text-[4svh] font-bold leading-none tracking-widest uppercase">
                                        {currentArt?.title || ''}
                                    </h2>
                                </div>
                                {currentArt && (
                                    <Image
                                        src={currentArt.proxy.regular}
                                        className="size-full object-cover"
                                        alt={currentArt?.title || ''}
                                        width={1000}
                                        height={1000}
                                        priority
                                    />
                                )}
                                <div className="absolute inset-0 size-full bg-black/50 transition-all opacity-40 group-hover:opacity-100 z-30"></div>
                                <div className="absolute inset-0 flex  items-center justify-center z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150 group-hover:scale-100 text-whadow">
                                    <h2 className="text-white text-[8svh] font-black mix-blend-overlay [transform:rotateZ(-10deg)]">
                                        NEXT ▶
                                    </h2>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* ACTION BUTTON (Overlapping bottom-right) */}
                        {/* Gunakan komponen ArtworkButton milikmu, timpa rotasinya agar dinamis */}
                        {/* <ArtworkButton
                            text="VIEW DETAIL"
                            type="button"
                            className="absolute bottom-[-2svh] right-[-2svw] bg-white text-black z-[90] [transform:rotateZ(3deg)] hover:bg-[#FFBB03] hover:text-black outline-[0.5svh] outline-black"
                        /> */}
                    </div>

                    {/* 2. CYAN BOX (PREVIEW NEXT) - GHOST WRAPPER */}
                    <div
                        onClick={handleNext}
                        className="absolute left-[35svw] top-[20svh] w-[40svw] h-[80svh] z-[30] [transform:perspective(100svw)_rotateY(25deg)] origin-left cursor-pointer group"
                    >
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                variants={brutalistSlide}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 size-full bg-[#0096FA]  outline-[1.5svh] outline-black overflow-hidden transition-colors duration-300"
                            >
                                <img className="absolute bottom-0 left-[-15svh] w-[50svh] scale-150 rotate-[150deg] fill-white z-10 opacity-80 mix-blend-overlay pointer-events-none" src="/artwork/dot-pattern-black.svg" alt="" />

                                <div className="absolute inset-0 size-full bg-black/50 transition-all opacity-40 group-hover:opacity-100 z-30"></div>
                                <div className="absolute inset-0 flex bottom-[20svh] items-center justify-center z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150 group-hover:scale-100 text-whadow">
                                    <h2 className="text-white text-[8svh] font-black mix-blend-overlay [transform:rotateZ(-10deg)]">
                                        NEXT ▶
                                    </h2>
                                </div>

                                {/* {nextArt && (
                                    <div className="absolute inset-0 p-[2svh]">
                                        <Image
                                            src={nextArt.proxy.regular}
                                            className="size-full object-cover object-center transition-opacity"
                                            alt={nextArt.title}
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                )} */}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* THE MASK */}
                    <div className="absolute bottom-[-34svh] left-[-10svw] w-[120svw] h-[66svh] bg-[#FFBB03] outline-[1.5svh] outline-black z-[80] [transform:rotateZ(-14deg)] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-start pt-[6svh]">

                        {/* TEXTURE LAYER */}
                        <img
                            src="/artwork/dot-pattern-black.svg"
                            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
                            alt=""
                        />

                        {/* DECORATIVE MARQUEE / TICKER TAPE */}
                        <div className="relative w-full flex flex-col gap-[2svh] pointer-events-none select-none overflow-hidden">

                            {/* ROW 1: SLIDE LEFT */}
                            <div className="flex w-max">
                                {/* Main Block */}
                                <div className="flex gap-[4svw] px-[2svw] text-black text-[10svh] font-black uppercase whitespace-nowrap tracking-widest leading-none animate-marquee">
                                    <span>/// LATEST UPDATES</span>
                                    <span>/// CAMELLYA</span>
                                    <span>/// RECENT ARTWORK</span>
                                    <span>/// PIXIV PORTFOLIO</span>
                                </div>
                                {/* Duplicated Block (For Seamless Loop) - Aria-hidden prevents screen readers from reading it twice */}
                                <div className="flex gap-[4svw] px-[2svw] text-black text-[10svh] font-black uppercase whitespace-nowrap tracking-widest leading-none animate-marquee" aria-hidden="true">
                                    <span>/// LATEST UPDATES</span>
                                    <span>/// CAMELLYA</span>
                                    <span>/// RECENT ARTWORK</span>
                                    <span>/// PIXIV PORTFOLIO</span>
                                </div>
                            </div>

                            {/* ROW 2: SLIDE RIGHT (Slower, Smaller, Reverse) */}
                            <div className="flex w-max -ml-[100vw]">
                                {/* Main Block */}
                                <div className="flex gap-[4svw] px-[2svw] text-black text-[6svh] font-bold uppercase whitespace-nowrap tracking-[0.5em] leading-none animate-marquee-reverse">
                                    <span>01001110</span>
                                    <span>NO DATA FOUND</span>
                                    <span>01001110</span>
                                    <span>SYSTEM ERROR</span>
                                    <span>01001110</span>
                                    <span>NO DATA FOUND</span>
                                </div>
                                {/* Duplicated Block */}
                                <div className="flex gap-[4svw] px-[2svw] text-black text-[6svh] font-bold uppercase whitespace-nowrap tracking-[0.5em] leading-none animate-marquee-reverse" aria-hidden="true">
                                    <span>01001110</span>
                                    <span>NO DATA FOUND</span>
                                    <span>01001110</span>
                                    <span>SYSTEM ERROR</span>
                                    <span>01001110</span>
                                    <span>NO DATA FOUND</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* <ArtworkButton noblank={true} text="View Image" bgPosition="left" type="link" href="#recent-artwork" className="uppercase z-[90] absolute right-[8svh] top-[70svh] [transform:perspective(52svw)_rotateY(-46deg)_rotateZ(8deg)] bg-[#0096FA] hover:bg-[#00eeff]" /> */}
            </section>
            <section className="relative">

                <div className="w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black relative font-artwork">

                </div>
            </section>
            <section className="relative  w-full h-[100svh] bg-black" id="hero">
                <div className="absolute size-full  [transform:perspective(120svw)_rotateY(45deg)_rotateZ(-13deg)]">
                    <div className="relative size-full ">
                        <ArtworkButton
                            type="button"
                            text="MY PIXIV"
                            // tilt="left"
                            className="absolute left-[5svw] bottom-[40svh] bg-[#0096FA] hover:bg-[#00eeff] "
                        />
                        <ArtworkButton
                            type="button"

                            text="GALLERY"
                            // tilt="right"
                            className="absolute left-[5svh] bottom-[0svh] bg-[#FFBB03] hover:bg-[#fbff13]"
                        />

                    </div>
                </div>
            </section>


        </ArtworkLayout>

        // <PagesLayout>
        //   <div className="w-full h-screen flex justify-center items-center">

        //     <h1>Coming Soon :)</h1>

        //   </div>
        // </PagesLayout>
    );
}