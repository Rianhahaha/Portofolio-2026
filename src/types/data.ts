export interface SkillItem {
    id?:string;
    title?:string;
    img?:string;
}
export interface ProjectItem {
    id:string;
    title:string;
    link?:string;
    img:string;
    desc:string;
    year:number;
    type:string;
    case?:string;
    techIds:string[];
    previewImg?:string[];
}