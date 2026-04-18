"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { link } from "fs";
import Logo from "./Logo";
import { BriefcaseBusinessIcon, Home, LucideContact2, PaletteIcon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  // Hapus baris ini, karena kita tidak perlu lagi state 'activeLink'
  // yang disinkronkan, kita bisa menghitung status aktif secara langsung.
  // const [activeLink, setActiveLink] = useState(pathname);

  const links = [
    { name: "Home", href: "/", icon: <Home/> },
    { name: "Projects", href: "/projects", icon: <BriefcaseBusinessIcon/> },
    { name: "Contact", href: "/contact", icon: <LucideContact2/> },
    { name: "Artworks", href: "/artworks", icon: <PaletteIcon/> },
  ];
  const leftNav = links.slice(0, 2);
  const rightNav = links.slice(2);
  const handleScroll = () => {
    // ... (Logika handleScroll tetap sama)
    const scrollPosition = window.scrollY;
    // console.log("Scroll position:", scrollPosition);
    if (scrollPosition >= window.innerHeight - 150) {
      setScrolled(true);
    } else if (scrollPosition < window.innerHeight - 170) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLinkActive = (href: any) => {
    if (href === '/') {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <div className={`top-0 h-[100px]   z-50  max-w-full auto ${pathname === links[0].href ? "sticky " : " fixed"} global-transition  ${scrolled ? 'w-[calc(100%-2.2rem)] mx-auto' : 'w-full'}`}>
        <div className={`absolute  w-full h-[2px] bg-gradient-to-l from-teal-500 via-30% via-teal-500/30 to-transparent z-[99999] top-0 global-transition-slower
          ${scrolled ? 'opacity-0 ' : 'opacity-100'}
          `} />
        <nav
          className={`relative flex items-center mx-auto px-5 justify-center global-transition !duration-700   ${scrolled
            ? "bg-black/10 backdrop-blur-xl w-full max-w-7xl  rounded-2xl translate-y-5 h-full border-t-transparent border-b-teal-500/50 border-y"
            : "  w-full bg-transparent backdrop-blur-xl h-full border-t-transparent  border-b-transparent"
            } `}
        >

          <ul
            className={` w-full mx-auto flex items-center justify-between global-transition !duration-1000 ${scrolled ? "max-w-2xl" : "max-w-7xl"
              }`}
          >
            {leftNav.map((link) => (
              <li
                key={link.name}
                className={`${isLinkActive(link.href)
                  ? "text-white text-shadow-[0_0px_4px_rgb(255_255_255)]"
                  : "opacity-50"
                  } flex flex-col items-center text-xs md:text-base hover:opacity-100 hover:text-shadow-[0_0px_4px_rgb(255_255_255)] cursor-pointer global-transition`}
              >
                <Link className="hidden md:block" href={link.href}>{link.icon}</Link>
                <Link className="hidden md:block" href={link.href}>{link.name}</Link>
                <Link className="block md:hidden" href={link.href}>{link.icon}</Link>
              </li>
            ))}
            <li className="w-12 md:w-50 flex justify-center">
              <Logo />
            </li>
            {rightNav.map((link) => (
              <li
                key={link.name}
                className={`${isLinkActive(link.href)
                  ? "text-white text-shadow-[0_0px_4px_rgb(255_255_255)]"
                  : "opacity-50"
                  } flex flex-col items-center text-xs md:text-base hover:opacity-100 hover:text-shadow-[0_0px_4px_rgb(255_255_255)] cursor-pointer global-transition`}
              >
                <Link className="hidden md:block" href={link.href}>{link.icon}</Link>
                <Link className="hidden md:block" href={link.href}>{link.name}</Link>
                <Link className="block md:hidden" href={link.href}>{link.icon}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
