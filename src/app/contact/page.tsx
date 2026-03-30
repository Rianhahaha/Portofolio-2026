'use client'
import PagesLayout from "../../component/PagesLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import MainButton from "../../component/button/MainButton";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <PagesLayout>
      <section className="w-full min-h-screen overflow-hidden">
        <div className="max-w-7xl w-full content-start grid grid-cols-2 mx-auto mt-[10rem] gap-10">
          <div>
            <h1 className="text-[6rem] leading-[1em] font-bold mb-5">
              Now, let's make it <span className="text-cyan-500">Real.</span>
            </h1>
            <p>Have a project in mind or just want to <span className="text-cyan-500">collaborate?</span>     </p>
            <p>Let's talk about how we can turn ideas into clean, functional, and visually solid work.</p>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="email" className="mb-2">Email</label>
                <input id="email" className="relative group overflow-hidden px-3 py-2 w-full gap-5 bg-white/5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-xl flex flex-col justify-start items-center" type="text" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2">Message</label>
                <textarea id="message" className="min-h-[200px] h-full relative group overflow-hidden px-3 py-2 w-full gap-5 bg-white/5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-xl flex flex-col justify-start items-center" ></textarea>
              </div>
              <div className="flex justify-end">

                <MainButton
                  type="link"
                  href="/projects"
                  noblank
                  text="Send"
                  icon={Send}
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </PagesLayout>
  );
}
