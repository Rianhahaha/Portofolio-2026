interface CardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}

export default function Card({ children, title, desc, link }: CardProps) {
  return (
    <>
      {link ? (
        <a href={link} className="select-none cursor-pointer group w-full bg-gradient-to-tr from-white/10 to-transparent p-5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50 h-[300px] hover:h-[400px] transition-all duration-500 ease-in-out rounded-4xl rounded-tl-[5rem] rounded-br-[5rem] backdrop-blur-sm flex flex-col justify-start items-center">
          <div>
            {children}
          </div>
          <h1 className="text-2xl font-bold uppercase">{title}</h1>
          <p className="overflow-hidden w-full text-center group-hover:h-[200px] h-[0px] global-transition text-white/50">
            {desc}
          </p>
        </a>
      ) : (

        <div className="select-none cursor-pointer  group w-full bg-gradient-to-tr from-white/10 to-transparent p-5 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50 h-[300px] hover:h-[400px] transition-all duration-500 ease-in-out rounded-4xl rounded-tl-[5rem] rounded-br-[5rem]  backdrop-blur-sm flex flex-col justify-start items-center">
          <div>
            {children}
          </div>
          <h1 className="text-2xl font-bold uppercase">{title}</h1>
          <p className="overflow-hidden w-full text-center group-hover:h-[200px] h-[0px] global-transition text-white/50">
            {desc}
          </p>
        </div>
      )}
    </>
  );
}
