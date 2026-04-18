import { SiGithub, SiInstagram, SiLinkerd } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'


export default function Footer() {
  return (
    <footer className='h-[50dvh] w-full bg-black/40 flex items-center justify-center relative'>
      <div className='absolute w-full h-[1px] bg-gradient-to-l from-teal-500 via-30% via-teal-500/30 to-transparent z-0 top-0' />

      <div className="flex flex-col w-full max-w-7xl justify-center items-center gap-5">
              <Logo />
        <div className='text-center'>
          <p className='text-white'>Built with Next.js and Tailwind CSS</p>
          <p className='text-white'>Hosted on Vercel</p>
        </div>
        <div className="flex gap-2 justify-center">
          <Link className='p-3 hover:bg-white/10 rounded-full global-transition hover:text-cyan-500' href="https://www.instagram.com/triandi_aprilio/" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
          </Link>
          <Link className='p-3 hover:bg-white/10 rounded-full global-transition hover:text-cyan-500' href="https://www.linkedin.com/in/triandiaprilio/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </Link>
          <Link className='p-3 hover:bg-white/10 rounded-full global-transition hover:text-cyan-500' href="https://github.com/Rianhahaha/" target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </Link>

        </div>
        <div className='text-center'>
          <p className='text-white'>&copy; 2026 Rian's Portfolio. All rights reserved.</p>
          <p className='text-white'>Designed by Rian.</p>
        </div>
      </div>
    </footer>
  )
}
