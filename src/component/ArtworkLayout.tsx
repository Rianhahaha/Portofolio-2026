
export default function ArtworkLayout({ children }: any) {
  return (
    <section className="relative">
      {/* <div className="absolute size-full  px-[2svw] py-[3svh] z-[9999] pointer-events-none">
        <div className="size-full border-2 border-red-500"></div>

      </div> */}
      {children}
    </section>
  );
}
