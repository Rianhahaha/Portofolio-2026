import Image from "next/image";
import PagesLayout from "../../component/PagesLayout";
import MainButton from "../../component/button/MainButton";
import { Search } from "lucide-react";
import ProjectCard from "../../component/card/ProjectCard";
import { PROJECT_DATA } from "@/data/ProjectData";

export default function Projects() {
  const defaultSort = [...PROJECT_DATA].sort((a, b) => b.year - a.year);
  // console.log(defaultSort);

  return (
    <PagesLayout>
      <section className="w-full min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto w-full my-[10rem]">
          {/* title */}
          <div className="flex gap-5 items-center">
            <h1 className="text-[5rem] font-bold mb-5">
              My <span className="text-cyan-500">Projects.</span>
            </h1>
            {/* <div className="grow flex gap-2">
              <input className="relative group overflow-hidden px-3 py-2 w-full gap-5 bg-white/5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-xl flex flex-col justify-start items-center" type="text" />
              <MainButton
                type="link"
                href="#"
                noblank
                icon={Search}
              />
            </div> */}
          </div>
          {/* Projects List */}
          <div className="grid grid-cols-3 gap-10">
            {/* Project Card */}
            {defaultSort.map((data, i) => (
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
        </div>
      </section>

    </PagesLayout>
  );
}
