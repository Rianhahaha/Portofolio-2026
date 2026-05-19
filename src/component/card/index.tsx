interface CardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}

export default function Card({ children, title, desc, link }: CardProps) {
  /* 
    Kita ekstrak base class-nya supaya kodenya tetap DRY (Don't Repeat Yourself), 
    nggak capek ngetik ulang untuk versi link dan non-link.
  */
  const cardClasses = `
    select-none cursor-pointer group w-full bg-gradient-to-tr from-white/10 to-transparent p-5 
    border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50 
    h-auto min-h-[300px] md:h-[300px] md:hover:h-[400px] 
    transition-all duration-500 ease-in-out rounded-4xl rounded-tl-[5rem] rounded-br-[5rem] 
    backdrop-blur-sm flex flex-col justify-start items-center
  `;

  const descClasses = `
    w-full text-center global-transition text-white/50 overflow-hidden
    /* Mobile: Teks selalu tampil dengan margin atas | Desktop: Sembunyikan & muncul saat hover */
    mt-4 md:mt-0 h-auto md:h-[0px] md:group-hover:h-[200px]
  `;

  const CardContent = (
    <>
      <div>{children}</div>
      <h1 className="text-2xl font-bold uppercase mt-4 md:mt-0 ">{title}</h1>
      <p className={descClasses}>{desc}</p>
    </>
  );

  return (
    <>
      {link ? (
        <a href={link} className={cardClasses}>
          {CardContent}
        </a>
      ) : (
        <div className={cardClasses}>
          {CardContent}
        </div>
      )}
    </>
  );
}