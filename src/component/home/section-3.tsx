'use client'
import { OTHER_SKILLS_DATA, SKILLS_DATA } from "@/data/SkillsData";
import { PROJECT_DATA } from "@/data/ProjectData";

import Skills from "../skiils/Skills";
import { Swiper, SwiperSlide, useSwiper, type SwiperRef } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import ProjectCard from "../card/ProjectCard";
import MainButton from "../button/MainButton";
import { ChevronLeft, ChevronRight, Code2Icon, Cog } from "lucide-react";
import { useRef } from "react";
export default function Section3() {
  // const swiper = useSwiper();
  const previewProject = [...PROJECT_DATA].sort((a, b) => b.year - a.year).slice(0, 5);

  // const previewProject = PROJECT_DATA.slice(0, 5);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="max-w-7xl mx-auto w-full h-full min-h-[50dvh] flex flex-col justify-center items-center">
      <div className="my-10 text-center">
        <h1 className="text-3xl font-bold">
          My <span className="text-cyan-500">Skills.</span>
        </h1>
      </div>
      <div className="mb-10 opacity-50">
        I'm Experienced on using
      </div>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoHeight={true}
        loop={true}
        // navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, Navigation]}
        className="w-full h-[20rem] overflow-hidden skill-carousel"
      >
        <SwiperSlide className="w-full-full relative">
          {/* <div className="absolute  right-[20px] top-0  opacity-50 text-cyan-500 animate-spina text-xl  [writing-mode:vertical-rl] rotate-180 tracking-[10px] ">
            PROGRAMMING
          </div> */}
          <div className={`max-w-4xl mx-auto w-full flex justify-center items-center flex-wrap gap-5`}>
            {SKILLS_DATA.map((skill, index) => (
              <div key={index} className={`shrink`}>
                <Skills id={skill.id} img={skill.img} title={skill.title} />
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full-full relative !flex items-center">
          {/* <div className="absolute  right-[20px] top-1/2 -translate-y-1/2  opacity-50 text-cyan-500 animate-spina text-xl  [writing-mode:vertical-rl] rotate-180 tracking-[10px]">
            OTHER
          </div> */}
          <div className={`max-w-4xl mx-auto w-full flex justify-center items-center flex-wrap gap-5`}>
            {OTHER_SKILLS_DATA.map((skill, index) => (
              <div key={index} className={`shrink`}>
                <Skills id={skill.id} img={skill.img} title={skill.title} />
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full  relative ">
        <div className="size-full overflow-hidden py-20">

          <h1 className="text-3xl font-bold text-center mb-20">
            Recent <span className="text-cyan-500">Projects.</span>
          </h1>
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            // ref={swiper}
            direction="horizontal"
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}

            className="custom w-full relative"
          >
            {/* <Cog /> */}

            {previewProject.map((data, i) => (
              <SwiperSlide className="!w-[23rem] h-full">
                <ProjectCard key={i}
                  id={data.id}
                  title={data.title}
                  desc={data.desc}
                  type={data.type}
                  year={data.year}
                  img={data.img}
                  techIds={data.techIds}
                />
              </SwiperSlide>
            ))}

          </Swiper>
          <MainButton icon={ChevronLeft} onClick={() => swiperRef.current?.slidePrev()} className="absolute left-[-60px] top-[24rem] z-[9999] p-3! cursor-pointer hover:-translate-xa-2" />
          <MainButton icon={ChevronRight} onClick={() => swiperRef.current?.slideNext()} className="absolute right-[-60px] top-[24rem] z-[9999] p-3! cursor-pointer hover:translate-xa-2" />


        </div>
        <div className="flex w-full justify-end">

            <MainButton type="link" noblank icon={Code2Icon} text="All Projects" href="/projects" />


        </div>
      </div>
      <div className="text-center my-20 flex justify-center flex-col">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10 ">

            Get in <span className="text-cyan-500">Touch.</span>
          </h1>
          <div className="mb-2">
            Have a project in mind or just want to collaborate?
          </div>
          <div className="mb-10 ">
            Let’s talk about how we can turn ideas into clean, functional, and visually solid work.
          </div>
          <div className="flex justify-center">

            <MainButton
              type="link"
              href={`/contact`}
              text="Contact Me"
              noblank
            />
          </div>
        </div>

      </div>



    </section>
  );
}
