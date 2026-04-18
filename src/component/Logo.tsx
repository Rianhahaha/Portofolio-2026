import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    
    return (
        <Link href={'/'}>
            <Image
                src="/logo_colored.svg"
                width={80}
                height={80}
                alt="logo"
                className="opacity-50 hover:opacity-100 cursor-pointer global-transition hover:drop-shadow-[0_0px_5px_rgb(255_255_255/_0.5)]!"
            />
        </Link>)
}
