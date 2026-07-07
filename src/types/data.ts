export interface SkillItem {
  id?: string;
  title?: string;
  img?: string;
  type?: "programming" | "other";
}
export type MediaUrls = {
  original: string;
  card: string;
  avatar: string;
};
export interface ProjectType {
  id?: string;
  name?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  link?: string;
  img: MediaUrls;
  desc: string;
  year: number;
  type?: string[];
  case?: string;
  techIds: string[];
  previewImg?: MediaUrls[];
  className?: string;
  techIdsActive?: string[];
  typeActive?: string[];
}
