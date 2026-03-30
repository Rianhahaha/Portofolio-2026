export default function AnimatedIconBox({ children }: any) {
  return (
    <div className="size-[13rem] relative  group-hover:-translate-y-[3rem] global-transition">
      {children}
    </div>
  );
}
