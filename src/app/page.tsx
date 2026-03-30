import Image from "next/image";
import Navbar from "../component/Navbar";
import Section1 from "../component/home/section-1";
import Section2 from "../component/home/section-2";
import Section3 from "../component/home/section-3";

export default function Home() {
  return (
    <>
    <div className="hidden md:block">
      <Section1 />
      <Navbar />
      <Section2 />
      <Section3 />
    </div>
    <div className=" md:hidden h-dvh flex items-center justify-center">
      Mobile View is on Develop
    </div>
    </>
  );
}
