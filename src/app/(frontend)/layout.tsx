
import type { Metadata } from "next";
import { Poppins, Black_Han_Sans, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import AnimatedBg from "@/component/animatedbackground";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Footer from "@/component/Footer";
import SmoothScroll from "@/component/SmoothScroll";
const fontMain = Poppins({
  variable: "--poppins",
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const fontArtwork = Luckiest_Guy({
  variable: "--black-han-sans",
  subsets: ['latin'],
  weight: ['400']
});


export const metadata: Metadata = {
  title: "Triandi Aprilio — Front-End Developer & Illustrator",
  description: "Official portfolio of Triandi Aprilio. Front-end developer specializing in modern web apps, Svelte, React, and Next.js.",
  icons: {
    icon: '/logo_colored.svg',
  },
  openGraph: {
    title: "Triandi Aprilio — Portfolio",
    description: "Explore the professional portfolio, interactive UI components, and web engineering projects by Triandi Aprilio.",
    url: "https://portofolio-2026-mu.vercel.app/",
    siteName: "Triandi Aprilio Portfolio",


    images: [
      {
        url: "/og-thumbnail.png", // Path gambar preview lu
        width: 1200,
        height: 630,
        alt: "Triandi Aprilio Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triandi Aprilio — Portfolio",
    description: "Official portfolio of Triandi Aprilio. Front-end developer & UI enthusiast.",
    images: ["/og-thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <SmoothScroll>

        <body
          className={`${fontMain.variable} ${fontArtwork.variable} antialiased font-main bg-linear-to-bl from-black  to-teal-950`}
        >

          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}
