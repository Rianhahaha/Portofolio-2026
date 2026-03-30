import Navbar from "./Navbar";

export default function PagesLayout({ children }: any) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
