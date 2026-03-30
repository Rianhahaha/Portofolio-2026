
import AnimatedIconBox from "../iconBox";
import CodeIcon1 from "./icon1";
import CodeIcon2 from "./icon2";
import CodeIcon3 from "./icon3";
export default function Code() {
  return (
    <AnimatedIconBox>
      <CodeIcon1 className="absolute scale-60 w-[75%] translate-y-[-2rem] translate-x-[-4rem] group-hover:-translate-y-[4rem] global-transition-slower" />
      <CodeIcon2 className="absolute scale-60 w-[100%] -translate-y-[6rem] group-hover:-translate-y-[6rem] group-hover:z-20 global-transition" />
      <CodeIcon3 className="absolute scale-60 w-[75%] translate-y-[-2rem] translate-x-[7rem] group-hover:-translate-y-[0rem] global-transition" />
    </AnimatedIconBox>
  );
}
