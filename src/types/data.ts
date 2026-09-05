export interface TechnologyItem {
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
export interface Affiliation {
  id: string;
  title: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  link?: string;
  img: MediaUrls;
  desc: string;
  startDate?: string;
  endDate?: string;
  dateType?: "year" | "year-month" | "full";
  type?: string[];
  affiliations?: string[];
  case?: string;
  techIds: string[];
  previewImg?: MediaUrls[];
  className?: string;
  techIdsActive?: string[];
  typeActive?: string[];
}

export interface Artwork {
  id: number;
  title: string;
  proxy: {
    original: string;
    thumb: string;
    regular: string;
    small: string;
  };
}
