"use client";

import {
  BriefcaseBusinessIcon,
  Building2Icon,
  ChevronDown,
  Code2Icon,
  Filter,
  LucidePackageSearch,
} from "lucide-react";
import { useState } from "react";
import ProjectCard from "@/component/card/ProjectCard";
import PagesLayout from "@/component/PagesLayout";
import type { Affiliation, ProjectItem, ProjectType, TechnologyItem } from "@/types";
import DropdownButton from "@/component/project/DropdownButton";

type ProjectsClientProps = {
  projects: ProjectItem[];
  technologies: TechnologyItem[];
  projectTypes: ProjectType[];
  affiliation: Affiliation[];

};

export default function ProjectsClient({ projects, technologies, projectTypes, affiliation }: ProjectsClientProps) {
  const defaultSort = [...projects].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
    return dateB - dateA;
  });
  const [techOpen, setTechOpen] = useState(false);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [affiliationOpen, setaffiliationOpen] = useState(false);

  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState<string[]>([]);
  const [selectedAffiliation, setSelectedAffiliation] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const techSort = [...technologies].sort((a, b) =>
    (a.title || "").localeCompare(b.title || ""),
  );
  const projectTypeSort = [...projectTypes].sort((a, b) =>
    (a.name || "").localeCompare(b.name || ""),
  );
  const affiliationSort = [...affiliation].sort((a, b) =>
    (a.title || "").localeCompare(b.title || ""),
  );

  function toggleTechOpen() {
    setTechOpen(!techOpen);
  }

  function toggleProjectTypeOpen() {
    setProjectTypeOpen(!projectTypeOpen);
  }

  function toggleAffiliationOpen() {
    setaffiliationOpen(!affiliationOpen);
  }

  // console.log(projects)

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
  function handleFilterAffiliation(affiliationId: string) {
    setLoading(true);
    setTimeout(() => {
      setSelectedAffiliation((prev) =>
        prev.includes(affiliationId)
          ? prev.filter((id) => id !== affiliationId)
          : [...prev, affiliationId],
      );
      setLoading(false);
    }, 500);
  }

  const filteredProjects = defaultSort.filter((project) => {
    const hasTechFilter = selectedTech.length > 0;
    const hasProjectTypeFilter = selectedProjectType.length > 0;
    const hasAffiliationFilter = selectedAffiliation.length > 0;

    if (!hasTechFilter && !hasProjectTypeFilter && !hasAffiliationFilter) {
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

    const hasAffiliation =
      !hasAffiliationFilter ||
      selectedAffiliation.every((affiliationId) =>
        project.affiliations?.includes(affiliationId),
      );

    return hasTech && hasProjectType && hasAffiliation;
  });

  return (
    <PagesLayout>
      <section className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto w-full mt-5 md:mt-[10rem] mb-[10rem] px-5">
          <div className="flex flex-col gap-1 items-center mb-5">
            <h1 className="page-title mb-0!">
              My <span className="text-cyan-500">Projects.</span>
            </h1>
            <p className="w-full">I will <span className="text-cyan-500">Always </span>updating my new projects here! So stay tune for more!</p>
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
                  className={`p-2 rounded-2xl ${techOpen || projectTypeOpen || affiliationOpen
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
                <DropdownButton
                  isOpen={affiliationOpen}
                  toggleOpen={toggleAffiliationOpen}
                  data={affiliationSort}
                  selected={selectedAffiliation}
                  filter={handleFilterAffiliation}
                  icon={Building2Icon}
                  label="Affiliation"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {filteredProjects.map((data) => (
                    <ProjectCard
                      key={data.id}
                      project={data}
                      technologies={technologies}
                      affiliationList={affiliation}
                      techIdsActive={selectedTech}
                      typeActive={selectedProjectType}
                      affiliationActive={selectedAffiliation}
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
