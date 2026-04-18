import Image from "next/image";
import MainButton from "../button/MainButton";
import { FileDownIcon } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";

export default function Section1() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // once: true,
    });
  }, [])
  return (
    <section className="w-full h-[calc(100vh-100px)] lg:h-[630px] flex items-bottom justify-center overflow-hidden global-transition ">
      <div className="max-w-7xl w-full flex flex-col lg:grid grid-cols-3 lg:items-end justify-end relative px-5">

        <div className="w-[60%] lg:w-full lg:text-right mb-[5rem]  relative z-50 lg:z-10 " >
          <div className="absolute left-[-20px] lg:left-auto lg:right-[-30px] w-[1px] h-full bg-cyan-500 hidden lg:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
          <div className="relative overflow-hidden">

            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" className="text-2xl md:text-4xl font-normal">Hi there!</h1>
            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="text-3xl md:text-6xl font-bold">
              <span className="text-cyan-500">Rian</span> Here.
            </h1>
            <p className="text-xs md:text-base" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              Fresh Graduated Information Technology student specializing in graphic design,
              illustration, and{" "}
              <b className="text-cyan-500"> front-end web development.</b> His
              expertise in these areas has been demonstrated through various
              projects completed for diverse clients. He has a keen interest in
              visual design and its implementation, which includes{" "}
              <b className="text-cyan-500"> front-end website development, </b>
              illustration, and graphic design.
            </p>
            <div className="flex justify-end mt-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
              <MainButton
                type="link"
                href="/cv.pdf"
                text="See my CV"
                icon={FileDownIcon}
              />
            </div>
          </div>
        </div>
        <div className="h-[70dvh] md:h-full  w-full flex items-end pt-10  lg:pt-0 lg:relative z-30 absolute bottom-0 right-[-8dvw] md:right-[-30dvw] lg:right-0 pointer-events-none" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="0">
          <Image
            src="/home/portrait-hd.png"
            alt="profile"
            width={800}
            height={800}
            className="object-cover object-bottom-left w-full h-full lg:h-auto brightness-90 contrast-110 "
          />
        </div>
        <div className="w-full mb-[5rem] relative z-50 lg:z-20   lg:-translate-8 lg:-translate-y-14">
          <div className="absolute left-[-20px] w-[1px] h-full bg-cyan-500 hidden lg:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"></div>
          <div className="relative overflow-hidden">

            <h1 className="text-3xl font-normal" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Welcome to</h1>
            <h1 className="text-6xl font-bold" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
              My <span className="text-cyan-500">Website.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
