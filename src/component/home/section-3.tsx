'use client'
import { OTHER_SKILLS_DATA, SKILLS_DATA } from "@/data/SkillsData";
import { PROJECT_DATA } from "@/data/ProjectData";

import Skills from "../skiils/Skills";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import ProjectCard from "../card/ProjectCard";
import MainButton from "../button/MainButton";
import { Cog } from "lucide-react";
export default function Section3() {
  return (
    <section className="max-w-7xl mx-auto w-full h-full min-h-[50dvh] flex flex-col justify-center items-center overflow-hidden">
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
        // mousewheel={true}
        autoHeight={true}
        loop={true}
        pagination={true}
        modules={[Pagination, Mousewheel]}
        className="w-full h-[20rem] overflow-hidden"
      >
        <SwiperSlide className="w-full-full relative">
          {/* <div className="absolute left-0 top-[35%] translate-y-1/2  opacity-30 animate-spina text-xl  -rotate-90 tracking-[10px]">
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
          {/* <div className="absolute left-0 top-[35%] translate-y-1/2  opacity-30 animate-spina text-xl  -rotate-90 tracking-[10px]">
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
      <div className="w-full my-20">
        <h1 className="text-3xl font-bold text-center mb-20">
          Recent <span className="text-cyan-500">Projects.</span>
        </h1>
        <Swiper

          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: false,


          }}
          // navigation={true}
          modules={[Pagination, Mousewheel]}

          className="custom w-full"
        >
          {PROJECT_DATA.map((data, i) => (
            <SwiperSlide className="!w-[20rem] h-full">
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
