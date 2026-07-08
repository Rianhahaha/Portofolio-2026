import AnimatedBg from "./animatedbackground";
import Navbar from "./Navbar";

export default function PagesLayout({ children }: any) {
  return (
    <>
      <AnimatedBg />

      <section>
        <Navbar />
        {children}
      </section>
    </>
  );
}
