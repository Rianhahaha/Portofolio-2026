"use client";
import {
  ArrowBigLeftDashIcon,
  ArrowBigRightDash,
  Maximize,
  X,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Tambahin ini buat panah modal
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "@/component/button/MainButton";
import TechnologyBadge from "@/component/skills/TechnologyBadge";
import { OTHER_SKILLS_DATA, SKILLS_DATA } from "@/data/SkillsData";
import type { Affiliation, ProjectItem, TechnologyItem } from "@/types";
import Image from "next/image";
import { RichText } from '@payloadcms/richtext-lexical/react';
import { formatProjectDate } from "@/utils/formatProjectDate";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Wajib import ini
import AnimatedModal from "@/component/modal/AnimatedModal";

interface ProjectDetailClientProps {
  project: ProjectItem;
  technologies: TechnologyItem[];
  affiliationList?: Affiliation[];
}

export default function ProjectDetailClient({
  project,
  technologies,
  affiliationList = [],
}: ProjectDetailClientProps) {
  // State untuk Modal & Index Gambar
  const [imageModal, setImageModal] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // State baru untuk loading gambar
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Reset loading state setiap modal dibuka
  useEffect(() => {
    if (imageModal) setIsImageLoading(true);
  }, [imageModal]);
  const ALL_RESOURCES = technologies?.length
    ? [...technologies]
    : [...SKILLS_DATA, ...OTHER_SKILLS_DATA];

  const preview = project?.previewImg || [];
  // Ekstrak array yang valid sekali aja di atas biar rapi
  const validPreviews = preview.filter((data) => data?.card || data?.original);

  const projectTechs = project.techIds
    .map((techId: string) => ALL_RESOURCES.find((technology) => technology.id === techId))
    .filter(Boolean);

  // Lock body scroll pas modal kebuka
  useEffect(() => {
    if (imageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imageModal]);

  return (
    <>
      <section className="w-full min-h-screen overflow-x-clip pb-10">
        {/* Navigasi Balik */}
        <div className="size-fit fixed top-5 left-5 z-9999">
          <MainButton type="link" href="/projects" noblank icon={ArrowBigLeftDashIcon} />
        </div>

        {/* Hero Section */}
        <div className="w-full h-[100svh] relative">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
          <div className="absolute z-[100] bottom-5 w-full max-w-7xl h-1/2 content-end left-1/2 -translate-x-1/2  grid grid-cols-1 md:grid-cols-2 px-5">
            <div className="hidden md:block"></div>
            <div className="flex flex-col z-50">
              {project.affiliations && project.affiliations.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {project.affiliations.map((affiliationId) => (
                    <span key={affiliationId} className="text-sm font-semibold text-cyan-500 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1">
                      {affiliationList.find((a) => a.id === affiliationId)?.title || affiliationId}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-[4.5rem] font-bold leading-tight">
                {project.title}<span className="text-cyan-500">.</span>
              </h1>
              {project.subtitle && (
                <div className="mb-5 inline-block">
                  <p className="text-xl font-semibold text-white ">{project.subtitle}<span className="text-cyan-500">.</span></p>
                </div>
              )}
              <p className="text-justify text-slate-300">{project.desc}</p>
              <div className="text-md font-bold mt-4 text-cyan-500">
                {formatProjectDate(project)}
              </div>
              {project.link && (
                <div className="flex justify-end mt-4">
                  <MainButton type="link" href={project.link} text="Take a Peek!" icon={ArrowBigRightDash} />
                </div>
              )}
            </div>
          </div>

          {/* Main Background Cover */}
          {!project.img?.original ? (
            <div className="size-full relative overflow-hidden bg-gradient-to-br from-transparent to-teal-900 flex items-start justify-start z-50">
              {/* ... (isi Tech Fallback cover lu tetap sama) ... */}
            </div>
          ) : (
            <>
              <div className="absolute size-full bg-gradient-to-tl from-black via-30% via-black/80 to-transparent z-[5]" />
              <Image alt={project.title} className="size-full object-cover object-center" fill sizes="100vw" src={project?.img?.original} unoptimized />
            </>
          )}
        </div>

        {/* Case & Tech Section */}
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
            <div className="text-justify text-lg col-span-3">
              <h1 className="text-[3rem] font-bold relative mb-5">
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
                Case<span className="text-cyan-500">.</span>
              </h1>
              <div className="prose prose-invert max-w-none">
                {project.case && typeof project.case === 'object' ? (
                  <RichText data={project.case} />
                ) : (
                  <p>No case study available.</p>
                )}
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-[3rem] font-bold relative mb-5">
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-teal-500 via-30% via-teal-500/30 to-transparent z-50 bottom-0" />
                Tech<span className="text-cyan-500">.</span>
              </h1>
              <div className="w-full flex flex-wrap justify-start items-start gap-3 self-start sticky top-5">
                {projectTechs.map((tech) => (
                  <TechnologyBadge key={tech?.id || tech?.title} id={tech?.id} img={tech?.img} title={tech?.title} />
                ))}
              </div>
            </div>
          </div>

          {/* Swiper Preview Grid */}
          {validPreviews.length > 0 && (
            <div className="py-10">
              <h2 className="text-[5rem] font-bold text-center mb-10">
                Preview<span className="text-cyan-500">.</span>
              </h2>
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                className="w-full project-detail pb-[35px]!"
              >
                {validPreviews.map((data, index) => {
                  const imgSrc = data?.card || data?.original;

                  return (
                    <SwiperSlide key={index} className="relative overflow-hidden rounded-2xl">
                      <button
                        className="group opacity-0 global-transition hover:opacity-100 absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-3 flex justify-end cursor-pointer"
                        onClick={() => {
                          setActiveSlideIndex(index); // Bind index gambar yg diklik
                          setImageModal(true);        // Buka modal
                        }}
                      >
                        <Maximize className="opacity-70 hover:opacity-100" />
                      </button>

                      <Image
                        height={500}
                        width={500}
                        src={imgSrc || ""}
                        alt={`${project.title} preview ${index + 1}`}
                        className="aspect-video size-full object-cover object-center"
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

      {/* MODAL FULLSCREEN DENGAN ANIMASI */}
      <AnimatePresence>
        <AnimatedModal isOpen={imageModal}>

          <div className="max-w-5xl w-full mx-auto h-auto">
            <div className="relative">
              <div className="absolute right-0 -top-15 xl:-right-15 xl:top-0">
                <MainButton
                  type="button"
                  onClick={() => setImageModal(false)}
                  className="size-fit p-2!"
                  noblank
                  icon={X}
                />

              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-cyan-500 relative min-h-[30vh] flex items-center justify-center bg-black/80 global-transition-slower">

                {/* Komponen Loading / Spinner */}
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-teal-500 border-t-transparent" />
                  </div>
                )}

                <img
                  className={`size-full object-contain transition-all duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  src={preview[activeSlideIndex]?.original}
                  alt=""
                  onLoad={() => setIsImageLoading(false)}
                />
              </div>

            </div>
          </div>
        </AnimatedModal>

      </AnimatePresence>
    </>
  );
}