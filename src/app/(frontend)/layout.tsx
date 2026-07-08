
import type { Metadata } from "next";
import { Poppins, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import AnimatedBg from "@/component/animatedbackground";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Footer from "@/component/Footer";
const fontMain = Poppins({
  variable: "--poppins",
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const fontArtwork = Black_Han_Sans({
  variable: "--black-han-sans",
  subsets: ['latin'],
  weight: ['400']
});
export const metadata: Metadata = {
  title: "Rian's Portfolio",
  description: "Welcome to Rian's Portfolio - Showcasing My Projects and Skills",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMain.variable} ${fontArtwork.variable} antialiased font-main bg-linear-to-bl from-black  to-teal-950`}
      >

        {children}
      </body>
    </html>
  );
}
