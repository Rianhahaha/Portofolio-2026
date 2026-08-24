import ComingSoonPage from "./ComingSoonPage";
import Navbar from "./Navbar";
import SmoothScroll from "./SmoothScroll";

export default function ArtworkLayout({ children }: { children: React.ReactNode }) {
  // Removed scroll-smooth.
  // Note: Refactored 'any' to 'React.ReactNode' for strict TypeScript typing.
  return (
    <SmoothScroll>
      <Navbar />

      <section className="relative scroll-smooth">
        {/* {children} */}
        <ComingSoonPage />
      </section>
    </SmoothScroll>
  );
}