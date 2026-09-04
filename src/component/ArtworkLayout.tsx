import { Menu } from "lucide-react";
import ComingSoonPage from "./ComingSoonPage";
import Navbar from "./Navbar";
import SmoothScroll from "./SmoothScroll";

export default function ArtworkLayout({ children }: { children: React.ReactNode }) {
  // Removed scroll-smooth.
  // Note: Refactored 'any' to 'React.ReactNode' for strict TypeScript typing.
  return (

    <section className="relative bg-black">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#ffffff 20%, transparent 20%)",
          backgroundSize: "10px 10px"
        }}
      />
      {children}
      {/* <ComingSoonPage /> */}

      <div className="fixed bottom-[3svw] md:bottom-[6svh] right-[3svw] flex flex-col gap-[2svw] w-fit rotate-0 md:rotate-6 z-50">
        {/* <div className="size-full         outline-[.7svw] outline-black 
                            w-fit h-fit 
                            active:scale-[0.98]
                            z-[70] text-[2.5svw] font-artwork font-bold 
                            flex justify-center items-center 
                            transition-all duration-200 select-none
                            group
                            tracking-[.2svw] 
                            size-full px-[3svw] py-[1.5svh] bg-white text-black gap-5
                        ">
            <div>

              MAIN MENU
            </div>
            <Menu className="size-[3svw]" />

          </div> */}
        {/* <ArtworkButton noblank={true} text="MAIN MENU" type="link" href="#recent-artwork" className=" bg-[#0096FA] hover:bg-[#00eeff]  w-full" /> */}

      </div>
    </section>
  );
}