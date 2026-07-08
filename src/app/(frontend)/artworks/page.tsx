'use client';
import DotPattern from "@/component/artwork/DotPattern";
import ArtworkLayout from "@/component/ArtworkLayout";
import PagesLayout from "@/component/PagesLayout";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Artwork {
  id: number;
  title: string;
  proxy: string;
}
export default function Artworks() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  // useEffect(() => {
  //   fetch("/api/pixiv")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArtworks(data);
  //       console.log("Artworks hasil scrape:", data);
  //     });
  // }, []);
  return (
    // <ArtworkLayout>
    //   <section className="w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black relative font-artwork">
    //     <img className="absolute top-[-20svh] left-[-25svh] lg:left-[-40svh] w-[30svh] lg:w-[50svh] scale-200 rotate-[210deg] fill-white" src="/artwork/dot-pattern-white.svg" alt="" />
    //     <div className="absolute top-[7svh] left-0 text-white text-[25svh] font-artwork font-bold [transform:perspective(100svw)_rotateY(45deg)_rotateZ(-4deg)] z-50
    //            text-O-[0px_0px_20px_#000000] text-shadow leading-[22svh] tracking-wider">
    //       <h1>
    //         MY <br /> ARTWORK
    //       </h1>
    //     </div>
    //     <div className="absolute bottom-[-20svh] md:bottom-[-80svh] right-[-15svw] lg:right-[5svw] w-full max-w-[100svh] z-50">
    //       {/* <Image className="size-full" src={'/artwork/miku-hero-full.png'} alt="miku-hero" width={2000} height={2000} /> */}
    //       <img className="size-full scale-200" src={'/artwork/miku-hero-full.png'} alt="miku-hero" />
    //     </div>
    //     <div className="absolute right-[2svw] inset-y-[3svh] bg-cyan-500 w-[200svw] md:w-[140svw] right-0 overflow-hidden [transform:perspective(100svw)_rotateY(-35deg)] origin-right" >
    //       <div className="relative size-full">

    //         <img className="absolute bottom-[-5svh] right-[-15svh] w-[50svh] scale-200 rotate-[37deg] fill-white" src="/artwork/dot-pattern-black.svg" alt="" />
    //       </div>
    //     </div>
    //     {/* <h1>Coming Soon :)</h1> */}
    //     {/* {artworks.map((artwork) => (
    //       <div key={artwork.id}>
    //         <h2>{artwork.title}</h2>
    //         <img src={artwork.proxy} alt={artwork.title} />
    //       </div>
    //     ))} */}
    //   </section>
    // </ArtworkLayout>

    <PagesLayout>
      <div className="w-full h-screen flex justify-center items-center">

        <h1>Coming Soon :)</h1>

      </div>
    </PagesLayout>
  );
}
