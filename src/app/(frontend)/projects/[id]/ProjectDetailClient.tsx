"use client";
import {
  ArrowBigLeftDashIcon,
  ArrowBigRightDash,
  ClipboardList,
  Cog,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "@/component/button/MainButton";
import TechnologyBadge from "@/component/skills/TechnologyBadge";
import { OTHER_SKILLS_DATA, SKILLS_DATA } from "@/data/SkillsData";
import type { ProjectItem, TechnologyItem } from "@/types";


import Image from "next/image";

import { RichText } from '@payloadcms/richtext-lexical/react'
import { formatProjectDate } from "@/utils/formatProjectDate";

interface ProjectDetailClientProps {
  project: ProjectItem;
  technologies: TechnologyItem[];
}

export default function ProjectDetailClient({
  project,
  technologies,
}: ProjectDetailClientProps) {
  // Gabungkan data technology di sini
  // Fallback ke static snapshot ketika data Payload tidak tersedia
  const ALL_RESOURCES = technologies?.length
    ? [...technologies]
    : [...SKILLS_DATA, ...OTHER_SKILLS_DATA];

  const preview = project?.previewImg || [];
  const projectTechs = project.techIds
    .map((techId: string) => ALL_RESOURCES.find((technology) => technology.id === techId))
    .filter(Boolean);


  return (
    <section className="w-full min-h-screen overflow-x-clip pb-10 ">
      {/* Navigasi Balik */}
      <div className="size-fit fixed top-5 left-5 z-9999">
        <MainButton
          type="link"
          href="/projects"
          noblank
          icon={ArrowBigLeftDashIcon}
        />
      </div>

      {/* Hero Section */}
      <div className="w-full h-[100svh] relative">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
        <div className="absolute z-[100] bottom-5 w-full max-w-7xl h-1/2 content-end left-1/2 -translate-x-1/2  grid grid-cols-1 md:grid-cols-2 px-5">
          <div className="hidden md:block"></div>
          <div className="flex flex-col z-50">
            <h1 className="text-[4.5rem] font-bold leading-tight">
              {project.title}
              <span className="text-cyan-500">.</span>
            </h1>
            {project.subtitle && (
              <div className="mb-5 inline-block">
                <p className="text-xl font-semibold text-white ">{project.subtitle}<span className="text-cyan-500">.</span>
                </p>
              </div>

            )}
            <p className="text-justify text-slate-300">{project.desc}</p>
            {project.affiliations && project.affiliations.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-sm text-slate-400">In collaboration with</span>
                {project.affiliations.map((affiliation) => (
                  <span
                    key={affiliation.id}
                    className="text-sm font-semibold text-cyan-500 border border-cyan-500/30 rounded-full px-3 py-1"
                  >
                    {affiliation.title}
                  </span>
                ))}
              </div>
            )}
            <div className="text-md font-bold mt-4 text-cyan-500">
              {formatProjectDate(project)}
            </div>
            {project.link && (

              <div className="flex justify-end mt-4">
                <MainButton
                  type="link"
                  href={project.link}
                  text="Take a Peek!"
                  icon={ArrowBigRightDash}
                />
              </div>
            )}
          </div>
        </div>
        {!project.img?.original ? (
          <div className="size-full relative overflow-hidden bg-gradient-to-br from-transparent to-teal-900 flex items-start justify-start z-50">
            <div className=" pl-20 p-10 flex flex-wrap-re w-full justify-end items-center rotate-[-15deg] translate-x-[-90px] translate-y-[-70px]">
              <div className="absolute left-0 top-0 w-[60dvw] opacity-60 flex flex-wrap gap-2">
                {projectTechs.slice(0, 3).map((tech) => (
                  <Image
                    className={` rounded-2xl size-[25dvw]  
                            nth-[1]:left-[10px] 
                            nth-[1]:top-[5px]
                            nth-[2]:left-[60px]
                            nth-[2]:top-[40px]
                            nth-[3]:left-[10px]
                            nth-[3]:top-[80px]
                            
                            `}
                    key={tech?.id || tech?.title}
                    src={tech?.img || ""}
                    alt={tech?.title || ""}
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute size-full bg-gradient-to-tl from-black via-30% via-black/80 to-transparent z-[5]" />
            <Image
              alt={project.title}
              className="size-full object-cover object-center"
              fill
              sizes="100vw"
              src={project?.img?.original}
              unoptimized
            />
          </>
        )}
      </div>

      {/* Case & Tech Section */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">

          <div className="text-justify text-lg col-span-3">
            <h1 className="text-[3rem] font-bold relative mb-5">
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
              Case
            </h1>
            <div className="prose prose-invert max-w-none">
              {project.case && typeof project.case === 'object' ? (
                <RichText data={project.case} />
              ) : (
                <p>No case study available.</p>
              )}
            </div>
          </div>
          {/* <Image className="col-span-2 w-full" src={'/projects/case.svg'} alt="project-case" height={200} width={200} /> */}
          {/* <h2 className="text-[5rem] font-bold relative text-right">
            <ClipboardList className="absolute size-60 opacity-5 right-[150px] top-1/2 -translate-y-1/2" />
            Case <span className="text-cyan-500">.</span>
          </h2> */}
          <div className="col-span-2  ">
            <h1 className="text-[3rem] font-bold relative mb-5">
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
              Tech
            </h1>
            <div className="w-full flex flex-wrap justify-start items-start gap-3 self-start sticky top-5">
              {projectTechs.map((tech) => (
                <TechnologyBadge
                  key={tech?.id || tech?.title}
                  id={tech?.id}
                  img={tech?.img}
                  title={tech?.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
          <h2 className="text-[5rem] font-bold relative">
            <Cog className="absolute size-60 opacity-5 left-[150px] top-1/2 -translate-y-1/2" />
            Tech <span className="text-cyan-500">.</span>
          </h2>
          <div className="w-full flex flex-wrap justify-center items-center gap-3">
            {projectTechs.map((tech) => (
              <TechnologyBadge
                key={tech?.id || tech?.title}
                id={tech?.id}
                img={tech?.img}
                title={tech?.title}
              />
            ))}
          </div>
        </div> */}

        {/* Swiper Preview */}
        {preview.length === 0 ? (
          <div className="py-10 h-[100svh] flex items-center justify-center">
            <h2 className="text-[1rem] font-bold text-center mb-10">
              Private Project. No Preview, Sorry :){" "}
              <span className="text-cyan-500">.</span>
            </h2>
          </div>
        ) : (
          <div className="py-10">
            <h2 className="text-[5rem] font-bold text-center mb-10">
              Preview <span className="text-cyan-500">.</span>
            </h2>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              autoplay={true}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className=" w-full project-detail pb-[35px]! "
            >
              {preview
                .filter((data) => data?.card || data?.original)
                .map((data, index) => {
                  const imgSrc = data?.card || data?.original;

                  return (
                    <SwiperSlide key={index}>
                      <Image
                        height={500}
                        width={500}
                        src={imgSrc}
                        alt={`${project.title} preview ${index + 1}`}
                        className="aspect-video size-full rounded-2xl border border-white/10 object-cover object-center"
                        unoptimized
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
