import DesignIcon from "./icon";
import AnimatedIconBox from "../iconBox";
export default function Design() {
  return (
    <AnimatedIconBox>
      <DesignIcon className="absolute w-full group-hover:-translate-y-[0rem] global-transition" />
      <DesignIcon className="absolute w-full -translate-y-[3rem] group-hover:-translate-y-[6rem] group-hover:z-20 global-transition-slower" />
      <DesignIcon className="absolute w-full -translate-y-[6rem] group-hover:-translate-y-[3rem] global-transition" />
    </AnimatedIconBox>
  );
}
