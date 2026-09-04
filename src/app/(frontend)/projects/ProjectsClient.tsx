"use client";

import {
  BriefcaseBusinessIcon,
  ChevronDown,
  Code2Icon,
  Filter,
  LucidePackageSearch,
} from "lucide-react";
import { useState } from "react";
import ProjectCard from "@/component/card/ProjectCard";
import PagesLayout from "@/component/PagesLayout";
import type { ProjectItem, ProjectType, TechnologyItem } from "@/types";
import DropdownButton from "@/component/project/DropdownButton";

type ProjectsClientProps = {
  projects: ProjectItem[];
  technologies: TechnologyItem[];
  projectTypes: ProjectType[];
};

export default function ProjectsClient({ projects, technologies, projectTypes }: ProjectsClientProps) {
  const defaultSort = [...projects].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
    return dateB - dateA;
  });
  const [techOpen, setTechOpen] = useState(false);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const techSort = [...technologies].sort((a, b) =>
    (a.title || "").localeCompare(b.title || ""),
  );
  const projectTypeSort = [...projectTypes].sort((a, b) =>
    (a.name || "").localeCompare(b.name || ""),
  );

  function toggleTechOpen() {
    setTechOpen(!techOpen);
  }

  function toggleProjectTypeOpen() {
    setProjectTypeOpen(!projectTypeOpen);
  }

  function handleFilterTech(techId: string) {
    setLoading(true);
    setTimeout(() => {
      setSelectedTech((prev) =>
        prev.includes(techId)
          ? prev.filter((id) => id !== techId)
          : [...prev, techId],
      );
      setLoading(false);
    }, 500);
  }

  function handleFilterProjectType(projectTypeId: string) {
    setLoading(true);
    setTimeout(() => {
      setSelectedProjectType((prev) =>
        prev.includes(projectTypeId)
          ? prev.filter((id) => id !== projectTypeId)
          : [...prev, projectTypeId],
      );
      setLoading(false);
    }, 500);
  }

  const filteredProjects = defaultSort.filter((project) => {
    const hasTechFilter = selectedTech.length > 0;
    const hasProjectTypeFilter = selectedProjectType.length > 0;

    if (!hasTechFilter && !hasProjectTypeFilter) {
      return true;
    }

    const hasTech =
      !hasTechFilter ||
      selectedTech.every((techId) => project.techIds?.includes(techId));
    const hasProjectType =
      !hasProjectTypeFilter ||
      selectedProjectType.every((projectTypeId) =>
        project.type?.includes(projectTypeId),
      );

    return hasTech && hasProjectType;
  });

  return (
    <PagesLayout>
      <section className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto w-full mt-5 md:mt-[10rem] mb-[10rem] px-5">
          <div className="flex gap-5 items-center">
            <h1 className="page-title">
              My <span className="text-cyan-500">Projects.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 relative">
            <div className="w-full lg:w-[25rem] sticky top-[20px] md:top-[130px] h-fit min-h-[5rem] lg:min-h-[22rem] bg-gradient-to-tr from-white/10 to-transparent border border-teal-500/20 global-transition backdrop-blur-xl md:backdrop-blur-sm flex flex-row lg:flex-col justify-start lg:items-center rounded-xl p-5 gap-2 sm:gap-10 lg:gap-0 z-50 mb-5 md:mb-0">
              <div className="absolute left-1/2 -translate-1/2 top-[0rem] bg-gradient-to-tr from-teal-500 to-sky-500 rounded-full block sm:hidden">
                <div
                  className={`p-2 rounded-2xl ${techOpen || projectTypeOpen
                    ? "drop-shadow-[0_0px_3px_rgb(255_255_255)] opacity-100 -translate-y-1"
                    : "opacity-80"
                    } global-transition`}
                >
                  <Filter />
                </div>
              </div>

              <div className="hidden sm:flex gap-1 w-fit lg:w-full items-center font-bold">
                <div
                  className={`p-2 rounded-2xl ${techOpen || projectTypeOpen
                    ? "drop-shadow-[0_0px_4px_rgb(255_255_255)] opacity-100 -translate-y-1"
                    : "opacity-30"
                    } global-transition`}
                >
                  <Filter />
                </div>
                <span>Filters</span>
              </div>

              <div className="flex flex-row lg:flex-col w-full h-fit items-center gap-2">
                <DropdownButton
                  isOpen={techOpen}
                  toggleOpen={toggleTechOpen}
                  data={techSort}
                  selected={selectedTech}
                  filter={handleFilterTech}
                  icon={Code2Icon}
                  label="Techs"
                />
                <DropdownButton
                  isOpen={projectTypeOpen}
                  toggleOpen={toggleProjectTypeOpen}
                  data={projectTypeSort}
                  selected={selectedProjectType}
                  filter={handleFilterProjectType}
                  icon={BriefcaseBusinessIcon}
                  label="Project Type"
                />
              </div>
            </div>

            <div className="w-full">
              {loading ? (
                <div className="w-full gap-2 items-center flex justify-center text-center py-20 text-white">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-t-transparent" />
                  <div className="text-sm animate-pulse">
                    Loading Content...
                  </div>
                </div>
              ) : filteredProjects.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center text-center py-20 text-white/50">
                  <LucidePackageSearch className="w-[10rem] h-[10rem] text-white animate-bounce opacity-50" />
                  <span>No projects found with the selected filters.</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {filteredProjects.map((data) => (
                    <ProjectCard
                      desc={data.desc}
                      id={data.id}
                      img={data.img}
                      key={data.id}
                      techIds={data.techIds}
                      techIdsActive={selectedTech}
                      title={data.title}
                      subtitle={data.subtitle}
                      type={data.type}
                      typeActive={selectedProjectType}
                      startDate={data.startDate}
                      endDate={data.endDate}
                      dateType={data.dateType}
                      technologies={technologies}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
}
