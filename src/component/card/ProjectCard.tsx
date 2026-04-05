import React from 'react'
import MainButton from '../button/MainButton'
import Image from 'next/image'
import { ProjectItem } from '@/types'
import { SKILLS_DATA, OTHER_SKILLS_DATA } from "@/data/SkillsData";

export default function ProjectCard({
    id,
    title,
    img,
    desc,
    year,
    techIds,
    type,
}: ProjectItem) {
    const ALL_RESOURCES = [...SKILLS_DATA, ...OTHER_SKILLS_DATA];
    const projectTechs = techIds
        .map((techId: string) => ALL_RESOURCES.find(skill => skill.id === techId))
        .filter(Boolean);

    return (
        <div className="relative group overflow-hidden w-full h-full min-h-[25rem] bg-gradient-to-tr gap-5 from-white/10 to-transparent border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-xl flex flex-col justify-start items-center">
            <div className="flex opacity-0 justify-center items-center group-hover:opacity-100 absolute bg-black/50 backdrop-blur-sm z-10 size-full top-0 left-0 global-transition">
                <div className="translate-y-[15rem] group-hover:translate-y-0 global-transition-slower">
                    <MainButton
                        type="link"
                        href={`/projects/${id}`}
                        // href={`/projects/single`}
                        text="View Project"
                        noblank
                    />
                </div>
            </div>
            {img === '' ? (
                <div className="w-full relative h-[10rem] rounded-xl rounded-b-none overflow-hidden bg-gradient-to-br from-transparent from-10% to-teal-500/40 flex items-start justify-start">
                    <div className=" pl-20 p-10 flex flex-wrap-re w-full justify-end items-center rotate-[-15deg] translate-x-[-90px] translate-y-[-60px]">
                        <div className="w-[250px] opacity-50 flex flex-wrap gap-2">

                            {projectTechs.slice(0, 3).map((tech, index) => (
                                <Image className={` rounded-fulla size-[105px]  
                            nth-[1]:left-[10px] 
                            nth-[1]:top-[5px]
                            nth-[2]:left-[60px]
                            nth-[2]:top-[40px]
                            nth-[3]:left-[10px]
                            nth-[3]:top-[80px]
                            
                            `}
                                    key={index} src={tech?.img || ''} alt={tech?.title || ''} width={50} height={50} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-[10rem] rounded-xl rounded-b-none overflow-hidden">
                    <img width={300} height={300} className='size-full object-cover' alt='' src={img} />
                </div>
            )}
            {/* title */}
            <div className="p-3 grow flex flex-col justify-between">
                <div>
                    <div className="w-full font-bold">
                        <span className="mr-1">

                            {title}
                        </span>
                        <span className='font-light text-xs text-white/50'>

                            - {type?.join(", ")}
                        </span>
                    </div>
                    {/* tech */}
                    <div className="flex w-full gap-2 my-2 flex-wrap">
                        {projectTechs.map((tech, index) => (
                            <div key={index} className="w-fit bg-white/20 border rounded-2xl py-1 px-3 text-[8px]">
                                {tech?.title}
                            </div>
                        ))}

                    </div>
                    {/* desc */}
                    <div className="line-clamp-3 text-[12px]">
                        {desc}
                    </div>
                </div>
                {/* Year Start */}
                <div className="text-[12px] font-bold my-2 text-cyan-500">
                    {year}
                </div>
            </div>
        </div>
    )
}
