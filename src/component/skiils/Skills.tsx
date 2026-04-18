import Image from 'next/image';
import React, { ReactNode } from 'react'
import { SkillItem } from '@/types';

export default function Skills({ title, img, id }: SkillItem) {
    return (
        <div id={id} className="cursor-pointer select-none group w-fit bg-gradient-to-tr gap-5 from-white/10 to-transparent px-5 py-3 border border-teal-500/20 hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/50  global-transition rounded-xl backdrop-blur-sm flex justify-start items-center">
            <div className="size-[2rem] rounded-full overflow-hidden">
            <Image width={100} height={100} className='size-full object-center' alt='' src={img || ''}/>
            </div>
            {title}
        </div>
    )
}
