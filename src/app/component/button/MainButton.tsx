import Link from "next/link";

interface MainButtonProps {
  icon?: React.ElementType; // biar aman, bukan any
  text?: string;
  type?: "button" | "link";
  href?: string; // dipakai kalau type = "link"
  onClick?: () => void; // dipakai kalau type = "button"
}

export default function MainButton({
  icon: Icon,
  text,
  type = "button",
  href = "#",
  onClick,
}: MainButtonProps) {
  const baseClass =
    "group bg-gradient-to-tr from-teal-500 to-sky-500 text-white border-t-2 border-l-2 border-white/50 hover:border-white/90 font-bold py-2 px-6 rounded-xl hover:from-sky-500 hover:to-teal-500 hover:scale-[95%] transition duration-300 ease-in-out flex items-center gap-2 cursor-pointer";

  if (type === "link") {
    return (
      <Link href={href} className={baseClass} target="_blank">
        {text}
        {Icon && <Icon className="group-hover:-translate-y-1 group-hover:-rotate-12 global-transition-slower" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {text}
      {Icon && <Icon className="group-hover:translate-x-10" />}
    </button>
  );
}
