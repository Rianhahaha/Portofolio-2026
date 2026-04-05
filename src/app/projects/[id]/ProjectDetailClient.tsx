'use client'
import MainButton from "@/component/button/MainButton";
import Skills from "@/component/skiils/Skills";
import { SKILLS_DATA, OTHER_SKILLS_DATA } from "@/data/SkillsData";
import { ArrowBigLeftDashIcon, ArrowBigRightDash, ClipboardList, Cog } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECT_DATA } from "@/data/ProjectData";
import { ProjectItem } from "@/types";

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

interface ProjectDetailClientProps {
    project: ProjectItem;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    // Gabungkan data skill di sini

    const ALL_RESOURCES = [...SKILLS_DATA, ...OTHER_SKILLS_DATA];

    const preview = project.previewImg || [];
    const projectTechs = project.techIds
        .map((techId: string) => ALL_RESOURCES.find(skill => skill.id === techId))
        .filter(Boolean);

    return (
        <section className="w-full min-h-screen overflow-hidden pb-10 ">
            {/* Navigasi Balik */}
            <div className="size-fit fixed top-5 left-5 z-50">
                <MainButton
                    type="link"
                    href="/projects"
                    noblank
                    icon={ArrowBigLeftDashIcon}
                />
            </div>

            {/* Hero Section */}
            <div className='w-full h-[100dvh] relative'>
                <div className="absolute bottom-5 w-full max-w-7xl h-1/2 content-end left-1/2 -translate-x-1/2 z-10 grid grid-cols-1 md:grid-cols-2 px-5">
                    <div className="hidden md:block"></div>
                    <div className='flex flex-col'>
                        <h1 className='text-[4.5rem] font-bold leading-tight'>
                            {project.title}<span className="text-cyan-500">.</span>
                        </h1>
                        <p className='text-justify text-slate-300'>{project.desc}</p>
                        <div className='text-xl font-bold mt-4 text-cyan-500'>{project.year}</div>
                        <div className='flex justify-end mt-4'>
                            <MainButton
                                type="link"
                                href={project.link}
                                text="Take a Peek!"
                                icon={ArrowBigRightDash}
                            />
                        </div>
                    </div>
                </div>
                {project.img === '' ? (
                    <div className="size-full relative overflow-hidden bg-gradient-to-br from-transparent to-teal-900 flex items-start justify-start">
                        <div className=" pl-20 p-10 flex flex-wrap-re w-full justify-end items-center rotate-[-15deg] translate-x-[-90px] translate-y-[-70px]">
                            <div className="absolute left-0 top-0 w-[60dvw] opacity-60 flex flex-wrap gap-2">

                                {projectTechs.slice(0, 3).map((tech, index) => (
                                    <Image className={` rounded-2xl size-[25dvw]  
                            nth-[1]:left-[10px] 
                            nth-[1]:top-[5px]
                            nth-[2]:left-[60px]
                            nth-[2]:top-[40px]
                            nth-[3]:left-[10px]
                            nth-[3]:top-[80px]
                            
                            `}
                                        key={index} src={tech?.img || ''} alt={tech?.title || ''} width={500} height={500} />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='absolute size-full bg-gradient-to-tl from-black via-30% via-black/80 to-transparent z-0' />
                        <img alt={project.title} className='size-full object-cover object-center border-b-2 border-b-teal-500' src={project.img} />
                    </>
                )}


            </div>

            {/* Case & Tech Section */}
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
                    <p className='text-justify text-lg'>{project.case}</p>
                    <h2 className="text-[5rem] font-bold relative text-right">
                        <ClipboardList className="absolute size-60 opacity-5 right-[150px] top-1/2 -translate-y-1/2" />
                        Case <span className="text-cyan-500">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
                    <h2 className="text-[5rem] font-bold relative">
                        <Cog className="absolute size-60 opacity-5 left-[150px] top-1/2 -translate-y-1/2" />
                        Tech <span className="text-cyan-500">.</span>
                    </h2>
                    <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                        {projectTechs.map((tech, index) => (
                            <Skills key={index} id={tech?.id} img={tech?.img} title={tech?.title} />
                        ))}
                    </div>
                </div>

                {/* Swiper Preview */}
                {preview.length === 0 ? (
                    <>
                        <div className="py-10 h-[100dvh] flex items-center justify-center">
                            <h2 className="text-[1rem] font-bold text-center mb-10">
                                Private Project. No Preview, Sorry :) <span className="text-cyan-500">.</span>
                            </h2>
                        </div>
                    </>
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
                            className=" w-[80%]  "
                        >
                            {preview.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <img height={500} width={500} src={data} alt={`Preview ${i}`} className="aspect-video size-full object-center object-cover rounded-2xl border border-white/10" />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                )}

            </div>
        </section>
    );
}