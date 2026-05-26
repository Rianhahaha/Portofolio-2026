interface CardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}

import React, { useState } from 'react';

// ... other imports

export default function Card({ children, title, desc, link }: CardProps) {
  // 1. State management to track the simulated "hover" state on mobile
  const [isActive, setIsActive] = useState(false);

  // 2. Event Hijacking logic
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the device is touch-capable using the window interface 
    // (You can also extract this to a custom hook like useIsTouchDevice)
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (isTouch) {
      if (!isActive) {
        // First tap: Prevent navigation, trigger the "hover" state instead
        e.preventDefault();
        setIsActive(true);
      }
      // Second tap: isActive is true, so we bypass the preventDefault 
      // and let the browser execute the link.
    }
  };

  /* 3. Tailwind classes using data-[active=true]
    Notice how we combine standard hover for mouse, and data-active for touch.
  */
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
    w-full text-center global-transition text-white/50 overflow-hidden mt-0 
    
    /* Mouse behavior */
    mouse:h-[0px] mouse:group-hover:h-[200px]
    
    /* Touch behavior using data attribute */
    touch:h-[0px] touch:data-[active=true]:h-[200px]
  `;

  const CardContent = (
    <>
      <div>{children}</div>
      <h1 className="text-2xl font-bold uppercase mt-4 md:mt-0">{title}</h1>
      <p className={descClasses}>{desc}</p>
    </>
  );

  return (
    <>
      {link ? (
        <a 
          href={link} 
          className={cardClasses}
          onClick={handleClick}
          // Set the data attribute dynamically based on state
          data-active={isActive}
        >
          {CardContent}
        </a>
      ) : (
        <div 
          className={cardClasses}
          onClick={(e) => {
            // For non-links, just toggle the state
            const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
            if (isTouch) setIsActive(!isActive);
          }}
          data-active={isActive}
        >
          {CardContent}
        </div>
      )}
    </>
  );
}