'use client'

import Image from "next/image";
import MainButton from "../button/MainButton";
import { FileDownIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="w-full h-[calc(100svh-100px)] lg:h-[630px] flex items-bottom justify-center overflow-hidden global-transition relative">
      {/* <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-cyan-500/10 to-transparent"/> */}
      <div className="max-w-7xl w-full flex flex-col lg:grid grid-cols-3 lg:items-end justify-end relative px-5">

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[60%] sm:w-1/3 md:w-[60%] lg:w-full lg:text-right mb-[5rem]  relative z-50 lg:z-10 "
        >
          <div className="absolute left-[-20px] lg:left-auto lg:right-[-30px] w-[1px] h-full bg-cyan-500 hidden lg:block"></div>
          <div className="relative overflow-hidden">

            <span className="text-2xl md:text-2xl font-normal">What's up? Name's</span>
            <br />
            <h1 className="mb-5">
              <span className=" text-3xl md:text-5xl font-bold uppercase">T<span className="text-cyan-500">rian</span>di Aprilio </span>
            </h1>
            <p className="text-xs md:text-base">
              Fresh Graduated Information Technology student specializing in graphic design,
              illustration, and{" "}
              <b className="text-cyan-500"> front-end web development.</b> His
              expertise in these areas has been demonstrated through various
              projects completed for diverse clients. He has a keen interest in
              visual design and its implementation, which includes{" "}
              <b className="text-cyan-500"> front-end website development, </b>
              illustration, and graphic design.
            </p>
            <div className="flex justify-start md:justify-end mt-5">
              <MainButton
                type="link"
                href="/cv.pdf"
                text="See my CV"
                icon={FileDownIcon}
              />
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" h-[75svh] sm:h-full w-full flex items-end  lg:pt-0 lg:relative z-30 absolute bottom-0 right-[-10svw] sm:right-[-30svw] lg:right-0 pointer-events-none"
        >
          <Image
            src="/home/portrait-hd.png"
            alt="profile"
            width={800}
            height={800}
            className="object-cover object-top-left lg:object-bottom-left w-full h-full lg:h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mb-[5rem] relative z-50 lg:z-20   lg:-translate-8 lg:-translate-y-14"
        >
          <div className="absolute left-[-20px] w-[1px] h-full bg-cyan-500 hidden lg:block"></div>
          <div className="relative overflow-hidden">

            <p className="text-3xl font-normal">Welcome to</p>
            <h2 className="text-6xl font-bold">
              My <span className="text-cyan-500">Website.</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
