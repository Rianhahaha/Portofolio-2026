
import type { Metadata } from "next";
import { Black_Han_Sans, Luckiest_Guy, Poppins } from "next/font/google";
import "./globals.css";
import AnimatedBg from "@/component/animatedbackground";
import Navbar from "@/component/Navbar";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Analytics } from "@vercel/analytics/react";


import Footer from "@/component/Footer";
import SmoothScroll from "@/component/SmoothScroll";
import JsonLd from "@/component/seo/JsonLd";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_URL,
  TITLE_TEMPLATE,
} from "@/lib/site";
import { personSchema, websiteSchema } from "@/lib/structured-data";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  keywords: SITE_KEYWORDS,
  icons: {
    icon: '/logo_colored.svg',
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">


      <body
        className={`${fontMain.variable} ${fontArtwork.variable} antialiased font-main bg-linear-to-bl from-black  to-teal-950`}
      >


        <JsonLd data={[personSchema(), websiteSchema()]} />

        {children}

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
