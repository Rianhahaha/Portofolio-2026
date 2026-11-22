import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    
    return (
        <Link className='flex items-center justify-center' href={'/'}>
            <Image
                src="/logo_colored.svg"
                width={80}
                height={80}
                alt="logo"
                className="hidden md:block touch:opacity-100 mouse:opacity-50 hover:opacity-100 cursor-pointer global-transition hover:drop-shadow-[0_0px_20px_rgb(0_184_219)]!"
            />
            <Image
                src="/logo.svg"
                width={80}
                height={80}
                alt="logo"
                className="block md:hidden touch:opacity-100 mouse:opacity-50 hover:opacity-100 cursor-pointer global-transition hover:drop-shadow-[0_0px_20px_rgb(0_184_219)]!"
            />
        </Link>)
}
