import MainButton from '@/component/button/MainButton';
import PagesLayout from '@/component/PagesLayout'
import Skills from '@/component/skiils/Skills';
import { ArrowBigLeftDashIcon, ArrowBigRightDash } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
const skills = [
    {
        title: "JavaScript",
        img: "/skills/JavaScript.png",
    },
    {
        title: "TypeScript",
        img: "/skills/TypeScript.png",
    },
    {
        title: "CSS",
        img: "/skills/CSS.png",
    },
    {
        title: "Tailwind CSS",
        img: "/skills/Tailwind_CSS.png",
    },
    {
        title: "Bootstrap",
        img: "/skills/Bootstrap.png",
    },
    {
        title: "React JS",
        img: "/skills/React_JS.png",
    },
    {
        title: "Next JS",
        img: "/skills/Next_JS.png",
    },

];
export default function page() {

    return (

        <section className="w-full min-h-screen overflow-hidden ">
            <div className="size-fit fixed top-5 left-5 z-50">
                <MainButton
                    type="link"
                    href="/projects"
                    noblank
                    icon={ArrowBigLeftDashIcon}
                />
            </div>
            <div className='w-full h-[100dvh] relative'>
                <div className="absolute bottom-5 w-full max-w-7xl h-1/2 content-center left-1/2 -translate-x-1/2 z-10 grid grid-cols-2">
                    <div>

                    </div>
                    <div className='flex flex-col'>
                        <div className='text-[4.5rem] font-bold '> Ala Indonesia <span className="text-cyan-500">.</span></div>
                        <div className='text-justify'>
                            Designed and developed a front-end of web-based assessment model instrument system for early childhood using CSS framework which used by 500 users for S3 dissertation. Responsible for over 30 components of assets and illustrations which is used on the website. Responsible for UI/UX design and implemented to the website with CSS which increasing 40% of user interest.

                        </div>
                        <div className='text-1xl font-bold mt-4 text-cyan-500'> 2022</div>
                        <div className='flex justify-end'>
                            <MainButton
                                type="link"
                                href="#"
                                text="Take a Peek!"
                                noblank
                                icon={ArrowBigRightDash}
                            />
                        </div>

                    </div>
                </div>
                <div className='absolute size-full bg-gradient-to-tl from-[#000000] via-30% via-[#040a0a]/80 to-transparent' />

                <div className='absolute w-full bottom-0 h-[100%] bg-gradient-to-l from-[#000000] via-[#040a0a]/50 to-transparent' />
                {/* bottom line */}
                <div className='absolute w-full bottom-0 h-[2px] bg-gradient-to-r from-teal-300 to-40% to-transparent' />
                <Image alt='' width={500} height={500} className='size-full object-cover object-center border-b-2 border-b-teal-500' src='/projects/ala.jpg' />
            </div>
            <div className=" relative">
                <div className='absolute w-full bottom-0 h-full bg-gradient-to-bl from-[#000000] to-transparent' />
                <div className="max-w-7xl mx-auto h-full pt-[3rem] relative">
                    <div className="grid grid-cols-2 gap-10 text-center py-[10rem]">
                        <div>
                            <div className='text-justify'>
                                This project involves the Doctoral degree (S3) student of UNY. My team and I were tasked with creating a website capable of literacy assesment for early childhood. In this project, I served as the Front End Developer and Illustrator. Responsible for designing the website interface, making the assets and illustrations for the website.
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[5rem] font-bold mb-5">
                                Case <span className="text-cyan-500">.</span>
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 text-center py-[10rem]">
                        <div>
                            <h1 className="text-[5rem] font-bold mb-5">
                                Tech <span className="text-cyan-500">.</span>
                            </h1>

                        </div>
                        <div className='w-full flex justify-center items-center flex-wrap gap-3'>
                            {skills.map((skill, index) => (
                                <div key={index} className={`shrink`}>
                                    <Skills id='' img={skill.img} title={skill.title} />
                                </div>
                            ))}
                        </div>
                    </div>
{/* 
                    <div className="w-full">
                        <h1 className="text-[5rem] font-bold  text-center">
                            Preview <span className="text-cyan-500">.</span>
                        </h1>
                    </div> */}
                </div>

            </div>
        </section>
    )
}
