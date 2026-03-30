
import Image from "next/image";
import AnimatedIconBox from "../iconBox";
import CodeIcon1 from "./icon1";
import CodeIcon2 from "./icon2";
export default function Art() {
  return (
    <AnimatedIconBox>
      <Image className="absolute w-[100%]  group-hover:-translate-y-[1rem] global-transition" src={'home/section2/art1.svg'} width={100} height={100} alt=""/>
      <Image className="absolute scale-75 w-[100%] translate-x-[5rem] translate-y-[-3rem]  group-hover:-translate-y-[3rem] group-hover:-rotate-45 global-transition-slower" src={'home/section2/art2.svg'} width={100} height={100} alt=""/>    </AnimatedIconBox>
  );
}
