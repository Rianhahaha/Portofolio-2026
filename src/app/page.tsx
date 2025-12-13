import Image from "next/image";
import Navbar from "./component/Navbar";
import Section1 from "./component/home/section-1";
import Section2 from "./component/home/section-2";
import Section3 from "./component/home/section-3";

export default function Home() {
  return (
    <>
      <Section1 />
      <Navbar />
      <Section2 />
      <Section3 />
    </>
  );
}
