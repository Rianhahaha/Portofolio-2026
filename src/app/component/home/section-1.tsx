import Image from "next/image";
import MainButton from "../button/MainButton";
import { FileDownIcon } from "lucide-react";

export default function Section1() {
  return (
    <section className="w-full  flex items-bottom justify-center overflow-hidden global-transition">
      <div className="max-w-7xl w-full grid grid-cols-3 items-end ">
        <div className="w-full text-right mb-[5rem] border-r border-r-cyan-500/50 pr-5">
          <h1 className="text-4xl font-normal">Hi there!</h1>
          <h1 className="text-6xl font-bold">
            <span className="text-cyan-500">Rian</span> Here.
          </h1>
          <p className="">
            an Information Technology student specializing in graphic design,
            illustration, and{" "}
            <b className="text-cyan-500"> front-end web development.</b> His
            expertise in these areas has been demonstrated through various
            projects completed for diverse clients. He has a keen interest in
            visual design and its implementation, which includes{" "}
            <b className="text-cyan-500"> front-end website development, </b>
            illustration, and graphic design. (revisi)
          </p>
          <div className="flex justify-end mt-5">
            <MainButton
              type="link"
              href="/cv.pdf"
              text="See my CV"
              icon={FileDownIcon}
            />
          </div>
        </div>
        <div className="h-full flex items-end">
          <Image
            src="/home/portrait.png"
            alt="profile"
            width={300}
            height={300}
            className="object-contain w-full brightness-"
          />
        </div>
        <div className="w-full mb-[5rem] border-l border-l-cyan-500/50 pl-5">
          <h1 className="text-3xl font-normal">Welcome to</h1>
          <h1 className="text-6xl font-bold">
            My <span className="text-cyan-500">Website.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
