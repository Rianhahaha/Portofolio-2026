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

  // Hapus baris ini, karena kita tidak perlu lagi state 'activeLink'
  // yang disinkronkan, kita bisa menghitung status aktif secara langsung.
  // const [activeLink, setActiveLink] = useState(pathname);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Artworks", href: "/artworks" },
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

  // Fungsi utilitas untuk menentukan status aktif
  const isLinkActive = (href: any) => {
    // Kasus Khusus: Jika link adalah root ('/'), hanya cocokkan secara eksak
    if (href === '/') {
      return pathname === href;
    }

    // Kasus Umum: Jika link adalah sub-path ('/projects'), cek apakah pathname dimulai dengannya
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className={`top-0 h-[100px] z-50 w-full ${pathname === links[0].href ? "sticky" : " fixed"}`}>
        <nav
          className={`relative flex items-center mx-auto justify-center global-transition !duration-700   ${scrolled
              ? "bg-black/10 backdrop-blur-xl w-7xl rounded-2xl translate-y-5 h-full border-t-transparent border-b-teal-500/50 border-y"
              : "  w-full bg-transparent backdrop-blur-xl h-full border-t-transparent  border-b-transparent"
            } `}
        >
          <div className={`absolute w-full h-[2px] bg-gradient-to-l from-teal-500 via-30% via-teal-500/30 to-transparent z-[99999] top-0 global-transition-slower
            ${scrolled ?  'opacity-0' : 'opacity-100'}
            `} />

          <ul
            className={` w-full mx-auto flex items-center justify-between global-transition !duration-1000 ${scrolled ? "max-w-2xl" : "max-w-7xl"
              }`}
          >
            {leftNav.map((link) => (
              <li
                key={link.name}
                // MENGGUNAKAN FUNGSI BARU DI SINI
                className={`${isLinkActive(link.href)
                    ? "text-white text-shadow-[0_0px_4px_rgb(255_255_255)]"
                    : "opacity-50"
                  } hover:opacity-100 hover:text-shadow-[0_0px_4px_rgb(255_255_255)] cursor-pointer global-transition`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            {/* ... (Logo di tengah) */}
            <li>
              <Link href={'/'}>
              <Image
                src="/logo_colored.svg"
                width={80}
                height={80}
                alt="logo"
                className="opacity-50 hover:opacity-100 cursor-pointer global-transition hover:drop-shadow-[0_0px_5px_rgb(255_255_255/_0.5)]!"
                />
                </Link>
            </li>
            {rightNav.map((link) => (
              <li
                key={link.name}
                // MENGGUNAKAN FUNGSI BARU DI SINI
                className={`${isLinkActive(link.href)
                    ? "text-white text-shadow-[0_0px_4px_rgb(255_255_255)]"
                    : "opacity-50"
                  } hover:opacity-100 hover:text-shadow-[0_0px_4px_rgb(255_255_255)] cursor-pointer global-transition`}
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
