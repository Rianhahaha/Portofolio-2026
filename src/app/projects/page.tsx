'use client'
import Image from "next/image";
import PagesLayout from "../../component/PagesLayout";
import MainButton from "../../component/button/MainButton";
import { BriefcaseBusinessIcon, ChevronDown, Code2Icon, Filter, Search } from "lucide-react";
import ProjectCard from "../../component/card/ProjectCard";
import { PROJECT_DATA } from "@/data/ProjectData";
import { PROJECT_TYPE } from "@/data/ProjectType";
import { SKILLS_DATA } from "@/data/SkillsData";
import { useState } from "react";
import { SkillItem } from "@/types";

export default function Projects() {
  const defaultSort = [...PROJECT_DATA].sort((a, b) => b.year - a.year);
  const [techOpen, setTechOpen] = useState(false)
  const [projectTypeOpen, setProjectTypeOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [loading, setLoading] = useState(false);

  const techSort = [...SKILLS_DATA].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  const projectTypeSort = [...PROJECT_TYPE].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  function toggleTechOpen() {
    setTechOpen(!techOpen);
  }
  function toggleProjectTypeOpen() {
    setProjectTypeOpen(!projectTypeOpen);
  }

  function handleFilterTech(techId: string) {
    setLoading(true);
    setTimeout(() => {

      setSelectedTech(prev =>
        prev.includes(techId)
          ? prev.filter(id => id !== techId)
          : [...prev, techId]
      )
      setLoading(false);
    }, 500);


  }

  const filteredProjects = defaultSort.filter((project) => {
    if (selectedTech.length === 0) return true; // Tampilkan semua proyek jika tidak ada filter yang dipilih

    return selectedTech.some(tech => project.techIds?.includes(tech as unknown as string))
  })
  // const getTech = SKILLS_DATA.map((tech, id) => tech.id);
  // console.log(getTech)

  return (
    <PagesLayout>
      <section className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto w-full my-[10rem]">
          {/* title */}
          <div className="flex gap-5 items-center">
            <h1 className="text-[5rem] font-bold mb-5">
              My <span className="text-cyan-500">Projects.</span>
            </h1>
            {/* <div className="flex w-full">
                <input type="text" className="flex-1  border border-teal-500/20 px-2 rounded-l-xl" />
                <MainButton
                  className="!p-2 rounded-l-none! cursor-pointer "
                  icon={Search}
                />
              </div> */}
            {/* <div className="grow flex">
              <input placeholder="Search Keyword..." className="relative group overflow-hidden px-6 py-4 w-full bg-white/5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-l-xl flex flex-col justify-start items-center" type="text" />
              <MainButton
                className="!px-3 rounded-l-none! cursor-pointer "

                type="link"
                href="#"
                noblank
                icon={Search}
              />
            </div> */}
          </div>
          {/* Projects List */}
          <div className="flex gap-5 relative">
            <div className="w-[25rem]  sticky top-[130px] h-fit min-h-[22rem] bg-gradient-to-tr from-white/10 to-transparent  border border-teal-500/20 global-transition backdrop-blur-sm flex flex-col justify-start items-center rounded-xl p-5" >

              <div className="flex gap-1 w-full items-center font-bold">
                <div className={`p-2  rounded-2xl ${techOpen || projectTypeOpen ? 'drop-shadow-[0_0px_4px_rgb(255_255_255)] opacity-100 -translate-y-1' : 'opacity-30'} global-transition`}>
                  <Filter />
                </div>
                <span>
                  Filters
                </span>
              </div>

              <div className="flex flex-col w-full">
                <div className="">
                  <div className={` py-1  w-full border-b ${techOpen ? 'opacity-100' : 'opacity-30'} text-white  border-teal-500 flex justify-between items-center hover:opacity-100 global-transition cursor-pointer`} onClick={toggleTechOpen}>
                    <div className="text-sm flex gap-1 items-center ">
                      <div className={`${techOpen ? 'rotate-3 scale-125 text-teal-500' : ''} p-2  rounded-2xl global-transition-slower`}>
                        <Code2Icon />
                      </div>
                      <div className={`${techOpen ? 'text-shadow-[0_0px_4px_rgb(255_255_255)]' : ''}`}>
                        Techs
                      </div>
                    </div>
                    <div className={`p-2 ${techOpen ? 'rotate-180 text-teal-500' : ''} global-transition`}>
                      <ChevronDown />
                    </div>
                  </div>
                  <div className={` ${techOpen ? 'h-[10rem]' : 'h-0'}  overflow-hidden  global-transition-slower`}>
                    <div className={`flex flex-wrap w-full gap-1 h-full overflow-y-auto pt-2 global-transition`}>
                      {techSort.map((tech, idx) => (
                        <button onClick={() => tech.id && handleFilterTech(tech.id)} key={idx} className={`h-fit select-none text-xs px-3 py-2  rounded-full border border-transparent hover:border-teal-500 cursor-pointer global-transition ${selectedTech.includes(tech.id as string) ? 'bg-gradient-to-tr from-teal-500 to-sky-500 ' : 'bg-white/5'}`}>
                          {tech.id}
                        </button>

                      ))}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={` py-1  w-full border-b ${projectTypeOpen ? 'opacity-100' : 'opacity-30'} text-white  border-teal-500 flex justify-between items-center hover:opacity-100 global-transition cursor-pointer`} onClick={toggleProjectTypeOpen}>
                    <div className="text-sm flex gap-1 items-center">
                      <div className={`${projectTypeOpen ? 'rotate-3 scale-125 text-teal-500' : ''} p-2  rounded-2xl global-transition-slower`}>
                        <BriefcaseBusinessIcon />
                      </div>
                      <div className={`${projectTypeOpen ? 'text-shadow-[0_0px_4px_rgb(255_255_255)]' : ''}`}>
                        Project Type
                      </div>
                    </div>
                    <div className={`p-2 ${projectTypeOpen ? 'rotate-180 text-teal-500' : ''} global-transition`}>
                      <ChevronDown />
                    </div>
                  </div>
                  <div className={` ${projectTypeOpen ? 'h-[10rem]' : 'h-0'} max-h-[10rem] overflow-hidden pt-2 global-transition-slower`}>

                    <div className={`flex flex-wrap items-start w-full gap-1 h-fit   global-transition`}>
                      {projectTypeSort.map((type, idx) => (
                        <div key={idx} className="h-fit select-none text-xs px-3 py-2 bg-white/5 rounded-full border border-transparent hover:border-teal-500 cursor-pointer global-transition">
                          {type.id}
                        </div>

                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-full">
              {loading ? (
                <>
                <div className="w-full gap-2 items-center flex justify-center text-center py-20 text-white">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-t-transparent"></div>
                  <div className="text-sm animate-pulse">

                    Loading Content...
                  </div>

                </div>
                </>
              ) : (
                <>

                  {filteredProjects.length === 0 ? (
                    <div className="w-full text-center py-20 text-white/50">
                      No projects found with the selected filters.
                    </div>
                  ) : (

                    <div className={`grid grid-cols-2 gap-10 
                  }`}>
                      {filteredProjects.map((data, i) => (
                        <ProjectCard key={i}
                          id={data.id}
                          title={data.title}
                          desc={data.desc}
                          year={data.year}
                          type={data.type}
                          img={data.img}
                          techIds={data.techIds}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}


            </div>
          </div>

        </div>
      </section>

    </PagesLayout>
  );
}
