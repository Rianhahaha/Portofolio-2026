"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { link } from "fs";
export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Artworks", href: "/artworks" },
  ];
  const leftNav = links.slice(0, 2);
  const rightNav = links.slice(2);
  useEffect(() => {
    setActiveLink(pathname);
    console.log(activeLink);
  }, [pathname]);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  console.log("Scroll position:", scrollPosition); // ini yang nge-print nilai scroll
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

  return (
    <>
      <div className={`top-0 h-[100px] z-50 w-full  ${pathname === links[0].href ? "sticky" : " fixed"}`}>
        <nav
          className={`flex items-center mx-auto justify-center  global-transition !duration-700 border-y ${
            scrolled
              ? "bg-white/5 backdrop-blur-sm w-7xl rounded-[100px]  translate-y-5 h-full border-t-transparent border-b-teal-500/20"
              : " w-full bg-transparent backdrop-blur-xl h-full  border-t-teal-500/20 border-b-transparent"
          } `}
        >
          <ul
            className={` w-full mx-auto flex items-center justify-between global-transition !duration-1000 ${
              scrolled ? "max-w-2xl" : "max-w-7xl"
            }`}
          >
            {leftNav.map((link) => (
              <li
                key={link.name}
                className={`${
                  activeLink === link.href ? "text-white text-shadow-xl text-shadow-white" : "opacity-50"
                } hover:opacity-100 cursor-pointer global-transition`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Image
                src="/logo_colored.svg"
                width={80}
                height={80}
                alt="logo"
                className="opacity-70 hover:opacity-100 cursor-pointer global-transition"
              />
            </li>
            {rightNav.map((link) => (
              <li
                key={link.name}
                className={`${
                  activeLink === link.href ? "text-white" : "text-gray-400"
                } hover:text-white cursor-pointer global-transition`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
