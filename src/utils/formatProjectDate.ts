import type { ProjectItem } from "@/types";

type DateInput = Pick<ProjectItem, "startDate" | "endDate" | "dateType">;

export function formatProjectDate({ startDate, endDate, dateType }: DateInput): string {
  if (!startDate) return "";

  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return "";

  const isOngoing = !endDate;
  const end = !isOngoing ? new Date(endDate as string) : new Date();

  const formatOptions: Intl.DateTimeFormatOptions = { year: "numeric" };
  if (dateType === "year-month" || dateType === "full") {
    formatOptions.month = "short";
  }
  if (dateType === "full") {
    formatOptions.day = "numeric";
  }

  const format = (date: Date) => new Intl.DateTimeFormat("en-US", formatOptions).format(date);

  const startStr = format(start);
  if (isOngoing) return `${startStr} - Present`;

  if (Number.isNaN(end.getTime())) return startStr;
  const endStr = format(end);
  if (startStr === endStr) return startStr;
  return `${startStr} - ${endStr}`;
}
