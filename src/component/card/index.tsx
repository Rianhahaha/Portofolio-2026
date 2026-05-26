interface CardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}

import React, { useState } from 'react';
import { useIsTouchDevice } from '@/utils/useMobileClick';
import MainButton from '../button/MainButton';
import { View } from 'lucide-react';


export default function Card({ children, title, desc, link }: CardProps) {
  // 1. State management to track the simulated "hover" state on mobile
  const [isActive, setIsActive] = useState(false);
  const isTouch = useIsTouchDevice();

  // const handleTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {

  //   if (isTouch) {
  //     if (!isActive) {
  //       e.preventDefault();
  //       setIsActive(true);
  //     }
  //   }
  // };

  const cardClasses = `
    select-none cursor-pointer group w-full bg-gradient-to-tr from-white/10 to-transparent p-5 
    border border-teal-500/20 transition-all duration-500 ease-in-out 
    rounded-4xl rounded-tl-[5rem] rounded-br-[5rem] backdrop-blur-sm 
    flex flex-col justify-start items-center
    
    /* Mouse behavior */
    mouse:hover:border-teal-500 mouse:hover:shadow-md mouse:hover:shadow-teal-500/50 
    mouse:h-[300px] mouse:hover:h-[400px]
    
    /* Touch behavior using data attribute */
    touch:h-[300px] touch:data-[active=true]:h-[400px]
    touch:data-[active=true]:border-teal-500 touch:data-[active=true]:shadow-md
  `;

  const descClasses = `
    w-full text-center flex flex-col items-center gap-2 justify-center global-transition text-white/50 overflow-hidden mt-0 
    
    /* Mouse behavior */
    mouse:h-[0px] mouse:group-hover:h-[200px]
    
    /* Touch behavior using data attribute */
    touch:h-[0px] touch:group-data-[active=true]:h-[200px]
  `;

  const CardContent = (
    <>
      <div>{children}</div>
      <h1 className="text-2xl font-bold uppercase mt-4 md:mt-0">{title}</h1>
      <div className={descClasses}>
        <p>
          {desc}
          </p>
      {link ? (
        <>
          <MainButton
            type="link"
            href={link}
            noblank
            className='w-fit! justify-center!'
          >
            <View />
            </MainButton>     
             </>
      ) : (
        <></>
      )}
        </div>
    </>
  );

  return (
    <>
            <div
          className={cardClasses}
          onClick={(e) => {
            if (isTouch) setIsActive(!isActive);
          }}
          data-active={isActive}
        >
          {CardContent}
        </div>

    </>
  );
}