import Navbar from "@/component/Navbar";
import Section1 from "@/component/home/section-1";
import Section2 from "@/component/home/section-2";
import Section3 from "@/component/home/section-3";
import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";
export default async function Home() {

  const skills = await getPayloadTechnologies()
  // console.log(skills)
  const projects = await getPayloadProjects({
    limit: 5
  })

  return (
    <>
      <div className="scroll-smooth!">
        <Section1 />
        <Navbar />
        <Section2 />
        <Section3 skills={skills} projects={projects} />
      </div>
      {/* <div className=" lg:hidden h-svh flex items-center justify-center">
      Mobile View is currently on Develop
    </div> */}
    </>
  );
}
