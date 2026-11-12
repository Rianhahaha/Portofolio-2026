import type { Metadata } from "next";
import AnimatedBg from "@/component/animatedbackground";
import Footer from "@/component/Footer";
import Section1 from "@/component/home/section-1";
import Section2 from "@/component/home/section-2";
import Section3 from "@/component/home/section-3";
import Navbar from "@/component/Navbar";
import { buildMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE_DEFAULT } from "@/lib/site";
import { getPayloadAffiliation } from "@/utils/payloadAffiliations";
import { getPayloadProjects } from "@/utils/payloadProjects";
import { getPayloadTechnologies } from "@/utils/payloadTechnologies";

export const metadata: Metadata = buildMetadata({
  title: SITE_TITLE_DEFAULT,
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

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
      {/* <Footer /> */}

    </>
  );
}
