import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import AnimatedBg from "@/component/animatedbackground";
import Section1 from "@/component/home/section-1";
import Section2 from "@/component/home/section-2";
import Section3 from "@/component/home/section-3";
import { getPayloadAffiliation } from "@/utils/payloadAffiliations";
import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
export default async function Home() {

  const technologies = await getPayloadTechnologies()
  const affiliation = await getPayloadAffiliation()
  // console.log(technologies)
  const projects = await getPayloadProjects({
    limit: 5
  })

  return (
    <>
      <AnimatedBg />
      <div className="">
        <Section1 />
        <Navbar />
        <Section2 />
        <Section3 technologies={technologies} projects={projects} affiliatons={affiliation} />
      </div>
      {/* <div className=" lg:hidden h-svh flex items-center justify-center">
      Mobile View is currently on Develop
    </div> */}
      <Footer />

    </>
  );
}
