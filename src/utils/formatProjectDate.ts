import type { ProjectItem } from "@/types";

type DateInput = Pick<ProjectItem, "startDate" | "endDate" | "dateType">;

function getDateOptions(
  dateType: ProjectItem["dateType"],
): Intl.DateTimeFormatOptions {
  const formatOptions: Intl.DateTimeFormatOptions = {
     year: "numeric",
    };
  if (dateType === "year-month" || dateType === "full") {
    formatOptions.month = "short";
  }
  if (dateType === "full") {
    formatOptions.day = "numeric";
  }
  return formatOptions
}
function formatDate(
  value: string,
  dateType: ProjectItem["dateType"]
): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(
    "en-US",
    getDateOptions(dateType)
  ).format(date);
}

export function formatStartDate({
  startDate,
  dateType
}: DateInput): string {
  if (!startDate) return "";

  return formatDate(startDate, dateType)
}
export function formatEndDate({
  endDate,
  dateType
}: DateInput): string {
  if (!endDate) return "";

  return formatDate(endDate, dateType)
}


export function formatProjectDate({
  startDate,
  endDate,
  dateType,
}: DateInput): string {
  if (!startDate) return "";

  const startStr = formatDate(startDate, dateType);
  if (!startStr) return "";

  if (!endDate) return `${startStr} - Present`;

  const endStr = formatDate(endDate, dateType);

  if (!endStr || startStr === endStr) return startStr;
    return `${startStr} - ${endStr}`;
}


