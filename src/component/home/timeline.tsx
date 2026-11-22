"use client";

import * as React from "react";
import type { Affiliation, ProjectItem, TechnologyItem } from "@/types";
import { formatEndDate, formatStartDate } from "@/utils/formatProjectDate";
import { useIsTouchDevice } from "@/utils/useMobileClick";

export interface TimelineProps {
  projects: ProjectItem[];
  affiliationList?: Affiliation[];
  technologies?: TechnologyItem[];
}

export function Timeline({
  projects,
  affiliationList = [],
  technologies = [],
}: TimelineProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const isTouch = useIsTouchDevice();

  // const projectTitle = projects?.map((m) => m.title)
  // console.log("timeline : ", projectTitle)

  const timelineSortedByYear = [...projects].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
    return dateA - dateB;
  });
  const TIMELINE_START_YEAR = 2025;
  const rangeStart = Date.UTC(TIMELINE_START_YEAR, 0, 1);

  // A project qualifies if it was still active in (or after) the window start.
  const latestTimeline = timelineSortedByYear.filter((project) => {
    if (!project.startDate) return false;

    const start = new Date(project.startDate).getTime();
    if (Number.isNaN(start)) return false;

    const end = project.endDate
      ? new Date(project.endDate).getTime()
      : Date.now(); // ongoing projects count as active today
    if (Number.isNaN(end)) return false;

    return end >= rangeStart;
  });

  // Guard against an empty window: Math.min(...[]) is Infinity and would
  // produce a NaN height.
  if (latestTimeline.length === 0) {
    return (
      <section
        id="timeline"
        className="max-w-7xl mx-auto w-full h-auto  px-5 lg:px-0 py-20  "
      >
        <h2 className="text-3xl font-bold my-10 text-center">
          My <span className="text-cyan-500">Timeline.</span>
        </h2>
      </section>
    );
  }

  function getTimelinePosition(
    date: string,
    // minDate: Date,
    // maxDate: Date,
    // timelineHeight: number,
  ) {
    const timestamp = new Date(date).getTime();
    const progress = (timestamp - minTimestamp) / span;

    // Projects that started before the window are pinned to the top.
    return Math.max(0, progress) * timelineHeight;
  }
  const timelineDates = latestTimeline.flatMap((project) => {
    if (!project.startDate) return [];
    const start = new Date(project.startDate).getTime();

    const end = project.endDate
      ? new Date(project.endDate).getTime()
      : Date.now();

    return [start, end].filter((date) => !Number.isNaN(date));
  });

  // Anchor the axis to the start of the window, never earlier.
  const minTimestamp = Math.max(rangeStart, Math.min(...timelineDates));
  const maxTimestamp = Math.max(...timelineDates);
  const span = Math.max(1, maxTimestamp - minTimestamp);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const totalDays = span / millisecondsPerDay;
  const pixelsPerDay = 3;

  const timelineHeight = totalDays * pixelsPerDay;
  const CARD_HEIGHT = 200;

  // Year separators: sit in the visual gap between the last card of a year and
  // the first card of the next one, so the line never cuts through a card.
  const yearDividers = new Map<number, { year: number; top: number }>();

  for (let i = 1; i < latestTimeline.length; i += 1) {
    const previous = latestTimeline[i - 1];
    const current = latestTimeline[i];
    const previousStart = previous.startDate;
    const currentStart = current.startDate;

    if (!previousStart || !currentStart) continue;

    const previousYear = new Date(previousStart).getUTCFullYear();
    const year = new Date(currentStart).getUTCFullYear();

    if (year === previousYear) continue;
    // 2025 sudah diwakili oleh marker pembuka window.
    if (year <= TIMELINE_START_YEAR) continue;

    const previousBottom = getTimelinePosition(previousStart) + CARD_HEIGHT;
    const nextTop = getTimelinePosition(currentStart);
    const gap = nextTop - previousBottom;

    yearDividers.set(i, {
      year,
      top: gap > 24 ? (previousBottom + nextTop) / 2 : nextTop - 10,
    });
  }

  return (
    <section
      id="timeline"
      className="max-w-7xl mx-auto w-full h-auto  px-5 lg:px-0 py-20  "
    >
      <h2 className="text-3xl font-bold my-10 text-center">
        My <span className="text-cyan-500">Timeline.</span>
      </h2>
      <div
        className="relative w-full flex flex-col gap-8 h-[var(--tl-duration)] md:block"
        style={
          { "--tl-duration": `${timelineHeight}px` } as React.CSSProperties
        }
      >
        {/* Sumbu tengah: hanya md+ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500/30 to-teal-500/30 h-full rounded-full z-0" />

        {/* Rail kiri: hanya mobile */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px z-0 pointer-events-none bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-teal-500/20" />

        {/* Pembuka window */}
        {/* <div className="relative md:absolute md:left-0 md:top-0 w-1/2 z-0 flex items-center gap-3 pointer-events-none">
          <span className="shrink-0 pl-6 md:pl-0 text-xs font-bold tracking-widest text-cyan-400/80">
            {TIMELINE_START_YEAR}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div> */}

        {latestTimeline?.map((timeline, index) => {
          // Kartu 1, 3, 5, ... di kanan; 2, 4, 6, ... di kiri (khusus md+).
          const isRight = index % 2 === 0;
          const isActive = activeId === timeline.id;
          const divider = yearDividers.get(index) ?? null;

          const startY = timeline.startDate
            ? getTimelinePosition(timeline.startDate)
            : 0;

          const projectTechs = timeline.techIds
            .map((techId) => technologies.find((tech) => tech.id === techId))
            .filter(Boolean);

          const affiliationLabel = (timeline.affiliations ?? [])
            .map(
              (affiliationId) =>
                affiliationList.find(
                  (affiliation) => affiliation.id === affiliationId,
                )?.title ?? affiliationId,
            )
            .join(", ");

          return (
            <React.Fragment key={timeline.id}>
              {/* {divider ? (
                <div
                  className="relative md:absolute md:left-0 md:right-0 md:[top:var(--divider-top)] z-0 flex items-center gap-3 pointer-events-none"
                  style={
                    {
                      "--divider-top": `${divider.top}px`,
                    } as React.CSSProperties
                  }
                >
                  <span className="shrink-0 pl-6 md:pl-0 text-xs font-bold tracking-widest text-cyan-400/80">
                    {divider.year}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 via-cyan-500/20 to-transparent" />
                </div>
              ) : null} */}

              <button
                type="button"
                data-active={isActive}
                aria-label={timeline.title}
                onClick={() => {
                  if (isTouch) setActiveId(isActive ? null : timeline.id);
                }}
                className={`relative group w-full md:absolute md:z-10 md:w-1/2 md:h-[200px] md:[top:var(--tl-top)] ${
                  isRight ? "md:left-1/2" : "md:left-0"
                } mouse:hover:z-20 data-[active=true]:z-20`}
                style={
                  {
                    "--tl-top": `${startY}px`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`relative size-full py-3 ${
                    isRight ? "pl-6 md:pl-5" : "pl-6 md:pl-0 md:pr-5"
                  }`}
                >
                  <div
                    className={` absolute inset-y-0 w-1 rounded-full z-0 bg-cyan-700  global-transition ${
                      isRight ? "-left-0.5 " : "right-auto -left-0.5 md:-right-0.5 md:left-auto"
                    } mouse:group-hover:bg-cyan-400 mouse:group-hover:border-cyan-200/70 mouse:group-hover:drop-shadow-[0_0_8px_rgb(0_184_219)] touch:group-data-[active=true]:bg-cyan-400 touch:group-data-[active=true]:border-cyan-200/70 touch:group-data-[active=true]:drop-shadow-[0_0_8px_rgb(0_184_219)]`}
                  />
                  <div
                    className={`absolute size-3 rounded-full z-50 bg-cyan-700 global-transition -top-1.5 -left-1.5 ${
                      isRight ? "" : "md:left-auto md:-right-1.5"
                    } mouse:group-hover:scale-[1.2] mouse:group-hover:bg-cyan-300 mouse:group-hover:drop-shadow-[0_0_10px_rgb(0_184_219)] touch:group-data-[active=true]:scale-[1.2] touch:group-data-[active=true]:bg-cyan-300 touch:group-data-[active=true]:drop-shadow-[0_0_10px_rgb(0_184_219)]`}
                  />
                  <div
                    className={`absolute -top-3 font-bold text-sm flex gap-2 left-0 pl-5 text-white/70 global-transition ${
                      isRight ? "" : "md:left-auto md:right-0 md:pl-0 md:pr-5"
                    } mouse:group-hover:text-cyan-300 touch:group-data-[active=true]:text-cyan-300`}
                  >
                    {formatStartDate({
                      startDate: timeline.startDate,
                      dateType: timeline.dateType,
                    })}
                  </div>
                  <div
                    className={`absolute size-3 rounded-full z-999 bg-cyan-700  global-transition -bottom-1.5 -left-1.5 ${
                      isRight ? "" : "md:left-auto md:-right-1.5"
                    } mouse:group-hover:scale-[1.2] mouse:group-hover:bg-cyan-300 mouse:group-hover:drop-shadow-[0_0_10px_rgb(0_184_219)] touch:group-data-[active=true]:scale-[1.2] touch:group-data-[active=true]:bg-cyan-300 touch:group-data-[active=true]:drop-shadow-[0_0_10px_rgb(0_184_219)]`}
                  />
                  <div
                    className={`absolute -bottom-3 font-bold text-sm flex gap-2 left-0 pl-5 text-white/70 global-transition ${
                      isRight ? "" : "md:left-auto md:right-0 md:pl-0 md:pr-5"
                    } mouse:group-hover:text-cyan-300 touch:group-data-[active=true]:text-cyan-300`}
                  >
                    {formatEndDate({
                      endDate: timeline.endDate,
                      dateType: timeline.dateType,
                    })}
                  </div>
                  <div className="text-left overflow-hidden size-full cursor-pointer select-none bg-gradient-to-tr from-white/10 to-transparent border border-teal-500/20 rounded-xl backdrop-blur-sm flex justify-start items-start relative global-transition mouse:group-hover:border-teal-500 mouse:group-hover:shadow-md mouse:group-hover:shadow-teal-500/50 touch:group-data-[active=true]:border-teal-500 touch:group-data-[active=true]:shadow-md touch:group-data-[active=true]:shadow-teal-500/50">
                    <div className="size-full p-3 flex flex-col">
                      <span className="font-semibold text-xs text-cyan-500">
                        {affiliationLabel}
                      </span>
                      <h3 className="font-bold">{timeline.title}</h3>
                      <p className="line-clamp-2 text-sm mt-2 leading-snug">
                        {timeline.desc}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                        {projectTechs.slice(0, 6).map((tech) =>
                          tech?.img ? (
                            // biome-ignore lint/performance/noImgElement: Supabase images need remotePatterns in next.config.ts; using native img
                            <img
                              key={tech.id}
                              src={tech.img}
                              alt={tech.title ?? ""}
                              title={tech.title ?? ""}
                              className="size-8 object-contain opacity-80"
                            />
                          ) : null,
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
