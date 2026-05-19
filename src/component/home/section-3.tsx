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
    <section className="max-w-7xl mx-auto w-full h-full min-h-[50dvh]  px-5 lg:px-0 py-20  flex flex-col justify-center items-center">
      <div className="my-10 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <h1 className="text-3xl font-bold">
          My <span className="text-cyan-500">Skills.</span>
        </h1>
      </div>
      <div className="mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        I'm Experienced on using
      </div>
      <Swiper
        breakpoints={{
          768: {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: { clickable: true },



          }
        }}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={30}
        // mousewheel={true}
        // autoHeight={true}
        // loop={true}
        // navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, Navigation]}
        className="w-full h-[30rem]! skill-carousel"
        id="skills"
      >
        <SwiperSlide className="w-full h-full flex! flex-col justify-center relative overflow-y-auto pb-5" >
          {/* <div className="absolute  right-[20px] top-0  opacity-50 text-cyan-500 animate-spina text-xl  [writing-mode:vertical-rl] rotate-180 tracking-[10px] ">
            PROGRAMMING
          </div> */}
          <div className={`max-w-4xl mx-auto w-full flex justify-center items-center flex-wrap gap-5`} data-aos-anchor='#skills' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            {SKILLS_DATA.map((skill, index) => (
              <div key={index} className={`shrink`}>
                <Skills id={skill.id} img={skill.img} title={skill.title} />
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex! flex-col justify-center relative">
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
      <div className="w-full relative px-5" id="recent-project">
        <div className="size-full overflow-hidden py-20" data-aos-anchor='#recent-project' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

          <h1 className="text-3xl font-bold text-center mb-20">
            Recent <span className="text-cyan-500">Projects.</span>
          </h1>
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            // ref={swiper}
            direction="horizontal"
            slidesPerView={2}
            spaceBetween={30}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // autoHeight={true}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}

            breakpoints={{
              /* Matches Tailwind 'sm' breakpoint (640px and up). */
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              /* Matches Tailwind 'md' breakpoint (768px and up). */
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              /* Matches Tailwind 'lg' breakpoint (1024px and up). */
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              /* Matches Tailwind 'xl' breakpoint (1280px and up). */
              1280: {
                slidesPerView: 4,
                spaceBetween: 30, // You may increase this if the container allows.
              },
            }}
            className="custom w-full relative "

          >
            {/* <Cog /> */}

            {previewProject.map((data, i) => (
              <SwiperSlide className="h-full flex! flex-col min-h-[27rem]">
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
          <MainButton icon={ChevronLeft} onClick={() => swiperRef.current?.slidePrev()} className="absolute left-[0%] - bottom-[300px] z-[9] rounded-lg!  p-1! cursor-pointer hover:-translate-x-1" />
          <MainButton icon={ChevronRight} onClick={() => swiperRef.current?.slideNext()} className="absolute right-[0%]  bottom-[300px] z-[9]  rounded-lg! p-1! cursor-pointer hover:translate-x-1" />


        </div>
        <div className="flex w-full justify-center" data-aos-anchor='#recent-project' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">

          <MainButton type="link" noblank icon={Code2Icon} text="All Projects" href="/projects" />


        </div>
      </div>
      <div className="text-center my-20 flex justify-center flex-col" id="touch">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10 " data-aos-anchor='#touch' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">

            Get in <span className="text-cyan-500">Touch.</span>
          </h1>
          <div className="mb-2" data-aos-anchor='#touch' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Have a project in mind or just want to collaborate?
          </div>
          <div className="mb-10 " data-aos-anchor='#touch' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Let’s talk about how we can turn ideas into clean, functional, and visually solid work.
          </div>
          <div className="flex justify-center" data-aos-anchor='#touch' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">

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
