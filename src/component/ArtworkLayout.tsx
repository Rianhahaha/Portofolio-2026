import SmoothScroll from "./SmoothScroll";

export default function ArtworkLayout({ children }: { children: React.ReactNode }) {
  // Removed scroll-smooth.
  // Note: Refactored 'any' to 'React.ReactNode' for strict TypeScript typing.
  return (
    <SmoothScroll>

      <section className="relative scroll-smooth">
        {children}
      </section>
    </SmoothScroll>
  );
}