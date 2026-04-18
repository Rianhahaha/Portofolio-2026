'use client'
import Image from "next/image";
import Navbar from "../component/Navbar";
import Section1 from "../component/home/section-1";
import Section2 from "../component/home/section-2";
import Section3 from "../component/home/section-3";
import { useEffect } from "react";
// import aos from "aos";
import aos from "aos";
import "aos/dist/aos.css";



export default function Home() {

  useEffect(() => {
    aos.init({
      duration: 500,
      // once: true,
    });
  }, [])
  return (
    <>
    <div className="scroll-smooth!">
      <Section1 />
      <Navbar />
      <Section2 />
      <Section3 />
    </div>
    {/* <div className=" lg:hidden h-dvh flex items-center justify-center">
      Mobile View is currently on Develop
    </div> */}
    </>
  );
}
